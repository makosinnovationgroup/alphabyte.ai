export interface ThirtyDaysProps {
  weeks: { label: string; body: string }[];
  dayThirty: { label: string; body: string };
}

export function ThirtyDays({ weeks, dayThirty }: ThirtyDaysProps) {
  return (
    <div className="rounded-md border border-border-default bg-alphabyte-grey/50 p-6 md:p-10">
      <h2 className="mb-6 text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue md:mb-8">
        What the first 30 days look like
      </h2>
      {weeks.map((week, i) => (
        <div
          key={i}
          className={`grid grid-cols-1 gap-2 py-6 md:grid-cols-[160px_1fr] md:gap-8 ${
            i > 0 ? "border-t border-border-default" : ""
          }`}
        >
          <p className="text-body font-bold text-alphabyte-blue">{week.label}</p>
          <p className="text-body text-foreground">{week.body}</p>
        </div>
      ))}
      <div className="grid grid-cols-1 gap-2 border-t border-border-default py-6 md:grid-cols-[160px_1fr] md:gap-8">
        <p className="text-body font-bold text-alphabyte-blue">
          {dayThirty.label}
        </p>
        <p className="text-body text-foreground">{dayThirty.body}</p>
      </div>
    </div>
  );
}
