import { IoWoman, IoMan, IoLogoElectron } from "react-icons/io5";

const categories = [
  {
    title: "Woman’s Fashion",
    icon: IoWoman,
    subMenu: ["Dresses", "Tops & T-Shirts", "Kurtis & Ethnic Wear", "Sarees"],
  },
  {
    title: "Men’s Fashion",
    icon: IoMan,
    subMenu: [
      "men Dresses",
      "Tops & T-Shirts",
      "Kurtis & Ethnic Wear",
      "Sarees",
    ],
  },
  {
    title: "Electronics",
    icon: IoMan,
  },
  {
    title: "Home & Lifestyle",
    icon: IoMan,
  },
  {
    title: "Medicine",
    icon: IoMan,
  },
  {
    title: "Sports & Outdoor",
    icon: IoMan,
  },
  {
    title: "Baby’s & Toys",
    icon: IoMan,
  },
  {
    title: "Groceries & Pets",
    icon: IoMan,
  },
  {
    title: "Health & Beauty",
    icon: IoMan,
  },
];

const slides = [
  {
    subtitle: "CAPPELLINI",
    title: "Wooden Lounge Chairs.",
    description: "Timeless curves, handcrafted wood and museum-level comfort.",
    price: "$999.00",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    subtitle: "MINIMAL LINE",
    title: "Nordic Dining Set.",
    description: "Bright oak tones designed for everyday family moments.",
    price: "$799.00",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    subtitle: "URBAN STUDIO",
    title: "Accent Sofa Collection.",
    description: "Soft textures with clean silhouettes for modern interiors.",
    price: "$649.00",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
  },
];

export { categories, slides };
