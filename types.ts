/**
 * LuxeNest Type Definitions
 */

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: 'sofas' | 'tables' | 'chairs' | 'lighting' | 'accents' | 'storage';
  images: string[];
  colors: { name: string; hex: string }[];
  materials: string[];
  dimensions: { width: string; height: string; depth: string; weight?: string };
  inStock: boolean;
  description: string;
  descriptionLong: string[];
  details: string[];
  assembly: string[];
  isFeatured?: boolean;
  isNewArrival?: boolean;
}

export interface CartItem {
  id: string; // combination of product ID and color
  product: Product;
  quantity: number;
  selectedColor: { name: string; hex: string };
  selectedSize?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  memberSince: string;
  addresses: {
    id: string;
    label: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    isDefault?: boolean;
  }[];
  wishlist: string[]; // Product IDs
}

export interface Order {
  id: string;
  date: string;
  items: {
    productId: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
    selectedColor: string;
  }[];
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  status: 'processing' | 'shipped' | 'delivered' | 'returned';
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  deliveryMethod: string;
}

export type PageType = 
  | 'home' 
  | 'shop' 
  | 'category' 
  | 'product-details' 
  | 'cart' 
  | 'checkout' 
  | 'account' 
  | 'auth';
