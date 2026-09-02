import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import productsImg from "@/assets/products.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Personalised Mugs, Tumblers, T-Shirts & More" },
      {
        name: "description",
        content:
          "Personalised mugs, magic mugs, tumblers, keyholders, t-shirts, hoodies, phone pouches, frames and custom products with combo deals.",
      },
      { property: "og:title", content: "Our Products | Lentsoane Art & Tech" },
      { property: "og:description", content: "Personalised gifts made just for you — with combo deals that save you money." },
    ],
  }),
  component: Products,
});

const products = [
  { name: "Normal Cup", price: "R90", text: "Perfect for coffee, tea & everyday use." },
  { name: "Magic Mug", price: "R120", text: "Hot liquid reveals your design!" },
  { name: "Tumbler 20oz", price: "R250", text: "Keeps drinks hot or cold for hours." },
  { name: "Keyholder", price: "R70", text: "Small gift, big memories." },
  { name: "T-Shirts (print only)", price: "From R30", text: "You bring the shirt, we print your design." },
  { name: "Hoodies (print only)", price: "Quoted", text: "Sublimation-friendly fabrics only." },
  { name: "Phone Pouch", price: "R170", text: "Stylish, durable & unique." },
  { name: "Frames & Prints", price: "From R25", text: "A4 framed photos, portraits, collages and certificates." },
  { name: "Custom Products", price: "Quoted", text: "Pillows, bookmarks, calendars and school memory packages." },
];

const combos = [
  { name: "Combo 1 · Normal Cup + Keyholder", price: "R140" },
  { name: "Combo 2 · Magic Cup + Keyholder", price: "R170" },
  { name: "Combo 3 · Phone Pouch + Keyholder", price: "R220" },
  { name: "Combo 4 · Normal Cup + Phone Pouch", price: "R240" },
  { name: "Combo 5 · Magic Cup + Phone Pouch", price: "R290" },
  { name: "Combo 6 · Tumbler + Keyholder", price: "R300" },
  { name: "Combo 7 · Cup + Keyholder + Tumbler", price: "R360 / R390" },
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Personalised Gifts, Made Just For You"
        subtitle="Your design. Your style. Our quality."
      />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <img src={productsImg} alt={p.name} width={1400} height={1000} loading="lazy" className="h-44 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-bold uppercase text-primary">{p.name}</h2>
                  <span className="rounded bg-accent px-2 py-1 text-xs font-bold text-accent-foreground">{p.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-16 font-display text-3xl font-extrabold uppercase text-primary">Amazing Combo Deals</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {combos.map((c) => (
            <li key={c.name} className="flex items-center justify-between gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold shadow-card">
              <span>{c.name}</span>
              <span className="shrink-0 rounded bg-primary px-2 py-0.5 text-primary-foreground">{c.price}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Add a phone pouch to any combo for only R120 and save R50.
        </p>

        <Link to="/quote" className="mt-8 inline-block rounded-md bg-accent px-6 py-3 text-sm font-bold uppercase text-accent-foreground">
          Order Now
        </Link>
      </section>
    </>
  );
}
