import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

interface Testimonial {
 id: string;
 author: string;
 role: string;
 quote: string;
 avatar: string;
 rating: number;
}

interface TestimonialCardProps {
 key?: any;
 testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
 return (
 <div
 id={`testimonial-${testimonial.id}`}
 className="bg-[#F6F4F0] p-8 rounded-sm border border-[#EAE6DF]/60 relative flex flex-col justify-between h-full "
 >
 {/* Absolute Decorative Quote Graphic mark */}
 <div className="absolute top-6 right-8 text-[#E2DEC2]/40 pointer-events-none">
 <Quote className="w-14 h-14" />
 </div>

 <div className="space-y-6">
 {/* Star Rating displays */}
 <div className="flex items-center gap-1">
 {Array.from({ length: 5 }).map((_, i) => (
 <Star
 key={i}
 className={`w-3.5 h-3.5 ${
 i < testimonial.rating
 ? 'text-[#D4AF37] fill-[#D4AF37]'
 : 'text-[#EAE6DF]'
 }`}
 />
 ))}
 </div>

 {/* Narrative Quote text */}
 <blockquote className="text-sm font-sans font-light text-[#1A1A1A] leading-relaxed italic relative">
 "{testimonial.quote}"
 </blockquote>
 </div>

 {/* Profile author and meta row */}
 <div className="flex items-center gap-4 pt-8 border-t border-[#EAE6DF]/80 mt-6 md:mt-8">
 <img
 id={`testimonial-avatar-${testimonial.id}`}
 src={testimonial.avatar}
 alt={testimonial.author}
 className="w-10 h-10 rounded-full object-cover border border-[#EAE6DF] grayscale hover:grayscale-0 transition-all duration-300"
 loading="lazy"
 />
 <div>
 <h4 className="text-xs font-mono font-semibold text-[#1A1A1A] tracking-wider uppercase">
 {testimonial.author}
 </h4>
 <span className="text-[10px] font-sans text-[#7E756B] block">
 {testimonial.role}
 </span>
 </div>
 </div>

 </div>
 );
}
