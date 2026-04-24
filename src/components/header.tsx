"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, type NavItem } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

function isRouteActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/* ------------------------------------------------------------------ */
/*  Desktop dropdown                                                   */
/* ------------------------------------------------------------------ */

function DesktopDropdown({
  item,
  active,
  noMotion,
}: {
  item: NavItem;
  active: boolean;
  noMotion: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  const timeout = React.useRef<ReturnType<typeof setTimeout>>();
  const ref = React.useRef<HTMLDivElement>(null);

  const show = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };
  const hide = () => {
    timeout.current = setTimeout(() => setOpen(false), 120);
  };

  React.useEffect(() => () => clearTimeout(timeout.current), []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        className={cn(
          "flex items-center gap-1 px-4 min-h-[44px] text-body-sm transition-colors",
          active || open
            ? "text-alphabyte-blue"
            : "text-white hover:text-alphabyte-blue",
        )}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Escape" && open) {
            setOpen(false);
            e.currentTarget.focus();
          }
        }}
      >
        {item.label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-0 top-full pt-2 z-50"
            initial={{ opacity: 0, y: -4 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: noMotion ? 0 : 0.15, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              y: -4,
              transition: { duration: noMotion ? 0 : 0.1, ease: "easeIn" },
            }}
          >
            <div className="w-64 rounded-md border border-white/10 bg-black py-2 shadow-lg">
              {item.children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-3 transition-colors hover:bg-white/5 hover:text-alphabyte-blue"
                  onClick={() => setOpen(false)}
                >
                  <span className="block text-body-sm font-medium text-white">
                    {child.label}
                  </span>
                  {child.description && (
                    <span className="block text-body-sm text-white/50 mt-0.5">
                      {child.description}
                    </span>
                  )}
                </Link>
              ))}

              {item.footerLink && (
                <>
                  <div className="mx-4 my-2 border-t border-white/10" />
                  <Link
                    href={item.footerLink.href}
                    className="block px-4 py-2 text-body-sm text-alphabyte-blue transition-colors hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.footerLink.label}
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile accordion section                                           */
/* ------------------------------------------------------------------ */

function MobileSection({
  item,
  active,
  onNavigate,
}: {
  item: NavItem;
  active: boolean;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <li>
      <button
        className={cn(
          "flex w-full items-center justify-between px-3 py-3 text-body min-h-[44px] transition-colors",
          active ? "text-alphabyte-blue" : "text-white",
        )}
        aria-expanded={expanded}
        aria-haspopup="true"
        onClick={() => setExpanded((v) => !v)}
      >
        {item.label}
        <ChevronDown
          className={cn("h-5 w-5 transition-transform", expanded && "rotate-180")}
          aria-hidden
        />
      </button>

      {expanded && (
        <ul className="pl-4 pb-2">
          {item.children!.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="flex items-center px-3 py-3 text-body-sm text-white/70 transition-colors hover:text-alphabyte-blue min-h-[44px]"
              >
                {child.label}
              </Link>
            </li>
          ))}
          {item.footerLink && (
            <li>
              <Link
                href={item.footerLink.href}
                onClick={onNavigate}
                className="flex items-center px-3 py-3 text-body-sm text-alphabyte-blue transition-colors hover:text-white min-h-[44px]"
              >
                {item.footerLink.label}
              </Link>
            </li>
          )}
        </ul>
      )}
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */

export function Header() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const noMotion = !!reducedMotion;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="bg-black">
      <a
        href="#main-content"
        className={cn(
          "sr-only focus:not-sr-only",
          "focus:absolute focus:z-[60] focus:top-2 focus:left-2",
          "focus:rounded-md focus:bg-alphabyte-blue focus:px-4 focus:py-2 focus:text-body-sm focus:text-white",
        )}
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo; next/image adds no value here */}
          <img
            src="/logos/alphabyte-logo-white.svg"
            alt="Alphabyte"
            className="h-8 w-auto min-w-logo-min"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navigation.map((item) =>
            item.children ? (
              <DesktopDropdown
                key={item.label}
                item={item}
                active={isRouteActive(pathname, item.href)}
                noMotion={noMotion}
              />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-4 min-h-[44px] flex items-center text-body-sm transition-colors",
                  isRouteActive(pathname, item.href)
                    ? "text-alphabyte-blue"
                    : "text-white hover:text-alphabyte-blue",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block shrink-0">
          <Button asChild>
            <Link href="/contact/">Get started</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <DialogPrimitive.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <DialogPrimitive.Trigger asChild>
            <button
              className="lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px] text-white"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </DialogPrimitive.Trigger>

          <AnimatePresence>
            {mobileOpen && (
              <DialogPrimitive.Portal forceMount>
                <DialogPrimitive.Overlay asChild>
                  <motion.div
                    className="fixed inset-0 z-40 bg-black/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: noMotion ? 0 : 0.2 }}
                  />
                </DialogPrimitive.Overlay>

                <DialogPrimitive.Content
                  asChild
                  aria-label="Navigation menu"
                >
                  <motion.div
                    className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-black px-6 py-4"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{
                      duration: noMotion ? 0 : 0.2,
                      ease: "easeOut",
                    }}
                  >
                    {/* Mobile header row */}
                    <div className="flex items-center justify-between mb-8">
                      <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="shrink-0"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/logos/alphabyte-logo-white.svg"
                          alt="Alphabyte"
                          className="h-8 w-auto min-w-logo-min"
                        />
                      </Link>
                      <DialogPrimitive.Close asChild>
                        <button
                          className="flex items-center justify-center min-w-[44px] min-h-[44px] text-white"
                          aria-label="Close menu"
                        >
                          <X className="h-6 w-6" />
                        </button>
                      </DialogPrimitive.Close>
                    </div>

                    {/* Mobile nav */}
                    <nav aria-label="Primary">
                      <ul className="space-y-1">
                        {navigation.map((item) =>
                          item.children ? (
                            <MobileSection
                              key={item.label}
                              item={item}
                              active={isRouteActive(pathname, item.href)}
                              onNavigate={() => setMobileOpen(false)}
                            />
                          ) : (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                  "flex items-center px-3 py-3 text-body min-h-[44px] transition-colors",
                                  isRouteActive(pathname, item.href)
                                    ? "text-alphabyte-blue"
                                    : "text-white hover:text-alphabyte-blue",
                                )}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    </nav>

                    {/* Mobile CTA */}
                    <div className="mt-8 px-3">
                      <Button asChild className="w-full">
                        <Link href="/contact/" onClick={() => setMobileOpen(false)}>
                          Get started
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </DialogPrimitive.Content>
              </DialogPrimitive.Portal>
            )}
          </AnimatePresence>
        </DialogPrimitive.Root>
      </div>
    </header>
  );
}
