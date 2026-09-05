'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuCard } from '@/components/MenuCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BannerCarousel from '@/components/BannerCarousel';
import { MENU, CATEGORIES, FilterCategory } from '@/config/menu';
import banner1 from '@/public/images/menu/banner1.webp';
import banner2 from '@/public/images/menu/banner2.webp';

const HomePage = () => {
  const banners = [banner1, banner2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState<FilterCategory>('all');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, banners.length]);

  const filteredMenu = MENU.filter((m) => {
    if (category === 'all') return true;
    if (category === 'featured') return m.featured === true;
    return m.category === category;
  });

  return (
    <div className="min-h-screen w-full pb-10">
      <main className="mx-auto max-w-7xl space-y-4 px-2 sm:px-6 lg:px-8">
        {/* Banner Carousel */}
        <BannerCarousel
          banners={banners}
          currentIndex={currentIndex}
          onHover={setIsPaused}
        />

        {/* Sticky Category Tabs Bar */}
        {/* ចំណុចកែសម្រួល៖ top-14 ឬ top-16 ឱ្យគេចផុតពី Header និងបន្ថែម bg-white/90 */}
        <div className="sticky top-14 z-40 -mx-2 border-y border-stone-200/80 bg-white/90 px-2 backdrop-blur-md dark:border-stone-800 sm:mx-0 sm:rounded-xl sm:border sm:px-4">
          <div className="mx-auto max-w-7xl py-2.5">
            <Tabs
              value={category}
              onValueChange={(val) => setCategory(val as FilterCategory)}
              className="mx-auto w-full max-w-4xl"
            >
              <TabsList
                variant="line"
                className="no-scrollbar flex w-full touch-pan-x flex-nowrap justify-start gap-2 overflow-x-auto whitespace-nowrap scroll-smooth"
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
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
export default HomePage;
