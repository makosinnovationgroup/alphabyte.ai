import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ClosingCta() {
  return (
    <section className="bg-canvas px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-headline tracking-brand-snug mb-4">
          Not sure where you fit?
        </h2>
        <p className="text-body text-muted-foreground mb-10 mx-auto max-w-[50ch]">
          A Strategy Sprint answers that in three to five weeks. No ongoing
          commitment.
        </p>
        <Button variant="dark" size="lg" asChild>
          <Link href="/services/discovery/">Book a Strategy Sprint &rarr;</Link>
        </Button>
      </div>
    </section>
  );
}
