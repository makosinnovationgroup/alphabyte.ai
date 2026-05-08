import Link from "next/link";

const clients = [
  { name: "Construction Firm", href: "/our-work/fire-protection-compliance/" },
  { name: "Major Supplier", href: "/our-work/circular-economy-platform/" },
  { name: "DTC E-Commerce Brand", href: "/our-work/media-buy-analytics/" },
  { name: "Community Housing Organisation", href: "/our-work/community-housing-organisation/" },
];

export function ActiveDelivery() {
  return (
    <section className="bg-alphabyte-grey px-6 py-4 md:py-5">
      <div className="mx-auto max-w-[1600px] flex flex-wrap items-center gap-4">
        <p className="text-body-sm font-bold uppercase tracking-brand-wide text-foreground">
          Proven Results With
        </p>
        {clients.map((client) => (
          <Link
            key={client.name}
            href={client.href}
            className="rounded-md border border-border-default bg-white px-5 py-2 text-body-sm font-medium text-foreground transition-colors hover:border-alphabyte-blue"
          >
            {client.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
