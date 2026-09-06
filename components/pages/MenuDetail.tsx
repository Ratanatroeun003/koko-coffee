'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { MenuItem } from '@/config/menu';

interface MenuDetailPageProps {
  menu: MenuItem;
}
export default function MenuDetailPage({ menu }: MenuDetailPageProps) {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return (
    <div className="w-full min-h-[85vh] py-6 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        <button
          type="button"
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-950 dark:text-stone-400 dark:hover:text-white transition-colors group"
        >
          <div className="p-2 rounded-full bg-stone-100 group-hover:bg-stone-200 dark:bg-stone-800 dark:group-hover:bg-stone-700 transition-colors">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          </div>
          <span className="font-khmer">ត្រឡប់ទៅទំព័រដើម</span>
        </button>
        {/* Menu Detail Card */}
        <Card className="w-full overflow-hidden rounded-2xl border border-stone-200/80 dark:border-stone-800 shadow-lg p-0 bg-white dark:bg-stone-900">
          {/* Image Container with Badges */}
          <div className="relative w-full aspect-square overflow-hidden bg-stone-100 dark:bg-stone-800">
            <Image
              src={menu.image}
              alt={menu.name}
              fill
              className="object-cover font-khmer"
              priority
              sizes="(max-width: 768px) 100vw, 450px"
            />

            {/* Featured Badge */}
            {menu.featured && (
              <Badge className="absolute top-3 left-3 flex items-center gap-1 bg-rose-900/90 text-white font-bold text-xs backdrop-blur-xs border-0 px-3 py-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-khmer">ប្រចាំហាង</span>
              </Badge>
            )}

            {/* Category Badge */}
            <Badge className="absolute bottom-3 left-3 bg-black/60 text-white capitalize text-xs font-medium backdrop-blur-md border-0 px-3 py-1">
              {menu.category}
            </Badge>
          </div>

          {/* Card Content */}
          <CardContent className="p-5 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="font-khmer text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
                {menu.name}
              </h1>
              <p className="text-xs font-khmer text-stone-500 dark:text-stone-400">
                រៀបចំថ្មីៗក្តៅៗតាមការកុម្ម៉ង់
              </p>
            </div>

            <div className="shrink-0 text-right">
              <span className="font-bold text-2xl sm:text-3xl text-amber-500 block">
                ${menu.price.toFixed(2)}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
