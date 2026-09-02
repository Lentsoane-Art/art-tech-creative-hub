import { createFileRoute, Link } from "@tanstack/react-router";
import { Shirt, Coffee, Image as ImageIcon, KeyRound, Monitor, Wifi, HardDrive, ShieldAlert, Wrench, Printer } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Printing, Branding & IT Support" },
      {
        name: "description",
        content:
          "Sublimation printing, t-shirt and mug printing, photo printing, keyholders, IT support, software installation, virus removal, data recovery, networking and hardware repairs.",
      },
      { property: "og:title", content: "Our Services | Lentsoane Art & Tech" },
      { property: "og:description", content: "Creative printing services and complete IT support under one roof." },
    ],
  }),
  component: Services,
});

const printing = [
  { icon: Printer, title: "Sublimation Printing", text: "Vibrant, fade-resistant prints on sublimation-friendly items and fabrics.", price: "From R30" },
  { icon: Shirt, title: "T-Shirt Printing", text: "Polyester, golf and dry-fit shirts. Pocket, A5, A4, large front & back.", price: "R30 – R150" },
  { icon: Coffee, title: "Mug Printing", text: "Personalised normal and magic mugs for gifts, branding and events.", price: "From R90" },
  { icon: Coffee, title: "Cup & Tumbler Printing", text: "20oz stainless tumblers that keep drinks hot or cold for hours.", price: "R250" },
  { icon: ImageIcon, title: "Photo Printing", text: "A4 glossy/matte prints, 4x6, 5x7, collages, calendars and ID photos.", price: "From R20" },
  { icon: KeyRound, title: "Keyholders", text: "Polymer photo keyholders — small gift, big memories.", price: "R70" },
];

const it = [
  { icon: Monitor, title: "IT Support", text: "Home and business support, PC health checks and optimisation.", price: "From R150" },
  { icon: HardDrive, title: "Software Installation", text: "Windows 7/8/10/11, Microsoft Office, drivers and program updates.", price: "From R200" },
  { icon: ShieldAlert, title: "Virus Removal", text: "Virus, malware and antivirus installation or removal.", price: "R150" },
  { icon: HardDrive, title: "Data Recovery", text: "Computer, laptop and phone data recovery, backup and restore.", price: "R250" },
  { icon: Wifi, title: "Networking", text: "Wired & wireless setup, router/switch configuration, LAN/WAN, Wi-Fi fixes.", price: "From R250" },
  { icon: Wrench, title: "Hardware Support", text: "Repairs, RAM/SSD upgrades, screens, keyboards, power supplies, cooling.", price: "Quoted" },
];

function Grid({ items }: { items: typeof printing }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <div key={s.title} className="rounded-xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
          <s.icon className="h-8 w-8 text-accent" />
          <h3 className="mt-4 text-lg font-bold uppercase text-primary">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          <span className="mt-4 inline-block rounded bg-secondary px-3 py-1 text-xs font-bold uppercase text-primary">{s.price}</span>
        </div>
      ))}
    </div>
  );
}

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Printing, Branding & IT Solutions"
        subtitle="Everything from personalised gifts and school memory packages to phone, computer and network support."
      />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="font-display text-3xl font-extrabold uppercase text-primary">Printing & Branding</h2>
        <div className="mt-6"><Grid items={printing} /></div>

        <h2 className="mt-16 font-display text-3xl font-extrabold uppercase text-primary">Technology Services</h2>
        <div className="mt-6"><Grid items={it} /></div>

        <div className="mt-14 rounded-xl bg-hero-gradient p-8 text-center text-primary-foreground">
          <h2 className="font-display text-2xl font-extrabold uppercase">Not sure what you need?</h2>
          <p className="mt-2 text-sm opacity-85">Tell us about your job and we'll send you a price.</p>
          <Link to="/quote" className="mt-5 inline-block rounded-md bg-accent px-6 py-3 text-sm font-bold uppercase text-accent-foreground">
            Request a Quote
          </Link>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Final price depends on the device model, materials and service required.
        </p>
      </section>
    </>
  );
}
