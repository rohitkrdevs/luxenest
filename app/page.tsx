"use client";

import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import BlogCard from '../components/BlogCard';
import { CATEGORIES, PRODUCTS, TESTIMONIALS, BLOGS } from '../data/products';
import { useRouter } from 'next/navigation';
import { useAppContext } from './providers';
import Link from 'next/link';
import { useMemo } from 'react';

export default function Home() {
 const router = useRouter();
 const { addToCart } = useAppContext();

 const featuredCategories = useMemo(() => CATEGORIES.slice(0, 3), []);
 const featuredProducts = useMemo(() => PRODUCTS.filter((p) => p.isFeatured).slice(0, 4), []);

 return (
 <div className="space-y-20 bg-[#F9F8F6] pb-20 sm:space-y-24">
 <HeroSection />

 <section className="mx-auto max-w-4xl px-4 pt-8 text-center sm:pt-10">
 <span className="eyebrow text-[#C2BCAE]">
 THE DESIGN ETHOS OF RESTRAINT
 </span>
 <h2 className="mt-4 font-serif text-2xl font-light leading-snug tracking-wide text-[#1A1A1A] sm:text-4xl">
 "Luxury is not louder; it is quieter. It is the weight of solid marble, the warmth of stave oak, and the perfect tension of woven Danish cord."
 </h2>
 <div className="w-16 h-[1px] bg-[#E2DEC2] mx-auto my-6" />
 <p className="mx-auto max-w-xl text-sm font-light leading-relaxed text-[#7E756B]">
 We collaborate with independent European designers and old-world workshops to create furnishings that resist artificial obsolescence. No cheap veneers, no synthetic fills, no shortcuts. Just pure architectural integrity.
 </p>
 </section>

 <section className="content-shell space-y-8 px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3">
 <div className="space-y-1">
 <span className="text-[10px] font-mono tracking-[0.2em] text-[#7E756B] uppercase block">
 Architectural blueprints
 </span>
 <h2 className="section-heading">
 Curated Spaces
 </h2>
 </div>
 <Link
 href="/category"
 className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-[0.18em] uppercase text-[#1A1A1A] hover:text-[#7E756B] transition-colors focus:outline-none"
 >
 <span>Browse All Rooms</span>
 <ArrowRight className="w-4 h-4 text-[#7E756B] group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {featuredCategories.map((cat) => (
 <CategoryCard
 key={cat.id}
 category={cat}
 />
 ))}
 </div>
 </section>

 <section className="content-shell space-y-8 px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3">
 <div className="space-y-1">
 <span className="text-[10px] font-mono tracking-[0.2em] text-[#7E756B] uppercase block">
 The AW26 Catalog Highlights
 </span>
 <h2 className="section-heading">
 New Arrivals
 </h2>
 </div>
 <Link
 href="/shop"
 className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-[0.18em] uppercase text-[#1A1A1A] hover:text-[#7E756B] transition-colors focus:outline-none"
 >
 <span>View Complete Shop</span>
 <ArrowRight className="w-4 h-4 text-[#7E756B] group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {featuredProducts.map((product) => (
 <ProductCard
 key={product.id}
 product={product}
 />
 ))}
 </div>
 </section>

 <section className="content-shell px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 overflow-hidden rounded-sm border border-[#EAE6DF] bg-[#F3EFE9] shadow-[0_18px_60px_rgba(26,26,26,0.045)] lg:grid-cols-12">
 
 <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[400px]">
 <img
 src="/images/asset_21.jpg"
 alt="Artisan woodcarving"
 className="w-full h-full object-cover grayscale opacity-90"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-[#1A1A1A]/10" />
 </div>

 <div className="flex flex-col justify-center space-y-6 p-6 sm:p-10 md:p-14 lg:col-span-6">
 <span className="text-[10px] font-mono tracking-[0.25em] text-[#A89F91] uppercase">
 OUR CHRONICLES
 </span>
 <h3 className="font-serif text-3xl font-light text-[#1A1A1A] tracking-wide leading-tight uppercase">
 Material Honesty over Ostentation
 </h3>
 <p className="text-sm text-[#7E756B] leading-relaxed font-sans font-light">
 We trace every timber stave back to licensed, sustainable oak forests in Germany and France. We only work with full-grain cowhides tanned on site using vegetable ingredients, and we treat our hand-woven paper cords with eco-waxing. We do not use plastics or chemical synthetic foams that release dangerous gasses inside your home.
 </p>

 <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#EAE6DF]">
 <div className="space-y-1">
 <span className="text-xl font-serif text-[#C2BCAE] block">100%</span>
 <span className="text-[10px] font-mono tracking-widest text-[#7E756B] uppercase block">
 FSC-Certified Woods
 </span>
 </div>
 <div className="space-y-1">
 <span className="text-xl font-serif text-[#C2BCAE] block">30+ Years</span>
 <span className="text-[10px] font-mono tracking-widest text-[#7E756B] uppercase block">
 Lifespan Engineering
 </span>
 </div>
 </div>

 <div className="pt-4">
 <Link
 href="/shop"
 className="btn-primary"
 >
 Inspect Eco Credentials
 </Link>
 </div>
 </div>

 </div>
 </section>

 <section className="border-y border-[#3E3E3E] bg-[#1A1A1A] py-20 text-[#F9F8F6] sm:py-24">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
 
 <div className="text-center space-y-2 ">
 <span className="text-[11px] font-mono tracking-[0.25em] text-[#C2BCAE] uppercase">
 VERIFIED RESIDENT PORTFOLIOS
 </span>
 <h2 className="font-serif text-3xl font-light text-[#F9F8F6] tracking-wide leading-snug uppercase">
 Living with LuxeNest
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#1A1A1A]">
 {TESTIMONIALS.map((t) => (
 <TestimonialCard key={t.id} testimonial={t} />
 ))}
 </div>

 </div>
 </section>

 <section className="content-shell space-y-8 px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 ">
 <div className="space-y-1">
 <span className="text-[10px] font-mono tracking-[0.2em] text-[#7E756B] uppercase block">
 Architectural materials & guides
 </span>
 <h2 className="section-heading">
 The LuxeNest Journal
 </h2>
 </div>
 <Link
 href="/blog"
 className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-[0.18em] uppercase text-[#1A1A1A] hover:text-[#7E756B] transition-colors focus:outline-none"
 >
 <span>Read Design Essays</span>
 <ArrowRight className="w-4 h-4 text-[#7E756B] group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {BLOGS.map((blog) => (
 <BlogCard
 key={blog.id}
 blog={blog}
 />
 ))}
 </div>
 </section>

 </div>
 );
}
