export const CATEGORIES = [
  { id: 'drinks', name: 'កាហ្វេ/តែបៃតង', nameEn: 'Coffee & Tea' },
  { id: 'rice', name: 'បាយ', nameEn: 'Rice' },
  { id: 'noodle', name: 'មី', nameEn: 'Noodles' },
  { id: 'soup', name: 'សម្ល/ស្ងោរ', nameEn: 'Soups' },
  { id: 'stir-fry', name: 'ឆា', nameEn: 'Stir-fry' },
  { id: 'snacks', name: 'អាហារសម្រន់', nameEn: 'Snacks' },
  
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export type FilterCategory = 'all' | 'featured' | CategoryId;

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: CategoryId;
  image: string;
  featured?: boolean;
}

export const MENU: MenuItem[] = [
  // ---------------- FOOD ITEMS ----------------
  { id: '1', name: 'បាយឆាសាច់គោ', price: 2.5, category: 'rice', image: '/images/menu/1.webp', featured: true },
  { id: '2', name: 'បាយសាច់ជ្រូកពងទាចៀន', price: 2.5, category: 'rice', image: '/images/menu/2.webp' },
  { id: '3', name: 'បាយឆាសាច់ក្រក', price: 2.5, category: 'rice', image: '/images/menu/3.webp' },
  { id: '4', name: 'បាយឆាម្រះព្រៅសាច់គោ', price: 2.5, category: 'rice', image: '/images/menu/4.webp', featured: true },
  { id: '5', name: 'មីឆាកញ្ចប់សាច់គោ', price: 2.5, category: 'noodle', image: '/images/menu/5.webp' },
  { id: '6', name: 'មីគីឡូឆាសាច់គោ', price: 2.5, category: 'noodle', image: '/images/menu/6.webp' },
  { id: '7', name: 'បាយឆាខ្ញីសាច់គោ ឬសាច់ជ្រូក', price: 2.5, category: 'rice', image: '/images/menu/7.webp' },
  { id: '8', name: 'បាយឆាសណ្តែកកួរ', price: 2.5, category: 'rice', image: '/images/menu/8.webp' },
  { id: '9', name: 'បាយឆាខាត់ណា', price: 2.5, category: 'rice', image: '/images/menu/9.webp' },
  { id: '10', name: 'បាយខសាច់ជ្រូកស្ងួត', price: 2.5, category: 'rice', image: '/images/menu/10.webp' },
  { id: '11', name: 'បាយឡុកឡាក់សាច់គោ', price: 3.0, category: 'rice', image: '/images/menu/11.webp', featured: true },
  { id: '12', name: 'ស្ងោរជ្រក់សាច់គោ ឬសាច់មាន់', price: 3.0, category: 'soup', image: '/images/menu/12.webp' },
  { id: '13', name: 'បាយពងទាក្រឡុក', price: 2.0, category: 'rice', image: '/images/menu/13.webp' },
  { id: '14', name: 'បាយពងទាខ្ទឹមបារាំង', price: 2.0, category: 'rice', image: '/images/menu/14.webp' },
  { id: '15', name: 'បាយឆាប៉េងប៉ោះសាច់គោ', price: 2.5, category: 'rice', image: '/images/menu/15.webp' },
  { id: '16', name: 'បាយត្រីងៀត', price: 2.5, category: 'rice', image: '/images/menu/16.webp' },
  { id: '17', name: 'មីគោកហិល ពងទា ប៉ាតេ', price: 2.0, category: 'noodle', image: '/images/menu/17.webp' },
  { id: '18', name: 'មីគោកអត់ហិល ពងទា ប៉ាតេ', price: 2.0, category: 'noodle', image: '/images/menu/18.webp' },
  { id: '19', name: 'ប្រហិតឆឹងបន្លែ', price: 2.5, category: 'snacks', image: '/images/menu/19.webp' },
  { id: '20', name: 'ម្ជូរគ្រឿងសាច់គោ', price: 3.0, category: 'soup', image: '/images/menu/20.webp' },
  { id: '21', name: 'ផាត់កាផៅសាច់គោ ឬសាច់ជ្រូក', price: 2.5, category: 'rice', image: '/images/menu/21.webp' },
  { id: '22', name: 'ឆាត្រកួនសាច់គោ', price: 2.5, category: 'stir-fry', image: '/images/menu/22.webp' },
  { id: '23', name: 'ឆាសៀងសាច់ជ្រូក', price: 2.5, category: 'stir-fry', image: '/images/menu/23.webp' },

  // ---------------- DRINKS ----------------
  { id: '24', name: 'តែក្រហមក្រូចឆ្មា', price: 1.5, category: 'drinks', image: '/images/menu/24.webp' },
  { id: '25', name: 'សូកូឡាក្រឡុក', price: 1.5, category: 'drinks', image: '/images/menu/25.webp' },
  { id: '26', name: 'ស្រ្តបឺរីក្រឡុក', price: 1.5, category: 'drinks', image: '/images/menu/26.webp' },
  { id: '27', name: 'ផាសិនក្រូចឆ្មា', price: 1.5, category: 'drinks', image: '/images/menu/27.webp' },
  { id: '28', name: 'Koko តែតុដ', price: 1.5, category: 'drinks', image: '/images/menu/28.webp' },
  { id: '29', name: 'កាហ្វេដូងគ្រីម', price: 1.5, category: 'drinks', image: '/images/menu/29.webp' },
  { id: '30', name: 'ផាសិនគ្រីម', price: 1.5, category: 'drinks', image: '/images/menu/30.webp' },
  { id: '31', name: 'ម៉ាតឆាដូងក្រអូប', price: 1.5, category: 'drinks', image: '/images/menu/31.webp' },
  { id: '32', name: 'ម៉ាតឆាដូងគ្រីម', price: 1.5, category: 'drinks', image: '/images/menu/32.webp' },
  { id: '33', name: 'ម៉ាតឆាស្រ្តបឺរី', price: 1.5, category: 'drinks', image: '/images/menu/33.webp' },
  { id: '34', name: 'ម៉ាតឆាឡាតេ', price: 1.5, category: 'drinks', image: '/images/menu/34.webp' },
  { id: '35', name: 'ស្រ្តបឺរីសូដា', price: 1.5, category: 'drinks', image: '/images/menu/35.webp' },
  { id: '36', name: 'តែទឹកដោះគោ', price: 1.5, category: 'drinks', image: '/images/menu/36.webp' },
  { id: '37', name: 'សូកូឡាដោះគោ ដូងក្រអូប', price: 1.5, category: 'drinks', image: '/images/menu/37.webp' },
  { id: '38', name: 'អាយឡាតេ', price: 1.5, category: 'drinks', image: '/images/menu/38.webp' },
  { id: '39', name: 'ប្លូបឺរីសូដា', price: 1.5, category: 'drinks', image: '/images/menu/39.webp' },
  { id: '40', name: 'តែបៃតងក្រឡុក', price: 1.5, category: 'drinks', image: '/images/menu/40.webp' },
  { id: '41', name: 'ស្រ្តបឺរីដោះគោ', price: 1.5, category: 'drinks', image: '/images/menu/41.webp' },
  { id: '42', name: 'ដូងក្រអូប ក្រឡុក', price: 1.5, category: 'drinks', image: '/images/menu/42.webp' },
  { id: '43', name: 'តែមេអំបៅដោះគោ', price: 1.5, category: 'drinks', image: '/images/menu/43.webp' },
  { id: '44', name: 'សូកូឡាដោះគោ', price: 1.5, category: 'drinks', image: '/images/menu/44.webp' },
  { id: '45', name: 'ផាសិនដោះគោ', price: 1.5, category: 'drinks', image: '/images/menu/45.webp' },
  { id: '46', name: 'តែបៃតងដោះគោ', price: 1.5, category: 'drinks', image: '/images/menu/46.webp' },
  { id: '47', name: 'អាយ អាមេរិចកាណូ', price: 1.5, category: 'drinks', image: '/images/menu/47.webp' },
  { id: '48', name: 'KoKo កាហ្វេ', price: 1.5, category: 'drinks', image: '/images/menu/48.webp' },
];