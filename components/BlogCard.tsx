import React from 'react';
import { Calendar, Clock, User, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface Blog {
  id: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
}

interface BlogCardProps {
  key?: any;
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article
      id={`blog-card-${blog.id}`}
      className="group flex flex-col justify-between bg-transparent overflow-hidden rounded-sm border border-transparent hover:border-[#EAE6DF] p-3 transition-all duration-300"
    >
      <div className="space-y-4">
        {/* Animated Image Wrapper */}
        <div className="relative overflow-hidden aspect-[16/10] bg-[#F1EFEA] rounded-sm">
          <img
            id={`blog-img-${blog.id}`}
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Informational Header */}
        <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.15em] text-[#7E756B]">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-[#C2BCAE]" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-[#C2BCAE]" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Narrative Block */}
        <div className="space-y-2">
          <h3 className="font-serif text-lg font-light text-[#1A1A1A] leading-snug tracking-wide group-hover:text-[#7E756B] transition-colors">
            {blog.title}
          </h3>
          <p className="text-xs text-[#7E756B] font-sans font-light leading-relaxed line-clamp-3">
            {blog.summary}
          </p>
        </div>
      </div>

      {/* Footer and Author */}
      <div className="flex items-center justify-between pt-6 border-t border-[#EAE6DF]/60 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#EAE6DF] font-mono text-[9px] flex items-center justify-center font-bold text-[#1A1A1A] uppercase">
            {blog.author.split(' ').map((n) => n[0]).join('')}
          </div>
          <span className="text-[10px] font-mono tracking-wider text-[#1A1A1A]/80 uppercase">
            By {blog.author}
          </span>
        </div>

        <Link
          href={`/blog/${blog.id}`}
          className="group/btn mt-4 inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.2em] uppercase text-[#1A1A1A] font-semibold hover:text-[#7E756B] transition-colors focus:outline-none"
        >
          <span>Read Essay</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

    </article>
  );
}
