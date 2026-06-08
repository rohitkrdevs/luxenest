"use client";

import { useState, useMemo, useEffect } from 'react';
import { User, ClipboardList, MapPin, Heart, ShieldAlert, LogOut, Sparkles, SlidersHorizontal, Settings, HelpCircle, Eye, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../../app/providers';

export default function AccountPage() {
 const router = useRouter();
 const { currentUser, orders, logout, addToCart } = useAppContext();

 const [activeSubTab, setActiveSubTab] = useState<'profile' | 'orders' | 'addresses' | 'wishlist' | 'settings'>('profile');

 useEffect(() => {
 if (!currentUser) {
 router.push('/auth');
 }
 }, [currentUser, router]);

 const activeUser = useMemo(() => {
 return (currentUser as any) || {
 name: 'Christian Vander',
 email: 'christian.vander@residence.com',
 avatar: '/images/asset_23.jpg',
 phone: '+1 (555) 792-8822',
 memberSince: 'October 2024',
 };
 }, [currentUser]);

 const addresses = [
 { id: '1', label: 'Primary Residence', street: '112 Greene St, Apt 4B', city: 'New York', state: 'NY', zip: '10012', isDefault: true },
 { id: '2', label: 'Summer House', street: '24 Ocean Avenue', city: 'East Hampton', state: 'NY', zip: '11937', isDefault: false },
 ];

 const wishlistItems = useMemo(() => {
 return PRODUCTS.filter((p) => ['aura-floor-lamp', 'petra-coffee-table', 'weave-dining-chair'].includes(p.id));
 }, []);

 const handleWishlistAdd = (p: any) => {
 addToCart(p, p.colors[0]);
 };

 if (!currentUser) {
 return null; 
 }

 return (
 <div className="content-shell bg-[#F9F8F6] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
 
 <div className="border-b border-[#EAE6DF] pb-5 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
 <div className="space-y-1">
 <span className="text-[10px] font-mono tracking-[0.25em] text-[#C2BCAE] uppercase block">
 RESIDENT PORTAL AREA
 </span>
 <h1 className="section-heading">
 Resident Dashboard
 </h1>
 </div>

 <button
 onClick={() => {
 logout();
 router.push('/');
 }}
 className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-red-600 hover:text-red-800 uppercase focus:outline-none"
 >
 <LogOut className="w-4 h-4" />
 <span>Exit Account Portal</span>
 </button>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
 
 <div className="flex gap-2 overflow-x-auto pb-2 lg:col-span-3 lg:flex-col lg:overflow-visible lg:pb-0">
 
 {[
 { id: 'profile', label: 'Overview Profile', icon: <User className="w-4 h-4" /> },
 { id: 'orders', label: 'Order History', icon: <ClipboardList className="w-4 h-4" /> },
 { id: 'addresses', label: 'Addresses Registry', icon: <MapPin className="w-4 h-4" /> },
 { id: 'wishlist', label: 'Curated Wishlists', icon: <Heart className="w-4 h-4" /> },
 { id: 'settings', label: 'Account Security', icon: <Settings className="w-4 h-4" /> },
 ].map((sub) => (
 <button
 key={sub.id}
 onClick={() => setActiveSubTab(sub.id as any)}
 className={`flex min-w-max items-center gap-3 rounded-sm border px-4 py-3 text-left text-xs uppercase tracking-widest transition-all lg:min-w-0 ${
 activeSubTab === sub.id
 ? 'bg-[#1A1A1A] border-[#1A1A1A] text-[#F9F8F6]'
 : 'bg-transparent border-transparent text-[#7E756B] hover:text-[#1A1A1A] hover:bg-[#F3EFE9]'
 }`}
 >
 {sub.icon}
 <span>{sub.label}</span>
 </button>
 ))}

 </div>

 <div className="panel p-5 sm:p-8 lg:col-span-9">
 
 {activeSubTab === 'profile' && (
 <div className="space-y-8 animate-fade-in">
 <h2 className="font-serif text-2xl font-light text-[#1A1A1A] uppercase tracking-wider pb-3 border-b border-[#EAE6DF]">
 Welcome Back, {activeUser.name}
 </h2>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 
 <div className="p-6 bg-[#F3EFE9] border border-[#C2BCAE]/20 rounded-sm relative overflow-hidden">
 <div className="absolute top-4 right-4 text-[#C2BCAE]/20">
 <Sparkles className="w-16 h-16" />
 </div>
 <span className="text-[9px] font-mono tracking-widest text-[#7E756B] uppercase block">SOCIETY TIER</span>
 <h3 className="font-serif text-xl font-light text-[#1A1A1A] tracking-wider uppercase mt-1">LuxeNest Diamond</h3>
 <p className="text-[11px] text-[#7E756B] font-sans leading-relaxed mt-2">
 Complimentary White-Glove logistic upgrades, lifetime material repair programs, and priority Copenhagen collection releases.
 </p>
 <span className="block text-[10px] font-mono text-[#1A1A1A] font-semibold mt-6 uppercase">Registered: 2024</span>
 </div>

 <div className="p-6 bg-[#F6F4F0] border border-[#EAE6DF] rounded-sm flex flex-col justify-between">
 <div>
 <span className="text-[9px] font-mono tracking-widest text-[#7E756B] uppercase block">PRIMARY SHIPPING</span>
 <h3 className="font-serif text-lg font-light text-[#1A1A1A] tracking-wider uppercase mt-1">PRIMARY RESIDENCE</h3>
 <p className="text-xs text-[#7E756B] font-mono mt-2 leading-relaxed">
 {addresses[0].street}
 <br />
 {addresses[0].city}, {addresses[0].state} {addresses[0].zip}
 </p>
 </div>
 <button
 onClick={() => setActiveSubTab('addresses')}
 className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a] font-bold hover:text-[#7E756B] focus:outline-none text-left mt-4"
 >
 Edit Registry →
 </button>
 </div>

 <div className="p-6 bg-[#FDFBF7] border border-[#EAE6DF] rounded-sm flex flex-col justify-between">
 <div>
 <span className="text-[9px] font-mono tracking-widest text-[#7E756B] uppercase block">SHIPMENT TRACKING</span>
 {orders.length > 0 ? (
 <>
 <h3 className="font-serif text-lg font-light text-[#1A1A1A] tracking-wider uppercase mt-1">{orders[0].id}</h3>
 <p className="text-xs text-[#7E756B] font-sans mt-2">
 Status: <span className="text-amber-700 font-mono font-bold uppercase text-[10px]">{orders[0].status}</span>
 <br />
 Placed: {orders[0].date}
 <br />
 Logistics: White Glove
 </p>
 </>
 ) : (
 <>
 <h3 className="font-serif text-lg font-light text-[#A89F91] tracking-wider uppercase mt-1">No Active Orders</h3>
 <p className="text-xs text-[#7E756B] font-sans mt-2">
 Your design docket is currently empty. Our carriers are standing on standby.
 </p>
 </>
 )}
 </div>
 <button
 onClick={() => setActiveSubTab('orders')}
 className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1a] font-bold hover:text-[#7E756B] focus:outline-none text-left mt-4"
 >
 View History →
 </button>
 </div>

 </div>

 <div className="p-5 border border-[#EAE6DF] rounded-sm space-y-4">
 <h4 className="font-serif text-base font-light uppercase tracking-widest text-[#1A1A1A]">RESIDENT CREDENTIALS</h4>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-[#7E756B]">
 <div>
 <span className="block text-[10px] text-[#A89F91] uppercase">Full Account Holder</span>
 <span className="text-[#1A1A1A] font-medium">{activeUser.name}</span>
 </div>
 <div>
 <span className="block text-[10px] text-[#A89F91] uppercase">Primary Email</span>
 <span className="text-[#1A1A1A] font-medium">{activeUser.email}</span>
 </div>
 <div>
 <span className="block text-[10px] text-[#A89F91] uppercase">Secure Telephone</span>
 <span className="text-[#1A1A1A] font-medium">{activeUser.phone || 'N/A'}</span>
 </div>
 </div>
 </div>

 </div>
 )}

 {activeSubTab === 'orders' && (
 <div className="space-y-6 animate-fade-in">
 <h2 className="font-serif text-2xl font-light text-[#1A1A1A] uppercase tracking-wider pb-3 border-b border-[#EAE6DF]">
 Order Chronicles
 </h2>

 {orders.length > 0 ? (
 <div className="overflow-x-auto">
 <table className="w-full text-left border-collapse text-xs font-mono uppercase tracking-wider">
 <thead>
 <tr className="border-b border-[#EAE6DF] text-[#7E756B] pb-3 text-[10px]">
 <th className="py-3 font-semibold">Order ID</th>
 <th className="py-3 font-semibold">Date Placed</th>
 <th className="py-3 font-semibold">Carrier Details</th>
 <th className="py-3 font-semibold">Total Price</th>
 <th className="py-3 font-semibold">Delivery Status</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-[#EAE6DF]/60 text-[#1A1A1A]">
 {orders.map((ord) => (
 <tr key={ord.id} className="hover:bg-[#F9F8F6] transition-colors">
 <td className="py-4 font-bold text-slate-800">{ord.id}</td>
 <td className="py-4 text-[#7E756B]">{ord.date}</td>
 <td className="py-4 text-[#7E756B] max-w-[200px] truncate">{ord.deliveryMethod}</td>
 <td className="py-4 font-bold">${ord.total.toLocaleString()}</td>
 <td className="py-4">
 <span className={`px-2.5 py-1 rounded-xs font-mono font-bold text-[9px] block text-center w-24 border ${
 ord.status === 'processing'
 ? 'bg-amber-50 border-amber-200 text-amber-800'
 : 'bg-green-50 border-green-200 text-green-800'
 }`}>
 {ord.status}
 </span>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 ) : (
 <div className="py-12 border border-[#EAE6DF] border-dashed rounded-sm text-center space-y-4">
 <span className="block font-serif text-lg text-[#A89F91] font-light">No historic transactions recorded.</span>
 <p className="text-xs text-[#7E756B] font-sans">Place custom furniture placements through standard checkouts to populate your personal account history logs.</p>
 <button
 onClick={() => router.push('/shop')}
 className="px-5 py-2.5 bg-[#1A1A1A] text-[#F9F8F6] text-xs font-mono uppercase tracking-widest rounded-sm hover:bg-[#7E756B] transition-colors"
 >
 Examine Collection
 </button>
 </div>
 )}

 </div>
 )}

 {activeSubTab === 'addresses' && (
 <div className="space-y-6 animate-fade-in">
 <h2 className="font-serif text-2xl font-light text-[#1A1A1A] uppercase tracking-wider pb-3 border-b border-[#EAE6DF]">
 Addresses Registry
 </h2>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {addresses.map((add) => (
 <div key={add.id} className="p-5 border border-[#EAE6DF] bg-[#F6F4F0] rounded-sm space-y-4 flex flex-col justify-between">
 <div className="space-y-1.5">
 <div className="flex justify-between items-center text-xs font-mono uppercase tracking-wider font-semibold">
 <span className="text-[#1A1A1A]">{add.label}</span>
 {add.isDefault && (
 <span className="text-[9px] bg-[#1A1A1A] text-[#F9F8F6] px-2 py-0.5 rounded-sm shadow-sm font-bold">DEFAULT</span>
 )}
 </div>
 <p className="text-xs font-mono text-[#7E756B] leading-relaxed pt-2">
 {add.street}
 <br />
 {add.city}, {add.state} {add.zip}
 </p>
 </div>

 <div className="flex gap-4 pt-4 border-t border-[#EAE6DF]/60 text-[10px] font-mono uppercase tracking-widest font-bold">
 <button className="text-[#1A1A1A] hover:text-[#7E756B] focus:outline-none">Modify</button>
 <button className="text-[#7E756B] hover:text-red-600 focus:outline-none">Delete</button>
 </div>
 </div>
 ))}
 </div>

 </div>
 )}

 {activeSubTab === 'wishlist' && (
 <div className="space-y-6 animate-fade-in">
 <h2 className="font-serif text-2xl font-light text-[#1A1A1A] uppercase tracking-wider pb-3 border-b border-[#EAE6DF]">
 Curated Wishlists
 </h2>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
 {wishlistItems.map((item) => (
 <div key={item.id} className="border border-[#EAE6DF] p-4 rounded-sm flex flex-col justify-between h-full bg-[#F3EFE9]">
 
 <div className="flex gap-4">
 <img src={item.images[0]} alt={item.name} className="w-16 h-20 object-cover rounded-sm border border-[#EAE6DF] bg-white flex-shrink-0" />
 <div className="space-y-1 min-w-0">
 <h4 className="font-serif text-base font-light text-[#1A1A1A] truncate">{item.name}</h4>
 <p className="text-[10px] font-mono text-[#7E756B] uppercase truncate">{item.tagline}</p>
 <span className="font-mono text-xs font-semibold text-[#1A1A1A] pt-2 block">${item.price.toLocaleString()}</span>
 </div>
 </div>

 <div className="pt-4 border-t border-[#EAE6DF] mt-4 flex gap-4 ">
 <button
 onClick={() => router.push(`/product/${item.id}`)}
 className="flex-1 py-2 bg-transparent border border-[#1A1A1A] text-[#1A1A1A] text-[10px] font-mono uppercase tracking-wider text-center font-bold hover:bg-[#1A1A1A] hover:text-[#F9F8F6] rounded-sm transition-all flex items-center justify-center gap-1.5 focus:outline-none"
 >
 <Eye className="w-3.5 h-3.5" />
 <span>Specs</span>
 </button>
 <button
 onClick={() => handleWishlistAdd(item)}
 className="flex-1 py-2 bg-[#1A1A1A] text-[#F9F8F6] text-[10px] font-mono uppercase tracking-wider text-center font-bold hover:bg-[#7E756B] rounded-sm transition-colors flex items-center justify-center gap-1.5 focus:outline-none"
 >
 <ShoppingBag className="w-3.5 h-3.5" />
 <span>Claim</span>
 </button>
 </div>

 </div>
 ))}
 </div>

 </div>
 )}

 {activeSubTab === 'settings' && (
 <div className="space-y-6 animate-fade-in">
 <h2 className="font-serif text-2xl font-light text-[#1A1A1A] uppercase tracking-wider pb-3 border-b border-[#EAE6DF]">
 Account Security Settings
 </h2>

 <div className="space-y-4">
 <div className="space-y-1.5">
 <label htmlFor="sec-currpass" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">Current Passphrase</label>
 <input
 id="sec-currpass"
 type="password"
 placeholder="Enter current passphrase"
 className="w-full text-xs font-mono px-4 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>

 <div className="space-y-1.5">
 <label htmlFor="sec-newpass" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">New Passphrase</label>
 <input
 id="sec-newpass"
 type="password"
 placeholder="Select new password"
 className="w-full text-xs font-mono px-4 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>

 <div className="pt-4">
 <button
 onClick={() => alert('Account credentials refreshed.')}
 className="px-6 py-3 bg-[#1A1A1A] text-[#F9F8F6] text-xs font-mono uppercase tracking-widest hover:bg-[#7E756B] rounded-sm transition-colors focus:outline-none"
 >
 Refresh Passphrase
 </button>
 </div>
 </div>

 </div>
 )}

 </div>

 </div>

 </div>
 );
}
