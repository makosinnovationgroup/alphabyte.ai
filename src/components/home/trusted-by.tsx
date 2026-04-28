const clients = [
  "Sprinklermatic / EJ Capital",
  "RecirQ / Reventory",
  "Housing Services Corp.",
];

export function ActiveDelivery() {
  return (
    <section className="bg-alphabyte-grey px-6 py-8 md:py-10">
      <div className="flex flex-wrap items-center gap-4">
        <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
          Currently in Active Delivery for
        </p>
        {clients.map((name) => (
          <span
            key={name}
            className="rounded-full border border-border-default bg-white px-5 py-2 text-body-sm font-medium text-foreground"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
