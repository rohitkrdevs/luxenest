"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../app/providers';

interface ProductCardProps {
 product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
 const router = useRouter();
 const { addToCart } = useAppContext();
 const [selectedColorIdx, setSelectedColorIdx] = useState(0);
 const selectedColor = product.colors[selectedColorIdx] || product.colors[0];

 const isSale = product.originalPrice && product.originalPrice > product.price;

 const handleQuickAdd = (e: React.MouseEvent) => {
 e.stopPropagation();
 if (!product.inStock) return;
 addToCart(product, selectedColor);
 };

 const handleSelectProduct = () => {
 router.push(`/product/${product.id}`);
 };

 return (
 <motion.div
 onClick={handleSelectProduct}
 className="group relative flex h-full cursor-pointer flex-col justify-between rounded-sm border border-[#EAE6DF]/60 bg-white/35 p-3.5 transition-all duration-300 ease-out hover:border-[#D8D2C8] hover:bg-white hover:shadow-[0_18px_50px_rgba(26,26,26,0.07)]"
 whileHover={{ y: -8 }}
 initial={{ opacity: 0, y: 15 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
 >
 <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-sm bg-[#F1EFEA]">
 
 <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
 {product.isNewArrival && (
 <span className="bg-[#1A1A1A] text-[#F9F8F6] text-[8.5px] font-mono tracking-[0.25em] font-semibold uppercase px-2.5 py-1 rounded-xs shadow-xs">
 NEW ARRIVAL
 </span>
 )}
 {isSale && (
 <span className="bg-[#D4AF37] text-[#1A1A1A] text-[8.5px] font-mono tracking-[0.25em] font-bold uppercase px-2.5 py-1 rounded-xs shadow-xs">
 SOCIETY PRICING
 </span>
 )}
 {!product.inStock && (
 <span className="bg-[#A89F91] text-[#F9F8F6] text-[8.5px] font-mono tracking-[0.25em] font-semibold uppercase px-2.5 py-1 rounded-xs shadow-xs">
 RESERVE ON-DEMAND
 </span>
 )}
 </div>

 <motion.img
 src={product.images[0]}
 alt={product.name}
 className="w-full h-full object-cover"
 whileHover={{ scale: 1.05 }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 loading="lazy"
 />

 <div className="absolute inset-0 flex items-end justify-center gap-3 bg-[#1A1A1A]/12 p-4 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
 
 <motion.button
 onClick={handleQuickAdd}
 disabled={!product.inStock}
 className={`flex items-center gap-2 rounded-sm px-4 py-2.5 font-sans text-[10.5px] font-medium uppercase tracking-[0.16em] shadow-md transition-all ${
 product.inStock
 ? 'bg-[#F9F8F6] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F9F8F6] active:translate-y-0.5'
 : 'bg-[#EAE6DF]/85 text-[#7E756B] cursor-not-allowed'
 }`}
 initial={{ y: 10, opacity: 0 }}
 whileHover={{ scale: 1.02 }}
 whileTap={{ scale: 0.98 }}
 animate={typeof window !== 'undefined' ? { y: 0, opacity: 1 } : {}}
 style={{ originY: 1 }}
 >
 <ShoppingBag className="w-4 h-4" />
 <span>{product.inStock ? 'Quick Add' : 'Reserve'}</span>
 </motion.button>
 
 <motion.button
 onClick={(e) => {
 e.stopPropagation();
 handleSelectProduct();
 }}
 className="rounded-sm bg-[#F9F8F6] p-2.5 text-[#1A1A1A] shadow-md transition-all hover:bg-[#1A1A1A] hover:text-[#F9F8F6] active:translate-y-0.5"
 whileHover={{ scale: 1.06 }}
 whileTap={{ scale: 0.94 }}
 aria-label="View details"
 >
 <Eye className="w-4 h-4" />
 </motion.button>
 </div>

 </div>

 <div className="space-y-2 flex-grow flex flex-col justify-between ">
 <div>
 <div className="flex items-center justify-between gap-3 text-[9.5px] font-mono uppercase tracking-[0.18em] text-[#7E756B]">
 <span>{product.category}</span>
 <div className="flex items-center gap-1">
 <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
 <span className="text-[#1A1A1A] font-semibold">{product.rating}</span>
 </div>
 </div>

 <h3 className="mt-1.5 font-serif text-[19px] font-light leading-snug tracking-wide text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#7E756B]">
 {product.name}
 </h3>
 <p className="text-xs font-sans text-[#7E756B] italic font-light line-clamp-1 mt-0.5">
 {product.tagline}
 </p>
 </div>

 <div className="flex items-end justify-between gap-3 border-t border-[#EAE6DF]/60 pt-3">
 
 <div className="font-mono text-[13.5px] tracking-widest text-[#1A1A1A] flex items-center gap-2">
 {isSale ? (
 <>
 <span className="text-[#D4AF37] font-bold">${product.price.toLocaleString()}</span>
 <span className="text-[#A89F91] line-through text-[11px]">${product.originalPrice?.toLocaleString()}</span>
 </>
 ) : (
 <span className="font-medium">${product.price.toLocaleString()}</span>
 )}
 </div>

 <div className="flex flex-wrap items-center justify-end gap-2">
 {product.colors.map((color, idx) => (
 <button
 key={color.name}
 onClick={(e) => {
 e.stopPropagation();
 setSelectedColorIdx(idx);
 }}
 className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 ease-out relative ${
 selectedColorIdx === idx
 ? 'scale-130 border-[#1A1A1A] shadow-xs'
 : 'border-[#EAE6DF]/40 hover:scale-115'
 }`}
 style={{ backgroundColor: color.hex }}
 title={color.name}
 aria-label={`Select color ${color.name}`}
 >
 {selectedColorIdx === idx && (
 <span className="absolute inset-[2px] rounded-full border border-white mix-blend-difference pointer-events-none" />
 )}
 </button>
 ))}
 </div>

 </div>
 </div>

 </motion.div>
 );
}
