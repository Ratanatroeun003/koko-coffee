import React from 'react';
import { FaFacebook, FaTelegram, FaPhone } from 'react-icons/fa';
import { MapPin, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background/50 backdrop-blur-md shadow-xs">
      {/* សម្រួលមកត្រឹម 2 Columns លើ Desktop ដើម្បីកុំឱ្យខូច Balance */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:px-8">
        {/* Column 1: Contact */}
        <div className="flex flex-col gap-3">
          <h2 className="font-khmer text-base font-bold text-foreground">
            ទំនាក់ទំនង
          </h2>
          <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <a
              href="tel:+855966998037"
              className="flex items-center gap-2 hover:text-foreground transition-colors w-fit"
            >
              <Phone className="w-4 h-4 text-rose-800 shrink-0" />
              <span>096 699 8037</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-800 shrink-0" />
              <span>Phnom Penh, Cambodia</span>
            </div>
          </div>
        </div>

        {/* Column 2: Social Media */}
        <div className="flex flex-col gap-3">
          <h2 className="font-khmer text-base font-bold text-foreground">
            បណ្តាញសង្គម
          </h2>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a
              href="https://www.facebook.com/share/1GJaLQK9Zf/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground w-fit"
            >
              <FaFacebook className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Facebook Page</span>
            </a>
            <a
              href="https://t.me/+855966998037"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground w-fit"
            >
              <FaTelegram className="w-4 h-4 text-sky-500 shrink-0" />
              <span>Telegram Channel</span>
            </a>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Bar */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Koko Cafe. All rights reserved.</p>

        <div className="flex items-center gap-3">
          <p className="text-xs">
            Made by <span className="font-semibold text-foreground">@trna</span>
          </p>
          <div className="flex items-center gap-1.5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/TroeunRatana"
              aria-label="Developer Telegram"
              className="rounded-full border border-border p-1.5 transition-all hover:border-sky-500 hover:text-sky-500 active:scale-95"
            >
              <FaTelegram size="14" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/share/1aCyYxFoSR/?mibextid=wwXIfr"
              aria-label="Developer Facebook"
              className="rounded-full border border-border p-1.5 transition-all hover:border-blue-600 hover:text-blue-600 active:scale-95"
            >
              <FaFacebook size="14" />
            </a>
            <a
              href="tel:+855714407205"
              aria-label="Developer Phone"
              className="rounded-full border border-border p-1.5 transition-all hover:border-emerald-600 hover:text-emerald-600 active:scale-95"
            >
              <FaPhone size="12" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
