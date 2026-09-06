'use client';

import { useState, useEffect, useTransition, Suspense, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuCard } from '@/components/MenuCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter, useSearchParams } from 'next/navigation';
import BannerCarousel from '@/components/BannerCarousel';
import { MENU, CATEGORIES, FilterCategory } from '@/config/menu';
import banner1 from '@/public/images/menu/banner1.webp';
import banner2 from '@/public/images/menu/banner2.webp';
const banners = [banner1, banner2];
const HomeContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const categoryParam = searchParams.get('category');
  const activeCategory: FilterCategory =
    categoryParam === 'featured' ||
    CATEGORIES.some((cat) => cat.id === categoryParam)
      ? (categoryParam as FilterCategory)
      : 'all';
  const handleCategoryChange = (val: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (val === 'all') {
      params.delete('category');
    } else {
      params.set('category', val);
    }
    const query = params.toString();
    const targetUrl = query ? `/?${query}` : '/';
    startTransition(() => {
      router.replace(targetUrl, { scroll: false });
    });
  };

  useEffect(() => {
    if (isPaused || banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const filteredMenu = useMemo(() => {
    return MENU.filter((item) => {
      if (activeCategory === 'all') return true;
      if (activeCategory === 'featured') return item.featured === true;
      return item.category === activeCategory;
    });
  }, [activeCategory]);

  return (
    <div className="min-h-screen w-full pb-10">
      <main className="mx-auto max-w-7xl space-y-4 px-2 sm:px-6 lg:px-8">
        <BannerCarousel
          banners={banners}
          currentIndex={currentIndex}
          onHover={setIsPaused}
        />
        <div className="sticky top-14 z-40 -mx-2 border-y border-stone-200/80 bg-white/90 px-2 backdrop-blur-md sm:mx-0 sm:rounded-xl sm:border sm:px-4">
          <div className="mx-auto max-w-7xl py-2.5">
            <Tabs
              value={activeCategory}
              onValueChange={handleCategoryChange}
              className="mx-auto w-full max-w-4xl"
            >
              <TabsList
                variant="line"
                className="no-scrollbar flex w-full touch-pan-x flex-nowrap justify-start pl-7 pr-4 py-1 gap-2 overflow-x-auto whitespace-nowrap scroll-smooth"
              >
                <TabsTrigger
                  value="all"
                  className="font-khmer text-sm sm:text-base cursor-pointer whitespace-nowrap shrink-0 px-3.5 py-1.5"
                >
                  ទាំងអស់
                </TabsTrigger>
                <TabsTrigger
                  value="featured"
                  className="font-khmer text-sm sm:text-base cursor-pointer whitespace-nowrap shrink-0 px-3.5 py-1.5"
                >
                  ប្រចាំហាង
                </TabsTrigger>
                {CATEGORIES.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="font-khmer text-sm sm:text-base cursor-pointer whitespace-nowrap shrink-0 px-3.5 py-1.5"
                  >
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                <MenuCard item={item} isPriority={index < 4} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {filteredMenu.length === 0 && (
          <div className="py-12 text-center">
            <p className="font-khmer text-stone-500">
              មិនមានទិន្នន័យម្ហូបក្នុងប្រភេទទិន្នន័យនេះទេ
            </p>
          </div>
        )}
      </main>
    </div>
  );
};
export const HomePage = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
};
