"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem, Product, Order } from "../types";

interface User {
  name: string;
  email: string;
}

interface AppContextType {
  cart: CartItem[];
  addToCart: (product: Product, selectedColor: { name: string; hex: string }, selectedSize?: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, qty: number) => void;
  clearCart: () => void;
  cartDrawerOpen: boolean;
  setCartDrawerOpen: (open: boolean) => void;
  orders: Order[];
  placeOrder: (order: Order) => void;
  currentUser: User | null;
  login: (user: User) => void;
  logout: () => void;
  bannerMsg: string | null;
  triggerNotification: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProviders({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [bannerMsg, setBannerMsg] = useState<string | null>(null);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("luxenest_cart");
      if (savedCart) setCart(JSON.parse(savedCart));
      
      const savedOrders = localStorage.getItem("luxenest_orders");
      if (savedOrders) setOrders(JSON.parse(savedOrders));
      
      const savedUser = localStorage.getItem("luxenest_user");
      if (savedUser) setCurrentUser(JSON.parse(savedUser));
    } catch {}
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem("luxenest_cart", JSON.stringify(cart));
  }, [cart, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem("luxenest_orders", JSON.stringify(orders));
  }, [orders, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;
    if (currentUser) {
      localStorage.setItem("luxenest_user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("luxenest_user");
    }
  }, [currentUser, isInitialized]);

  const triggerNotification = (msg: string) => {
    setBannerMsg(msg);
    setTimeout(() => setBannerMsg(null), 4000);
  };

  const addToCart = (product: Product, selectedColor: { name: string; hex: string }, selectedSize?: string) => {
    const sizeSuffix = selectedSize ? `-${selectedSize.replace(/\s+/g, '').toLowerCase()}` : '';
    const variantId = `${product.id}-${selectedColor.name.replace(/\s+/g, '').toLowerCase()}${sizeSuffix}`;

    setCart((prev) => {
      const existingIdx = prev.findIndex((item) => item.id === variantId);
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx] = {
          ...next[existingIdx],
          quantity: next[existingIdx].quantity + 1,
        };
        return next;
      } else {
        return [
          ...prev,
          {
            id: variantId,
            product,
            quantity: 1,
            selectedColor,
            selectedSize,
          },
        ];
      }
    });

    triggerNotification(`Added ${product.name} (${selectedColor.name}) to your shopping bag.`);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, qty: number) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: qty };
        }
        return item;
      });
    });
  };

  const clearCart = () => setCart([]);

  const placeOrder = (order: Order) => {
    setOrders((prev) => [order, ...prev]);
    setCart([]);
    triggerNotification(`Placing Order ${order.id} with white-glove logistics...`);
  };

  const login = (user: User) => {
    setCurrentUser(user);
    triggerNotification(`Signed in successfully as ${user.name}`);
  };

  const logout = () => {
    setCurrentUser(null);
    triggerNotification('Logged out successfully.');
  };

  return (
    <AppContext.Provider
      value={{
        cart, addToCart, removeFromCart, updateQuantity, clearCart,
        cartDrawerOpen, setCartDrawerOpen,
        orders, placeOrder,
        currentUser, login, logout,
        bannerMsg, triggerNotification
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProviders");
  return context;
}
