"use client";

import { AnimatePresence, motion } from "motion/react";
import Header from "./Header";
import Footer from "./Footer";
import CartItem from "./CartItem";
import { useAppContext } from "../app/providers";
import { ShoppingBag, X, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
 const {
 cart,
 cartDrawerOpen,
 setCartDrawerOpen,
 updateQuantity,
 removeFromCart,
 bannerMsg,
 currentUser,
 } = useAppContext();
 
 const pathname = usePathname();

 const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

 return (
 <>
 {bannerMsg && (
 <div 
 className="fixed bottom-4 left-4 right-4 z-[60] flex max-w-sm items-center gap-3 rounded-sm border border-[#C2BCAE]/40 bg-[#1A1A1A] px-5 py-3.5 text-[#F9F8F6] shadow-lg sm:bottom-6 sm:left-auto sm:right-6"
 id="global-toast-notification"
 >
 <Sparkles className="w-5 h-5 text-[#D4AF37] flex-shrink-0 animate-pulse" />
 <span className="text-xs font-mono tracking-wider uppercase leading-tight">{bannerMsg}</span>
 </div>
 )}

 <Header />

 <main className="relative flex-grow overflow-hidden">
 {children}
 </main>

 <Footer />

 <AnimatePresence>
 {cartDrawerOpen && (
 <motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.35 }}
 className="fixed inset-0 z-50 flex justify-end"
 onClick={() => setCartDrawerOpen(false)}
 id="cart-drawer-overlay"
 >
 <div className="absolute inset-0 bg-[#1A1A1A]/50 backdrop-blur-sm" />

 <motion.div 
 initial={{ x: "100%" }}
 animate={{ x: 0 }}
 exit={{ x: "100%" }}
 transition={{ type: "spring", damping: 28, stiffness: 220 }}
 className="relative flex h-full w-full max-w-md flex-col justify-between border-l border-[#EAE6DF] bg-[#F9F8F6] p-5 shadow-2xl sm:p-6"
 onClick={(e) => e.stopPropagation()}
 >
 <div className="flex justify-between items-center pb-4 border-b border-[#EAE6DF] ">
 <div className="flex items-center gap-2">
 <ShoppingBag className="w-5 h-5 text-[#7E756B]" />
 <span className="text-xs font-mono tracking-wider uppercase font-bold text-[#1A1A1A]">
 Your Bag ({cart.reduce((s, i) => s + i.quantity, 0)})
 </span>
 </div>
 <button
 id="cart-drawer-close"
 onClick={() => setCartDrawerOpen(false)}
 className="rounded-sm p-2 text-[#7E756B] transition-colors hover:bg-[#F3EFE9] hover:text-[#1A1A1A]"
 aria-label="Close bag"
 >
 <X className="w-6 h-6" />
 </button>
 </div>

 <div className="flex-grow overflow-y-auto py-4">
 {cart.length > 0 ? (
 <div className="divide-y divide-[#EAE6DF]/60">
 {cart.map((item) => (
 <CartItem
 key={item.id}
 item={item}
 onUpdateQuantity={updateQuantity}
 onRemove={removeFromCart}
 />
 ))}
 </div>
 ) : (
 <div className="py-24 text-center space-y-4">
 <span className="font-serif text-base text-[#7E756B] italic">Bag is currently empty.</span>
 <p className="text-xs text-[#A89F91] font-sans">Browse our organic furniture collection to select heirloom pieces.</p>
 <Link
 href="/shop"
 onClick={() => setCartDrawerOpen(false)}
 className="btn-primary px-5 py-2.5 text-[10px]"
 >
 Examine Catalog
 </Link>
 </div>
 )}
 </div>

 {cart.length > 0 && (
 <div className="border-t border-[#EAE6DF] pt-5 space-y-4 ">
 <div className="flex justify-between items-baseline">
 <span className="text-xs font-mono uppercase text-[#7E756B] tracking-wider">Subtotal:</span>
 <span className="font-serif text-xl tracking-widest font-semibold text-[#1A1A1A]">
 ${cartSubtotal.toLocaleString()}
 </span>
 </div>
 
 <p className="text-[10px] text-[#A89F91] font-mono uppercase tracking-wide leading-relaxed">
 {cartSubtotal >= 1500 
 ? 'Complimentary White-Glove In-room Logistics Activated' 
 : '*Logistics: Premium carrier shipping computed upon secure checkout.'}
 </p>

 <div className="grid grid-cols-2 gap-3 pt-2">
 <Link
 href="/cart"
 onClick={() => setCartDrawerOpen(false)}
 className="btn-secondary w-full py-3.5"
 >
 View Bag
 </Link>
 <Link
 href="/checkout"
 onClick={() => setCartDrawerOpen(false)}
 className="btn-primary w-full py-3.5"
 >
 Checkout
 </Link>
 </div>
 </div>
 )}
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 </>
 );
}
