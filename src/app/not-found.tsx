import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
        404
      </p>
      <h1 className="mt-3 text-display tracking-brand-tight">
        Page not found.
      </h1>
      <p className="mt-4 max-w-md text-body text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
        <Link
          href="/"
          className="rounded-md bg-foreground px-6 py-3 text-body-sm font-medium text-white transition-colors hover:bg-foreground/90"
        >
          Go home
        </Link>
        <Link
          href="/contact/"
          className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
        >
          Contact us
        </Link>
      </div>
      <nav className="mt-12" aria-label="Site sections">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-body-sm text-muted-foreground">
          <li><Link href="/services/" className="hover:text-foreground transition-colors">Services</Link></li>
          <li><Link href="/tools/" className="hover:text-foreground transition-colors">Tools</Link></li>
          <li><Link href="/our-work/" className="hover:text-foreground transition-colors">Our Work</Link></li>
          <li><Link href="/blog/" className="hover:text-foreground transition-colors">Blog</Link></li>
          <li><Link href="/team/" className="hover:text-foreground transition-colors">Team</Link></li>
          <li><Link href="/about/" className="hover:text-foreground transition-colors">About</Link></li>
        </ul>
      </nav>
    </main>
  );
}
