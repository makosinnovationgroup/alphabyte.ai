"use client";

import { cn } from "@/lib/utils";

const COUNTRY_CODES = [
  { code: "+1", flag: "🇨🇦", label: "Canada" },
  { code: "+1", flag: "🇺🇸", label: "United States" },
  { code: "+52", flag: "🇲🇽", label: "Mexico" },
] as const;

interface PhoneInputProps {
  inputClassName: string;
  id?: string;
}

export function PhoneInput({ inputClassName, id }: PhoneInputProps) {
  return (
    <div className="flex gap-2">
      <select
        name="countryCode"
        aria-label="Country code"
        defaultValue="+1-CA"
        className={cn(
          inputClassName,
          "w-auto shrink-0 pr-2 appearance-none cursor-pointer",
        )}
      >
        {COUNTRY_CODES.map((c) => (
          <option key={`${c.code}-${c.label}`} value={`${c.code}-${c.label.substring(0, 2).toUpperCase()}`}>
            {c.flag} {c.code}
          </option>
        ))}
      </select>
      <input
        type="tel"
        id={id}
        name="phone"
        placeholder="(416) 555-0123"
        className={inputClassName}
      />
    </div>
  );
}
