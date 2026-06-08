import { SlidersHorizontal, Check, RefreshCw, Star } from 'lucide-react';
import { CATEGORIES } from '../data/products';

interface FilterSidebarProps {
 selectedCategory: string | null;
 onSelectCategory: (category: string | null) => void;
 minPrice: number;
 maxPrice: number;
 onChangePriceRange: (min: number, max: number) => void;
 selectedRating: number | null;
 onSelectRating: (rating: number | null) => void;
 selectedMaterials: string[];
 onToggleMaterial: (material: string) => void;
 inStockOnly: boolean;
 onToggleInStock: (checked: boolean) => void;
 sortBy: string;
 onChangeSortBy: (sort: string) => void;
 availableMaterials: string[];
 onResetFilters: () => void;
}

export default function FilterSidebar({
 selectedCategory,
 onSelectCategory,
 minPrice,
 maxPrice,
 onChangePriceRange,
 selectedRating,
 onSelectRating,
 selectedMaterials,
 onToggleMaterial,
 inStockOnly,
 onToggleInStock,
 sortBy,
 onChangeSortBy,
 availableMaterials,
 onResetFilters,
}: FilterSidebarProps) {
 
 const sortOptions = [
 { label: 'Featured & Editorial', value: 'featured' },
 { label: 'Price: Low to High', value: 'price-asc' },
 { label: 'Price: High to Low', value: 'price-desc' },
 { label: 'Customer Rating', value: 'rating' },
 ];

 const quickPriceFilters = [
 { label: 'All Budgets', min: 0, max: 10000 },
 { label: 'Under $1,000', min: 0, max: 1000 },
 { label: '$1,000 - $2,500', min: 1000, max: 2500 },
 { label: 'Over $2,500', min: 2500, max: 10000 },
 ];

 return (
 <aside className="w-full space-y-7 rounded-sm border border-[#EAE6DF] bg-white/65 p-5 shadow-[0_16px_50px_rgba(26,26,26,0.04)]">
 
 {/* Header with quick reset */}
 <div className="flex items-center justify-between pb-4 border-b border-[#EAE6DF]">
 <div className="flex items-center gap-2 text-sm font-sans font-medium uppercase tracking-[0.15em] text-[#1A1A1A]">
 <SlidersHorizontal className="w-4 h-4 text-[#7E756B]" />
 <span>Refine Selection</span>
 </div>
 <button
 id="btn-reset-filters"
 onClick={onResetFilters}
 className="text-[10px] font-mono tracking-widest uppercase text-[#7E756B] hover:text-[#1A1A1A] flex items-center gap-1 transition-colors focus:outline-none"
 >
 <RefreshCw className="w-3 h-3" />
 <span>Reset</span>
 </button>
 </div>

 {/* Sorting widget */}
 <div className="space-y-3">
 <label htmlFor="sort-selector" className="block text-xs font-mono tracking-[0.2em] text-[#7E756B] uppercase">Sort By</label>
 <select
 id="sort-selector"
 value={sortBy}
 onChange={(e) => onChangeSortBy(e.target.value)}
 className="w-full rounded-sm border border-[#EAE6DF] bg-[#F3EFE9] px-3 py-3 text-xs font-medium uppercase tracking-widest text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none"
 >
 {sortOptions.map((opt) => (
 <option key={opt.value} value={opt.value}>
 {opt.label}
 </option>
 ))}
 </select>
 </div>

 {/* Category List */}
 <div className="space-y-3">
 <span className="block text-xs font-mono tracking-[0.2em] text-[#7E756B] uppercase">Space Room</span>
 <div className="flex flex-col space-y-1.5">
 <button
 id="cat-filter-all"
 onClick={() => onSelectCategory(null)}
 className={`flex items-center justify-between rounded-sm px-2 py-2 text-left text-xs font-medium uppercase tracking-wider transition-colors ${
 selectedCategory === null ? 'text-[#1A1A1A]' : 'text-[#7E756B] hover:text-[#1A1A1A]'
 }`}
 >
 <span>All Spaces</span>
 {selectedCategory === null && <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />}
 </button>
 
 {CATEGORIES.map((cat) => (
 <button
 id={`cat-filter-${cat.id}`}
 key={cat.id}
 onClick={() => onSelectCategory(cat.id)}
 className={`flex items-center justify-between rounded-sm px-2 py-2 text-left text-xs font-medium uppercase tracking-wider transition-colors ${
 selectedCategory === cat.id ? 'text-[#1A1A1A]' : 'text-[#7E756B] hover:text-[#1A1A1A]'
 }`}
 >
 <span>{cat.name}</span>
 {selectedCategory === cat.id && <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
 </button>
 ))}
 </div>
 </div>

 {/* Pricing Filters */}
 <div className="space-y-4">
 <span className="block text-xs font-mono tracking-[0.2em] text-[#7E756B] uppercase">Budget (USD)</span>
 
 {/* Quick select range filters */}
 <div className="grid grid-cols-2 gap-2">
 {quickPriceFilters.map((qp, idx) => {
 const isSelected = minPrice === qp.min && maxPrice === qp.max;
 return (
 <button
 id={`quick-price-${idx}`}
 key={qp.label}
 onClick={() => onChangePriceRange(qp.min, qp.max)}
 className={`rounded-sm border px-2 py-2 text-[10px] uppercase tracking-wide transition-colors ${
 isSelected
 ? 'bg-[#1A1A1A] border-[#1A1A1A] text-[#F9F8F6]'
 : 'bg-[#F3EFE9] border-[#EAE6DF] text-[#7E756B] hover:text-[#1A1A1A] hover:border-[#7E756B]'
 }`}
 >
 {qp.label}
 </button>
 );
 })}
 </div>

 {/* Precise Inputs Min & Max */}
 <div className="flex items-center gap-2 pt-1">
 <div className="flex-1">
 <span className="text-[9px] font-mono text-[#A89F91] block mb-1 uppercase">Min</span>
 <div className="relative flex items-center">
 <span className="absolute left-2.5 text-[10px] font-mono text-[#7E756B]">$</span>
 <input
 id="price-min-input"
 type="number"
 value={minPrice}
 onChange={(e) => onChangePriceRange(Math.max(0, parseInt(e.target.value) || 0), maxPrice)}
 className="w-full text-xs font-mono pl-6 pr-2 py-1.5 bg-[#F3EFE9] border border-[#EAE6DF] focus:outline-none focus:border-[#1A1A1A] rounded-sm text-[#1A1A1A]"
 />
 </div>
 </div>
 <span className="text-[#A89F91] pt-4 font-mono text-xs">-</span>
 <div className="flex-1">
 <span className="text-[9px] font-mono text-[#A89F91] block mb-1 uppercase">Max</span>
 <div className="relative flex items-center">
 <span className="absolute left-2.5 text-[10px] font-mono text-[#7E756B]">$</span>
 <input
 id="price-max-input"
 type="number"
 value={maxPrice}
 onChange={(e) => onChangePriceRange(minPrice, Math.max(minPrice, parseInt(e.target.value) || 0))}
 className="w-full text-xs font-mono pl-6 pr-2 py-1.5 bg-[#F3EFE9] border border-[#EAE6DF] focus:outline-none focus:border-[#1A1A1A] rounded-sm text-[#1A1A1A]"
 />
 </div>
 </div>
 </div>
 </div>

 {/* Target Ratings */}
 <div className="space-y-3">
 <span className="block text-xs font-mono tracking-[0.2em] text-[#7E756B] uppercase">Minimum Experience</span>
 <div className="flex flex-col space-y-1.5">
 {[
 { value: null, label: 'All Reviews' },
 { value: 4.8, label: 'Superb 4.8+ Stars' },
 { value: 4.5, label: 'Excellent 4.5+ Stars' },
 ].map((ra, idx) => {
 const isSelected = selectedRating === ra.value;
 return (
 <button
 id={`rating-filter-${idx}`}
 key={idx}
 onClick={() => onSelectRating(ra.value)}
 className={`text-left text-xs font-sans tracking-wide py-1 transition-colors flex items-center justify-between ${
 isSelected ? 'text-[#1A1A1A] font-semibold' : 'text-[#7E756B] hover:text-[#1A1A1A]'
 }`}
 >
 <div className="flex items-center gap-1.5">
 {ra.value && <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />}
 <span>{ra.label}</span>
 </div>
 {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />}
 </button>
 );
 })}
 </div>
 </div>

 {/* Materials filter checkboxes */}
 <div className="space-y-3">
 <span className="block text-xs font-mono tracking-[0.2em] text-[#7E756B] uppercase">Raw Materials</span>
 <div className="flex flex-col space-y-2 max-h-48 overflow-y-auto pr-1">
 {availableMaterials.map((mat) => {
 const isSelected = selectedMaterials.includes(mat);
 return (
 <button
 id={`mat-filter-${mat.replace(/\s+/g, '-').toLowerCase()}`}
 key={mat}
 onClick={() => onToggleMaterial(mat)}
 className="group flex items-center rounded-sm py-1.5 text-left text-xs text-[#7E756B] transition-colors hover:text-[#1A1A1A]"
 >
 <div className={`w-4 h-4 rounded-sm border mr-2.5 flex items-center justify-center transition-colors ${
 isSelected ? 'bg-[#1A1A1A] border-[#1A1A1A]' : 'border-[#EAE6DF] bg-white group-hover:border-[#7E756B]'
 }`}>
 {isSelected && <Check className="w-3 h-3 text-[#F9F8F6] stroke-[3]" />}
 </div>
 <span className={`tracking-wide capitalize ${isSelected ? 'text-[#1A1A1A] font-medium' : ''}`}>
 {mat}
 </span>
 </button>
 );
 })}
 </div>
 </div>

 {/* Stock Availability status check */}
 <div className="pt-4 border-t border-[#EAE6DF]/60">
 <button
 id="stock-filter-toggle"
 onClick={() => onToggleInStock(!inStockOnly)}
 className="flex items-center text-left text-xs font-sans text-[#7E756B] hover:text-[#1A1A1A] transition-colors focus:outline-none group py-1"
 >
 <div className={`w-4 h-4 rounded-sm border mr-2.5 flex items-center justify-center transition-colors ${
 inStockOnly ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-[#EAE6DF] bg-white group-hover:border-[#7E756B]'
 }`}>
 {inStockOnly && <Check className="w-3 h-3 text-[#1A1A1A] stroke-[3]" />}
 </div>
 <span className={`tracking-widest uppercase font-mono text-[10px] ${inStockOnly ? 'text-[#1A1A1A] font-semibold' : ''}`}>
 Available For Fast Ship Only
 </span>
 </button>
 </div>

 </aside>
 );
}
