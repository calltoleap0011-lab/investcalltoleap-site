import { Mail } from "lucide-react";
import { QUICK_REPLY_EMAIL, QUICK_REPLY_HREF } from "@/lib/contact";

export function FloatingContact() {
  return (
    <a
      href={QUICK_REPLY_HREF}
      aria-label={`Contact us at ${QUICK_REPLY_EMAIL}`}
      title={QUICK_REPLY_EMAIL}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
    >
      <Mail className="h-4 w-4" />
      Contact Us
    </a>
  );
}
