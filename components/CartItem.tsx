import React from 'react';
import { motion } from 'motion/react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface CartItemProps {
 item: CartItemType;
 onUpdateQuantity: (id: string, qty: number) => void;
 onRemove: (id: string) => void;
}

export default function CartItem({
 item,
 onUpdateQuantity,
 onRemove,
}: CartItemProps) {
 const router = useRouter();

 const handleIncrease = () => {
 onUpdateQuantity(item.id, item.quantity + 1);
 };

 const handleDecrease = () => {
 if (item.quantity > 1) {
 onUpdateQuantity(item.id, item.quantity - 1);
 } else {
 onRemove(item.id);
 }
 };

 return (
 <div
 id={`cart-item-${item.id}`}
 className="flex gap-4 py-4 border-b border-[#EAE6DF]/60 last:border-0"
 >
 {/* Product Thumbnail Thumbnail */}
 <div 
 onClick={() => router.push('/product/' + item.product.id)}
 className="relative w-20 h-24 bg-[#F1EFEA] rounded-sm overflow-hidden flex-shrink-0 cursor-pointer group"
 >
 <img
 id={`cart-item-img-${item.id}`}
 src={item.product.images[0]}
 alt={item.product.name}
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
 />
 </div>

 {/* Item info column */}
 <div className="flex-grow flex flex-col justify-between">
 
 <div className="space-y-1">
 <div className="flex justify-between items-start gap-2">
 <h4 
 onClick={() => router.push('/product/' + item.product.id)}
 className="font-serif text-sm font-medium text-[#1A1A1A] hover:text-[#7E756B] transition-colors cursor-pointer"
 >
 {item.product.name}
 </h4>
 <span className="font-mono text-xs tracking-wider text-[#1A1A1A] font-medium">
 ${(item.product.price * item.quantity).toLocaleString()}
 </span>
 </div>
 
 <p className="text-[10px] font-mono tracking-wider text-[#7E756B] uppercase">
 {item.product.category}
 </p>

 {/* Color marker tag */}
 <div className="flex items-center gap-1.5 pt-0.5">
 <span
 className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block"
 style={{ backgroundColor: item.selectedColor.hex }}
 />
 <span className="text-[10px] font-mono text-[#7E756B] uppercase">
 {item.selectedColor.name}
 </span>
 </div>
 </div>

 {/* Quantities interaction and delete button */}
 <div className="flex justify-between items-center pt-2">
 
 {/* Quantity selector button */}
 <div className="flex items-center border border-[#EAE6DF] rounded-sm py-0.5 px-2 bg-[#F6F4F0]">
 <button
 id={`cart-item-dec-${item.id}`}
 onClick={handleDecrease}
 className="p-1 text-[#7E756B] hover:text-[#1A1A1A] transition-colors focus:outline-none"
 aria-label="Decrease quantity"
 >
 <Minus className="w-3 h-3" />
 </button>
 <span className="px-3 font-mono text-xs text-[#1A1A1A] block w-6 text-center ">
 {item.quantity}
 </span>
 <button
 id={`cart-item-inc-${item.id}`}
 onClick={handleIncrease}
 className="p-1 text-[#7E756B] hover:text-[#1A1A1A] transition-colors focus:outline-none"
 aria-label="Increase quantity"
 >
 <Plus className="w-3 h-3" />
 </button>
 </div>

 {/* Remove control */}
 <button
 id={`cart-item-remove-${item.id}`}
 onClick={() => onRemove(item.id)}
 className="text-[#A89F91] hover:text-red-600 transition-colors focus:outline-none p-1"
 title="Remove item"
 aria-label="Remove item from bag"
 >
 <Trash2 className="w-4 h-4 stroke-[1.5]" />
 </button>

 </div>

 </div>
 </div>
 );
}
