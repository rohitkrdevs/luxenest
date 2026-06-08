"use client";

import React, { useState } from 'react';
import { Mail, Lock, User, Sparkles, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../../app/providers';

export default function AuthPage() {
 const router = useRouter();
 const { login } = useAppContext();

 const [activeTab, setActiveTab] = useState<'signin' | 'register'>('signin');
 
 const [signInEmail, setSignInEmail] = useState('');
 const [signInPassword, setSignInPassword] = useState('');
 
 const [regName, setRegName] = useState('');
 const [regEmail, setRegEmail] = useState('');
 const [regPassword, setRegPassword] = useState('');
 const [regAgree, setRegAgree] = useState(false);

 const [statusMsg, setStatusMsg] = useState<string | null>(null);

 const handleSignInSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 if (signInEmail && signInPassword) {
 setStatusMsg('Verifying credentials...');
 setTimeout(() => {
 login({
 name: 'Christian Vander',
 email: signInEmail,
 });
 router.push('/account');
 }, 1000);
 }
 };

 const handleRegisterSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 if (regName && regEmail && regPassword && regAgree) {
 setStatusMsg('Creating residential account...');
 setTimeout(() => {
 login({
 name: regName,
 email: regEmail,
 });
 router.push('/account');
 }, 1200);
 }
 };

 return (
 <div className="flex min-h-[80vh] overflow-hidden border-b border-[#EAE6DF] bg-[#F9F8F6]">
 
 <div className="flex w-full items-center justify-center p-6 sm:p-10 md:p-14 lg:w-1/2">
 <div className="w-full max-w-md space-y-8">
 
 <div className="space-y-2.5 text-center lg:text-left">
 <span className="text-[10px] font-mono tracking-[0.25em] text-[#C2BCAE] uppercase block">
 THE RESIDENT PORTAL
 </span>
 <h1 className="font-serif text-3xl font-light text-[#1A1A1A] tracking-wider uppercase">
 Join the Society
 </h1>
 <p className="text-xs text-[#7E756B] font-sans font-light">
 Create an account to save curated wishlists, manage material samples, and book white-glove logistics.
 </p>
 </div>

 <div className="flex border-b border-[#EAE6DF] pb-[2px] gap-6">
 <button
 onClick={() => {
 setActiveTab('signin');
 setStatusMsg(null);
 }}
 className={`pb-3 font-mono text-xs tracking-widest uppercase focus:outline-none transition-all ${
 activeTab === 'signin'
 ? 'border-b-2 border-[#1A1A1A] text-[#1A1A1A] font-semibold'
 : 'text-[#7E756B] hover:text-[#1A1A1A]'
 }`}
 >
 Sign In
 </button>
 <button
 onClick={() => {
 setActiveTab('register');
 setStatusMsg(null);
 }}
 className={`pb-3 font-mono text-xs tracking-widest uppercase focus:outline-none transition-all ${
 activeTab === 'register'
 ? 'border-b-2 border-[#1A1A1A] text-[#1A1A1A] font-semibold'
 : 'text-[#7E756B] hover:text-[#1A1A1A]'
 }`}
 >
 Register
 </button>
 </div>

 {statusMsg && (
 <div className="p-3 bg-[#F3EFE9] border border-[#C2BCAE]/30 rounded-sm flex items-center gap-2.5">
 <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
 <span className="text-xs font-mono text-[#1A1A1A] tracking-wider uppercase">{statusMsg}</span>
 </div>
 )}

 {activeTab === 'signin' ? (
 <form onSubmit={handleSignInSubmit} className="space-y-5">
 
 <div className="space-y-1.5">
 <label htmlFor="signin-email" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">
 Email Address
 </label>
 <div className="relative flex items-center">
 <Mail className="absolute left-3 w-4 h-4 text-[#C2BCAE] stroke-[1.5]" />
 <input
 id="signin-email"
 type="email"
 required
 value={signInEmail}
 onChange={(e) => setSignInEmail(e.target.value)}
 placeholder="name@residence.com"
 className="w-full text-xs font-mono pl-10 pr-4 py-3 bg-[#F3EFE9] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A] placeholder-[#A89F91]"
 />
 </div>
 </div>

 <div className="space-y-1.5">
 <div className="flex justify-between items-center">
 <label htmlFor="signin-password" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">
 Security Password
 </label>
 <button
 type="button"
 onClick={() => setStatusMsg('Password reset code sent to email.')}
 className="text-[9px] font-mono text-[#A89F91] hover:text-[#1A1A1A] uppercase focus:outline-none"
 >
 Forgot?
 </button>
 </div>
 <div className="relative flex items-center">
 <Lock className="absolute left-3 w-4 h-4 text-[#C2BCAE] stroke-[1.5]" />
 <input
 id="signin-password"
 type="password"
 required
 value={signInPassword}
 onChange={(e) => setSignInPassword(e.target.value)}
 placeholder="Enter passphrase"
 className="w-full text-xs font-mono pl-10 pr-4 py-3 bg-[#F3EFE9] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A]"
 />
 </div>
 </div>

 <button
 type="submit"
 className="btn-primary w-full py-4"
 >
 Authenticate Resident
 </button>

 </form>
 ) : (
 <form onSubmit={handleRegisterSubmit} className="space-y-5">
 
 <div className="space-y-1.5">
 <label htmlFor="reg-name" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">
 Full Modern Name
 </label>
 <div className="relative flex items-center">
 <User className="absolute left-3 w-4 h-4 text-[#C2BCAE] stroke-[1.5]" />
 <input
 id="reg-name"
 type="text"
 required
 value={regName}
 onChange={(e) => setRegName(e.target.value)}
 placeholder="Anouk Vance"
 className="w-full text-xs font-mono pl-10 pr-4 py-3 bg-[#F3EFE9] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A] placeholder-[#A89F91]"
 />
 </div>
 </div>

 <div className="space-y-1.5">
 <label htmlFor="reg-email" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">
 Preferred Email
 </label>
 <div className="relative flex items-center">
 <Mail className="absolute left-3 w-4 h-4 text-[#C2BCAE] stroke-[1.5]" />
 <input
 id="reg-email"
 type="email"
 required
 value={regEmail}
 onChange={(e) => setRegEmail(e.target.value)}
 placeholder="name@residence.com"
 className="w-full text-xs font-mono pl-10 pr-4 py-3 bg-[#F3EFE9] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A] placeholder-[#A89F91]"
 />
 </div>
 </div>

 <div className="space-y-1.5">
 <label htmlFor="reg-password" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">
 Design Passphrase
 </label>
 <div className="relative flex items-center">
 <Lock className="absolute left-3 w-4 h-4 text-[#C2BCAE] stroke-[1.5]" />
 <input
 id="reg-password"
 type="password"
 required
 value={regPassword}
 onChange={(e) => setRegPassword(e.target.value)}
 placeholder="Select secure pass"
 className="w-full text-xs font-mono pl-10 pr-4 py-3 bg-[#F3EFE9] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A]"
 />
 </div>
 </div>

 <div className="pt-2">
 <button
 type="button"
 onClick={() => setRegAgree(!regAgree)}
 className="flex items-start text-left focus:outline-none group"
 >
 <div className={`w-4 h-4 rounded-sm border mr-2.5 mt-0.5 flex items-center justify-center transition-colors ${
 regAgree ? 'bg-[#1A1A1A] border-[#1A1A1A]' : 'border-[#EAE6DF] bg-white group-hover:border-[#7E756B]'
 }`}>
 {regAgree && <CheckCircle className="w-3.5 h-3.5 text-[#F9F8F6]" />}
 </div>
 <span className="text-[10px] font-mono text-[#7E756B] uppercase leading-snug tracking-wide ">
 I agree to the luxury terms of trade, white-glove privacy charters, and material care warranties.
 </span>
 </button>
 </div>

 <button
 type="submit"
 disabled={!regAgree}
 className={`w-full rounded-sm py-4 text-xs font-medium uppercase tracking-[0.16em] transition-colors ${
 regAgree
 ? 'bg-[#1A1A1A] text-[#F9F8F6] hover:bg-[#7E756B] cursor-pointer'
 : 'bg-[#EAE6DF]/60 text-[#A89F91] cursor-not-allowed'
 }`}
 >
 Register New Resident
 </button>

 </form>
 )}

 </div>
 </div>

 <div className="hidden lg:block lg:w-1/2 relative bg-[#1A1A1A]">
 <img
 src="/images/asset_24.jpg"
 alt="LuxeNest Minimalist living space study"
 className="w-full h-full object-cover opacity-75 object-center grayscale"
 />
 <div className="absolute inset-0 bg-[#1A1A1A]/20" />
 
 <div className="absolute bottom-16 left-16 right-16 text-[#F9F8F6] space-y-4">
 <span className="text-[11px] font-mono tracking-[0.2em] text-[#C2BCAE] uppercase block">
 FEATURED SPACE: THE COPENHAGEN STUDY
 </span>
 <p className="font-serif text-2xl font-light leading-relaxed">
 "A thoughtfully designed home nourishes the psyche. It represents a shelter from the noise of the physical world."
 </p>
 <div className="w-12 h-[1px] bg-[#C2BCAE]" />
 <span className="block text-xs font-mono uppercase text-[#A89F91]">
 — LARS JENSEN, LUXENEST CREATIVE STUDIO
 </span>
 </div>
 </div>

 </div>
 );
}
