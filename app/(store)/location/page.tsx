import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, MapPin, ExternalLink, Phone, Clock } from 'lucide-react';
import store from '@/public/images/menu/koko_coffee.webp';

const LocationPage = () => {
  return (
    <main className="min-h-screen w-full px-4 py-6 sm:py-10">
      <div className="mx-auto w-full max-w-3xl space-y-6">
        {/* Modern Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-950 transition-colors group"
        >
          <div className="p-2 rounded-full bg-stone-100 group-hover:bg-stone-200 transition-colors">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          </div>
          <span className="font-khmer">ត្រឡប់ទៅទំព័រដើម</span>
        </Link>

        {/* Page Title */}
        <div>
          <h1 className="font-khmer text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
            ទីតាំងហាង
          </h1>
          <p className="font-khmer text-xs sm:text-sm text-stone-500 mt-1">
            ព័ត៌មានលម្អិតអំពីទីតាំង និងទំនាក់ទំនងរបស់ KOKO COFFEE
          </p>
        </div>

        {/* Store Card Info */}
        <div className="flex flex-col gap-6 rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm sm:p-6 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 flex-1 space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden border border-stone-200 bg-black p-0.5 shadow-xs">
                <Image
                  src={store}
                  alt="KOKO Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="font-khmer text-xl font-bold text-stone-900">
                  KOKO COFFEE
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>6:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <p className="font-khmer text-sm leading-relaxed text-stone-600">
              លោកអ្នកអាចអញ្ជើញមកកាន់ហាងផ្ទាល់
              ឬចុចប៊ូតុងខាងក្រោមដើម្បីមើលផ្លូវធ្វើដំណើរតាមរយៈ Google Maps។
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://maps.app.goo.gl/dgMmbyi3Xb1BtgSF7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-khmer inline-flex items-center gap-2 rounded-xl bg-rose-900 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-rose-950 active:scale-95 shadow-xs"
              >
                <MapPin className="h-4 w-4" />
                <span>បើកមើលក្នុង Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </a>

              <a
                href="tel:+855966998037"
                className="font-khmer inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-xs font-bold text-stone-700 transition-all hover:bg-stone-100 active:scale-95 "
              >
                <Phone className="h-3.5 w-3.5 text-rose-800" />
                <span>096 699 8037</span>
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Google Map Preview */}
        <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm">
          <div className="p-3 bg-stone-50 border-b border-stone-200/80   flex items-center justify-between">
            <span className="font-khmer text-xs font-bold text-stone-700  flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-800" />
              ផែនទីទីតាំងផ្ទាល់
            </span>
          </div>
          <div className="relative w-full h-72 sm:h-96 bg-stone-100 ">
            <iframe
              title="KOKO PUB Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.349362311373!2d104.82819737483058!3d11.583134188618946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31094f0483f20ce5%3A0x9ea4eb9d3a75bdc!2zS29LbyBDYWZlIOGenOGej-GfkuGej-GegOGfkuGemuGetuGfhuGehOGekuGfkuGek-GehOGfiw!5e1!3m2!1sen!2skh!4v1788610709483!5m2!1sen!2skh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[0.2] contrast-[1.1]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LocationPage;
