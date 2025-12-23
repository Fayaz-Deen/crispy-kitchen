export interface MenuItem {
  name: string;
  price: number;
  variants?: { name: string; price: number }[];
  description?: string;
  isPopular?: boolean;
  isSpicy?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'french-fries',
    name: 'French Fries',
    items: [
      { name: 'Classic French Fries', price: 100 },
      { name: 'Periperi French Fries', price: 120, isSpicy: true },
      { name: 'Cheesy French Fries', price: 160, isPopular: true },
    ],
  },
  {
    id: 'popcorn',
    name: 'Popcorn',
    items: [
      { name: 'Classic Chicken Popcorn', price: 170, isPopular: true },
      { name: 'Korean Chicken Popcorn', price: 190 },
      { name: 'Sweetchilli Chicken Popcorn', price: 190 },
      { name: 'Nashville Chicken Popcorn', price: 200, isSpicy: true },
    ],
  },
  {
    id: 'loaded-fries',
    name: 'Loaded Fries',
    items: [
      { name: 'Classic Loaded Fries', price: 240 },
      { name: 'Korean Loaded Fries', price: 270 },
      { name: 'Sweetchilli Loaded Fries', price: 270 },
      { name: 'Nashville Loaded Fries', price: 280, isSpicy: true },
    ],
  },
  {
    id: 'wings',
    name: 'Wings',
    items: [
      {
        name: 'Classic Wings',
        price: 100,
        variants: [
          { name: '3 pcs', price: 100 },
          { name: '5 pcs', price: 150 },
        ],
      },
      {
        name: 'Korean Wings',
        price: 130,
        variants: [
          { name: '3 pcs', price: 130 },
          { name: '5 pcs', price: 180 },
        ],
      },
      {
        name: 'Sweetchilli Wings',
        price: 130,
        variants: [
          { name: '3 pcs', price: 130 },
          { name: '5 pcs', price: 180 },
        ],
      },
      {
        name: 'Nashville Wings',
        price: 140,
        isSpicy: true,
        isPopular: true,
        variants: [
          { name: '3 pcs', price: 140 },
          { name: '5 pcs', price: 190 },
        ],
      },
    ],
  },
  {
    id: 'strips',
    name: 'Strips',
    items: [
      {
        name: 'Classic Chicken Strips',
        price: 160,
        variants: [
          { name: '3 pcs', price: 160 },
          { name: '5 pcs', price: 230 },
        ],
      },
      {
        name: 'Korean Chicken Strips',
        price: 190,
        variants: [
          { name: '3 pcs', price: 190 },
          { name: '5 pcs', price: 260 },
        ],
      },
      {
        name: 'Sweetchilli Chicken Strips',
        price: 190,
        variants: [
          { name: '3 pcs', price: 190 },
          { name: '5 pcs', price: 260 },
        ],
      },
      {
        name: 'Nashville Chicken Strips',
        price: 160,
        isSpicy: true,
        variants: [
          { name: '3 pcs', price: 160 },
          { name: '5 pcs', price: 270 },
        ],
      },
    ],
  },
  {
    id: 'wraps',
    name: 'Wraps',
    items: [
      { name: 'Classic Chicken Wrap', price: 130 },
      { name: 'Korean Chicken Wrap', price: 160 },
      { name: 'Sweetchilli Chicken Wrap', price: 160 },
      { name: 'Nashville Chicken Wrap', price: 170, isSpicy: true },
    ],
  },
  {
    id: 'burgers',
    name: 'Burgers',
    items: [
      { name: 'Classic Chicken Burger', price: 140 },
      { name: 'Korean Burger', price: 180, isPopular: true },
      { name: 'Nashville Burger', price: 200, isSpicy: true },
    ],
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    items: [
      { name: 'Veg Sandwich', price: 70 },
      { name: 'Corn Cheese Toast', price: 80 },
      { name: 'Chilli Cheese Toast', price: 80, isSpicy: true },
      { name: 'Paneer Tikka Sandwich', price: 120 },
      { name: 'Chicken Sandwich', price: 150 },
      { name: 'Chicken Club Sandwich', price: 130 },
    ],
  },
  {
    id: 'fried-chicken',
    name: 'Fried Chicken',
    items: [
      { name: 'Fried Chicken 1 Piece', price: 90 },
      { name: 'Fried Chicken 2 Piece', price: 170 },
      { name: 'Fried Chicken 4 Piece', price: 299, isPopular: true },
      { name: 'Fried Chicken 9 Piece', price: 599 },
      { name: 'Fried Chicken 12 Piece', price: 799 },
    ],
  },
  {
    id: 'mojitos',
    name: "Mojito's",
    items: [
      { name: 'Mint Mojito', price: 100 },
      { name: 'Blue Curacao Mojito', price: 100 },
      { name: 'Strawberry Mojito', price: 100, isPopular: true },
      { name: 'Blueberry Mojito', price: 100 },
      { name: 'Watermelon Mojito', price: 100 },
      { name: 'Peach Mojito', price: 100 },
      { name: 'Passion Mojito', price: 100 },
      { name: 'Banana Mojito', price: 100 },
      { name: 'Lemon Iced Mojito', price: 100 },
    ],
  },
  {
    id: 'shakes',
    name: "Shake's",
    items: [
      {
        name: 'Vanilla Shake',
        price: 120,
        variants: [
          { name: 'Milkshake', price: 120 },
          { name: 'Thickshake', price: 180 },
        ],
      },
      {
        name: 'Strawberry Shake',
        price: 120,
        isPopular: true,
        variants: [
          { name: 'Milkshake', price: 120 },
          { name: 'Thickshake', price: 180 },
        ],
      },
      {
        name: 'Blueberry Shake',
        price: 120,
        variants: [
          { name: 'Milkshake', price: 120 },
          { name: 'Thickshake', price: 180 },
        ],
      },
      {
        name: 'Chocolate Shake',
        price: 120,
        isPopular: true,
        variants: [
          { name: 'Milkshake', price: 120 },
          { name: 'Thickshake', price: 180 },
        ],
      },
      {
        name: 'Mango Shake',
        price: 120,
        variants: [
          { name: 'Milkshake', price: 120 },
          { name: 'Thickshake', price: 180 },
        ],
      },
      {
        name: 'Caramel Shake',
        price: 120,
        variants: [
          { name: 'Milkshake', price: 120 },
          { name: 'Thickshake', price: 180 },
        ],
      },
    ],
  },
  {
    id: 'choco-shakes',
    name: "Choco Shake's",
    items: [
      { name: 'Kitkat Choco Shake', price: 240, isPopular: true },
      { name: 'Ferraro Rocher Choco Shake', price: 240 },
      { name: 'Snickers Choco Shake', price: 240 },
      { name: 'Bischoff Choco Shake', price: 240 },
    ],
  },
];

export const signatureDishes = [
  {
    id: 'fried-chicken',
    name: 'Fried Chicken',
    tagline: 'Golden & Crispy',
    description: 'Our signature fried chicken - crispy on the outside, juicy on the inside',
    price: 90,
    image: '/images/fried-chicken.jpg',
  },
  {
    id: 'wings',
    name: 'Wings',
    tagline: 'Saucy & Bold',
    description: 'Tossed in your choice of Classic, Korean, Sweetchilli, or Nashville',
    price: 100,
    image: '/images/wings.jpg',
  },
  {
    id: 'popcorn',
    name: 'Chicken Popcorn',
    tagline: 'Bite-Sized Crunch',
    description: 'Perfectly seasoned bite-sized chicken pieces',
    price: 170,
    image: '/images/popcorn.jpg',
  },
  {
    id: 'loaded-fries',
    name: 'Loaded Fries',
    tagline: 'Fully Loaded',
    description: 'Crispy fries topped with cheese, sauces, and chicken',
    price: 240,
    image: '/images/loaded-fries.jpg',
  },
];

export const contactInfo = {
  address: 'No.6, Food Bazaar, Thiruparankundram Road, Palanganatham, (Near Jeevan Honda), Madurai - 03',
  phone: '+91 95973 76713',
  whatsapp: '919597376713',
  instagram: 'crispykitchen.madurai',
  mapUrl: 'https://maps.google.com/?q=Crispy+Kitchen+Madurai',
  openingHours: '11:00 AM - 11:00 PM',
};

export const flavorProfiles = [
  {
    name: 'Classic',
    description: 'Original seasoning with herbs and spices',
    color: '#D4A574',
    icon: 'star',
  },
  {
    name: 'Korean',
    description: 'Sweet and savory gochujang glaze',
    color: '#C41E24',
    icon: 'flame',
  },
  {
    name: 'Sweet Chilli',
    description: 'Perfect balance of sweet and spicy',
    color: '#F97316',
    icon: 'sparkles',
  },
  {
    name: 'Nashville',
    description: 'Hot and fiery cayenne kick',
    color: '#DC2626',
    icon: 'fire',
  },
];
