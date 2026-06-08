"use client";

import React, { useState, useMemo } from 'react';
import CartItem from '../../components/CartItem';
import { ArrowLeft, ArrowRight, ShieldCheck, Tag, Trash2, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../../app/providers';

export default function CartPage() {
 const router = useRouter();
 const { cart, updateQuantity, removeFromCart, clearCart } = useAppContext();

 const [couponCode, setCouponCode] = useState('');
 const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
 const [couponError, setCouponError] = useState<string | null>(null);

 const subtotal = useMemo(() => {
 return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
 }, [cart]);

 const discountVal = useMemo(() => {
 if (appliedCoupon === 'QUIETLUXURY') {
 return Math.round(subtotal * 0.15);
 }
 return 0;
 }, [subtotal, appliedCoupon]);

 const shippingCost = useMemo(() => {
 if (subtotal === 0) return 0;
 if (subtotal >= 1500) return 0;
 return 150;
 }, [subtotal]);

 const taxCost = useMemo(() => {
 return Math.round((subtotal - discountVal) * 0.0825);
 }, [subtotal, discountVal]);

 const grandTotal = useMemo(() => {
 return subtotal - discountVal + shippingCost + taxCost;
 }, [subtotal, discountVal, shippingCost, taxCost]);

 const handleApplyCoupon = (e: React.FormEvent) => {
 e.preventDefault();
 const cleanCode = couponCode.trim().toUpperCase();
 if (cleanCode === 'QUIETLUXURY') {
 setAppliedCoupon(cleanCode);
 setCouponError(null);
 setCouponCode('');
 } else {
 setCouponError('Specified code is invalid or expired.');
 setCouponCode('');
 }
 };

 const handleRemoveCoupon = () => {
 setAppliedCoupon(null);
 };

 return (
 <div className="content-shell space-y-8 bg-[#F9F8F6] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
 
 <div className="space-y-4">
 <div className="flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#7E756B]">
 <span>Shop</span>
 <ArrowRight className="w-3 mx-1 text-center font-bold" />
 <span className="text-[#1A1A1A] font-semibold">Your Bag</span>
 </div>

 <h1 className="section-heading border-b border-[#EAE6DF] pb-5">
 Shopping Bag
 </h1>
 </div>

 {cart.length > 0 ? (
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
 
 <div className="lg:col-span-8 space-y-6">
 
 <div className="flex justify-between items-center pb-4 border-b border-[#EAE6DF]">
 <span className="text-xs font-mono tracking-widest text-[#7E756B] uppercase font-bold">
 {cart.reduce((s, i) => s + i.quantity, 0)} FURNITURE OBJECTS
 </span>
 <button
 onClick={clearCart}
 className="text-[10px] font-mono tracking-widest uppercase text-red-600 hover:text-red-800 transition-colors flex items-center gap-1.5 focus:outline-none"
 >
 <Trash2 className="w-3.5 h-3.5" />
 <span>Clear All</span>
 </button>
 </div>

 <div className="space-y-2 rounded-sm border border-[#EAE6DF]/60 bg-[#F6F4F0] p-4 sm:p-6">
 {cart.map((item) => (
 <CartItem
 key={item.id}
 item={item}
 onUpdateQuantity={updateQuantity}
 onRemove={removeFromCart}
 />
 ))}
 </div>

 <button
 onClick={() => router.push('/shop')}
 className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#7E756B] hover:text-[#1A1A1A] transition-colors focus:outline-none py-2"
 >
 <ArrowLeft className="w-4 h-4" />
 <span>Continue Examining Collection</span>
 </button>

 </div>

 <div className="space-y-6 rounded-sm border border-[#EAE6DF] bg-[#F3EFE9] p-5 sm:p-6 lg:col-span-4">
 
 <h3 className="font-serif text-lg tracking-widest uppercase text-[#1A1A1A] border-b border-[#EAE6DF] pb-3">
 BAG SUMMARY
 </h3>

 <div className="space-y-3.5 text-xs font-mono uppercase tracking-wider pb-6 border-b border-[#EAE6DF]">
 <div className="flex justify-between text-[#7E756B]">
 <span>Furniture Subtotal</span>
 <span className="text-[#1A1A1A]">${subtotal.toLocaleString()}</span>
 </div>

 {discountVal > 0 && (
 <div className="flex justify-between text-[#D4AF37]">
 <span>Member Selection (15%)</span>
 <span>-${discountVal.toLocaleString()}</span>
 </div>
 )}

 <div className="flex justify-between text-[#7E756B]">
 <span>White-Glove Shipping</span>
 {shippingCost === 0 ? (
 <span className="text-green-700 font-semibold uppercase text-[10px]">Complimentary</span>
 ) : (
 <span className="text-[#1A1A1A]">${shippingCost.toLocaleString()}</span>
 )}
 </div>

 <div className="flex justify-between text-[#7E756B]">
 <span>Estimated Luxury Tax</span>
 <span className="text-[#1A1A1A]">${taxCost.toLocaleString()}</span>
 </div>
 </div>

 <div className="flex justify-between items-baseline pt-2">
 <span className="font-serif text-sm tracking-widest text-[#1a1a1a] uppercase font-bold">Estimated Order Total</span>
 <span className="font-serif text-2xl tracking-widest text-[#1a1a1a] font-semibold">${grandTotal.toLocaleString()}</span>
 </div>

 <div className="space-y-3 pt-4 border-t border-[#EAE6DF]">
 <label htmlFor="coupon-code-input" className="block text-[10px] font-mono tracking-widest text-[#7E756B] uppercase">Deductible Coupon Code</label>
 
 {!appliedCoupon ? (
 <form onSubmit={handleApplyCoupon} className="flex border-b border-[#C2BCAE] pb-1.5 pt-0.5">
 <input
 id="coupon-code-input"
 type="text"
 value={couponCode}
 placeholder="e.g., QUIETLUXURY"
 onChange={(e) => setCouponCode(e.target.value)}
 className="bg-transparent border-none text-xs text-[#1A1A1A] tracking-wider placeholder-[#A89F91] focus:outline-none flex-grow font-mono uppercase"
 />
 <button type="submit" className="text-xs font-mono text-[#1A1A1A] hover:text-[#7E756B] uppercase tracking-widest font-semibold p-1">
 Apply
 </button>
 </form>
 ) : (
 <div className="flex items-center justify-between bg-white px-3 py-2 border border-green-200 text-xs rounded-sm font-mono text-green-700 uppercase">
 <div className="flex items-center gap-1.5">
 <Tag className="w-3.5 h-3.5" />
 <span>"{appliedCoupon}" Applied (15% off)</span>
 </div>
 <button onClick={handleRemoveCoupon} className="text-[#7E756B] hover:text-red-700 uppercase font-semibold text-[10px] focus:outline-none">
 Remove
 </button>
 </div>
 )}

 {couponError && (
 <span className="text-[10px] font-mono text-red-600 uppercase block">{couponError}</span>
 )}

 <span className="text-[9px] font-mono text-[#A89F91] uppercase block leading-relaxed">
 *Tip: Try coupon code <span className="font-bold text-[#1A1A1A]">QUIETLUXURY</span> to claim your 15% first-order society reward.
 </span>
 </div>

 <button
 onClick={() => router.push('/checkout')}
 className="btn-primary w-full py-4"
 >
 Secure Checkout
 </button>

 <div className="flex items-center gap-2.5 justify-center py-2 text-[#A89F91] text-[10px] font-mono uppercase tracking-widest border-t border-[#EAE6DF]/60 pt-4">
 <ShieldCheck className="w-4 h-4 text-[#C2BCAE]" />
 <span>AES-256 Bit Secured Checkout Encryptions</span>
 </div>

 </div>

 </div>
 ) : (
 <div className="py-24 border border-[#EAE6DF] border-dashed text-center space-y-6 rounded-sm max-w-lg mx-auto">
 <span className="font-serif text-lg text-[#1A1A1A] font-light block">Your interior canvas bag is empty.</span>
 <p className="text-xs text-[#7E756B] font-sans leading-relaxed">
 There are currently no hand-crafted luxury pieces added into your shopping cart. Browse our collections or Category Rooms directory to explore ideas.
 </p>
 <button
 onClick={() => router.push('/shop')}
 className="btn-primary px-6 py-3.5"
 >
 Browse Collections
 </button>
 </div>
 )}

 </div>
 );
}
