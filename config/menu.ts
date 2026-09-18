
export const CATEGORIES = [
  { id: 'drinks', name: 'កាហ្វេ/ភេសជ្ជៈ', nameEn: 'Drinks' },
  { id: 'rice-noodle', name: 'បាយ/មី', nameEn: 'Rice & Noodles' },
  { id: 'noodle-soup', name: 'គុយទាវ', nameEn: 'Noodles Soup' },
  { id: 'stewed-beef', name: 'ខគោ', nameEn: 'Stewed Beef' },
  { id: 'order-food', name: 'ម្ហូបកម្ម៉ង់', nameEn: 'Order Food' },
  { id: 'stir-fry', name: 'ឆា', nameEn: 'Stir-fry' },
  {id:'fish',name:'ត្រី',nameEn:'Fish'},
  {id:'khmer-fish-paste',name:'ប្រហុក',nameEn:'Khmer Fish Paste'},
  { id: 'seafood', name: 'គ្រឿងសមុទ្រ', nameEn: 'Seafood' },
  { id: 'toppings', name: 'បន្ថែម', nameEn: 'Toppings' },
] as const;
export type CategoryId = (typeof CATEGORIES)[number]['id'];
export type FilterCategory = 'all'|'featured'| CategoryId;
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: CategoryId;
  image: string;
  featured?: boolean;
}
export const MENU: MenuItem[] = [
  // noddle soup
  { id: 'ns-1', name: 'គុយទាវប្រហិតត្រី', price: 2.5, category: 'noodle-soup', image: '/images/ns/1.webp' },
  { id: 'ns-2', name: 'គុយទាវសាច់គោ', price: 2.5, category: 'noodle-soup', image: '/images/ns/2.webp' },
  { id: 'ns-3', name: 'គុយទាវគ្រឿងសមុទ្រ', price: 2.5, category: 'noodle-soup', image: '/images/ns/3.webp' },
  { id: 'ns-4', name: 'គុយទាវគ្រឿងក្នុង', price: 2.5, category: 'noodle-soup', image: '/images/ns/4.webp' },
  { id: 'ns-5', name: 'គុយទាវសាច់ជ្រូកចិញ្រ្ចាំ', price: 2.5, category: 'noodle-soup', image: '/images/ns/5.webp' },
  { id: 'ns-6', name: 'គុយទាវសាច់ពិសេស', price: 2.5, category: 'noodle-soup', image: '/images/ns/6.webp' },
  { id: 'ns-7', name: 'គុយទាវសាច់ជ្រូក', price: 2.5, category: 'noodle-soup', image: '/images/ns/7.webp' },
  { id: 'ns-8', name: 'គុយទាវប្រហិតសាច់គោ', price: 2.5, category: 'noodle-soup', image: '/images/ns/8.webp' },
  { id: 'ns-9', name: 'គុយទាវឆ្អឺងសុប', price: 2.5, category: 'noodle-soup', image: '/images/ns/9.webp' },
  // ko-kor
   { id: 'sb-1', name: 'នំបុ័ងខគោ', price: 2.5, category: 'stewed-beef', image: '/images/sb/1.webp' },
   { id: 'sb-2', name: 'គុយទាវខគោ', price: 2.5, category: 'stewed-beef', image: '/images/sb/2.webp' },
   //rice & noodle
  { id: 'rn-1', name: 'បាយឆាគ្រឿងសមុទ្រ', price: 2.5, category: 'rice-noodle', image: '/images/rn/1.webp'},
   { id: 'rn-2', name: 'បាយសាច់ជ្រូកពងទា', price: 2.5, category: 'rice-noodle', image: '/images/rn/2.webp' },
   { id: 'rn-3', name: 'បាយឆាក្តាម', price: 2.5, category: 'rice-noodle', image: '/images/rn/3.webp' },
  { id: 'rn-4', name: 'បាយឆាសាច់គោ', price: 2.5, category: 'rice-noodle', image: '/images/rn/4.webp',  },
  { id: 'rn-5', name: 'បាយឆាម្រះព្រៅសាច់គោ', price: 2.5, category: 'rice-noodle', image: '/images/rn/5.webp',  },
  { id: 'rn-6', name: 'បាយឆាសាច់ជ្រូកចិញ្រ្ចាំម្រះព្រៅ', price: 2.5, category: 'rice-noodle', image: '/images/rn/6.webp',  },
    { id: 'rn-7', name: 'បាយឡុកឡាក់សាច់គោ', price: 3.0, category: 'rice-noodle', image: '/images/rn/7.webp',  },
    { id: 'rn-8', name: 'បាយភ្លៅមាន់ចៀន', price: 3.0, category: 'rice-noodle', image: '/images/rn/8.webp',},
  { id: 'rn-9', name: 'មីកញ្ចប់ឆាសាច់គោ', price: 2.5, category: 'rice-noodle', image: '/images/rn/9.webp' },
  { id: 'rn-10', name: 'មីគីឡូឆាសាច់គោ', price: 2.5, category: 'rice-noodle', image: '/images/rn/10.webp' },
    { id: 'rn-11', name: 'បាយស(ចាន)', price: 0.5, category: 'rice-noodle', image: '/images/rn/11.webp' },
  { id: 'rn-12', name: 'បាយស(ឆ្នាំង)', price: 1.25, category: 'rice-noodle', image: '/images/rn/12.webp' },
   // order foods
  { id: 'of-1', name: 'ស្ងោរជ្រក់សាច់គោ (ចាន)', price: 3.0, category: 'order-food', image: '/images/of/1.webp' },
  { id: 'of-2', name: 'ស្ងោរជ្រក់សាច់គោ (ឆ្នាំង)', price: 6.25, category: 'order-food', image: '/images/of/2.webp' },
  { id: 'of-3', name: 'ស្ងោរងាំងូវមាន់ (ចាន)', price: 3.0, category: 'order-food', image: '/images/of/3.webp' },
  { id: 'of-4', name: 'ស្ងោរងាំងូវមាន់ (ឆ្នាំង)', price: 6.25, category: 'order-food', image: '/images/of/4.webp' },
  { id: 'of-5', name: 'តុងយាំគ្រឿងសមុទ្រ (ចាន)', price: 3.0, category: 'order-food', image: '/images/of/5.webp' },
  { id: 'of-6', name: 'តុងយាំគ្រឿងសមុទ្រ (ឆ្នាំង)', price: 6.25, category: 'order-food', image: '/images/of/6.webp' },
  { id: 'of-7', name: 'កកូរឆ្អឹងជំនីជ្រូក / ត្រី (ចាន)', price: 3.0, category: 'order-food', image: '/images/of/7.webp' },
  { id: 'of-8', name: 'កកូរឆ្អឹងជំនីជ្រូក / ត្រី (ឆ្នាំង)', price: 6.25, category: 'order-food', image: '/images/of/8.webp' },
  { id: 'of-9', name: 'ម្ជូរយួន (ចាន)', price: 3.0, category: 'order-food', image: '/images/of/9.webp' },
  { id: 'of-10', name: 'ម្ជូរយួន (ឆ្នាំង)', price: 6.25, category: 'order-food', image: '/images/of/10.webp' },
  { id: 'of-11', name: 'ម្ជូរគ្រឿង (ចាន)', price: 3.0, category: 'order-food', image: '/images/of/11.webp' },
  { id: 'of-12', name: 'ម្ជូរគ្រឿង (ឆ្នាំង)', price: 6.25, category: 'order-food', image: '/images/of/12.webp' },
  { id: 'of-13', name: 'ម្ជូរស្រែ (ចាន)', price: 3.0, category: 'order-food', image: '/images/of/13.webp' },
  { id: 'of-14', name: 'ម្ជូរស្រែ (ឆ្នាំង)', price: 6.25, category: 'order-food', image: '/images/of/14.webp' },
// stir-fry
  { id: 'sf-1', name: 'ត្រកួនប្រេងខ្យង', price: 2.5, category: 'stir-fry', image: '/images/sf/1.webp' },
  { id: 'sf-2', name: 'ខាត់ណាប្រេងខ្យង', price: 2.5, category: 'stir-fry', image: '/images/sf/2.webp' },
  { id: 'sf-3', name: 'ឆារបន្លែគ្រប់មុខ', price: 2.5, category: 'stir-fry', image: '/images/sf/3.webp' },
  { id: 'sf-4', name: 'ឆាខ្ញី មាន់/សាច់គោ', price: 3.0, category: 'stir-fry', image: '/images/sf/4.webp' },
  { id: 'sf-5', name: 'ឆាឆ្អឺងជំនីជូរអែម', price: 3.0, category: 'stir-fry', image: '/images/sf/5.webp' },
  { id: 'sf-6', name: 'ឆាត្រប់', price: 3.0, category: 'stir-fry', image: '/images/sf/6.webp' },
  { id: 'sf-7', name: 'ឆាក្តៅ មាន់/សាច់គោ', price: 3.0, category: 'stir-fry', image: '/images/sf/7.webp' },
  { id: 'sf-8', name: 'មាន់លីងគល់ស្លឹកគ្រៃ', price: 3.0, category: 'stir-fry', image: '/images/sf/8.webp' },
  { id: 'sf-9', name: 'ខាត់ណាសាច់គោ', price: 3.0, category: 'stir-fry', image: '/images/sf/9.webp' },
  { id: 'sf-10', name: 'មាន់លីងចេកខ្ចី', price: 3.0, category: 'stir-fry', image: '/images/sf/10.webp' },
  { id: 'sf-11', name: 'មាន់លីងអំបិលម្ទេស', price: 3.0, category: 'stir-fry', image: '/images/sf/11.webp' },
  { id: 'sf-12', name: 'ឆាសាច់គោសណ្តែកគួរ', price: 2.5, category: 'stir-fry', image: '/images/sf/12.webp' },
  // fish
  { id: 'f-1', name: 'ត្រីក្រហមចៀនចួន', price: 4.0, category: 'fish', image: '/images/f/1.webp' },
  { id: 'f-2', name: 'ត្រីក្រហមឆាជូរអែម', price: 4.0, category: 'fish', image: '/images/f/2.webp' },
  { id: 'f-3', name: 'ត្រីកេសចៀន', price: 4.0, category: 'fish', image: '/images/f/3.webp' },
  { id: 'f-4', name: 'ត្រីក្រម៉ុងចៀន', price: 3.75, category: 'fish', image: '/images/f/4.webp' },
  { id: 'f-5', name: 'ត្រីក្រហមបំពងទឹកត្រីស្វាយ', price: 3.75, category: 'fish', image: '/images/f/5.webp' },
  { id: 'f-6', name: 'ត្រីងៀត​ ឪឡឹក', price: 2.5, category: 'fish', image: '/images/f/6.webp' },
  // khmer-fish-paste
  { id: 'kfp-1', name: 'ប្រហុកខ្ទិះ', price: 3.75, category: 'khmer-fish-paste', image: '/images/kfp/1.webp' },
  { id: 'kfp-2', name: 'ពងទាចៀនត្រីប្រម៉ា', price: 3.25, category: 'khmer-fish-paste', image: '/images/kfp/2.webp' },
  { id: 'kfp-3', name: 'ប្រហុកអាំងជ្រុញ', price: 3.75, category: 'khmer-fish-paste', image: '/images/kfp/3.webp',featured:true },
  { id: 'kfp-4', name: 'ប្រហុកក្រសាំង', price: 3.75, category: 'khmer-fish-paste', image: '/images/kfp/4.webp' },
//seafood
  { id: 's-1', name: 'មឹកឆាជូរអែម', price: 4.0, category: 'seafood', image: '/images/s/1.webp' },
  { id: 's-2', name: 'មឹកឆាម្រេចខ្ចី', price: 4.0, category: 'seafood', image: '/images/s/2.webp' },
  { id: 's-3', name: 'បង្គាឆាម្រេចខ្ចី', price: 4.0, category: 'seafood', image: '/images/s/3.webp' },
  { id: 's-4', name: 'បង្គាស្រុះ', price: 4.0, category: 'seafood', image: '/images/s/4.webp' },
  // ice 
  { id: '38', name: 'អាយឡាតេ', price: 1.75, category: 'drinks', image: '/images/dnk/38.webp' },
  { id: '49', name: 'អាយកាពូឈីណូ', price: 1.75, category: 'drinks', image: '/images/dnk/49.webp' },
  { id: '50', name: 'អាយម៉ូកា', price: 1.75, category: 'drinks', image: '/images/dnk/50.webp' },
  { id: '47', name: 'អាយអាមេរិចខេណូ', price: 1.25, category: 'drinks', image: '/images/dnk/47.webp' },
 // cream
 { id: '64', name: 'កាហ្វេដូងគ្រីម', price: 1.75, category: 'drinks', image: '/images/dnk/64.webp' },
 { id: '65', name: 'តែបៃតងដូងគ្រីម', price: 1.75, category: 'drinks', image: '/images/dnk/65.webp' },
 { id: '55', name: 'សូកូឡាដូងគ្រីម', price: 1.75, category: 'drinks', image: '/images/dnk/55.webp' },
 //hot
  { id: '51', name: 'អាមេរិចកាណូក្តៅ', price: 1.5, category: 'drinks', image: '/images/dnk/51.webp' },
  { id: '52', name: 'កាពូឈីណូក្តៅ', price: 1.5, category: 'drinks', image: '/images/dnk/52.webp' },
  { id: '53', name: 'ម៉ូកាក្តៅ', price: 1.5, category: 'drinks', image: '/images/dnk/53.webp' },
  { id: '54', name: 'ឡាតេក្តៅ', price: 1.5, category: 'drinks', image: '/images/dnk/54.webp' },
  //tea
  { id: '24', name: 'តែក្រហមក្រូចឆ្មា', price: 1.25, category: 'drinks', image: '/images/dnk/24.webp' },
  { id: '56', name: 'តែបៃតងក្រូចឆ្មា', price: 1.25, category: 'drinks', image: '/images/dnk/56.webp' },
  { id: '57', name: 'តែផាសិនក្រូចឆ្មា', price: 1.25, category: 'drinks', image: '/images/dnk/57.webp' },
  { id: '58', name: 'តែទឹកឃ្មុំក្រូចឆ្មា', price: 1.25, category: 'drinks', image: '/images/dnk/58.webp' },
  { id: '59', name: 'តែផាសិនទឹកឃ្មុំក្រូចឆ្មា', price: 1.25, category: 'drinks', image: '/images/dnk/59.webp' },
  //milk
   { id: '60', name: 'កាហ្វេហ្វីនទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/dnk/60.webp' },
  { id: '46', name: 'តែបៃតងទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/dnk/46.webp' },
   { id: '43', name: 'តែមេអំបៅទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/dnk/43.webp' },
   { id: '44', name: 'សូកូឡាទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/dnk/44.webp' }, 
   { id: '61', name: 'អូវ៉ាន់ទីនទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/dnk/61.webp' },
   { id: '80', name: 'ប្រោនសូហ្គឺទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/dnk/80.webp' },
   { id: '36', name: 'តែទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/dnk/36.webp' },
   { id: '41', name: 'ស្ត្របឺរីទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/dnk/41.webp' },
   { id: '81', name: 'ផាសិនទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/dnk/81.webp' },
   //soda
   { id: '63', name: 'ផាសិនសូដា', price: 1.25, category: 'drinks', image: '/images/dnk/63.webp' },
   { id: '39', name: 'ប្លូបឺរីសូដា', price: 1.25, category: 'drinks', image: '/images/dnk/39.webp' },
  { id: '35', name: 'ស្ត្របឺរីសូដា', price: 1.25, category: 'drinks', image: '/images/dnk/35.webp' },
  //coconut
  { id: '29', name: 'កាហ្វេទឹកដោះគោដូងក្រអូប', price: 1.5, category: 'drinks', image: '/images/dnk/29.webp' },
  { id: '69', name: 'តែបៃតងទឹកដោះគោដូងក្រអូប', price: 1.5, category: 'drinks', image: '/images/dnk/69.webp' },
  { id: '66', name: 'តែមេអំបៅទឹកដោះគោដូងក្រអូប', price: 1.5, category: 'drinks', image: '/images/dnk/66.webp' },
  { id: '37', name: 'សូកូឡាទឹកដោះគោដូងក្រអូប', price: 1.5, category: 'drinks', image: '/images/dnk/37.webp' },
  { id: '68', name: 'អូវ៉ានទីនទឹកដោះគោដូងក្រអូប', price: 1.5, category: 'drinks', image: '/images/dnk/68.webp' },
  //frappe
   { id: '40', name: 'តែបៃតងក្រឡុក', price: 1.75, category: 'drinks', image: '/images/dnk/40.webp' },
   { id: '25', name: 'សូកូឡាក្រឡុក', price: 1.75, category: 'drinks', image: '/images/dnk/25.webp' },
   { id: '26', name: 'ស្ត្របឺរីក្រឡុក', price: 1.75, category: 'drinks', image: '/images/dnk/26.webp' },
   { id: '42', name: 'ដូងក្រអូបក្រឡុក', price: 1.75, category: 'drinks', image: '/images/dnk/42.webp' },
  //featured
  { id: '48', name: 'KoKo កាហ្វេ', price: 1.75, category: 'drinks', image: '/images/dnk/48.webp' },
  { id: '28', name: 'Koko កាហ្វេគ្រីមអំបិល', price: 2.00, category: 'drinks', image: '/images/dnk/28.webp',},
  { id: '32', name: 'ម៉ាតឆាដូងគ្រីម', price: 1.75, category: 'drinks', image: '/images/dnk/32.webp',},
  { id: '30', name: 'ផាសិនគ្រីម', price: 1.75, category: 'drinks', image: '/images/dnk/30.webp' },
  { id: '33', name: 'ម៉ាតឆាស្ត្របឺរីទឹកដោះគោ', price: 1.75, category: 'drinks', image: '/images/dnk/33.webp' },
  { id: '34', name: 'ម៉ាតឆាឡាតេ', price: 1.5, category: 'drinks', image: '/images/dnk/34.webp',},
  { id: '45', name: 'ម៉ាតឆាដូងក្រអូប', price: 1.75, category: 'drinks', image: '/images/dnk/45.webp' },
  { id: '62', name: 'koko តែគុជ', price: 1.5, category: 'drinks', image: '/images/dnk/62.webp',},
  // TOPPINGS
  { id: '73', name: 'គុជស្ងោរ', price: 0.25, category: 'toppings', image: '/images/dp/73.webp' },
  { id: '74', name: 'ឆៅគួយ', price: 0.25, category: 'toppings', image: '/images/dp/74.webp' },
  { id: '75', name: 'ចាហួយឈូស', price: 0.25, category: 'toppings', image: '/images/dp/75.webp' },
  { id: '76', name: 'ចាហួយប៉េស', price: 0.25, category: 'toppings', image: '/images/dp/76.webp' },
  { id: '77', name: 'ចាហួយប្រោន', price: 0.25, category: 'toppings', image: '/images/dp/77.webp' },
  { id: '78', name: 'ចាហួយស្រ្តបឺរី', price: 0.25, category: 'toppings', image: '/images/dp/78.webp' },
  { id: '79', name: 'គ្រីម', price: 0.5, category: 'toppings', image: '/images/dp/79.webp' },
];