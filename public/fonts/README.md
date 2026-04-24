# Fonts

Drop the licensed Aeonik `.woff2` files here once you've purchased
them from Cotype Foundry: https://cotypefoundry.com/our-fonts/aeonik/

Expected filenames (these match the commented-out `next/font/local`
setup in `src/app/layout.tsx`):

- `Aeonik-Regular.woff2`
- `Aeonik-RegularItalic.woff2`
- `Aeonik-Bold.woff2`
- `Aeonik-BoldItalic.woff2`

Once the files are in place, uncomment the `next/font/local` block
in `layout.tsx` and attach `aeonik.variable` to the `<html>` tag.
Until then, the site falls back to Arial per the Brand Guide's
System Fonts section (§4.0).
