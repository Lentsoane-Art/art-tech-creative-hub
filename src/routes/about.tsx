import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Building2, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Lentsoane Art & Tech" },
      {
        name: "description",
        content:
          "Learn about Lentsoane Art & Tech (PTY) LTD — a proudly South African printing, branding and IT services company based in Emalahleni, Mpumalanga.",
      },
      { property: "og:title", content: "About Lentsoane Art & Tech" },
      { property: "og:description", content: "Our story, mission, vision and why customers choose us." },
    ],
  }),
  component: About,
});

const reasons = [
  "Affordable prices with no hidden costs",
  "Fast turnaround — most jobs done same day",
  "Experienced, friendly technicians",
  "High quality prints that don't fade",
  "Bulk orders for schools, crèches and churches",
  "We come to you for home & business IT support",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Proudly Serving Emalahleni"
        subtitle="Lentsoane Art & Tech (PTY) LTD combines creative print work with practical technology support."
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="font-display text-3xl font-extrabold uppercase text-primary">Our Background</h2>
        <p className="mt-4 text-muted-foreground">
          Lentsoane Art &amp; Tech was founded to bring professional printing, branding and technology services closer
          to the community of Emalahleni, Mpumalanga. What started with personalised gifts and photo printing has grown
          into a full-service business offering internet café services, sublimation printing, school memory packages,
          phone and computer repairs, and complete networking solutions.
        </p>
        <p className="mt-4 text-muted-foreground">
          We work with individuals, schools, crèches, churches, sports teams and small businesses — helping them look
          professional and stay connected.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <Target className="h-8 w-8 text-accent" />
            <h3 className="mt-3 text-xl font-bold uppercase text-primary">Our Mission</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              To deliver affordable, high-quality creative and technology services that help our customers celebrate
              memories, grow their brands and keep their devices running.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <Eye className="h-8 w-8 text-accent" />
            <h3 className="mt-3 text-xl font-bold uppercase text-primary">Our Vision</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              To become Mpumalanga's most trusted one-stop hub where creativity meets technology, known for quality,
              honesty and exceptional service.
            </p>
          </div>
        </div>

        <h2 className="mt-14 font-display text-3xl font-extrabold uppercase text-primary">Why Choose Us</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {reasons.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {r}
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-xl bg-secondary p-6">
          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-extrabold uppercase text-primary">Company Information</h2>
          </div>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div><dt className="font-bold">Registered Name</dt><dd className="text-muted-foreground">Lentsoane Art &amp; Tech (PTY) LTD</dd></div>
            <div><dt className="font-bold">Registration Number</dt><dd className="text-muted-foreground">2021/750123/07</dd></div>
            <div><dt className="font-bold">Location</dt><dd className="text-muted-foreground">Emalahleni, Mpumalanga, South Africa</dd></div>
            <div><dt className="font-bold">Contact</dt><dd className="text-muted-foreground">060 691 9771 · lentsoaneart@gmail.com</dd></div>
            <div><dt className="font-bold">Trading Hours</dt><dd className="text-muted-foreground">Mon–Fri 07:00–19:00 · Sat 08:00–17:00 · Sun 09:00–15:00</dd></div>
            <div><dt className="font-bold">Payments</dt><dd className="text-muted-foreground">Cash · EFT · Card</dd></div>
          </dl>
          <Link to="/contact" className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase text-primary-foreground">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
