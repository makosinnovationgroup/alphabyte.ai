import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-canvas px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-alphabyte-blue px-4 py-1.5 text-body-sm font-medium text-alphabyte-blue mb-8">
            &#9733; Claude Partner &middot; Canadian mid-market AI
          </span>

          <h1 className="text-display font-sans tracking-brand-tight mb-6">
            AI that <span className="text-alphabyte-blue">compounds</span>. Not
            pilots that stall.
          </h1>

          <p className="text-body text-foreground max-w-[60ch] mb-10">
            Alphabyte AI designs and delivers working AI for mid-market
            organizations across Canada. Four tracks. Real deployments. No
            junior bench.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Button variant="dark" size="lg" asChild>
              <Link href="/services/discovery/">Book a Strategy Sprint</Link>
            </Button>
            <Link
              href="/services/"
              className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
            >
              See our services &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
