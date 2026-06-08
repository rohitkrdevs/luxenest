"use client";

import { CATEGORIES } from '../../data/products';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CategoryPage() {
 const router = useRouter();
 
 const handleSelectRoom = (id: string) => {
 router.push(`/shop?category=${id}`);
 };

 return (
 <div className="bg-[#F9F8F6] pb-20">
 
 <div className="relative border-b border-[#3E3E3E] bg-[#1A1A1A] px-4 py-20 text-[#F9F8F6] sm:py-28">
 <div className="absolute inset-0">
 <img
 src="/images/asset_19.jpg"
 alt="Warm tailored lounge environment"
 className="w-full h-full object-cover opacity-35 object-center"
 />
 <div className="absolute inset-0 bg-[#1A1A1A]/70" />
 </div>

 <div className="relative max-w-5xl mx-auto text-center space-y-6">
 <div className="flex justify-center items-center gap-1.5 text-xs font-mono tracking-[0.25em] text-[#C2BCAE] uppercase">
 <span>LUXENEST HOME DIRECTORY</span>
 </div>

 <h1 className="font-serif text-4xl font-light uppercase tracking-[0.1em] text-[#F9F8F6] sm:text-5xl">
 Browse By Space
 </h1>
 
 <p className="text-sm text-[#D2C4B1] font-sans font-light max-w-xl mx-auto leading-relaxed">
 Our catalogs are structured around complete living environments. Select a tailored space below to refine the material palette, and observe how light interacts with our hand-finished furniture layers.
 </p>

 <div className="hidden flex-wrap items-center justify-center gap-4 border-t border-[#F9F8F6]/10 pt-4 font-mono text-xs uppercase tracking-widest text-[#A89F91] sm:inline-flex">
 <span>Sofas</span>
 <span>•</span>
 <span>Tables</span>
 <span>•</span>
 <span>Chairs</span>
 <span>•</span>
 <span>Lighting</span>
 <span>•</span>
 <span>Accents</span>
 </div>
 </div>
 </div>

 <div className="content-shell space-y-12 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
 
 <div className="flex flex-col gap-3 border-b border-[#EAE6DF] pb-6 sm:flex-row sm:items-center sm:justify-between">
 <h2 className="font-serif text-2xl font-light uppercase tracking-widest text-[#1A1A1A]">
 SOCIETY ROOMS DIRECTORY
 </h2>
 <div className="flex items-center text-xs font-mono uppercase tracking-widest text-[#7E756B]">
 <span>Category Explorer</span>
 <ChevronRight className="w-4 h-4 mx-1" />
 <span className="text-[#1A1A1A]">Grid View</span>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {CATEGORIES.map((cat, index) => {
 const images = [
 '/images/asset_4.jpg', // Sofas
 '/images/asset_10.jpg', // Tables
 '/images/asset_13.jpg', // Chairs
 '/images/asset_14.jpg', // Lighting
 '/images/asset_16.jpg', // Accents
 '/images/asset_21.jpg', // Storage
 ];
 const catImage = images[index] || images[0];

 return (
 <div
 key={cat.id}
 onClick={() => handleSelectRoom(cat.id)}
 className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-sm border border-[#EAE6DF]/70 bg-white/45 transition-all hover:border-[#1A1A1A] hover:bg-white hover:shadow-[0_18px_52px_rgba(26,26,26,0.07)]"
 >
 
 <div className="relative aspect-[16/10] overflow-hidden bg-[#F1EFEA]">
 <img
 src={catImage}
 alt={cat.name}
 className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-[#1A1A1A]/10 group-hover:bg-transparent transition-colors duration-300" />
 </div>

 <div className="flex flex-grow flex-col justify-between space-y-4 p-5 sm:p-6">
 <div className="space-y-2">
 <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-[#7E756B] uppercase font-bold">
 <span>ROOM {index + 1}</span>
 <span>{cat.count} Pieces Cataloged</span>
 </div>

 <h3 className="font-serif text-xl font-light text-[#1A1A1A] tracking-wider uppercase group-hover:text-[#7E756B] transition-colors">
 The {cat.name} Collection
 </h3>

 <p className="text-xs text-[#7E756B] font-sans font-light leading-relaxed line-clamp-3">
 {cat.description}
 </p>
 </div>

 <div className="pt-4 border-t border-[#EAE6DF]/60 flex items-center justify-between text-xs font-mono text-[#1A1A1A] uppercase tracking-widest font-medium">
 <span>Examine Room catalog</span>
 <ArrowRight className="w-4 h-4 text-[#C2BCAE] group-hover:translate-x-1.5 transition-transform" />
 </div>

 </div>

 </div>
 );
 })}
 </div>

 </div>

 </div>
 );
}
