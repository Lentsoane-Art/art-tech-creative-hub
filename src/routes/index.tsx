import { createFileRoute, Link } from "@tanstack/react-router";
import { Printer, Cpu, Gift, ShieldCheck, Truck, Clock, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import productsImg from "@/assets/products.jpg";
import itImg from "@/assets/it-support.jpg";
import { WHATSAPP_URL } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lentsoane Art & Tech | Printing, Branding & IT Services" },
      {
        name: "description",
        content:
          "Sublimation printing, personalised gifts, internet café and IT support in Emalahleni, Mpumalanga. Where creativity meets technology.",
      },
      { property: "og:title", content: "Lentsoane Art & Tech | Printing & IT Services" },
      {
        property: "og:description",
        content: "Printing, branding, personalised gifts and IT support for homes, schools and businesses.",
      },
    ],
  }),
  component: Home,
});

const highlights = [
  { icon: Printer, title: "Printing & Branding", text: "Sublimation, t-shirts, mugs, photos, certificates and documents." },
  { icon: Cpu, title: "IT & Networking", text: "Repairs, software installs, virus removal, data recovery and Wi-Fi setup." },
  { icon: Gift, title: "Personalised Gifts", text: "Magic mugs, tumblers, keyholders, phone pouches and combo deals." },
];

const featured = [
  { name: "Normal Cup", price: "R90" },
  { name: "Magic Cup", price: "R120" },
  { name: "Keyholder", price: "R70" },
  { name: "Phone Pouch", price: "R170" },
  { name: "Tumbler 20oz", price: "R250" },
  { name: "A4 Sublimation Print", price: "R60" },
];

function Home() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Lentsoane Art &amp; Tech (PTY) LTD</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.05] md:text-6xl">
              Where Creativity <span className="text-accent">Meets</span> Technology
            </h1>
            <p className="mt-5 max-w-xl text-base opacity-90">
              Printing, branding and personalised gifts plus complete IT, phone and networking support — all under one
              roof in Emalahleni, Mpumalanga.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/quote"
                className="rounded-md bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
              >
                Request a Quote
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-whatsapp px-6 py-3 text-sm font-bold uppercase tracking-wide text-whatsapp-foreground transition-transform hover:-translate-y-0.5"
              >
                WhatsApp 060 691 9771
              </a>
              <Link
                to="/services"
                className="rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-primary-foreground/10"
              >
                Our Services
              </Link>
            </div>
          </div>
          <img
            src={heroImg}
            alt="Print shop and IT repair workspace at Lentsoane Art & Tech"
            width={1600}
            height={1000}
            className="rounded-xl border border-primary-foreground/15 shadow-elevated"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h.icon className="h-9 w-9 text-accent" />
              <h2 className="mt-4 text-xl font-bold uppercase text-primary">{h.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
          <img src={productsImg} alt="Personalised mugs, tumblers, keyholders and phone pouches" width={1400} height={1000} loading="lazy" className="rounded-xl shadow-card" />
          <div>
            <h2 className="font-display text-3xl font-extrabold uppercase text-primary">Featured Products</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Personalised gifts made just for you — perfect for birthdays, branding and special occasions.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {featured.map((p) => (
                <li key={p.name} className="flex items-center justify-between rounded-md bg-card px-4 py-3 text-sm font-semibold shadow-card">
                  <span>{p.name}</span>
                  <span className="rounded bg-accent px-2 py-0.5 text-accent-foreground">{p.price}</span>
                </li>
              ))}
            </ul>
            <Link to="/products" className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase text-primary-foreground">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold uppercase text-primary">Technology Support You Can Trust</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            From Windows installation and virus removal to data recovery, laptop repairs and full office networking — we
            come to you for home and business support.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
            {["Virus removal from R150", "Windows installation from R350", "Data recovery from R250", "Router configuration from R250"].map((t) => (
              <li key={t} className="flex items-start gap-2"><Star className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{t}</li>
            ))}
          </ul>
          <Link to="/services" className="mt-6 inline-block rounded-md bg-accent px-6 py-3 text-sm font-bold uppercase text-accent-foreground">
            Explore Services
          </Link>
        </div>
        <img src={itImg} alt="Technician repairing a laptop" width={1400} height={1000} loading="lazy" className="rounded-xl shadow-card" />
      </section>

      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "100% Satisfaction", text: "Quality prints and reliable repairs, every time." },
            { icon: Clock, title: "Fast Turnaround", text: "Most repairs and print jobs completed same day." },
            { icon: Truck, title: "Bulk Orders Welcome", text: "Special rates for schools, churches and teams." },
          ].map((i) => (
            <div key={i.title} className="text-center">
              <i.icon className="mx-auto h-8 w-8 text-accent" />
              <h3 className="mt-3 text-lg font-bold uppercase">{i.title}</h3>
              <p className="mt-1 text-sm opacity-80">{i.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
