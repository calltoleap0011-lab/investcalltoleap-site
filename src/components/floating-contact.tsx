import { useState } from "react";
import { Mail, MessageCircle, Phone, X } from "lucide-react";
import { QUICK_REPLY_EMAIL, QUICK_REPLY_HREF } from "@/lib/contact";

const ZANGI_NUMBER = "3697814910";
const SIGNAL_NUMBER = "+13465871189";
const SIGNAL_HREF = `https://signal.me/#p/${SIGNAL_NUMBER}`;

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="Contact options"
          className="w-72 max-w-[calc(100vw-2.5rem)] rounded-2xl border border-border bg-background p-4 text-foreground shadow-xl"
        >
          <p className="mb-3 text-sm font-bold">Reach us on:</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <div>
                <p className="font-bold">Email</p>
                <a href={QUICK_REPLY_HREF} className="break-all underline">
                  {QUICK_REPLY_EMAIL}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <div>
                <p className="font-bold">Zangi</p>
                <span>{ZANGI_NUMBER}</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <div>
                <p className="font-bold">Signal</p>
                <a href={SIGNAL_HREF} target="_blank" rel="noopener noreferrer" className="underline">
                  {SIGNAL_NUMBER}
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        {open ? <X className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
        {open ? "Close" : "Contact Us"}
      </button>
    </div>
  );
}
