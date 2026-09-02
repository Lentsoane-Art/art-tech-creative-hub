import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Lentsoane Art & Tech" className="h-14 w-14 rounded-full bg-background p-1" />
            <span className="font-display text-lg font-extrabold uppercase">Lentsoane Art &amp; Tech</span>
          </div>
          <p className="mt-4 max-w-sm text-sm opacity-80">
            (PTY) LTD · Reg No: 2021/750123/07. Printing, branding, personalised gifts and full IT support for homes,
            schools and businesses.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-accent">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="opacity-80 hover:opacity-100">Services</Link></li>
            <li><Link to="/products" className="opacity-80 hover:opacity-100">Products</Link></li>
            <li><Link to="/gallery" className="opacity-80 hover:opacity-100">Gallery</Link></li>
            <li><Link to="/quote" className="opacity-80 hover:opacity-100">Request a Quote</Link></li>
            <li><Link to="/contact" className="opacity-80 hover:opacity-100">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-accent">Get In Touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /><a href="tel:+27606919771">060 691 9771</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:lentsoaneart@gmail.com">lentsoaneart@gmail.com</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Emalahleni, Mpumalanga</li>
            <li className="flex items-center gap-4 pt-1">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-4 text-center text-xs uppercase tracking-widest opacity-75">
        © {new Date().getFullYear()} Lentsoane Art &amp; Tech (PTY) LTD · Where Creativity Meets Technology
      </div>
    </footer>
  );
}
