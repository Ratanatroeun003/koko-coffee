import Link from 'next/link';
import Image from 'next/image';
import { Card, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { MenuItem } from '@/config/menu';
import { Sparkles } from 'lucide-react';

export const MenuCard = ({
  item,
  isPriority,
}: {
  item: MenuItem;
  isPriority: boolean;
}) => {
  return (
    <Link href={`/menu/${item.id}`} className="block h-full">
      <Card className="group m-0  rounded-b-none gap-0 relative flex h-full flex-col overflow-hidden border border-stone-200/80 bg-white p-0 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-md">
        {/* Image & Badges Container */}
        <div className="relative w-full overflow-hidden bg-stone-100">
          <AspectRatio ratio={1}>
            <Image
              src={item.image}
              alt={item.name}
              fill
              priority={isPriority}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </AspectRatio>

          {/* Featured Badge (បង្ហាញតែពេល item.featured = true) */}
          {item.featured && (
            <Badge className="absolute top-2 left-2 flex items-center gap-1 border-0 bg-rose-900/90 text-[10px] font-bold text-white backdrop-blur-xs">
              <Sparkles className="h-3 w-3" />
              <span>ប្រចាំហាង</span>
            </Badge>
          )}

          {/* Price Badge */}
          <Badge className="absolute top-2 right-2 border-0 bg-amber-500 px-2.5 py-1 text-xs font-bold text-stone-950 shadow-sm backdrop-blur-xs">
            ${item.price.toFixed(2)}
          </Badge>
        </div>

        {/* Card Footer / Title */}
        <CardFooter className="flex bg-white rounded-none flex-1 items-center justify-center border-t border-stone-100 p-1 text-center">
          <p className="font-khmer text-sm font-semibold leading-snug text-stone-900 line-clamp-2 transition-colors group-hover:text-rose-900 sm:text-base">
            {item.name}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};
