"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Lightbulb, Sofa, Table, Wine, Database } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Category {
 id: string;
 name: string;
 icon: string;
 count: number;
 description: string;
}

interface CategoryCardProps {
 category: Category;
}

const getIconComponent = (iconName: string) => {
 switch (iconName) {
 case 'Sofa':
 return <Sofa className="h-5 w-5" />;
 case 'Table':
 return <Table className="h-5 w-5" />;
 case 'Compass':
 return <Compass className="h-5 w-5" />;
 case 'Lightbulb':
 return <Lightbulb className="h-5 w-5" />;
 case 'Wine':
 return <Wine className="h-5 w-5" />;
 case 'Database':
 return <Database className="h-5 w-5" />;
 default:
 return <Compass className="h-5 w-5" />;
 }
};

const CATEGORY_IMAGES: Record<string, string> = {
 sofas: '/images/asset_4.jpg',
 tables: '/images/asset_10.jpg',
 chairs: '/images/asset_13.jpg',
 lighting: '/images/asset_14.jpg',
 accents: '/images/asset_16.jpg',
 storage: '/images/asset_21.jpg',
};

export default function CategoryCard({ category }: CategoryCardProps) {
 const router = useRouter();
 const imageUrl = CATEGORY_IMAGES[category.id] || CATEGORY_IMAGES.sofas;

 return (
 <motion.div
 onClick={() => router.push(`/shop?category=${category.id}`)}
 className="group relative h-80 w-full cursor-pointer overflow-hidden rounded-sm shadow-sm transition-all duration-500 hover:shadow-[0_22px_60px_rgba(26,26,26,0.14)] sm:h-96"
 whileHover={{ y: -8 }}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10px" }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 >
 <div className="absolute inset-0 bg-[#1A1A1A]">
 <motion.img
 src={imageUrl}
 alt={category.name}
 className="h-full w-full object-cover opacity-80"
 whileHover={{ scale: 1.05 }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 loading="lazy"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/35 to-transparent" />
 </div>

 <div className="absolute inset-0 flex flex-col justify-end space-y-4 p-5 text-[#F9F8F6] sm:p-6">
 <div className="flex items-center justify-between">
 <div className="rounded-full border border-[#F9F8F6]/20 bg-[#F9F8F6]/10 p-2.5 text-[#F9F8F6] backdrop-blur-md">
 {getIconComponent(category.icon)}
 </div>
 <span className="rounded-sm border border-[#F9F8F6]/15 bg-[#1A1A1A]/50 px-2.5 py-1 text-[9.5px] font-medium uppercase tracking-[0.2em]">
 {category.count} Pieces
 </span>
 </div>

 <div className="space-y-1.5">
 <h3 className="font-serif text-2xl font-light uppercase tracking-wider transition-colors duration-300 group-hover:text-[#C2BCAE] sm:text-3xl">
 {category.name}
 </h3>
 <p className="line-clamp-2 text-xs font-light leading-relaxed text-[#C2BCAE] opacity-90">
 {category.description}
 </p>
 </div>

 <div className="flex items-center gap-2 pt-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#F3EFE9] transition-transform duration-300 group-hover:translate-x-2">
 <span>Explore Spaces</span>
 <ArrowRight className="h-4 w-4" />
 </div>
 </div>
 </motion.div>
 );
}
