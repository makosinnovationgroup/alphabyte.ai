"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDiscoveryCall } from "@/lib/discovery-call-context";
import { Button } from "@/components/ui/button";

const INTEREST_OPTIONS = [
  "Citizen Development",
  "Executive Enablement",
  "Discovery",
  "Data Readiness",
  "Infrastructure",
  "Not sure yet",
] as const;

const inputClasses =
  "w-full rounded-sm border border-border-default bg-white px-3 py-2.5 text-body-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-alphabyte-blue focus:border-transparent";

export function DiscoveryCallModal() {
  const { isOpen, close } = useDiscoveryCall();
  const noMotion = !!useReducedMotion();
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const titleId = "discovery-call-title";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // Stub: log to console until a real backend is wired up
    console.log("Discovery call form submission:", data);
    setTimeout(() => setStatus("success"), 800);
  }

  function handleOpenChange(open: boolean) {
    if (!open) {
      close();
      setTimeout(() => setStatus("idle"), 200);
    }
  }

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={handleOpenChange}>
      <AnimatePresence>
        {isOpen && (
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

            <DialogPrimitive.Content asChild aria-labelledby={titleId}>
              <motion.div
                className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-6 md:items-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: noMotion ? 0 : 0.2,
                    ease: "easeOut",
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 8,
                  transition: {
                    duration: noMotion ? 0 : 0.15,
                    ease: "easeIn",
                  },
                }}
              >
                <div className="relative w-full max-w-lg rounded-md border border-border-default bg-white p-6 shadow-lg my-8 sm:p-8 md:my-0">
                  <DialogPrimitive.Close asChild>
                    <button
                      className="absolute right-4 top-4 flex items-center justify-center min-w-[44px] min-h-[44px] text-muted-foreground transition-colors hover:text-foreground"
                      aria-label="Close"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </DialogPrimitive.Close>

                  {status === "success" ? (
                    <div className="py-8 text-center">
                      <h2 className="text-headline tracking-brand-snug mb-4">
                        We received your request.
                      </h2>
                      <p className="text-body text-muted-foreground max-w-[40ch] mx-auto">
                        A member of the team will follow up within one business
                        day to schedule your call.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2
                        id={titleId}
                        className="text-headline tracking-brand-snug mb-2 pr-10"
                      >
                        Book a Discovery Call
                      </h2>
                      <p className="text-body text-muted-foreground mb-8">
                        45 minutes. No cost. No obligation. You describe your
                        situation. We tell you what we would do, in what order,
                        and what you would have at day&nbsp;30.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <label className="block">
                            <span className="block text-body-sm font-medium text-foreground mb-1.5">
                              First name
                            </span>
                            <input
                              type="text"
                              name="firstName"
                              required
                              placeholder="Jane"
                              autoFocus
                              className={inputClasses}
                            />
                          </label>
                          <label className="block">
                            <span className="block text-body-sm font-medium text-foreground mb-1.5">
                              Last name
                            </span>
                            <input
                              type="text"
                              name="lastName"
                              required
                              placeholder="Smith"
                              className={inputClasses}
                            />
                          </label>
                        </div>

                        <label className="block">
                          <span className="block text-body-sm font-medium text-foreground mb-1.5">
                            Work email
                          </span>
                          <input
                            type="email"
                            name="workEmail"
                            required
                            placeholder="jane@company.com"
                            className={inputClasses}
                          />
                        </label>

                        <label className="block">
                          <span className="block text-body-sm font-medium text-foreground mb-1.5">
                            Company
                          </span>
                          <input
                            type="text"
                            name="company"
                            required
                            placeholder="Acme Corp"
                            className={inputClasses}
                          />
                        </label>

                        <label className="block">
                          <span className="block text-body-sm font-medium text-foreground mb-1.5">
                            Job title
                          </span>
                          <input
                            type="text"
                            name="jobTitle"
                            required
                            placeholder="VP of Operations"
                            className={inputClasses}
                          />
                        </label>

                        <fieldset>
                          <legend className="block text-body-sm font-medium text-foreground mb-3">
                            What are you most interested in?
                          </legend>
                          <div className="space-y-2.5">
                            {INTEREST_OPTIONS.map((option) => (
                              <label
                                key={option}
                                className="group flex items-center gap-3 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name="interest"
                                  value={option}
                                  required
                                  className="peer sr-only"
                                />
                                <span
                                  className={cn(
                                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-border-default transition-colors",
                                    "group-has-[:checked]:border-alphabyte-blue",
                                    "peer-focus-visible:ring-2 peer-focus-visible:ring-alphabyte-blue peer-focus-visible:ring-offset-2",
                                  )}
                                >
                                  <span className="h-2.5 w-2.5 rounded-full bg-alphabyte-blue scale-0 group-has-[:checked]:scale-100 transition-transform" />
                                </span>
                                <span className="text-body-sm text-foreground">
                                  {option}
                                </span>
                              </label>
                            ))}
                          </div>
                        </fieldset>

                        <label className="block">
                          <span className="block text-body-sm font-medium text-foreground mb-1.5">
                            Tell us about your situation{" "}
                            <span className="font-normal text-muted-foreground">
                              (optional)
                            </span>
                          </span>
                          <textarea
                            name="situation"
                            rows={3}
                            placeholder="What are you trying to solve? What have you tried?"
                            className={cn(
                              inputClasses,
                              "resize-y min-h-[80px]",
                            )}
                          />
                        </label>

                        <Button
                          type="submit"
                          variant="dark"
                          size="lg"
                          className="w-full"
                          disabled={status === "submitting"}
                        >
                          {status === "submitting"
                            ? "Sending\u2026"
                            : "Book a Discovery Call \u2192"}
                        </Button>

                        <p className="text-body-sm text-muted-foreground text-center">
                          We typically respond within one business day. Your
                          information is never shared with third parties.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
