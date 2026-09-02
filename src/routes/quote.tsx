import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { WHATSAPP_URL } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote | Lentsoane Art & Tech" },
      {
        name: "description",
        content:
          "Get a free quote for printing, personalised gifts, branding or IT services. Send your details and artwork straight to our WhatsApp.",
      },
      { property: "og:title", content: "Request a Quote | Lentsoane Art & Tech" },
      { property: "og:description", content: "Tell us what you need and we'll send you a price fast." },
    ],
  }),
  component: Quote,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(9, "Enter a valid phone/WhatsApp number").max(20),
  email: z.string().trim().email("Enter a valid email address").max(255).or(z.literal("")),
  service: z.string().min(1, "Please choose a service or product"),
  quantity: z.string().trim().max(20),
  description: z.string().trim().min(5, "Tell us a bit more about your job").max(1000),
});

const services = [
  "Sublimation Printing",
  "T-Shirt Printing",
  "Mug / Magic Mug",
  "Tumbler",
  "Keyholder",
  "Phone Pouch",
  "Photo Printing / Frames",
  "School Memory Package",
  "Document / Internet Café Services",
  "IT Support / Repairs",
  "Networking",
  "Other",
];

const field =
  "mt-1 w-full rounded-md border border-input bg-card px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30";

function Quote() {
  const [artwork, setArtwork] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    const v = parsed.data;
    const message = [
      "*QUOTE REQUEST — Lentsoane Art & Tech*",
      `Name: ${v.name}`,
      `Phone/WhatsApp: ${v.phone}`,
      v.email ? `Email: ${v.email}` : null,
      `Service/Product: ${v.service}`,
      v.quantity ? `Quantity: ${v.quantity}` : null,
      `Details: ${v.description}`,
      artwork ? `Artwork: ${artwork} (will be attached)` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    toast.success("Opening WhatsApp with your enquiry — press send to submit.");
  }

  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Get Your Free Quote"
        subtitle="Fill in the form and your enquiry opens in WhatsApp, ready to send. We reply fast."
      />

      <section className="mx-auto max-w-3xl px-4 py-16">
        <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-xl border border-border bg-card p-6 shadow-card sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold">
              Full Name *
              <input name="name" maxLength={100} className={field} placeholder="Your name" />
              {errors['name'] && <span className="mt-1 block text-xs font-normal text-destructive">{errors['name']}</span>}
            </label>
            <label className="text-sm font-semibold">
              Phone / WhatsApp *
              <input name="phone" maxLength={20} className={field} placeholder="060 691 9771" />
              {errors['phone'] && <span className="mt-1 block text-xs font-normal text-destructive">{errors['phone']}</span>}
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold">
              Email
              <input name="email" type="email" maxLength={255} className={field} placeholder="you@email.com" />
              {errors['email'] && <span className="mt-1 block text-xs font-normal text-destructive">{errors['email']}</span>}
            </label>
            <label className="text-sm font-semibold">
              Quantity
              <input name="quantity" maxLength={20} className={field} placeholder="e.g. 25 shirts" />
            </label>
          </div>

          <label className="text-sm font-semibold">
            Service / Product *
            <select name="service" defaultValue="" className={field}>
              <option value="" disabled>Select a service or product</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors['service'] && <span className="mt-1 block text-xs font-normal text-destructive">{errors['service']}</span>}
          </label>

          <label className="text-sm font-semibold">
            Description *
            <textarea
              name="description"
              rows={5}
              maxLength={1000}
              className={field}
              placeholder="Tell us about your design, colours, sizes, deadline..."
            />
            {errors['description'] && (
              <span className="mt-1 block text-xs font-normal text-destructive">{errors['description']}</span>
            )}
          </label>

          <label className="text-sm font-semibold">
            Upload Artwork
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setArtwork(e.target.files?.[0]?.name ?? null)}
              className={`${field} file:mr-3 file:rounded file:border-0 file:bg-secondary file:px-3 file:py-1 file:text-xs file:font-bold file:uppercase`}
            />
            <span className="mt-1 block text-xs font-normal text-muted-foreground">
              We'll note your file name — please attach the actual artwork in the WhatsApp chat that opens.
            </span>
          </label>

          <button
            type="submit"
            className="rounded-md bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
          >
            Submit Enquiry
          </button>
        </form>
      </section>
    </>
  );
}
