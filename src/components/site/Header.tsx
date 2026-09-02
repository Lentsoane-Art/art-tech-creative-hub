import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/quote", label: "Request a Quote" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Lentsoane Art & Tech logo" className="h-12 w-12 object-contain" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-extrabold uppercase tracking-tight text-primary">
              Lentsoane Art &amp; Tech
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
              Where Creativity Meets Technology
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-secondary text-primary" }}
              className="rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+27606919771"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> 060 691 9771
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-primary lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="block border-b border-border py-3 text-sm font-semibold uppercase tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
