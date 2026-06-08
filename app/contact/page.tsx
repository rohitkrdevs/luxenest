"use client";

import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
 return (
 <div className="bg-[#F9F8F6] min-h-screen py-24 ">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
 
 <div className="text-center space-y-4">
 <span className="text-[10px] font-mono tracking-[0.25em] text-[#C2BCAE] uppercase block">
 CLIENT SERVICES
 </span>
 <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-[0.12em] text-[#1A1A1A] uppercase">
 Contact Us
 </h1>
 <p className="text-sm text-[#7E756B] font-sans font-light max-w-xl mx-auto leading-relaxed">
 Our specialized client advisors are available to assist with private commissions, material sample requests, and White-Glove delivery coordination.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 
 <div className="bg-white p-8 border border-[#EAE6DF] rounded-sm text-center space-y-4">
 <div className="w-12 h-12 bg-[#F3EFE9] rounded-full flex items-center justify-center mx-auto mb-6">
 <Mail className="w-5 h-5 text-[#1A1A1A]" />
 </div>
 <h3 className="font-serif text-lg tracking-widest uppercase text-[#1A1A1A]">Email</h3>
 <p className="text-xs text-[#7E756B] font-mono">clientservices@luxenest.com</p>
 <p className="text-[10px] text-[#A89F91] uppercase tracking-widest mt-4">24/7 Response Time</p>
 </div>

 <div className="bg-white p-8 border border-[#EAE6DF] rounded-sm text-center space-y-4">
 <div className="w-12 h-12 bg-[#F3EFE9] rounded-full flex items-center justify-center mx-auto mb-6">
 <Phone className="w-5 h-5 text-[#1A1A1A]" />
 </div>
 <h3 className="font-serif text-lg tracking-widest uppercase text-[#1A1A1A]">Direct Line</h3>
 <p className="text-xs text-[#7E756B] font-mono">+1 (800) LUXE-NEST</p>
 <p className="text-[10px] text-[#A89F91] uppercase tracking-widest mt-4">Mon-Fri 9AM-6PM EST</p>
 </div>

 <div className="bg-white p-8 border border-[#EAE6DF] rounded-sm text-center space-y-4">
 <div className="w-12 h-12 bg-[#F3EFE9] rounded-full flex items-center justify-center mx-auto mb-6">
 <MapPin className="w-5 h-5 text-[#1A1A1A]" />
 </div>
 <h3 className="font-serif text-lg tracking-widest uppercase text-[#1A1A1A]">Studio</h3>
 <p className="text-xs text-[#7E756B] font-mono">1420 Greene St, New York, NY</p>
 <p className="text-[10px] text-[#A89F91] uppercase tracking-widest mt-4">By Appointment Only</p>
 </div>

 </div>

 </div>
 </div>
 );
}
