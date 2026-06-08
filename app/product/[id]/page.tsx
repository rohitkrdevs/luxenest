"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Star, Truck, ArrowLeft, Plus, Minus } from 'lucide-react';
import { PRODUCTS } from '../../../data/products';
import { useParams, useRouter } from 'next/navigation';
import { useAppContext } from '../../providers';

export default function ProductDetails() {
 const params = useParams();
 const router = useRouter();
 const { addToCart } = useAppContext();

 const productId = params?.id as string;

 const product = useMemo(() => {
 return PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
 }, [productId]);

 const [activeImgIdx, setActiveImgIdx] = useState(0);

 const [selectedColorIdx, setSelectedColorIdx] = useState(0);
 const selectedColor = product.colors[selectedColorIdx] || product.colors[0];

 const sizes = ['Standard (92")', 'Imperial Grand (112")', 'Corner Block Sectional'];
 const [selectedSize, setSelectedSize] = useState(sizes[0]);

 const [quantity, setQuantity] = useState(1);

 const [activeTab, setActiveTab] = useState<'details' | 'materials' | 'assembly'>('details');

 const handleIncreaseQty = () => setQuantity((q) => q + 1);
 const handleDecreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

 const handleAddToBag = () => {
 for (let i = 0; i < quantity; i++) {
 addToCart(product, selectedColor, selectedSize);
 }
 };

 const handleBuyNow = () => {
 addToCart(product, selectedColor, selectedSize);
 router.push('/cart');
 };

 const adjustedPrice = useMemo(() => {
 if (selectedSize.includes('112')) return product.price + 600;
 if (selectedSize.includes('Sectional')) return product.price + 1300;
 return product.price;
 }, [selectedSize, product.price]);

 if (!product) {
 return <div className="p-20 text-center font-mono text-xs">Product not found.</div>;
 }

 return (
 <div className="bg-[#F9F8F6] pb-24">
 
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
 <div className="flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#7E756B]">
 <button onClick={() => router.push('/shop')} className="hover:text-[#1A1A1A] transition-colors focus:outline-none cursor-pointer">Shop</button>
 <ChevronRight className="w-3.5 h-3.5 mx-1" />
 <span className="text-[#1A1A1A] capitalize">{product.category}</span>
 <ChevronRight className="w-3.5 h-3.5 mx-1" />
 <span className="text-[#1A1A1A] font-semibold">{product.name}</span>
 </div>

 <button
 onClick={() => router.push('/shop')}
 className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#7E756B] hover:text-[#1A1A1A] uppercase transition-colors focus:outline-none cursor-pointer group"
 >
 <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
 <span>Back to Curation</span>
 </button>
 </div>
 </div>

 <div className="content-shell mt-4 grid grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
 
 <div className="lg:col-span-7 space-y-4">
 
 <div className="relative aspect-[4/3] bg-[#F1EFEA] rounded-xs overflow-hidden border border-[#EAE6DF] shadow-xs">
 <AnimatePresence mode="wait">
 <motion.img
 key={activeImgIdx}
 src={product.images[activeImgIdx] || product.images[0]}
 alt={product.name}
 className="w-full h-full object-cover"
 initial={{ opacity: 0.1, scale: 1.01 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0.1 }}
 transition={{ duration: 0.4, ease: "easeOut" }}
 />
 </AnimatePresence>
 {!product.inStock && (
 <span className="absolute top-4 left-4 bg-[#A89F91] text-[#F9F8F6] text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-xs shadow-md">
 CUSTOM BUILD ON-DEMAND (6-8 Weeks)
 </span>
 )}
 </div>

 {product.images.length > 1 && (
 <div className="flex gap-4">
 {product.images.map((img, idx) => (
 <button
 key={idx}
 onClick={() => setActiveImgIdx(idx)}
 className={`relative w-24 aspect-[4/3] rounded-xs overflow-hidden bg-[#F1EFEA] border-2 transition-all focus:outline-none cursor-pointer ${
 activeImgIdx === idx ? 'border-[#1A1A1A] scale-[1.02]' : 'border-transparent hover:border-[#EAE6DF]'
 }`}
 >
 <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
 </button>
 ))}
 </div>
 )}

 </div>

 <div className="lg:col-span-5 space-y-8">
 
 <div className="space-y-3 ">
 <div className="flex flex-wrap items-center gap-3">
 <span className="text-[10px] font-mono tracking-[0.25em] text-[#7E756B] uppercase font-bold">
 {product.category} COLLECTION
 </span>
 <div className="flex items-center gap-1.5 bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-xs border border-[#D4AF37]/20">
 <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
 <span className="text-[10px] font-mono font-bold text-[#1A1A1A]">{product.rating}</span>
 <span className="text-[9.5px] font-mono text-[#7E756B]">({product.reviewCount} Reviews)</span>
 </div>
 </div>

 <h1 className="font-serif text-3xl font-light uppercase leading-tight tracking-wide text-[#1A1A1A] sm:text-4xl">
 {product.name}
 </h1>
 <p className="text-sm font-sans text-[#7E756B] italic font-light leading-relaxed">
 {product.tagline}
 </p>

 <div className="pt-2 flex items-baseline gap-3">
 <span className="font-serif text-2xl tracking-widest text-[#1A1A1A] font-medium">
 ${adjustedPrice.toLocaleString()}
 </span>
 {product.originalPrice && (
 <span className="font-mono text-sm tracking-widest text-[#7E756B] line-through">
 ${product.originalPrice.toLocaleString()}
 </span>
 )}
 </div>
 </div>

 <p className="text-sm text-[#7E756B] font-sans font-light leading-relaxed border-t border-[#EAE6DF] pt-6 ">
 {product.description}
 </p>

 <div className="space-y-6 pt-2">
 
 <div className="space-y-2.5">
 <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest">
 <span className="text-[#7E756B]">Material Finish</span>
 <span className="text-[#1A1A1A] font-semibold">{selectedColor.name}</span>
 </div>
 <div className="flex items-center gap-3">
 {product.colors.map((color, idx) => (
 <button
 key={color.name}
 onClick={() => {
 setSelectedColorIdx(idx);
 }}
 className={`w-8 h-8 rounded-full border transition-all focus:outline-none flex items-center justify-center cursor-pointer ${
 selectedColorIdx === idx
 ? 'border-[#1A1A1A] scale-110 shadow-xs p-[2.5px]'
 : 'border-[#EAE6DF] hover:scale-105'
 }`}
 >
 <span className="w-full h-full rounded-full inline-block" style={{ backgroundColor: color.hex }} />
 </button>
 ))}
 </div>
 </div>

 <div className="space-y-3">
 <span className="block text-xs font-mono uppercase tracking-widest text-[#7E756B]">Architectural Depth / Scale</span>
 <div className="grid grid-cols-1 gap-2.5">
 {sizes.map((sz, idx) => {
 const isSelected = selectedSize === sz;
 const priceLabel = idx === 1 ? ' (+$600)' : idx === 2 ? ' (+$1,300)' : '';
 return (
 <button
 key={sz}
 onClick={() => setSelectedSize(sz)}
 className={`text-left px-4 py-3 rounded-xs border text-xs font-sans transition-all flex justify-between items-center focus:outline-none cursor-pointer ${
 isSelected
 ? 'bg-[#1A1A1A] border-[#1A1A1A] text-[#F9F8F6] shadow-sm'
 : 'bg-[#F3EFE9] border-[#EAE6DF] text-[#1A1A1A] hover:border-[#7E756B]'
 }`}
 >
 <span className="tracking-wide uppercase font-semibold">{sz}</span>
 <span className={`font-mono text-[10px] ${isSelected ? 'text-[#C2BCAE]' : 'text-[#7E756B]'}`}>
 {idx === 0 ? 'Standard Spec' : `Expanded Custom ${priceLabel}`}
 </span>
 </button>
 );
 })}
 </div>
 </div>

 <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
 
 <div className="flex items-center border border-[#EAE6DF] bg-[#F6F4F0] rounded-xs py-2.5 px-3">
 <button
 onClick={handleDecreaseQty}
 className="p-1 text-[#7E756B] hover:text-[#1A1A1A] focus:outline-none cursor-pointer"
 aria-label="Decrease quantity"
 >
 <Minus className="w-4 h-4" />
 </button>
 <span className="px-5 font-mono text-sm text-[#1A1A1A] font-semibold w-8 text-center ">
 {quantity}
 </span>
 <button
 onClick={handleIncreaseQty}
 className="p-1 text-[#7E756B] hover:text-[#1A1A1A] focus:outline-none cursor-pointer"
 aria-label="Increase quantity"
 >
 <Plus className="w-4 h-4" />
 </button>
 </div>

 <div className="grid flex-grow grid-cols-1 gap-3 sm:grid-cols-2">
 <motion.button
 onClick={handleAddToBag}
 className="btn-primary w-full py-4 shadow-md"
 whileTap={{ scale: 0.98 }}
 >
 Add To Bag
 </motion.button>
 <motion.button
 onClick={handleBuyNow}
 className="btn-secondary w-full py-4"
 whileTap={{ scale: 0.98 }}
 >
 Buy Now
 </motion.button>
 </div>

 </div>

 </div>

 <div className="p-4 bg-[#F3EFE9] rounded-xs border border-[#EAE6DF] space-y-3 ">
 <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#1A1A1A] font-semibold">
 <Truck className="w-5 h-5 text-[#C2BCAE]" />
 <span>Complimentary White-Glove Care</span>
 </div>
 <p className="text-[11px] text-[#7E756B] font-sans leading-relaxed">
 Because this item requires professional logistics alignment, it ships directly with our specialized White Glove Carrier. In-room positioning, full physical assembly, leveler calibration, and complete packaging clean-up are included at no added cost to you.
 </p>
 </div>

 </div>

 </div>

 <div className="content-shell mt-20 border-t border-[#EAE6DF] px-4 pt-10 sm:px-6 lg:mt-24 lg:px-8 lg:pt-12">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
 
 <div className="lg:col-span-4 flex flex-col space-y-3">
 <h3 className="font-serif text-lg tracking-widest uppercase text-[#1A1A1A] mb-4 font-normal ">SPEC COMPENDIUM</h3>
 {[
 { id: 'details', label: 'Material Detail & Joinery' },
 { id: 'materials', label: 'Raw Ingredient Source' },
 { id: 'assembly', label: 'Assembly & Room Care' },
 ].map((tab) => {
 const isSelected = activeTab === tab.id;
 return (
 <button
 key={tab.id}
 onClick={() => setActiveTab(tab.id as any)}
 className={`text-left py-3.5 px-4 rounded-xs border text-xs font-mono tracking-widest uppercase transition-all focus:outline-none cursor-pointer relative ${
 isSelected
 ? 'bg-[#1A1A1A] border-[#1A1A1A] text-[#F9F8F6] pl-6'
 : 'bg-transparent border-transparent text-[#7E756B] hover:text-[#1A1A1A] hover:border-[#EAE6DF]'
 }`}
 >
 <span className="relative z-10">{tab.label}</span>
 </button>
 );
 })}
 </div>

 <div className="lg:col-span-8 bg-[#F6F4F0] p-8 rounded-xs border border-[#EAE6DF]/60 shadow-xs relative overflow-hidden min-h-[280px]">
 <AnimatePresence mode="wait">
 <motion.div
 key={activeTab}
 initial={{ opacity: 0, x: 10 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -10 }}
 transition={{ duration: 0.35, ease: "easeOut" }}
 className="w-full"
 >
 {activeTab === 'details' && (
 <div className="space-y-6">
 <h4 className="font-serif text-xl font-light text-[#1A1A1A] uppercase tracking-wide border-b border-[#EAE6DF] pb-3 ">CONSTRUCTION DETAILS</h4>
 <ul className="space-y-4 text-xs font-sans text-[#7E756B] leading-relaxed list-disc pl-5">
 {(product.details || [
 'Sinuous spring system delivers balanced suspension support across the frame.',
 'Triple-layered seat cushioning utilizing high resilience support foam.',
 'Hand-fitted upholstery with tight, precision editorial stitching joints.',
 ]).map((item, idx) => (
 <li key={idx} className="tracking-wide">{item}</li>
 ))}
 </ul>
 
 <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono border-t border-[#EAE6DF] ">
 <div>
 <span className="text-[#A89F91] block uppercase text-[10px]">Lounge Width</span>
 <span className="text-[#1A1A1A] font-semibold">{product.dimensions.width}</span>
 </div>
 <div>
 <span className="text-[#A89F91] block uppercase text-[10px]">Stance Depth</span>
 <span className="text-[#1A1A1A] font-semibold">{product.dimensions.depth}</span>
 </div>
 <div>
 <span className="text-[#A89F91] block uppercase text-[10px]">Stance Height</span>
 <span className="text-[#1A1A1A] font-semibold">{product.dimensions.height}</span>
 </div>
 <div>
 <span className="text-[#A89F91] block uppercase text-[10px]">Crate Weight</span>
 <span className="text-[#1A1A1A] font-semibold">{product.dimensions.weight || '75 lbs'}</span>
 </div>
 </div>
 </div>
 )}

 {activeTab === 'materials' && (
 <div className="space-y-6">
 <h4 className="font-serif text-xl font-light text-[#1A1A1A] uppercase tracking-wide border-b border-[#EAE6DF] pb-3 ">ORGANIC MATERIALS REGISTRY</h4>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
 <div className="space-y-3">
 <span className="block text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-semibold">Certified Timbers</span>
 <p className="text-xs text-[#7E756B] font-sans font-light leading-relaxed">
 We specify solid stave ash and European beech derived entirely from woodlands overseen by the Forest Stewardship Council (FSC). This certifies that no ancient growth gets logged.
 </p>
 </div>
 <div className="space-y-3">
 <span className="block text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-semibold">Textiles & Fibers</span>
 <p className="text-xs text-[#7E756B] font-sans font-light leading-relaxed">
 Our custom-milled Italian velvet weavings use high density natural wool, cotton, and linen threads that resist oil staining and static piling natively without synthetic chemical coatings.
 </p>
 </div>
 </div>
 <div className="pt-4 border-t border-[#EAE6DF]">
 <span className="text-xs font-mono text-[#A89F91] block mb-2.5 uppercase ">Raw Ingredients Registry:</span>
 <div className="flex flex-wrap gap-2">
 {product.materials.map((m) => (
 <span key={m} className="px-2.5 py-1 bg-white border border-[#EAE6DF] text-[9.5px] font-mono rounded-xs text-[#1A1A1A] tracking-wider uppercase font-semibold">
 {m}
 </span>
 ))}
 </div>
 </div>
 </div>
 )}

 {activeTab === 'assembly' && (
 <div className="space-y-6">
 <h4 className="font-serif text-xl font-light text-[#1A1A1A] uppercase tracking-wide border-b border-[#EAE6DF] pb-3 ">SET-UP & MAINTENANCE CODES</h4>
 <ul className="space-y-4 text-xs font-sans text-[#7E756B] leading-relaxed list-disc pl-5">
 {(product.assembly || [
 'Ships via designated White Glove carriage. Assemblers handle all elements.',
 'Keep timber frames away from persistent dampness and radiant floor registers.',
 'In the event of custom upholstery spills, blot dry immediately with clean absorbent fiber sheets.',
 ]).map((item, idx) => (
 <li key={idx} className="tracking-wide">{item}</li>
 ))}
 </ul>
 </div>
 )}
 </motion.div>
 </AnimatePresence>
 </div>
 </div>
 </div>

 </div>
 );
}
