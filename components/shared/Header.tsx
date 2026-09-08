import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/menu/koko_coffee.webp';
import { MapPin, Phone, Coffee } from 'lucide-react';

const Header = () => {
  return (
    <header className="absolute z-10 w-full">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-2 py-1 sm:px-6">
        {/* Brand / Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative h-12 w-12 rounded-full overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src={logo}
              alt="Koko Coffee Logo"
              fill
              sizes="48px"
              priority
              className="object-cover"
            />
          </div>
          <div className="flex font-serif gap-1">
            <h1 className="text-2xl tracking-wide text-black transition-colors group-hover:scale-105">
              KoKo
            </h1>
            <Coffee />
            <span className="text-2xl tracking-widest text-black">CAFE</span>
          </div>
        </Link>

        {/* Right Side Actions */}
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Location Link */}
          <Link
            href="/location"
            className="flex items-center gap-1.5 rounded-full border border-stone-200/80 bg-stone-50 p-2 text-xs font-bold text-stone-700 transition-all hover:bg-stone-100 hover:text-stone-950 hover:scale-110"
          >
            <MapPin className="h-4 w-4 text-rose-800" />
            <span className="hidden sm:inline">Location</span>
          </Link>

          {/* Call Button */}
          <a
            href="tel:+855966998037"
            className="flex items-center gap-1.5 rounded-full bg-stone-50 p-2 text-xs border-stone-200/80 font-bold shadow-sm transition-all hover:shadow hover:scale-110"
          >
            <Phone className="text-rose-900 size-4" />
            <span className="hidden sm:inline">096 699 8037</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
