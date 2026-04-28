"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, type NavItem } from "@/lib/navigation";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

function isRouteActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/* ------------------------------------------------------------------ */
/*  Wordmark                                                           */
/* ------------------------------------------------------------------ */

function Wordmark() {
  return (
    <Link
      href="/"
      aria-label="Alphabyte AI"
      className="shrink-0 text-xl font-medium tracking-brand-snug"
    >
      <span className="text-foreground">Alphabyte</span>
      <span className="mx-1.5 text-muted-foreground">&middot;</span>
      <span className="text-alphabyte-blue">AI</span>
    </Link>
  );
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
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-1 px-4 min-h-[44px] text-body-sm font-medium transition-colors",
          active || open
            ? "text-alphabyte-blue"
            : "text-foreground hover:text-alphabyte-blue",
        )}
        onKeyDown={(e) => {
          if (e.key === "Escape" && open) {
            setOpen(false);
            e.currentTarget.focus();
          }
        }}
      >
        {item.label}
      </Link>

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
            <div className="w-64 rounded-md border border-border-default bg-white py-2 shadow-md">
              {item.children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-3 transition-colors hover:bg-canvas hover:text-alphabyte-blue"
                  onClick={() => setOpen(false)}
                >
                  <span className="block text-body-sm font-medium text-foreground">
                    {child.label}
                  </span>
                  {child.description && (
                    <span className="block text-body-sm text-muted-foreground mt-0.5">
                      {child.description}
                    </span>
                  )}
                </Link>
              ))}

              {item.footerLink && (
                <>
                  <div className="mx-4 my-2 border-t border-border-default" />
                  <Link
                    href={item.footerLink.href}
                    className="block px-4 py-2 text-body-sm text-alphabyte-blue transition-colors hover:text-foreground"
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
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={onNavigate}
          className={cn(
            "flex flex-1 items-center px-3 py-3 text-body font-medium min-h-[44px] transition-colors",
            active ? "text-alphabyte-blue" : "text-foreground",
          )}
        >
          {item.label}
        </Link>
        <button
          className="flex items-center justify-center min-w-[44px] min-h-[44px] text-muted-foreground transition-colors hover:text-foreground"
          aria-expanded={expanded}
          aria-label={`Show ${item.label} submenu`}
          onClick={() => setExpanded((v) => !v)}
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              expanded && "rotate-180",
            )}
          />
        </button>
      </div>

      {expanded && (
        <ul className="pl-4 pb-2">
          {item.children!.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="flex items-center px-3 py-3 text-body-sm text-muted-foreground transition-colors hover:text-alphabyte-blue min-h-[44px]"
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
                className="flex items-center px-3 py-3 text-body-sm text-alphabyte-blue transition-colors hover:text-foreground min-h-[44px]"
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

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white border-b border-border-default">
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

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Wordmark />

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
                  "px-4 min-h-[44px] flex items-center text-body-sm font-medium transition-colors",
                  isRouteActive(pathname, item.href)
                    ? "text-alphabyte-blue"
                    : "text-foreground hover:text-alphabyte-blue",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block shrink-0">
          <DiscoveryCallButton variant="dark" size="sm">
            Book a Discovery Call
          </DiscoveryCallButton>
        </div>

        {/* Mobile menu */}
        <DialogPrimitive.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <DialogPrimitive.Trigger asChild>
            <button
              className="lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px] text-foreground"
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
                    className="fixed inset-0 z-40 bg-black/40"
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
                    className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white px-6 py-3"
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
                      <div onClick={() => setMobileOpen(false)}>
                        <Wordmark />
                      </div>
                      <DialogPrimitive.Close asChild>
                        <button
                          className="flex items-center justify-center min-w-[44px] min-h-[44px] text-foreground"
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
                                  "flex items-center px-3 py-3 text-body font-medium min-h-[44px] transition-colors",
                                  isRouteActive(pathname, item.href)
                                    ? "text-alphabyte-blue"
                                    : "text-foreground hover:text-alphabyte-blue",
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
                    <div className="mt-8 px-3 border-t border-border-default pt-8">
                      <DiscoveryCallButton
                        variant="dark"
                        size="sm"
                        className="w-full"
                        onClick={() => setMobileOpen(false)}
                      >
                        Book a Discovery Call
                      </DiscoveryCallButton>
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
