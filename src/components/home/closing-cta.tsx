import { DiscoveryCallButton } from "@/components/discovery-call-button";

export function ClosingCta() {
  return (
    <section className="bg-canvas px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-headline tracking-brand-snug mb-4 mx-auto max-w-[40ch]">
          The window is open. Let&rsquo;s find out if there is an engagement
          worth having.
        </h2>
        <p className="text-body text-muted-foreground mb-10 mx-auto max-w-[60ch]">
          45 minutes. No cost. No obligation. You describe your situation. We
          tell you what we would do, in what order, and what you would have at
          day 30.
        </p>
        <DiscoveryCallButton variant="dark" size="lg">
          Book a Discovery Call
        </DiscoveryCallButton>
      </div>
    </section>
  );
}
