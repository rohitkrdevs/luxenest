"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, User, Search, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAppContext } from '../app/providers';

export default function Header() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [searchOpen, setSearchOpen] = useState(false);
 const [searchTerm, setSearchTerm] = useState('');
 
 const { cart, setCartDrawerOpen, currentUser } = useAppContext();
 const pathname = usePathname();
 const router = useRouter();

 const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

 useEffect(() => {
 setMobileMenuOpen(false);
 setSearchOpen(false);
 }, [pathname]);

 useEffect(() => {
 document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
 return () => {
 document.body.style.overflow = '';
 };
 }, [mobileMenuOpen]);

 const handleSearchSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 router.push(`/shop?q=${encodeURIComponent(searchTerm)}`);
 setSearchOpen(false);
 };

 const navLinks = [
 { label: 'Collection', path: '/shop' },
 { label: 'Category Grid', path: '/category' },
 { label: 'Curated Rooms', path: '/' },
 ];

 return (
 <header className="sticky top-0 z-50 border-b border-[#EAE6DF] bg-[#F9F8F6]/95 shadow-[0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl transition-all duration-300">
 <div className="bg-[#1A1A1A] px-4 py-2 text-center text-[10px] font-mono uppercase tracking-[0.12em] text-[#F9F8F6] sm:text-[11px] sm:tracking-[0.18em]">
 <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
 <Sparkles className="h-3 w-3 flex-shrink-0 text-[#D4AF37]" />
 <span className="leading-relaxed">Complimentary White-Glove Delivery & Placement on Orders Over $1,500</span>
 </div>
 </div>

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
 
 <div className="flex min-w-0 flex-1 items-center justify-start lg:flex-none">
 <Link href="/" className="group flex min-w-0 flex-col items-start text-left">
 <span className="font-serif text-xl font-light uppercase tracking-[0.22em] text-[#1A1A1A] transition-opacity group-hover:opacity-80 sm:text-2xl">
 LuxeNest
 </span>
 <span className="-mt-1 hidden text-[9px] font-mono uppercase tracking-[0.28em] text-[#7E756B] sm:block">
 Quiet Luxury Living
 </span>
 </Link>
 </div>

 <nav className="hidden items-center gap-2 lg:flex">
 {navLinks.map((link) => (
 <Link
 key={link.label}
 href={link.path}
 className={`relative rounded-sm px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${
 pathname === link.path
 ? 'text-[#1A1A1A]'
 : 'text-[#7E756B] hover:bg-[#F3EFE9] hover:text-[#1A1A1A]'
 }`}
 >
 <span>{link.label}</span>
 {pathname === link.path && (
 <motion.div
 layoutId="activeNavIndicator"
 className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#1A1A1A]"
 transition={{ type: "spring", stiffness: 380, damping: 30 }}
 />
 )}
 </Link>
 ))}
 </nav>

 <div className="flex items-center justify-end gap-2 sm:gap-3">
 <div className="relative flex min-w-9 items-center justify-end">
 <AnimatePresence mode="wait">
 {!searchOpen ? (
 <motion.button
 key="trigger"
 onClick={() => setSearchOpen(true)}
 className="rounded-sm p-2 text-[#7E756B] transition-colors hover:bg-[#F3EFE9] hover:text-[#1A1A1A]"
 aria-label="Open search"
 initial={{ scale: 0.8, opacity: 0 }}
 animate={{ scale: 1, opacity: 1 }}
 exit={{ scale: 0.8, opacity: 0 }}
 transition={{ duration: 0.15 }}
 >
 <Search className="w-5 h-5 stroke-[1.5]" />
 </motion.button>
 ) : (
 <motion.form
 key="form"
 onSubmit={handleSearchSubmit}
 className="absolute right-0 top-1/2 z-10 flex -translate-y-1/2 items-center rounded-sm border border-[#D8D2C8] bg-white px-3 py-2 shadow-[0_16px_45px_rgba(26,26,26,0.12)]"
 initial={{ width: 40, opacity: 0 }}
 animate={{ width: typeof window !== 'undefined' && window.innerWidth < 640 ? 224 : 288, opacity: 1 }}
 exit={{ width: 40, opacity: 0 }}
 transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
 >
 <input
 type="text"
 value={searchTerm}
 placeholder="Search furniture..."
 onChange={(e) => setSearchTerm(e.target.value)}
 className="w-full flex-grow bg-transparent py-0.5 text-xs tracking-wider text-[#1A1A1A] placeholder:text-[#A89F91] focus:outline-none"
 autoFocus
 />
 <button type="submit" className="rounded-sm p-1 text-[#1A1A1A] hover:bg-[#F3EFE9]" aria-label="Submit search">
 <Search className="w-4 h-4" />
 </button>
 <button
 onClick={() => {
 setSearchOpen(false);
 setSearchTerm('');
 }}
 type="button"
 className="ml-1 rounded-sm p-1 text-[#7E756B] hover:bg-[#F3EFE9] hover:text-[#1A1A1A]"
 aria-label="Close search"
 >
 <X className="w-4 h-4" />
 </button>
 </motion.form>
 )}
 </AnimatePresence>
 </div>

 <Link
 href={currentUser ? '/account' : '/auth'}
 className={`flex items-center gap-1.5 rounded-sm p-2 font-mono text-xs tracking-wider transition-colors ${
 pathname === '/account' || pathname === '/auth'
 ? 'bg-[#F3EFE9] text-[#1A1A1A]'
 : 'text-[#7E756B] hover:bg-[#F3EFE9] hover:text-[#1A1A1A]'
 }`}
 >
 <User className="w-5 h-5 stroke-[1.5]" />
 <span className="hidden md:inline font-sans font-medium uppercase text-[11px] tracking-[0.1em]">
 {currentUser ? 'Profile' : 'Sign In'}
 </span>
 </Link>

 <button
 onClick={() => setCartDrawerOpen(true)}
 className="relative flex items-center gap-1 rounded-sm p-2 text-[#7E756B] transition-colors hover:bg-[#F3EFE9] hover:text-[#1A1A1A]"
 aria-label="Open shopping bag"
 >
 <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
 <AnimatePresence>
 {cartTotalItems > 0 && (
 <motion.span 
 key="badge"
 initial={{ scale: 0.3, opacity: 0 }}
 animate={{ scale: 1, opacity: 1 }}
 exit={{ scale: 0.3, opacity: 0 }}
 className="absolute -top-1.5 -right-2 bg-[#1A1A1A] text-[#F9F8F6] font-mono text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold tracking-tighter shadow-sm border border-[#F9F8F6]"
 >
 {cartTotalItems}
 </motion.span>
 )}
 </AnimatePresence>
 <span className="hidden md:inline font-sans font-medium uppercase text-[11px] tracking-[0.1em] ml-0.5">
 Bag
 </span>
 </button>

 <button
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 className="rounded-sm p-2 text-[#7E756B] transition-colors hover:bg-[#F3EFE9] hover:text-[#1A1A1A] lg:hidden"
 aria-label="Toggle menu"
 aria-expanded={mobileMenuOpen}
 >
 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
 </button>

 </div>
 </div>
 </div>

 <AnimatePresence>
 {mobileMenuOpen && (
 <motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.25 }}
 className="fixed inset-0 z-40 flex justify-end bg-[#1A1A1A]/35 pt-[104px] backdrop-blur-sm sm:pt-[112px] lg:hidden" 
 onClick={() => setMobileMenuOpen(false)}
 >
 <motion.div 
 initial={{ x: "100%" }}
 animate={{ x: 0 }}
 exit={{ x: "100%" }}
 transition={{ type: "spring", damping: 25, stiffness: 200 }}
 className="flex h-full w-full max-w-sm flex-col justify-between overflow-y-auto border-l border-[#EAE6DF] bg-[#F9F8F6] p-6 shadow-2xl" 
 onClick={(e) => e.stopPropagation()}
 >
 <div className="space-y-6 pt-2">
 <div className="flex flex-col gap-2">
 {navLinks.map((link) => (
 <Link
 key={link.label}
 href={link.path}
 onClick={() => setMobileMenuOpen(false)}
 className={`rounded-sm border px-4 py-3 text-left font-serif text-lg uppercase tracking-widest transition-colors ${
 pathname === link.path ? 'border-[#1A1A1A] bg-white text-[#1A1A1A]' : 'border-[#EAE6DF] text-[#7E756B] hover:border-[#C2BCAE] hover:bg-white'
 }`}
 >
 {link.label}
 </Link>
 ))}
 </div>
 </div>

 <div className="border-t border-[#EAE6DF] pt-6 space-y-4">
 <div className="flex items-center gap-2 text-xs font-mono text-[#7E756B]">
 <MapPin className="w-4 h-4 text-[#C2BCAE]" />
 <span>Showroom: Copenhagen & New York</span>
 </div>
 <p className="text-[10px] font-mono text-[#A89F91]">
 Need styling assistance? Call our design concierge line:
 <br />
 <span className="text-[#1A1A1A] font-medium font-sans text-xs">1-800-LUXENEST</span>
 </p>
 </div>
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 </header>
 );
}
