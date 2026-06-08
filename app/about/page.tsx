export default function AboutPage() {
 return (
 <div className="bg-[#F9F8F6] min-h-screen py-24 ">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
 
 <div className="space-y-4">
 <span className="text-[10px] font-mono tracking-[0.25em] text-[#C2BCAE] uppercase block">
 OUR STORY
 </span>
 <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-[0.12em] text-[#1A1A1A] uppercase">
 About LuxeNest
 </h1>
 </div>

 <div className="relative aspect-[16/9] bg-[#F1EFEA] rounded-sm overflow-hidden border border-[#EAE6DF]">
 <img
 src="/images/asset_5.jpg"
 alt="LuxeNest Design Studio"
 className="w-full h-full object-cover grayscale opacity-90"
 />
 </div>

 <div className="space-y-6 text-left">
 <p className="text-sm text-[#7E756B] font-sans font-light leading-relaxed">
 Founded in Copenhagen in 2024, LuxeNest emerged from a singular vision: to bridge the gap between high-end architectural furniture and accessible, direct-to-consumer delivery. We believe that a thoughtfully designed home nourishes the psyche, representing a shelter from the noise of the physical world.
 </p>
 <p className="text-sm text-[#7E756B] font-sans font-light leading-relaxed">
 Every framing joint carries our fully serialized timber brand to guarantee authentic old-world workshop fabrication. We specify solid stave ash and European beech derived entirely from woodlands overseen by the Forest Stewardship Council (FSC). This certifies that no ancient growth gets logged.
 </p>
 <p className="text-sm text-[#7E756B] font-sans font-light leading-relaxed">
 Our custom-milled Italian velvet weavings use high density natural wool, cotton, and linen threads that resist oil staining and static piling natively without synthetic chemical coatings. Quality is not just a promise; it is the foundation of our craft.
 </p>
 </div>

 </div>
 </div>
 );
}
