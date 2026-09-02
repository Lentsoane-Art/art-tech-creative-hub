import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { WHATSAPP_URL } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Lentsoane Art & Tech, Emalahleni" },
      {
        name: "description",
        content:
          "Contact Lentsoane Art & Tech on 060 691 9771 or lentsoaneart@gmail.com. Based in Emalahleni, Mpumalanga. WhatsApp us for a quick response.",
      },
      { property: "og:title", content: "Contact Lentsoane Art & Tech" },
      { property: "og:description", content: "Call, email or WhatsApp us — walk-ins welcome in Emalahleni, Mpumalanga." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  message: z.string().trim().min(5, "Please write your message").max(1000),
});

const field =
  "mt-1 w-full rounded-md border border-input bg-card px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30";

function Contact() {
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
    window.location.href = `mailto:lentsoaneart@gmail.com?subject=${encodeURIComponent(
      `Website enquiry from ${v.name}`,
    )}&body=${encodeURIComponent(`${v.message}\n\nFrom: ${v.name} (${v.email})`)}`;
    toast.success("Opening your email app with the message ready to send.");
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk"
        subtitle="Walk-ins welcome. Cash, EFT and card accepted."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-2xl font-extrabold uppercase text-primary">Get In Touch</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-accent" /><a href="tel:+27606919771" className="font-semibold">060 691 9771</a></li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-accent" /><a href="mailto:lentsoaneart@gmail.com" className="font-semibold">lentsoaneart@gmail.com</a></li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-accent" /> Emalahleni, Mpumalanga, South Africa</li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-3 text-sm font-bold uppercase text-whatsapp-foreground"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              <h2 className="font-display text-xl font-extrabold uppercase text-primary">Operating Hours</h2>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li>Monday – Friday: 07:00 – 19:00</li>
              <li>Saturday: 08:00 – 17:00</li>
              <li>Sunday: 09:00 – 15:00</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-xl font-extrabold uppercase text-primary">Follow Us</h2>
            <div className="mt-3 flex gap-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold">
                <Facebook className="h-5 w-5 text-accent" /> Lentsoane Art &amp; Tech
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold">
                <Instagram className="h-5 w-5 text-accent" /> Lentsoane Art &amp; Tech
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border shadow-card">
            <iframe
              title="Lentsoane Art & Tech location in Emalahleni, Mpumalanga"
              src="https://www.google.com/maps?q=Emalahleni%2C%20Mpumalanga%2C%20South%20Africa&output=embed"
              loading="lazy"
              className="h-72 w-full border-0"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="h-fit rounded-xl border border-border bg-card p-6 shadow-card sm:p-8">
          <h2 className="font-display text-2xl font-extrabold uppercase text-primary">Send a Message</h2>
          <div className="mt-5 grid gap-5">
            <label className="text-sm font-semibold">
              Name *
              <input name="name" maxLength={100} className={field} placeholder="Your name" />
              {errors['name'] && <span className="mt-1 block text-xs font-normal text-destructive">{errors['name']}</span>}
            </label>
            <label className="text-sm font-semibold">
              Email *
              <input name="email" type="email" maxLength={255} className={field} placeholder="you@email.com" />
              {errors['email'] && <span className="mt-1 block text-xs font-normal text-destructive">{errors['email']}</span>}
            </label>
            <label className="text-sm font-semibold">
              Message *
              <textarea name="message" rows={6} maxLength={1000} className={field} placeholder="How can we help?" />
              {errors['message'] && <span className="mt-1 block text-xs font-normal text-destructive">{errors['message']}</span>}
            </label>
            <button
              type="submit"
              className="rounded-md bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
