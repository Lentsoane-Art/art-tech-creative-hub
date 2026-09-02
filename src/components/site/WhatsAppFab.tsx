import { MessageCircle } from "lucide-react";

export const WHATSAPP_URL = "https://wa.me/27606919771";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-bold text-whatsapp-foreground shadow-elevated transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
