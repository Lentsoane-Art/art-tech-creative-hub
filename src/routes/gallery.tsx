import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/hero.jpg";
import productsImg from "@/assets/products.jpg";
import itImg from "@/assets/it-support.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Our Work at Lentsoane Art & Tech" },
      {
        name: "description",
        content:
          "Browse our portfolio of sublimation printing, personalised gifts, school memory packages and technology work.",
      },
      { property: "og:title", content: "Gallery | Lentsoane Art & Tech" },
      { property: "og:description", content: "A visual portfolio of our printing, branding and tech work." },
    ],
  }),
  component: Gallery,
});

type Item = { src: string; alt: string; category: string };

const items: Item[] = [
  { src: productsImg, alt: "Personalised mugs and tumblers", category: "Personalised Gifts" },
  { src: heroImg, alt: "Sublimation printing workspace", category: "Printing" },
  { src: itImg, alt: "Laptop repair service", category: "IT & Repairs" },
  { src: productsImg, alt: "Keyholders and phone pouches", category: "Personalised Gifts" },
  { src: heroImg, alt: "T-shirt printing samples", category: "Printing" },
  { src: itImg, alt: "Network and router setup", category: "IT & Repairs" },
];

const categories = ["All", "Printing", "Personalised Gifts", "IT & Repairs"];

function Gallery() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our Work"
        subtitle="A showcase of recent printing, branding and technology projects. New work is added regularly."
      />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                active === c ? "bg-primary text-primary-foreground" : "bg-secondary text-primary hover:bg-border"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((item, i) => (
            <figure key={`${item.alt}-${i}`} className="group overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <img
                src={item.src}
                alt={item.alt}
                width={1400}
                height={1000}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="flex items-center justify-between px-4 py-3 text-sm">
                <span className="font-semibold">{item.alt}</span>
                <span className="text-xs uppercase text-muted-foreground">{item.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 rounded-xl bg-secondary p-6 text-center text-sm text-muted-foreground">
          Want your project featured here? Send us photos of the work we did for you on WhatsApp and we'll add it to the
          portfolio.
        </p>
      </section>
    </>
  );
}
