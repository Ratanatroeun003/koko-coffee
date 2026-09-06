export const CATEGORIES = [
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
  {
    id: '1',
    name: 'បាយឆាសាច់គោ',
    price: 2.5,
    category: 'rice',
    image: '/images/menu/1.webp',
    featured: true,
  },
  {
    id: '2',
    name: 'បាយសាច់ជ្រូកពងទាចៀន',
    price: 2.5,
    category: 'rice',
    image: '/images/menu/pork-rice-fried-egg.jpg',
  },
  {
    id: '3',
    name: 'បាយឆាសាច់ក្រក',
    price: 2.5,
    category: 'rice',
    image: '/images/menu/sausage-fried-rice.jpg',
  },
  {
    id: '4',
    name: 'បាយឆាម្រះព្រៅសាច់គោ',
    price: 2.5,
    category: 'rice',
    image: '/images/menu/4.webp',
    featured: true,
  },
  {
    id: '5',
    name: 'មីឆាកញ្ចប់សាច់គោ',
    price: 2.5,
    category: 'noodle',
    image: '/images/menu/beef-instant-noodle-stir-fry.jpg',
  },
  {
    id: '6',
    name: 'មីគីឡូឆាសាច់គោ',
    price: 2.5,
    category: 'noodle',
    image: '/images/menu/beef-yellow-noodle-stir-fry.jpg',
  },
  {
    id: '7',
    name: 'បាយឆាខ្ញីសាច់គោ ឬសាច់ជ្រូក',
    price: 2.5,
    category: 'rice',
    image: '/images/menu/ginger-fried-rice.jpg',
  },
  {
    id: '8',
    name: 'បាយឆាសណ្តែកកួរ',
    price: 2.5,
    category: 'rice',
    image: '/images/menu/long-bean-fried-rice.jpg',
  },
  {
    id: '9',
    name: 'បាយឆាខាត់ណា',
    price: 2.5,
    category: 'rice',
    image: '/images/menu/kale-fried-rice.jpg',
  },
  {
    id: '10',
    name: 'បាយខសាច់ជ្រូកស្ងួត',
    price: 2.5,
    category: 'rice',
    image: '/images/menu/braised-pork-rice.jpg',
  },
  {
    id: '11',
    name: 'បាយឡុកឡាក់សាច់គោ',
    price: 3.0,
    category: 'rice',
    image: '/images/menu/beef-lok-lak-rice.jpg',
    featured: true,
  },
  {
    id: '12',
    name: 'ស្ងោរជ្រក់សាច់គោ ឬសាច់មាន់',
    price: 3.0,
    category: 'soup',
    image: '/images/menu/pickled-lime-soup.jpg',
  },
  {
    id: '13',
    name: 'បាយពងទាក្រឡុក',
    price: 2.0,
    category: 'rice',
    image: '/images/menu/scrambled-egg-rice.jpg',
  },
  {
    id: '14',
    name: 'បាយពងទាខ្ទឹមបារាំង',
    price: 2.0,
    category: 'rice',
    image: '/images/menu/onion-omelet-rice.jpg',
  },
  {
    id: '15',
    name: 'បាយឆាប៉េងប៉ោះសាច់គោ',
    price: 2.5,
    category: 'rice',
    image: '/images/menu/tomato-beef-fried-rice.jpg',
  },
  {
    id: '16',
    name: 'បាយត្រីងៀត',
    price: 2.5,
    category: 'rice',
    image: '/images/menu/dried-fish-rice.jpg',
  },
  {
    id: '17',
    name: 'មីគោកហិល ពងទា ប៉ាតេ',
    price: 2.0,
    category: 'noodle',
    image: '/images/menu/spicy-dry-noodle.jpg',
  },
  {
    id: '18',
    name: 'មីគោកអត់ហិល ពងទា ប៉ាតេ',
    price: 2.0,
    category: 'noodle',
    image: '/images/menu/non-spicy-dry-noodle.jpg',
  },
  {
    id: '19',
    name: 'ប្រហិតឆឹងបន្លែ',
    price: 2.5,
    category: 'snacks',
    image: '/images/menu/meatball-stew-veggies.jpg',
  },
  {
    id: '20',
    name: 'ម្ជូរគ្រឿងសាច់គោ',
    price: 3.0,
    category: 'soup',
    image: '/images/menu/beef-kroeung-soup.jpg',
  },
  {
    id: '21',
    name: 'ផាត់កាផៅសាច់គោ ឬសាច់ជ្រូក',
    price: 2.5,
    category: 'rice',
    image: '/images/menu/pad-krapow.jpg',
  },
  {
    id: '22',
    name: 'ឆាត្រកួនសាច់គោ',
    price: 2.5,
    category: 'stir-fry',
    image: '/images/menu/stir-fried-morning-glory-beef.jpg',
  },
  {
    id: '23',
    name: 'ឆាសៀងសាច់ជ្រូក',
    price: 2.5,
    category: 'stir-fry',
    image: '/images/menu/stir-fried-pork-bean-paste.jpg',
  },
];