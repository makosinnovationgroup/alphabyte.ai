#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = ["pyyaml>=6", "pillow>=10"]
# ///
"""
Generate placeholder image files for every entry in prds/images/inventory.yaml.

Each placeholder is a real PNG/WebP at the entry's locked dimensions, so the
Next.js layout can render at full fidelity before any actual art is generated.
The placeholder visually announces itself as a placeholder via:
  - alphabyte-grey background
  - hairline border
  - faint diagonal cross
  - centred image-id label
  - meta line below (type · dimensions · format)
  - "PLACEHOLDER · <PRIORITY>" badge in top-right

Run: uv run scripts/generate-placeholders.py
"""

from __future__ import annotations

import os
import sys
from pathlib import Path

import yaml
from PIL import Image, ImageDraw, ImageFont

# ---------------------------------------------------------------------------
# Brand tokens (RGB tuples — must match alphabyte tailwind.config.ts)
# ---------------------------------------------------------------------------
GREY = (235, 235, 235)        # alphabyte-grey      #EBEBEB
BORDER = (229, 229, 229)      # border-default      #E5E5E5
INK = (23, 23, 23)            # foreground          #171717
MUTED = (115, 115, 115)       # muted-foreground    #737373
BLUE = (0, 171, 240)          # alphabyte-blue      #00ABF0
WHITE = (255, 255, 255)


# ---------------------------------------------------------------------------
# Font discovery — fall back gracefully if Geist isn't available
# ---------------------------------------------------------------------------
FONT_CANDIDATES = [
    "/System/Library/Fonts/HelveticaNeue.ttc",
    "/System/Library/Fonts/Helvetica.ttc",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
    "/Library/Fonts/Arial.ttf",
]


def get_font(size: int) -> ImageFont.FreeTypeFont:
    for path in FONT_CANDIDATES:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


# ---------------------------------------------------------------------------
# Single-placeholder rendering
# ---------------------------------------------------------------------------
def make_placeholder(entry: dict, repo_root: Path) -> tuple[str, int]:
    w: int = entry["width"]
    h: int = entry["height"]
    fmt: str = entry["format"]
    rel_path: str = entry["path"]
    image_id: str = entry["id"]
    image_type: str = entry["type"]
    priority: str = entry["priority"].upper()

    img = Image.new("RGB", (w, h), GREY)
    draw = ImageDraw.Draw(img)

    # Hairline border, 2px
    draw.rectangle([(0, 0), (w - 1, h - 1)], outline=BORDER, width=2)

    # Faint diagonal cross — universal "this is a placeholder" cue.
    # Drawn in border-default grey so it doesn't overwhelm the labels.
    draw.line([(0, 0), (w, h)], fill=BORDER, width=1)
    draw.line([(0, h), (w, 0)], fill=BORDER, width=1)

    # Centred image-id label (large)
    big_size = max(28, min(w, h) // 14)
    big_font = get_font(big_size)
    bbox = draw.textbbox((0, 0), image_id, font=big_font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    cx, cy = w / 2, h / 2
    # Slight upward shift so the meta line below sits at visual centre.
    draw.text(
        (cx - text_w / 2, cy - text_h / 2 - text_h * 0.55),
        image_id,
        fill=INK,
        font=big_font,
    )

    # Meta line below: type  ·  W × H  ·  FMT
    meta_text = f"{image_type}   ·   {w} × {h}   ·   {fmt}"
    meta_size = max(14, big_size // 2)
    meta_font = get_font(meta_size)
    mbbox = draw.textbbox((0, 0), meta_text, font=meta_font)
    meta_w = mbbox[2] - mbbox[0]
    meta_h = mbbox[3] - mbbox[1]
    draw.text(
        (cx - meta_w / 2, cy + text_h * 0.4),
        meta_text,
        fill=MUTED,
        font=meta_font,
    )

    # Priority badge (top-right) — uppercase mono-ish "PLACEHOLDER · CRITICAL"
    badge_text = f"PLACEHOLDER · {priority}"
    badge_size = max(11, big_size // 4)
    badge_font = get_font(badge_size)
    bbbox = draw.textbbox((0, 0), badge_text, font=badge_font)
    badge_w = bbbox[2] - bbbox[0]
    badge_h = bbbox[3] - bbbox[1]
    pad_x, pad_y = 12, 8
    # Subtle white pill behind the badge text so it remains legible over the diagonal cross.
    draw.rectangle(
        [
            (w - badge_w - pad_x * 2 - 16, 12),
            (w - 16, 12 + badge_h + pad_y * 2 - 4),
        ],
        fill=WHITE,
        outline=BORDER,
        width=1,
    )
    draw.text(
        (w - badge_w - pad_x - 16, 12 + pad_y),
        badge_text,
        fill=BLUE,
        font=badge_font,
    )

    # Tiny path label in bottom-left
    path_size = max(10, big_size // 5)
    path_font = get_font(path_size)
    pbbox = draw.textbbox((0, 0), rel_path, font=path_font)
    path_h = pbbox[3] - pbbox[1]
    draw.text((16, h - path_h - 16), rel_path, fill=MUTED, font=path_font)

    # Save with the locked extension so Next.js / browsers serve correct content-type.
    out_path = repo_root / rel_path
    out_path.parent.mkdir(parents=True, exist_ok=True)

    if fmt == "png":
        img.save(out_path, "PNG", optimize=True)
    elif fmt == "webp":
        img.save(out_path, "WEBP", quality=82, method=6)
    else:
        raise ValueError(f"unknown format: {fmt}")

    return rel_path, out_path.stat().st_size


# ---------------------------------------------------------------------------
# Driver
# ---------------------------------------------------------------------------
def main() -> int:
    repo_root = Path(__file__).resolve().parent.parent
    inv_path = repo_root / "prds" / "images" / "inventory.yaml"
    if not inv_path.exists():
        print(f"ERROR: {inv_path} not found", file=sys.stderr)
        return 1

    entries = yaml.safe_load(inv_path.read_text())
    print(f"Generating {len(entries)} placeholders into {repo_root}/public/\n")

    total = 0
    for entry in entries:
        rel, size = make_placeholder(entry, repo_root)
        total += size
        kb = size / 1024
        print(f"  ✓ {rel:<70}  {kb:>6.1f} KB")

    print(f"\nTotal: {len(entries)} files · {total / 1024:.1f} KB")
    return 0


if __name__ == "__main__":
    sys.exit(main())
