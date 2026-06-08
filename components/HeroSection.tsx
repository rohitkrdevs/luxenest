"use client";

import { Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
 const router = useRouter();

 const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: {
 staggerChildren: 0.15,
 delayChildren: 0.2,
 },
 },
 };

 const itemVariants = {
 hidden: { opacity: 0, y: 30 },
 visible: {
 opacity: 1,
 y: 0,
 transition: {
 duration: 0.8,
 ease: [0.16, 1, 0.3, 1] as const,
 },
 },
 };

 return (
 <div className="relative flex min-h-[78vh] items-center overflow-hidden bg-[#1A1A1A] text-[#F9F8F6] sm:min-h-[82vh]">
 
 <div className="absolute inset-0 z-0 overflow-hidden">
 <motion.img
 src="/images/asset_18.jpg"
 alt="LuxeNest Living Space"
 className="w-full h-full object-cover opacity-85 object-center"
 initial={{ scale: 1.08 }}
 animate={{ scale: 1 }}
 transition={{ duration: 12, ease: "easeOut" }}
 />
 <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/60 to-[#1A1A1A]/20" />
 </div>

 <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
 <motion.div 
 className="max-w-2xl space-y-7 sm:space-y-8"
 variants={containerVariants}
 initial="hidden"
 animate="visible"
 >
 
 <motion.div 
 variants={itemVariants}
 className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#F9F8F6]/20 bg-[#F9F8F6]/10 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-[#D4AF37] backdrop-blur-md sm:text-xs sm:tracking-[0.2em]"
 >
 <Sparkles className="w-3.5 h-3.5 animate-pulse" />
 <span>THE AW26 ARCHITECTURAL RELEASE</span>
 </motion.div>

 <div className="space-y-4">
 <motion.h1 
 variants={itemVariants}
 className="font-serif text-5xl font-light leading-[1.05] tracking-normal text-[#F9F8F6] sm:text-6xl lg:text-7xl"
 >
 Engineered for
 <br />
 <span className="font-normal italic text-[#C2BCAE] tracking-normal lowercase font-serif">Quiet</span> Luxury.
 </motion.h1>
 
 <motion.p 
 variants={itemVariants}
 className="text-base sm:text-lg text-[#D2C4B1] font-sans font-light leading-relaxed max-w-lg pt-1"
 >
 LuxeNest objects strip away visual noise to expose the absolute purity of stone, timber, and hand-woven fibers. Built for architectural spaces and curated homes.
 </motion.p>
 </div>

 <motion.div 
 variants={itemVariants}
 className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4"
 >
 <button
 onClick={() => router.push('/shop')}
 className="inline-flex justify-center rounded-sm border border-transparent bg-[#F9F8F6] px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[#1A1A1A] shadow-lg transition-all hover:border-[#F9F8F6] hover:bg-[#1A1A1A] hover:text-[#F9F8F6] active:translate-y-0.5"
 >
 Examine Curated Collection
 </button>
 <button
 onClick={() => router.push('/category')}
 className="inline-flex justify-center rounded-sm border border-[#F9F8F6]/35 bg-transparent px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[#F9F8F6] transition-all hover:border-[#F9F8F6] hover:bg-[#F9F8F6]/10 active:translate-y-0.5"
 >
 Browse Spaces By Room
 </button>
 </motion.div>

 <motion.div 
 variants={itemVariants}
 className="grid max-w-lg grid-cols-1 gap-4 border-t border-[#F9F8F6]/10 pt-8 sm:grid-cols-3 sm:gap-6 sm:pt-12"
 >
 <div className="space-y-1">
 <span className="block text-xs font-mono tracking-widest text-[#C2BCAE] uppercase">
 TIMBER
 </span>
 <span className="block text-sm font-serif font-light text-[#F9F8F6]">
 Kiln-Dried Walnut
 </span>
 </div>

 <div className="space-y-1">
 <span className="block text-xs font-mono tracking-widest text-[#C2BCAE] uppercase">
 TAILORING
 </span>
 <span className="block text-sm font-serif font-light text-[#F9F8F6]">
 Italian Bouclé
 </span>
 </div>

 <div className="space-y-1">
 <span className="block text-xs font-mono tracking-widest text-[#C2BCAE] uppercase">
 ORIGIN
 </span>
 <span className="block text-sm font-serif font-light text-[#F9F8F6]">
 Copenhagen, DK
 </span>
 </div>
 </motion.div>

 </motion.div>
 </div>

 <motion.div 
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 1, duration: 1, type: "spring", stiffness: 100 }}
 className="absolute bottom-6 right-6 z-10 hidden lg:flex items-center gap-3 bg-[#1A1A1A]/80 backdrop-blur-md p-4 border border-[#F9F8F6]/15 rounded-xs"
 >
 <MapPin className="w-5 h-5 text-[#C2BCAE] animate-bounce" />
 <div className="text-right">
 <span className="block text-[9px] font-mono tracking-[0.2em] text-[#A89F91] uppercase">
 NOW ON STAGE
 </span>
 <span className="block text-xs font-sans font-light text-[#F3EFE9]">
 The Soho Gallery, NYC
 </span>
 </div>
 </motion.div>

 </div>
 );
}
