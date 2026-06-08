import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'velvet-cloud-sofa',
    name: 'Velvet Cloud Sofa',
    tagline: 'The pinnacle of floating comfort',
    price: 2499,
    originalPrice: 2899,
    rating: 4.9,
    reviewCount: 142,
    category: 'sofas',
    images: [
      '/images/asset_1.jpg',
      '/images/asset_2.jpg',
      '/images/asset_3.jpg',
    ],
    colors: [
      { name: 'Oatmeal Bouclé', hex: '#EAE6DF' },
      { name: 'Warm Charcoal', hex: '#3E3E3E' },
      { name: 'Sage Velvet', hex: '#6B7A6C' },
    ],
    materials: ['Italian Velvet', 'Solid White Oak Legs', 'High-Density Memory Foam Base', 'Responsibly Sourced Feather Fill'],
    dimensions: { width: '92"', height: '34"', depth: '38"', weight: '145 lbs' },
    inStock: true,
    description: 'Enveloped in water-rependent velvet bouclé and structured over robust kiln-dried European hardwood, the Velvet Cloud Sofa represents the ultimate expression of quiet luxury, blending floating aesthetics with restorative support.',
    descriptionLong: [
      'Engineered with a low-slung base and ultra-deep seats, the Velvet Cloud Sofa defines relaxed contemporary living. Every seat cushion features a core of supportive multi-density memory foam wrapped in an generous layer of natural ethically sourced pure down feathers, producing our trademark cloud-like sinking sensation while cleanly holding its modern form.',
      'Designed by Copenhagen-based designer Lars Jensen, this sofa pairs a solid mortise-and-tenon frame with a hidden recessed metal support grid. The upholstery utilizes luxury-grade Italian bouclé woven with high-durability performance threading to remain completely pet-friendly, spill-resistant, and pill-free for decades of curated comfort.'
    ],
    details: [
      'Kiln-dried European Beechwood interior frame with double-doweled joinery.',
      'Ultra-deep 26" seat profile with low-slung 15" seating height perfect for modern lounges.',
      'Sinuous spring system delivers balanced suspension support across the frame.',
      'Includes three companion cushions wrapped in identical premium fabric blend.',
      'Legs are crafted from solid White Oak, hand-sanded and finished in water-based matte oil.',
    ],
    assembly: [
      'Delivered in two securely padded modular cartons via premium White Glove Carrier.',
      'Assembly takes under 15 minutes. Heavy-duty interlocking steel brackets slide securely into place.',
      'Leveling feet are fully adjustable to compensate for uneven vintage oak floorboards.',
      'Our white-glove professional carriers will assemble and place it in your lounge of choice upon request.',
    ],
    isFeatured: true,
    isNewArrival: true,
  },
  {
    id: 'koti-modular-sectional',
    name: 'The Koti Modular',
    tagline: 'Infinite architectural configurations',
    price: 3200,
    rating: 4.8,
    reviewCount: 94,
    category: 'sofas',
    images: [
      '/images/asset_4.jpg',
      '/images/asset_5.jpg'
    ],
    colors: [
      { name: 'Flaxen Linen', hex: '#DFD5C6' },
      { name: 'Pebble Gray', hex: '#9CA3AF' },
      { name: 'Olive Cotton', hex: '#4B5340' }
    ],
    materials: ['Belgian Linen Weave', 'Polished Aluminum Underframe', 'Pocketed Spring Coils'],
    dimensions: { width: '110"', height: '29"', depth: '74"', weight: '210 lbs' },
    inStock: true,
    description: 'Minimalism meets absolute versatility. The Koti Modular Sectional consists of separate structural elements that can be reordered at any moment into standard sofas, corner L-shapes, or isolated daybeds.',
    descriptionLong: [
      'The Koti Sectional features geometric forms with hidden low lock connectors, ensuring that your customized seating layout remains perfectly aligned without sliding apart. Its minimalist stance hides an incredibly resilient inner pocket-coil core that prevents middle sag.',
    ],
    details: [
      'Concealed connection plates lock sections flush.',
      'Reversible cushion blocks wrapped in washable flaxen linen covers.',
      'Waterproof bottom liner defends against unexpected structural floor moisture.'
    ],
    assembly: [
      'Fully pre-assembled blocks; simply place modular components and snap the bottom connectors shut.'
    ],
    isFeatured: true,
  },
  {
    id: 'aero-lounge-sofa',
    name: 'Aero Lounge Sofa',
    tagline: 'Low profile, high elegance',
    price: 1850,
    originalPrice: 2100,
    rating: 4.7,
    reviewCount: 61,
    category: 'sofas',
    images: [
      '/images/asset_6.jpg'
    ],
    colors: [
      { name: 'Rust Velvet', hex: '#A75D3F' },
      { name: 'Pearl Bouclé', hex: '#EDEDEB' }
    ],
    materials: ['Premium Velvet', 'Steel Tube Sled Base', 'Recycled Microfiber Fill'],
    dimensions: { width: '84"', height: '30"', depth: '36"', weight: '112 lbs' },
    inStock: true,
    description: 'Slender, refined, and distinctively modern, the Aero Lounge Sofa suspends high-grade upholstery over an industrial-grade architectural sled base for striking structural negative space.',
    descriptionLong: ['Sled bases in matte black chrome give is a floating look while maintaining a highly solid footprint.'],
    details: ['Precision powder-coated sleek sled leg.', 'Resistant to high friction piling.'],
    assembly: ['Bolt legs on with high-tension alloy M8 screws (allen-key included).'],
    isFeatured: false,
    isNewArrival: true,
  },
  {
    id: 'linea-three-seater',
    name: 'Linea Three-Seater',
    tagline: 'Refined mid-century lines',
    price: 2299,
    rating: 4.6,
    reviewCount: 38,
    category: 'sofas',
    images: [
      '/images/asset_7.jpg'
    ],
    colors: [
      { name: 'Rich Walnut Wool', hex: '#5E5044' },
      { name: 'Classic Ecru', hex: '#F3EFE9' }
    ],
    materials: ['Virgin Merino Wool', 'Kiln-Dried Walnut Frame', 'High-Resilient Latex Foam'],
    dimensions: { width: '88"', height: '32"', depth: '35"', weight: '130 lbs' },
    inStock: true,
    description: 'A tribute to Scandinavian functionalism. Solid, angled American Walnut wraps cleanly around a single-cushion wool bench seat for clean structural simplicity.',
    descriptionLong: ['A stunning centerpiece crafted for formal drawing rooms and stylish lounges.'],
    details: ['Solid American Walnut wood sides.', 'Tufted backrest buttons.'],
    assembly: ['Legs ship bolted inside. Minimal assembly required.'],
    isFeatured: false,
  },
  {
    id: 'nuvola-sectional',
    name: 'Nuvola Sectional',
    tagline: 'Dramatic cloud loungescape',
    price: 4100,
    rating: 4.95,
    reviewCount: 31,
    category: 'sofas',
    images: [
      '/images/asset_8.jpg'
    ],
    colors: [
      { name: 'Chiffon White', hex: '#F9F6F0' },
      { name: 'Oatmeal Tweed', hex: '#CABDB1' }
    ],
    materials: ['Washed Tweed', 'Solid Pine support beam', 'Goose Down Cluster Mix'],
    dimensions: { width: '124"', height: '28"', depth: '82"', weight: '240 lbs' },
    inStock: false,
    description: 'The monumental Nuvola Sectional represents an immersive landscape of comfort, featuring ultra-low back cushions and block-patterned down cushions.',
    descriptionLong: ['This premium sectional is built on demand in our Copenhagen studio, integrating high quality goose down clusters with supportive responsive foam.'],
    details: ['Handmade Danish stitching.', 'Heavy solid oak concealed legs.'],
    assembly: ['Premium local carrier handles unpacking and assembly in your home of choice.'],
    isFeatured: false,
    isNewArrival: true,
  },
  {
    id: 'monolith-side-table',
    name: 'Monolith Side Table',
    tagline: 'Sculptical column of solid marble',
    price: 580,
    originalPrice: 650,
    rating: 4.9,
    reviewCount: 88,
    category: 'tables',
    images: [
      '/images/asset_9.jpg'
    ],
    colors: [
      { name: 'Nero Marquina Marble', hex: '#1C1C1C' },
      { name: 'Carrara Marble', hex: '#ECEAE6' }
    ],
    materials: ['100% Solid Honed Marble Block'],
    dimensions: { width: '14"', height: '18"', depth: '14"', weight: '65 lbs' },
    inStock: true,
    description: 'Chiseled into a precise cylinders from individual blocks of Spanish Nero Marquina, this table showcases dark marble veins that are entirely unique to each natural piece.',
    descriptionLong: ['Its honed matte surface is perfectly satiny to the touch and resists superficial rings.'],
    details: ['Cut from select single blocks of genuine marble.', 'Integrated non-scratch rubberized pads on the underside.'],
    assembly: ['Arrives fully carved. No assembly required.'],
    isFeatured: true,
    isNewArrival: false,
  },
  {
    id: 'petra-coffee-table',
    name: 'Petra Coffee Table',
    tagline: 'Earthy warmth in travertine',
    price: 950,
    rating: 4.85,
    reviewCount: 42,
    category: 'tables',
    images: [
      '/images/asset_10.jpg'
    ],
    colors: [
      { name: 'Raw Travertine', hex: '#D2C4B1' }
    ],
    materials: ['Natural Italian Travertine Stone'],
    dimensions: { width: '38"', height: '14"', depth: '38"', weight: '115 lbs' },
    inStock: true,
    description: 'A low-slung, substantial block coffee table crafted entirely from unfilled Italian Travertine, emphasizing the organic voids and earthy warm hues of native natural columns.',
    descriptionLong: ['Petra grounds living rooms with a clean brutalist heft.'],
    details: ['Organic pitted travertine texture.', 'Honed, water-sealed surface protects from staining.'],
    assembly: ['Arrives in two heavy parts (plinth base and tabletop). Simply rest tabletop safely on the base.'],
    isFeatured: true,
  },
  {
    id: 'aura-dining-table',
    name: 'Aura Dining Table',
    tagline: 'Solid white oak centerpiece',
    price: 1800,
    rating: 4.8,
    reviewCount: 55,
    category: 'tables',
    images: [
      '/images/asset_11.jpg'
    ],
    colors: [
      { name: 'Natural Sand Oak', hex: '#E2DEC2' },
      { name: 'Smoked Walnut', hex: '#4B3E35' }
    ],
    materials: ['Solid European White Oak'],
    dimensions: { width: '78"', height: '29"', depth: '36"', weight: '135 lbs' },
    inStock: true,
    description: 'Perfect proportions. A sleek oval solid white oak dining table that hosts six guests in perfect ergonomics, featuring curved pillar legs.',
    descriptionLong: ['A clean, organic gathering hub that highlights Scandinavian stave timber joinery.'],
    details: ['Full solid wood construction (no veneer).', 'Matte ecological hard-wax coating protects from moisture.'],
    assembly: ['Attach the heavy oak column legs with supplied timber bolts. Very simple.'],
    isFeatured: false,
  },
  {
    id: 'weave-dining-chair',
    name: 'Weave Dining Chair',
    tagline: 'Hand-woven artisan craft',
    price: 320,
    rating: 4.75,
    reviewCount: 112,
    category: 'chairs',
    images: [
      '/images/asset_12.jpg'
    ],
    colors: [
      { name: 'Ash & Natural Cord', hex: '#E7DFD3' },
      { name: 'Black Ash & Black Cord', hex: '#262626' }
    ],
    materials: ['Solid Ash Wood Frame', 'Danish Paper Cord'],
    dimensions: { width: '22"', height: '31"', depth: '21"', weight: '14 lbs' },
    inStock: true,
    description: 'Merging mid-century design with authentic craft, this chair features 120 meters of tightly wound Danish paper cord hand-wrapped around an elegant solid ash wood skeleton.',
    descriptionLong: ['A lightweight yet incredibly strong masterclass in joinery, designed for long dinner conversations.'],
    details: ['FSC-Certified Grade A Solid Ash frame.', 'Paper cord requires over 4 hours of dedicated artisan hand-weaving.'],
    assembly: ['Pre-assembled. Ships in single box.'],
    isFeatured: true,
    isNewArrival: true,
  },
  {
    id: 'koda-lounge-chair',
    name: 'The Koda Lounge Chair',
    tagline: 'The ultimate reading nook classic',
    price: 1150,
    originalPrice: 1290,
    rating: 4.9,
    reviewCount: 76,
    category: 'chairs',
    images: [
      '/images/asset_13.jpg'
    ],
    colors: [
      { name: 'Cognac Saddle Leather', hex: '#B87333' },
      { name: 'Forest Green Suede', hex: '#2E3D30' }
    ],
    materials: ['Full-Grain Italian Aniline Leather', 'Molded Walnut Veneer Core'],
    dimensions: { width: '31"', height: '33"', depth: '34"', weight: '45 lbs' },
    inStock: true,
    description: 'Drape your body in premium, butter-textured aniline leather. The Koda features curved timber shells and rubber-damped structural connections for custom body contouring.',
    descriptionLong: ['Designed to age gracefully, the premium saddle leather develops a unique rich gold vintage patina unique to your life.'],
    details: ['Ergononmically angled seating pan.', 'Rust-proof micro-textured black steel swivel base.'],
    assembly: ['Base attaches with 4 heavy-duty screws. Tools provided.'],
    isFeatured: true,
  },
  {
    id: 'aura-floor-lamp',
    name: 'Aura Floor Lamp',
    tagline: 'Ambient sculpture in brass and marble',
    price: 649,
    rating: 4.88,
    reviewCount: 95,
    category: 'lighting',
    images: [
      '/images/asset_14.jpg'
    ],
    colors: [
      { name: 'Brushed Brass & Nero Marble', hex: '#D4AF37' },
      { name: 'Matte Charcoal & Carrara', hex: '#555555' }
    ],
    materials: ['Heavy Honed Marble Block Base', 'Satin Brushed Brass Stem', 'Opal Frosted Glass Bowl'],
    dimensions: { width: '16"', height: '64"', depth: '16"', weight: '32 lbs' },
    inStock: true,
    description: 'This floor lamp casts an inviting, golden wash of bounce light off the ceiling, grounded by an exquisite solid marble base.',
    descriptionLong: ['Features a smooth brass-knurled touch button dimmer placed perfectly on the main pole for fluid light adjustment.'],
    details: ['Integrated energy-saving dimmer-controlled warm LED (2700K).', 'Reinforced fabric cable cord.'],
    assembly: ['Screw the brass stem sections together manually directly onto the pre-weighted marble base.'],
    isFeatured: true,
    isNewArrival: true,
  },
  {
    id: 'lumina-floor-lamp',
    name: 'Lumina Floor Lamp',
    tagline: 'Minimalist arch of light',
    price: 450,
    rating: 4.65,
    reviewCount: 29,
    category: 'lighting',
    images: [
      '/images/asset_15.jpg'
    ],
    colors: [
      { name: 'Matte Jet Black', hex: '#111111' },
      { name: 'Sleek Satin Nickel', hex: '#C0C0C0' }
    ],
    materials: ['Seamless Aluminum Extrusion'],
    dimensions: { width: '22"', height: '61"', depth: '10"', weight: '12 lbs' },
    inStock: true,
    description: 'A striking structural arch with a hidden internal LED panel that distributes completely even glow. Perfect for casting clean light over corner reading nooks.',
    descriptionLong: ['The Lumina features an elegant, thin profile that disappears into minimalist room plans.'],
    details: ['Frictionless micro-control foot-switch.', 'Includes anti-tipping low-profile floor weight.'],
    assembly: ['Fully pre-assembled. Plug and play.'],
    isFeatured: false,
  },
  {
    id: 'raw-clay-vessel',
    name: 'Raw Clay Vessel',
    tagline: 'Earthy organic texture',
    price: 180,
    rating: 4.9,
    reviewCount: 45,
    category: 'accents',
    images: [
      '/images/asset_16.jpg'
    ],
    colors: [
      { name: 'Terracotta', hex: '#E2725B' }
    ],
    materials: ['Hand-fired Natural Clay'],
    dimensions: { width: '12"', height: '16"', depth: '12"', weight: '8 lbs' },
    inStock: true,
    description: 'A hand-sculpted organic vessel featuring exposed terracotta texturing. Acts as a standalone piece or functional vase.',
    descriptionLong: ['Each piece is individually fired in traditional kilns.'],
    details: ['100% waterproof interior.', 'Subtle natural variations in color.'],
    assembly: ['No assembly required.'],
    isFeatured: true,
  },
  {
    id: 'oak-credenza',
    name: 'Low Oak Credenza',
    tagline: 'Minimalist media storage',
    price: 1450,
    rating: 4.75,
    reviewCount: 22,
    category: 'storage',
    images: [
      '/images/asset_21.jpg'
    ],
    colors: [
      { name: 'Natural Oak', hex: '#E2DEC2' }
    ],
    materials: ['Solid White Oak', 'Soft-close Hinges'],
    dimensions: { width: '72"', height: '24"', depth: '18"', weight: '110 lbs' },
    inStock: true,
    description: 'Sleek slatted doors slide open to reveal ample adjustable shelving. Ideal for media rooms or dining space storage.',
    descriptionLong: ['Built with sustainable FSC-certified oak.'],
    details: ['Adjustable interior shelves.', 'Pre-drilled media cable routing.'],
    assembly: ['Arrives fully assembled via White Glove.'],
    isFeatured: false,
  }
];

// Dynamically compute category counts
export const CATEGORIES = [
  { id: 'sofas', name: 'Sofas', icon: 'Sofa', count: PRODUCTS.filter(p => p.category === 'sofas').length, description: 'Modular sectionals, deep-seat lounges, and tailored three-seaters engineered for deep comfort.' },
  { id: 'tables', name: 'Tables', icon: 'Table', count: PRODUCTS.filter(p => p.category === 'tables').length, description: 'Coffee tables, dining structures, and minimalist bedside blocks carved from premium stone and timber.' },
  { id: 'chairs', name: 'Chairs', icon: 'Compass', count: PRODUCTS.filter(p => p.category === 'chairs').length, description: 'Sculptural lounge chairs, hand-woven dining seating, and reading nooks.' },
  { id: 'lighting', name: 'Lighting', icon: 'Lightbulb', count: PRODUCTS.filter(p => p.category === 'lighting').length, description: 'Ambient floor lamps, sculptural arches, and hand-blown glass pendents that paint with shadow.' },
  { id: 'accents', name: 'Accents', icon: 'Wine', count: PRODUCTS.filter(p => p.category === 'accents').length, description: 'Textured vessels, mirrors, and throw pillows in linen and raw wool to ground your spaces.' },
  { id: 'storage', name: 'Storage', icon: 'Database', count: PRODUCTS.filter(p => p.category === 'storage').length, description: 'Low-profile oak credenzas, custom shelving systems, and textured sideboard cabinets.' },
];

export const BLOGS = [
  {
    id: '1',
    title: 'Designing with Intention: The Philosophy of Quiet Luxury',
    summary: 'Explore why modern architects are shifting away from loud statements and moving toward raw materials, tactile textures, and negative space.',
    image: '/images/asset_16.jpg',
    date: 'May 14, 2026',
    author: 'Elena Rostova',
    readTime: '6 min read'
  },
  {
    id: '2',
    title: 'How to Care for Solid Stone and Honed Marble Furniture',
    summary: 'Marble, travertine, and quartz are permanent materials that develop characters. Read our comprehensive seal, wax, and clean guide.',
    image: '/images/asset_17.jpg',
    date: 'Apr 28, 2026',
    author: 'Lars Jensen',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'The Art of Mixing Warm Wood and Cool Metals',
    summary: 'A visual manual detailing optimal timber stain compatibility and balanced metal pairings to create depth without visual noise.',
    image: '/images/asset_18.jpg',
    date: 'Mar 02, 2026',
    author: 'Kimi Tanaka',
    readTime: '8 min read'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    author: 'Marcus & Sophia Vance',
    role: 'Architects, Vance Residence Studio',
    quote: 'LuxeNest has fundamentally changed how we furnish our clients residences. The Velvet Cloud Sofa is not just furniture; it is an architectural landscape of absolute comfort and restraint.',
    avatar: '/images/asset_19.jpg',
    rating: 5
  },
  {
    id: '2',
    author: 'Julian Thorne',
    role: 'Editorial Director, Frame & Grid',
    quote: 'The Nero Marquina Monolith table is heavy, flawless, and chiseled with absolute precision. Delivering block marble of this purity directly with pristine White Glove carrier placement is unmatched.',
    avatar: '/images/asset_20.jpg',
    rating: 5
  },
  {
    id: '3',
    author: 'Hana Ishikawa',
    role: 'Interior Designer, Minima Tokyo',
    quote: 'The Weave Dining Chairs are stunning. The tension in the Danish paper cord is completely uniform, and the seamless dowelled ash joinery demonstrates masterclass cabinet craftsmanship.',
    avatar: '/images/asset_21.jpg',
    rating: 5
  }
];
