// 📁 config/menu.ts

export const CATEGORIES = [
  { id: 'drinks', name: 'កាហ្វេ/ភេសជ្ជៈ', nameEn: 'Drinks' },
  { id: 'rice', name: 'បាយ', nameEn: 'Rice' },
  { id: 'noodle', name: 'មី', nameEn: 'Noodles' },
  { id: 'soup', name: 'សម្ល/ស្ងោរ', nameEn: 'Soups' },
  { id: 'stir-fry', name: 'ឆា', nameEn: 'Stir-fry' },
  { id: 'snacks', name: 'អាហារសម្រន់', nameEn: 'Snacks' },
  { id: 'toppings', name: 'បន្ថែម', nameEn: 'Toppings' },
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
  // FOOD ITEMS
  { id: '1', name: 'បាយឆាសាច់គោ', price: 2.5, category: 'rice', image: '/images/menu/1.webp', featured: true },
  { id: '2', name: 'បាយសាច់ជ្រូកពងទាចៀន', price: 2.5, category: 'rice', image: '/images/menu/2.webp' },
  { id: '3', name: 'បាយឆាសាច់ក្រក', price: 2.5, category: 'rice', image: '/images/menu/3.webp' },
  { id: '4', name: 'បាយឆាម្រះព្រៅសាច់គោ', price: 2.5, category: 'rice', image: '/images/menu/4.webp', featured: true },
  { id: '5', name: 'មីកញ្ចប់ឆាសាច់គោ', price: 2.5, category: 'noodle', image: '/images/menu/5.webp' },
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
  { id: '17', name: 'មីគោកហិល ពងទា និងប៉ាតេ', price: 2.0, category: 'noodle', image: '/images/menu/17.webp' },
  { id: '18', name: 'មីគោកមិនហិល ពងទា និងប៉ាតេ', price: 2.0, category: 'noodle', image: '/images/menu/18.webp' },
  { id: '19', name: 'ប្រហិតឆឹងបន្លែ', price: 2.5, category: 'snacks', image: '/images/menu/19.webp' },
  { id: '20', name: 'ម្ជូរគ្រឿងសាច់គោ', price: 3.0, category: 'soup', image: '/images/menu/20.webp' },
  { id: '21', name: 'ផាត់កាផៅសាច់គោ ឬសាច់ជ្រូក', price: 2.5, category: 'rice', image: '/images/menu/21.webp' },
  { id: '22', name: 'ឆាត្រកួនសាច់គោ', price: 2.5, category: 'stir-fry', image: '/images/menu/22.webp' },
  { id: '23', name: 'ឆាសៀងសាច់ជ្រូក', price: 2.5, category: 'stir-fry', image: '/images/menu/23.webp' },
  

  // noddle
  { id: '82', name: 'គុយទាវសាច់គោ', price: 2.5, category: 'noodle', image: '/images/menu/82.webp' },
  { id: '83', name: 'គុយទាវសាច់ជ្រូក', price: 2.5, category: 'noodle', image: '/images/menu/83.webp' },
  { id: '84', name: 'គុយទាវប្រហិតសាច់គោ', price: 2.5, category: 'noodle', image: '/images/menu/84.webp' },
  { id: '85', name: 'គុយទាវប្រហិតសាច់ត្រី', price: 2.5, category: 'noodle', image: '/images/menu/85.webp' },
  { id: '86', name: 'គុយទាវសាច់ជ្រូកចិញ្រ្ចាំ', price: 2.5, category: 'noodle', image: '/images/menu/86.webp' },


  // DRINKS


  // ice 
  { id: '38', name: 'អាយឡាតេ', price: 1.75, category: 'drinks', image: '/images/menu/38.webp' },
  { id: '49', name: 'អាយកាពូឈីណូ', price: 1.75, category: 'drinks', image: '/images/menu/49.webp' },
  { id: '50', name: 'អាយម៉ូកា', price: 1.75, category: 'drinks', image: '/images/menu/50.webp' },
  { id: '47', name: 'អាយអាមេរិចខេណូ', price: 1.25, category: 'drinks', image: '/images/menu/47.webp' },
  
 // cream
 { id: '64', name: 'កាហ្វេដូងគ្រីម', price: 1.75, category: 'drinks', image: '/images/menu/64.webp' },
 { id: '65', name: 'តែបៃតងដូងគ្រីម', price: 1.75, category: 'drinks', image: '/images/menu/65.webp' },
 { id: '55', name: 'សូកូឡាដូងគ្រីម', price: 1.75, category: 'drinks', image: '/images/menu/55.webp' },
 //hot
  { id: '51', name: 'អាមេរិចកាណូក្តៅ', price: 1.5, category: 'drinks', image: '/images/menu/51.webp' },
  { id: '52', name: 'កាពូឈីណូក្តៅ', price: 1.5, category: 'drinks', image: '/images/menu/52.webp' },
  { id: '53', name: 'ម៉ូកាក្តៅ', price: 1.5, category: 'drinks', image: '/images/menu/53.webp' },
  { id: '54', name: 'ឡាតេក្តៅ', price: 1.5, category: 'drinks', image: '/images/menu/54.webp' },
  //tea
  { id: '24', name: 'តែក្រហមក្រូចឆ្មា', price: 1.25, category: 'drinks', image: '/images/menu/24.webp' },
  { id: '56', name: 'តែបៃតងក្រូចឆ្មា', price: 1.25, category: 'drinks', image: '/images/menu/56.webp' },
  { id: '57', name: 'តែផាសិនក្រូចឆ្មា', price: 1.25, category: 'drinks', image: '/images/menu/57.webp' },
  { id: '58', name: 'តែទឹកឃ្មុំក្រូចឆ្មា', price: 1.25, category: 'drinks', image: '/images/menu/58.webp' },
  { id: '59', name: 'តែផាសិនទឹកឃ្មុំក្រូចឆ្មា', price: 1.25, category: 'drinks', image: '/images/menu/59.webp' },
  //milk
   { id: '60', name: 'កាហ្វេហ្វីនទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/menu/60.webp' },
  { id: '46', name: 'តែបៃតងទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/menu/46.webp' },
   { id: '43', name: 'តែមេអំបៅទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/menu/43.webp' },
   { id: '44', name: 'សូកូឡាទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/menu/44.webp' }, 
   { id: '61', name: 'អូវ៉ាន់ទីនទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/menu/61.webp' },
   { id: '80', name: 'ប្រោនសូហ្គឺទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/menu/80.webp' },
   { id: '36', name: 'តែទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/menu/36.webp' },
   { id: '41', name: 'ស្ត្របឺរីទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/menu/41.webp' },
   { id: '81', name: 'ផាសិនទឹកដោះគោ', price: 1.25, category: 'drinks', image: '/images/menu/81.webp' },
   //soda
   { id: '63', name: 'ផាសិនសូដា', price: 1.25, category: 'drinks', image: '/images/menu/63.webp' },
   { id: '39', name: 'ប្លូបឺរីសូដា', price: 1.25, category: 'drinks', image: '/images/menu/39.webp' },
  { id: '35', name: 'ស្ត្របឺរីសូដា', price: 1.25, category: 'drinks', image: '/images/menu/35.webp' },
  //coconut
  { id: '29', name: 'កាហ្វេទឹកដោះគោដូងក្រអូប', price: 1.5, category: 'drinks', image: '/images/menu/29.webp' },
  { id: '69', name: 'តែបៃតងទឹកដោះគោដូងក្រអូប', price: 1.5, category: 'drinks', image: '/images/menu/69.webp' },
  { id: '66', name: 'តែមេអំបៅទឹកដោះគោដូងក្រអូប', price: 1.5, category: 'drinks', image: '/images/menu/66.webp' },
  { id: '37', name: 'សូកូឡាទឹកដោះគោដូងក្រអូប', price: 1.5, category: 'drinks', image: '/images/menu/37.webp' },
  { id: '68', name: 'អូវ៉ានទីនទឹកដោះគោដូងក្រអូប', price: 1.5, category: 'drinks', image: '/images/menu/68.webp' },
  //frappe
   { id: '40', name: 'តែបៃតងក្រឡុក', price: 1.75, category: 'drinks', image: '/images/menu/40.webp' },
   { id: '25', name: 'សូកូឡាក្រឡុក', price: 1.75, category: 'drinks', image: '/images/menu/25.webp' },
   { id: '26', name: 'ស្ត្របឺរីក្រឡុក', price: 1.75, category: 'drinks', image: '/images/menu/26.webp' },
   { id: '42', name: 'ដូងក្រអូបក្រឡុក', price: 1.75, category: 'drinks', image: '/images/menu/42.webp' },
  //featured
  { id: '48', name: 'KoKo កាហ្វេ', price: 1.75, category: 'drinks', image: '/images/menu/48.webp',featured:true },
  { id: '28', name: 'Koko កាហ្វេគ្រីមអំបិល', price: 2.00, category: 'drinks', image: '/images/menu/28.webp',featured:true },
  { id: '32', name: 'ម៉ាតឆាដូងគ្រីម', price: 1.75, category: 'drinks', image: '/images/menu/32.webp',featured:true },
  { id: '30', name: 'ផាសិនគ្រីម', price: 1.75, category: 'drinks', image: '/images/menu/30.webp',featured:true },
  { id: '33', name: 'ម៉ាតឆាស្ត្របឺរីទឹកដោះគោ', price: 1.75, category: 'drinks', image: '/images/menu/33.webp',featured:true },
  { id: '34', name: 'ម៉ាតឆាឡាតេ', price: 1.5, category: 'drinks', image: '/images/menu/34.webp',featured:true },
  { id: '45', name: 'ម៉ាតឆាដូងក្រអូប', price: 1.75, category: 'drinks', image: '/images/menu/45.webp',featured:true },
  { id: '62', name: 'koko តែគុជ', price: 1.5, category: 'drinks', image: '/images/menu/62.webp',featured:true },
  // TOPPINGS
  { id: '73', name: 'គុជស្ងោរ', price: 0.25, category: 'toppings', image: '/images/menu/73.webp' },
  { id: '74', name: 'ឆៅគួយ', price: 0.25, category: 'toppings', image: '/images/menu/74.webp' },
  { id: '75', name: 'ចាហួយឈូស', price: 0.25, category: 'toppings', image: '/images/menu/75.webp' },
  { id: '76', name: 'ចាហួយប៉េស', price: 0.25, category: 'toppings', image: '/images/menu/76.webp' },
  { id: '77', name: 'ចាហួយប្រោន', price: 0.25, category: 'toppings', image: '/images/menu/77.webp' },
  { id: '78', name: 'ចាហួយស្រ្តបឺរី', price: 0.25, category: 'toppings', image: '/images/menu/78.webp' },
  { id: '79', name: 'គ្រីម', price: 0.5, category: 'toppings', image: '/images/menu/79.webp' },
];