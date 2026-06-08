"use client";

import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, Truck, RefreshCw, Calendar, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
 const [emailAddress, setEmailAddress] = useState('');
 const [subscribed, setSubscribed] = useState(false);

 const handleSubscribe = (e: React.FormEvent) => {
 e.preventDefault();
 if (emailAddress.trim()) {
 setSubscribed(true);
 setEmailAddress('');
 }
 };

 const navLinks = [
 { label: 'Sofa Collection', path: '/category' },
 { label: 'Lounge Seating', path: '/shop' },
 { label: 'Stone Side Tables', path: '/shop' },
 { label: 'Sculptural Lighting', path: '/shop' },
 ];

 return (
 <footer className="border-t border-[#3E3E3E] bg-[#1A1A1A] pb-8 pt-14 text-[#F9F8F6] sm:pt-16">
 
 <div className="mb-14 px-4 sm:px-6 lg:px-8">
 <div className="content-shell grid grid-cols-1 gap-8 border-b border-[#3E3E3E] pb-12 sm:grid-cols-2 lg:grid-cols-4">
 
 <div className="flex items-start gap-4">
 <div className="p-3 bg-[#2A2A2A] rounded-full text-[#C2BCAE]">
 <Truck className="w-6 h-6 stroke-[1.2]" />
 </div>
 <div>
 <h4 className="text-sm font-sans font-medium tracking-[0.1em] uppercase text-[#F3EFE9]">
 White-Glove Delivery
 </h4>
 <p className="text-xs text-[#A89F91] mt-1 font-sans leading-relaxed">
 In-room placement, specialized structural assembly, and eco packaging removal.
 </p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="p-3 bg-[#2A2A2A] rounded-full text-[#C2BCAE]">
 <ShieldCheck className="w-6 h-6 stroke-[1.2]" />
 </div>
 <div>
 <h4 className="text-sm font-sans font-medium tracking-[0.1em] uppercase text-[#F3EFE9]">
 Responsible Woods
 </h4>
 <p className="text-xs text-[#A89F91] mt-1 font-sans leading-relaxed">
 100% of our hard timbers are responsibly FSC-certified. Made to outlive lifetimes.
 </p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="p-3 bg-[#2A2A2A] rounded-full text-[#C2BCAE]">
 <RefreshCw className="w-6 h-6 stroke-[1.2]" />
 </div>
 <div>
 <h4 className="text-sm font-sans font-medium tracking-[0.1em] uppercase text-[#F3EFE9]">
 30-Day Evaluation
 </h4>
 <p className="text-xs text-[#A89F91] mt-1 font-sans leading-relaxed">
 Experience comfort risk-free. Complimentary returns if the scale is suboptimal.
 </p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="p-3 bg-[#2A2A2A] rounded-full text-[#C2BCAE]">
 <Calendar className="w-6 h-6 stroke-[1.2]" />
 </div>
 <div>
 <h4 className="text-sm font-sans font-medium tracking-[0.1em] uppercase text-[#F3EFE9]">
 10-Year Framework
 </h4>
 <p className="text-xs text-[#A89F91] mt-1 font-sans leading-relaxed">
 Every kiln-dried frame carries a 10-year structural warranty protecting its joinery.
 </p>
 </div>
 </div>

 </div>
 </div>

 <div className="content-shell mb-14 grid grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-12 lg:px-8">
 
 <div className="lg:col-span-4 space-y-6">
 <div className="flex flex-col">
 <span className="font-serif text-2xl font-light tracking-[0.3em] uppercase text-[#F9F8F6]">
 LuxeNest
 </span>
 <span className="text-[10px] font-mono tracking-[0.35em] text-[#A89F91] uppercase mt-0.5">
 Quiet Luxury Living
 </span>
 </div>
 <p className="text-sm font-sans text-[#A89F91] leading-relaxed max-w-sm">
 Crafting objects of comfort and restraint. We reject fast trends in favor of beautiful raw materials, tactile textures, and quiet heirloom-quality craftsmanship.
 </p>
 <div className="flex items-center gap-2 text-xs font-mono text-[#C2BCAE]">
 <Sparkles className="w-4 h-4 text-[#D4AF37]" />
 <span>Honoring Scandinavian Joinery & German Precision</span>
 </div>
 </div>

 <div className="space-y-4 lg:col-span-2">
 <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-[#F9F8F6]">
 Our Collection
 </h4>
 <ul className="space-y-2 text-sm">
 {navLinks.map((link, idx) => (
 <li key={idx}>
 <Link
 href={link.path}
 className="text-[#A89F91] hover:text-[#F3EFE9] transition-colors focus:outline-none"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 <div className="space-y-4 lg:col-span-2">
 <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-[#F9F8F6]">
 Showrooms
 </h4>
 <ul className="space-y-2 text-sm text-[#A89F91] leading-relaxed">
 <li>
 <span className="text-[#F3EFE9]">Copenhagen Studio</span>
 <br />
 Nørrebrogade 42, DK
 </li>
 <li>
 <span className="text-[#F3EFE9]">Soho Gallery</span>
 <br />
 112 Greene St, NY
 </li>
 <li>
 <span className="text-[#F3EFE9]">Melbourne Atelier</span>
 <br />
 Fitzroy St, AU
 </li>
 </ul>
 </div>

 <div className="lg:col-span-4 space-y-4">
 <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-[#F9F8F6]">
 The Journal
 </h4>
 <p className="text-sm text-[#A89F91] leading-relaxed">
 Subscribe to receive editorial announcements, design advice, showroom events, and private material sample access.
 </p>

 {!subscribed ? (
 <form onSubmit={handleSubscribe} className="flex border-b border-[#3E3E3E] pb-2 pt-2 focus-within:border-[#F9F8F6] transition-colors leading-none">
 <input
 type="email"
 required
 value={emailAddress}
 placeholder="Enter your email address"
 onChange={(e) => setEmailAddress(e.target.value)}
 className="bg-transparent border-none text-sm text-[#F9F8F6] tracking-wider placeholder-[#7E756B] focus:outline-none flex-grow"
 />
 <button
 type="submit"
 className="text-[#C2BCAE] hover:text-[#F9F8F6] transition-colors p-1"
 aria-label="Subscribe"
 >
 <ArrowRight className="w-5 h-5" />
 </button>
 </form>
 ) : (
 <div className="p-3 bg-[#2A2A2A] rounded-sm text-center border border-[#C2BCAE]/20">
 <p className="text-xs font-mono text-[#C2BCAE] uppercase tracking-wider">
 Thank you. You are on the registry.
 </p>
 </div>
 )}
 </div>

 </div>

 <div className="content-shell mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#2A2A2A] px-4 pt-8 text-center font-mono text-xs uppercase tracking-widest text-[#7E756B] sm:px-6 md:flex-row md:text-left lg:px-8">
 <span>© {new Date().getFullYear()} LuxeNest Living, Inc. All rights reserved.</span>
 <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] md:justify-end">
 <Link href="/privacy-policy" className="hover:text-[#F3EFE9] transition-colors">Privacy Policy</Link>
 <Link href="/terms" className="hover:text-[#F3EFE9] transition-colors">Terms of Service</Link>
 <Link href="/about" className="hover:text-[#F3EFE9] transition-colors">About</Link>
 <Link href="/contact" className="hover:text-[#F3EFE9] transition-colors">Contact</Link>
 </div>
 </div>

 </footer>
 );
}
