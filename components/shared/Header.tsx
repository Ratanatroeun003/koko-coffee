import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/menu/koko_coffee.webp';
import { MapPin, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
        {/* Brand / Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden border border-stone-200 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src={logo}
              alt="Koko Coffee Logo"
              fill
              sizes="48px"
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bungee text-2xl font-extrabold tracking-wide text-stone-900 transition-colors group-hover:text-rose-900">
              KOKO
            </span>
            <span className="font-bungee text-xs font-semibold tracking-widest text-stone-500">
              COFFEE
            </span>
          </div>
        </Link>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Location Link */}
          <Link
            href="/location"
            className="flex items-center gap-1.5 rounded-full border border-stone-200/80 bg-stone-50 px-3 py-1.5 text-xs font-bold text-stone-700 transition-all hover:bg-stone-100 hover:text-stone-950 active:scale-95"
          >
            <MapPin className="h-4 w-4 text-rose-800" />
            <span className="hidden sm:inline">Location</span>
          </Link>

          {/* Call Button */}
          <a
            href="tel:+855966998037"
            className="flex items-center gap-1.5 rounded-full bg-rose-900 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-rose-950 hover:shadow active:scale-95"
          >
            <Phone className="h-3.5 w-3.5 fill-current" />
            <span>096 699 8037</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
