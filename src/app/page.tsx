import { Button } from "@/components/ui/button";

/**
 * Placeholder landing page.
 * Demonstrates brand tokens (colour, type scale, gradient) and
 * the Button component. Real marketing content to follow.
 */
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 bg-alphabyte-gradient-linear">
      <div className="max-w-2xl w-full rounded-lg bg-white/90 backdrop-blur p-10 shadow-xl">
        <p className="text-body-sm uppercase tracking-brand-wide text-alphabyte-blue font-bold mb-4">
          AI Consulting
        </p>
        <h1 className="text-display font-sans tracking-brand-tight mb-6">
          Simplify the Complex.
        </h1>
        <p className="text-body text-brand-ink/80 mb-8">
          Alphabyte applies deep technological expertise, data science
          methodologies and specialised know-how to ignite meaningful change
          for our clients.
        </p>
        <div className="flex gap-3">
          <Button>Get in touch</Button>
          <Button variant="outline">Our work</Button>
        </div>
      </div>
    </main>
  );
}
