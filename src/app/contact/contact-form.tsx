"use client";

import { FormEvent } from "react";

const interests = [
  "Citizen Development",
  "Executive Enablement",
  "Discovery",
  "Data Readiness",
  "Infrastructure",
  "Not sure yet",
] as const;

const inputClasses =
  "w-full rounded-md border border-border-default bg-alphabyte-grey px-4 py-3 text-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-alphabyte-blue focus:border-transparent";

export function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* First name / Last name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="first-name"
            className="block text-body-sm font-medium text-foreground mb-2"
          >
            First name
          </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            placeholder="Jane"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-body-sm font-medium text-foreground mb-2"
          >
            Last name
          </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            placeholder="Smith"
            required
            className={inputClasses}
          />
        </div>
      </div>

      {/* Work email */}
      <div>
        <label
          htmlFor="work-email"
          className="block text-body-sm font-medium text-foreground mb-2"
        >
          Work email
        </label>
        <input
          type="email"
          id="work-email"
          name="workEmail"
          placeholder="jane@company.com"
          required
          className={inputClasses}
        />
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-body-sm font-medium text-foreground mb-2"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Acme Corp"
          required
          className={inputClasses}
        />
      </div>

      {/* Job title */}
      <div>
        <label
          htmlFor="job-title"
          className="block text-body-sm font-medium text-foreground mb-2"
        >
          Job title
        </label>
        <input
          type="text"
          id="job-title"
          name="jobTitle"
          placeholder="VP of Operations"
          className={inputClasses}
        />
      </div>

      {/* Interest radio group */}
      <fieldset>
        <legend className="block text-body-sm font-medium text-foreground mb-2">
          What are you most interested in?
        </legend>
        <div className="rounded-md border border-border-default bg-alphabyte-grey divide-y divide-border-default">
          {interests.map((interest) => (
            <label
              key={interest}
              className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-white/50"
            >
              <input
                type="radio"
                name="interest"
                value={interest}
                className="h-4 w-4 border-border-default text-alphabyte-blue focus:ring-alphabyte-blue"
              />
              <span className="text-body text-foreground">{interest}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Situation textarea */}
      <div>
        <label
          htmlFor="situation"
          className="block text-body-sm font-medium text-foreground mb-2"
        >
          Tell us about your situation{" "}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="situation"
          name="situation"
          rows={4}
          placeholder="What are you trying to solve? What have you tried?"
          className={`${inputClasses} resize-y`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-md bg-foreground px-6 py-4 text-body font-medium text-white transition-colors hover:bg-foreground/85 focus:outline-none focus:ring-2 focus:ring-alphabyte-blue focus:ring-offset-2"
      >
        Book a Discovery Call &rarr;
      </button>

      <p className="text-body-sm text-muted-foreground text-center">
        We typically respond within one business day. Your information is never
        shared with third parties.
      </p>
    </form>
  );
}
