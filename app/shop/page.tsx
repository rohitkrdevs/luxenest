"use client";

import { useState, useMemo, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FilterSidebar from '../../components/FilterSidebar';
import ProductCard from '../../components/ProductCard';
import { PRODUCTS } from '../../data/products';
import { ChevronRight, X } from 'lucide-react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

function ShopContent() {
 const searchParams = useSearchParams();
 const router = useRouter();
 const pathname = usePathname();

 const [isMounted, setIsMounted] = useState(false);
 useEffect(() => {
   setIsMounted(true);
 }, []);

 const initialCategory = isMounted ? searchParams.get('category') : null;
 const searchQuery = isMounted ? searchParams.get('q') || '' : '';

 const [minPrice, setMinPrice] = useState(0);
 const [maxPrice, setMaxPrice] = useState(10000);
 const [selectedRating, setSelectedRating] = useState<number | null>(null);
 const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
 const [inStockOnly, setInStockOnly] = useState(false);
 const [sortBy, setSortBy] = useState('featured');
 
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 8;

 const availableMaterials = useMemo(() => {
 const allmats = PRODUCTS.flatMap((p) => p.materials);
 return Array.from(new Set(allmats)).sort();
 }, []);

 const handleToggleMaterial = (mat: string) => {
 setSelectedMaterials((prev) =>
 prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
 );
 setCurrentPage(1);
 };

 const handleResetFilters = () => {
 if (initialCategory || searchQuery) {
 router.push(pathname);
 }
 setMinPrice(0);
 setMaxPrice(10000);
 setSelectedRating(null);
 setSelectedMaterials([]);
 setInStockOnly(false);
 setSortBy('featured');
 setCurrentPage(1);
 };

 const handleClearSearch = () => {
 const params = new URLSearchParams(searchParams.toString());
 params.delete('q');
 router.push(`${pathname}?${params.toString()}`);
 };

 const handleSelectCategory = (catId: string | null) => {
 const params = new URLSearchParams(searchParams.toString());
 if (catId) {
 params.set('category', catId);
 } else {
 params.delete('category');
 }
 router.push(`${pathname}?${params.toString()}`);
 };

 const filteredProducts = useMemo(() => {
 let result = [...PRODUCTS];

 if (initialCategory) {
 result = result.filter((p) => p.category === initialCategory);
 }

 if (searchQuery.trim()) {
 const q = searchQuery.toLowerCase().trim();
 result = result.filter(
 (p) =>
 p.name.toLowerCase().includes(q) ||
 p.tagline.toLowerCase().includes(q) ||
 p.category.toLowerCase().includes(q)
 );
 }

 result = result.filter((p) => p.price >= minPrice && p.price <= maxPrice);

 if (selectedRating !== null) {
 result = result.filter((p) => p.rating >= selectedRating);
 }

 if (selectedMaterials.length > 0) {
 result = result.filter((p) =>
 p.materials.some((m) => selectedMaterials.includes(m))
 );
 }

 if (inStockOnly) {
 result = result.filter((p) => p.inStock);
 }

 if (sortBy === 'price-asc') {
 result.sort((a, b) => a.price - b.price);
 } else if (sortBy === 'price-desc') {
 result.sort((a, b) => b.price - a.price);
 } else if (sortBy === 'rating') {
 result.sort((a, b) => b.rating - a.rating);
 } else {
 result.sort((a, b) => {
 if (a.isFeatured && !b.isFeatured) return -1;
 if (!a.isFeatured && b.isFeatured) return 1;
 return 0;
 });
 }

 return result;
 }, [
 initialCategory,
 searchQuery,
 minPrice,
 maxPrice,
 selectedRating,
 selectedMaterials,
 inStockOnly,
 sortBy,
 ]);

 const paginatedProducts = useMemo(() => {
 const startIdx = (currentPage - 1) * itemsPerPage;
 return filteredProducts.slice(startIdx, startIdx + itemsPerPage);
 }, [filteredProducts, currentPage]);

 const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;

 const handlePageChange = (page: number) => {
 setCurrentPage(page);
 window.scrollTo({ top: 0, behavior: 'smooth' });
 };

 return (
 <div className="content-shell space-y-8 bg-[#F9F8F6] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
 
 <div className="space-y-4">
 <div className="flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#7E756B]">
 <span>Home</span>
 <ChevronRight className="w-3.5 h-3.5 mx-1" />
 <span>Shop</span>
 {initialCategory && (
 <>
 <ChevronRight className="w-3.5 h-3.5 mx-1" />
 <span className="text-[#1A1A1A] capitalize">{initialCategory}</span>
 </>
 )}
 </div>

 <div className="flex flex-col items-start justify-between gap-4 border-b border-[#EAE6DF] pb-6 md:flex-row md:items-end">
 <div className="space-y-2 ">
 <h1 className="section-heading">
 {initialCategory ? `${initialCategory} Spaces` : 'Curated Collection'}
 </h1>
 <p className="text-sm font-sans font-light text-[#7E756B] max-w-xl">
 Immerse yourself in items designed to complement high-ceiling architectures and residential lounges. Crafted on-demand from premium forest woods and organic stone blocks.
 </p>
 </div>

 <span className="block rounded-sm border border-[#EAE6DF] bg-[#F3EFE9] px-3.5 py-2.5 font-mono text-xs uppercase tracking-widest text-[#7E756B]">
 Cataloging: {filteredProducts.length} Objects Found
 </span>
 </div>
 </div>

 <AnimatePresence>
 {(searchQuery.trim() || initialCategory || selectedMaterials.length > 0) && (
 <motion.div 
 initial={{ opacity: 0, y: -10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -10 }}
 className="flex flex-wrap items-center gap-2.5 rounded-sm border border-[#EAE6DF] bg-[#F3EFE9] p-4"
 >
 <span className="text-[10px] font-mono tracking-widest text-[#7E756B] uppercase mr-2">
 FILTERS ENGAGED:
 </span>

 {searchQuery.trim() && (
 <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1A1A1A] text-[#F9F8F6] text-[10px] font-mono tracking-wider uppercase rounded-xs">
 <span>Term: "{searchQuery}"</span>
 <button onClick={handleClearSearch} className="hover:text-[#D4AF37] focus:outline-none ml-1 cursor-pointer">
 <X className="w-3 h-3" />
 </button>
 </div>
 )}

 {initialCategory && (
 <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1A1A1A] text-[#F9F8F6] text-[10px] font-mono tracking-wider uppercase rounded-xs">
 <span>Space: {initialCategory}</span>
 <button onClick={() => handleSelectCategory(null)} className="hover:text-[#D4AF37] focus:outline-none ml-1 cursor-pointer">
 <X className="w-3 h-3" />
 </button>
 </div>
 )}

 {selectedMaterials.map((mat) => (
 <div key={mat} className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1A1A1A] text-[#F9F8F6] text-[10px] font-mono tracking-wider uppercase rounded-xs">
 <span>Fabric: {mat}</span>
 <button onClick={() => handleToggleMaterial(mat)} className="hover:text-[#D4AF37] focus:outline-none ml-1 cursor-pointer">
 <X className="w-3 h-3" />
 </button>
 </div>
 ))}

 <button
 onClick={handleResetFilters}
 className="text-[10px] font-mono text-[#7E756B] hover:text-[#1A1A1A] underline tracking-wider uppercase focus:outline-none ml-auto cursor-pointer"
 >
 Clear Selected
 </button>
 </motion.div>
 )}
 </AnimatePresence>

 <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
 
 <div className="lg:col-span-1">
 <div className="lg:sticky lg:top-32">
 <FilterSidebar
 selectedCategory={initialCategory}
 onSelectCategory={handleSelectCategory}
 minPrice={minPrice}
 maxPrice={maxPrice}
 onChangePriceRange={(min, max) => {
 setMinPrice(min);
 setMaxPrice(max);
 setCurrentPage(1);
 }}
 selectedRating={selectedRating}
 onSelectRating={(r) => {
 setSelectedRating(r);
 setCurrentPage(1);
 }}
 selectedMaterials={selectedMaterials}
 onToggleMaterial={handleToggleMaterial}
 inStockOnly={inStockOnly}
 onToggleInStock={(checked) => {
 setInStockOnly(checked);
 setCurrentPage(1);
 }}
 sortBy={sortBy}
 onChangeSortBy={(sort) => {
 setSortBy(sort);
 setCurrentPage(1);
 }}
 availableMaterials={availableMaterials}
 onResetFilters={handleResetFilters}
 />
 </div>
 </div>

 <div className="lg:col-span-3 space-y-12">
 {paginatedProducts.length > 0 ? (
 <motion.div 
 layout
 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
 >
 <AnimatePresence mode="popLayout">
 {paginatedProducts.map((p) => (
 <motion.div
 key={p.id}
 layout
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.95 }}
 transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
 >
 <ProductCard product={p} />
 </motion.div>
 ))}
 </AnimatePresence>
 </motion.div>
 ) : (
 <div className="rounded-sm border border-dashed border-[#EAE6DF] p-8 text-center sm:p-16">
 <span className="block font-serif text-lg text-[#1A1A1A] font-light">No furniture pieces match your filter parameters.</span>
 <p className="text-xs text-[#7E756B] font-sans">Consider expanding your pricing limits, choosing alternative stone finishes, or removing search locks.</p>
 <button
 onClick={handleResetFilters}
 className="btn-primary px-5 py-2.5"
 >
 Restore Selection
 </button>
 </div>
 )}

 {totalPages > 1 && (
 <div className="flex justify-center items-center gap-3 pt-6 border-t border-[#EAE6DF]/60 ">
 
 <button
 disabled={currentPage === 1}
 onClick={() => handlePageChange(currentPage - 1)}
 className={`px-3 py-1.5 font-mono text-xs tracking-wider uppercase border rounded-xs transition-colors cursor-pointer ${
 currentPage === 1
 ? 'border-[#EAE6DF] text-[#A89F91] cursor-not-allowed'
 : 'border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F9F8F6]'
 }`}
 >
 Back
 </button>

 <div className="flex gap-2">
 {Array.from({ length: totalPages }).map((_, i) => {
 const pg = i + 1;
 return (
 <button
 key={pg}
 onClick={() => handlePageChange(pg)}
 className={`w-9 h-9 font-mono text-xs rounded-full flex items-center justify-center transition-colors cursor-pointer ${
 currentPage === pg
 ? 'bg-[#1A1A1A] text-[#F9F8F6]'
 : 'bg-[#F3EFE9] text-[#7E756B] hover:text-[#1A1A1A]'
 }`}
 >
 {pg}
 </button>
 );
 })}
 </div>

 <button
 disabled={currentPage === totalPages}
 onClick={() => handlePageChange(currentPage + 1)}
 className={`px-3 py-1.5 font-mono text-xs tracking-wider uppercase border rounded-xs transition-colors cursor-pointer ${
 currentPage === totalPages
 ? 'border-[#EAE6DF] text-[#A89F91] cursor-not-allowed'
 : 'border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F9F8F6]'
 }`}
 >
 Next
 </button>

 </div>
 )}

 </div>

 </div>

 </div>
 );
}

export default function Shop() {
 return (
 <Suspense fallback={<div className="p-20 text-center font-mono text-xs text-[#7E756B]">Loading...</div>}>
 <ShopContent />
 </Suspense>
 );
}
