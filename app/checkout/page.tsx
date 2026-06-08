"use client";

import React, { useState, useMemo } from 'react';
import { CreditCard, Truck, Users, CheckCircle, ChevronLeft, ChevronRight, Lock, MapPin, Building, Award, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../../app/providers';
import { Order } from '../../types';

export default function CheckoutPage() {
 const router = useRouter();
 const { cart, currentUser, placeOrder } = useAppContext();

 const [step, setStep] = useState<1 | 2 | 3>(1);

 const [email, setEmail] = useState(currentUser?.email || '');
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [phone, setPhone] = useState('');
 const [street, setStreet] = useState('');
 const [apartment, setApartment] = useState('');
 const [city, setCity] = useState('');
 const [stateCode, setStateCode] = useState('');
 const [zipCode, setZipCode] = useState('');

 const [deliveryMethod, setDeliveryMethod] = useState<'white-glove' | 'premium-ltl'>('white-glove');

 const [paymentChoice, setPaymentChoice] = useState<'card' | 'wire'>('card');
 const [cardName, setCardName] = useState('');
 const [cardNumber, setCardNumber] = useState('');
 const [cardExpiry, setCardExpiry] = useState('');
 const [cardCvv, setCardCvv] = useState('');

 const [formError, setFormError] = useState<string | null>(null);
 const [placingOrder, setPlacingOrder] = useState(false);

 const subtotal = useMemo(() => {
 return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
 }, [cart]);

 const shippingCost = useMemo(() => {
 if (deliveryMethod === 'premium-ltl') return 120;
 if (subtotal >= 1500) return 0;
 return 150;
 }, [subtotal, deliveryMethod]);

 const taxCost = useMemo(() => {
 return Math.round(subtotal * 0.0825);
 }, [subtotal]);

 const grandTotal = useMemo(() => {
 return subtotal + shippingCost + taxCost;
 }, [subtotal, shippingCost, taxCost]);

 const handleNextStep1 = (e: React.FormEvent) => {
 e.preventDefault();
 if (email && firstName && lastName && phone && street && city && stateCode && zipCode) {
 setFormError(null);
 setStep(2);
 } else {
 setFormError('Please complete all shipping and personal coordinates.');
 }
 };

 const handleNextStep2 = () => {
 setFormError(null);
 setStep(3);
 };

 const handlePlaceFinalOrder = (e: React.FormEvent) => {
 e.preventDefault();
 if (paymentChoice === 'card') {
 if (!cardName || !cardNumber || !cardExpiry || !cardCvv) {
 setFormError('Please enter valid security credit card credentials.');
 return;
 }
 }

 setFormError(null);
 setPlacingOrder(true);

 const generatedOrder: Order = {
 id: `LN-${Math.floor(100000 + Math.random() * 900000)}`,
 date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
 items: cart.map((item) => ({
 productId: item.product.id,
 name: item.product.name,
 image: item.product.images[0],
 price: item.product.price,
 quantity: item.quantity,
 selectedColor: item.selectedColor.name,
 })),
 subtotal,
 discount: 0,
 shipping: shippingCost,
 tax: taxCost,
 total: grandTotal,
 status: 'processing',
 shippingAddress: {
 street: apartment ? `${street}, Apt ${apartment}` : street,
 city,
 state: stateCode,
 zip: zipCode,
 },
 deliveryMethod: deliveryMethod === 'white-glove' ? 'Complimentary White-Glove Placement' : 'Premium Private LTL Carrier',
 };

 setTimeout(() => {
 placeOrder(generatedOrder);
 setPlacingOrder(false);
 router.push('/account'); 
 }, 1500);
 };

 if (cart.length === 0) {
 return (
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-6">
 <span className="font-serif text-lg text-[#1A1A1A] font-light block">Your interior canvas bag is empty.</span>
 <button
 onClick={() => router.push('/shop')}
 className="px-6 py-3.5 bg-[#1A1A1A] text-[#F9F8F6] text-xs font-mono uppercase tracking-[0.18em] rounded-sm hover:bg-[#7E756B] transition-colors"
 >
 Browse Collections
 </button>
 </div>
 );
 }

 return (
 <div className="content-shell bg-[#F9F8F6] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
 
 <div className="max-w-3xl mx-auto mb-12 ">
 <div className="flex items-center justify-between">
 
 {[
 { tag: 1, label: 'Coordinates' },
 { tag: 2, label: 'Logistics' },
 { tag: 3, label: 'Secured Payment' },
 ].map((st, i) => (
 <div key={st.tag} className="flex-grow flex items-center">
 <div className="flex items-center gap-2.5">
 <div className={`w-8 h-8 rounded-full font-mono text-xs text-center flex items-center justify-center font-bold border ${
 step === st.tag
 ? 'bg-[#1A1A1A] border-[#1A1A1A] text-[#F9F8F6]'
 : step > st.tag
 ? 'bg-green-700 border-green-700 text-white'
 : 'bg-[#F3EFE9] border-[#EAE6DF] text-[#7E756B]'
 }`}>
 {st.tag}
 </div>
 <span className={`text-[10px] font-mono tracking-widest uppercase hidden sm:inline ${
 step === st.tag ? 'text-[#1A1A1A] font-semibold' : 'text-[#7E756B]'
 }`}>
 {st.label}
 </span>
 </div>
 
 {i < 2 && (
 <div className={`flex-grow h-[1px] mx-4 border-t ${
 step > st.tag ? 'border-green-700' : 'border-[#EAE6DF]'
 }`} />
 )}
 </div>
 ))}

 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
 
 <div className="panel p-5 sm:p-8 lg:col-span-8">
 
 {formError && (
 <div className="p-3.5 bg-red-50 border border-red-200 rounded-sm text-xs font-mono text-red-600 uppercase mb-6" id="checkout-form-err">
 {formError}
 </div>
 )}

 {step === 1 && (
 <form onSubmit={handleNextStep1} className="space-y-6">
 
 <h2 className="font-serif text-2xl font-light text-[#1A1A1A] tracking-wider uppercase border-b border-[#EAE6DF] pb-3">
 Shipping Coordinates
 </h2>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
 
 <div className="space-y-1.5">
 <label htmlFor="chk-firstname" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">First Name</label>
 <input
 id="chk-firstname"
 type="text"
 required
 value={firstName}
 onChange={(e) => setFirstName(e.target.value)}
 placeholder="Enter first name"
 className="w-full text-xs font-mono px-4 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>

 <div className="space-y-1.5">
 <label htmlFor="chk-lastname" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">Last Name</label>
 <input
 id="chk-lastname"
 type="text"
 required
 value={lastName}
 onChange={(e) => setLastName(e.target.value)}
 placeholder="Enter last name"
 className="w-full text-xs font-mono px-4 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>

 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
 
 <div className="space-y-1.5">
 <label htmlFor="chk-email" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">Email Contact</label>
 <input
 id="chk-email"
 type="email"
 required
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 placeholder="name@residence.com"
 className="w-full text-xs font-mono px-4 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>

 <div className="space-y-1.5">
 <label htmlFor="chk-phone" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">Direct Phone</label>
 <input
 id="chk-phone"
 type="tel"
 required
 value={phone}
 onChange={(e) => setPhone(e.target.value)}
 placeholder="1-555-555-5555"
 className="w-full text-xs font-mono px-4 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>

 </div>

 <div className="space-y-1.5">
 <label htmlFor="chk-street" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">Street Address</label>
 <div className="relative flex items-center">
 <MapPin className="absolute left-3.5 w-4 h-4 text-[#C2BCAE]" />
 <input
 id="chk-street"
 type="text"
 required
 value={street}
 onChange={(e) => setStreet(e.target.value)}
 placeholder="1420 Greene St"
 className="w-full text-xs font-mono pl-10 pr-4 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
 
 <div className="sm:col-span-1 space-y-1.5">
 <label htmlFor="chk-apt" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">Apartment</label>
 <div className="relative flex items-center">
 <Building className="absolute left-3 w-4 h-4 text-[#C2BCAE]" />
 <input
 id="chk-apt"
 type="text"
 value={apartment}
 onChange={(e) => setApartment(e.target.value)}
 placeholder="4B"
 className="w-full text-xs font-mono pl-9 pr-3 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>
 </div>

 <div className="space-y-1.5 sm:col-span-2">
 <label htmlFor="chk-city" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">City</label>
 <input
 id="chk-city"
 type="text"
 required
 value={city}
 onChange={(e) => setCity(e.target.value)}
 placeholder="New York"
 className="w-full text-xs font-mono px-4 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>

 <div className="space-y-1.5 sm:col-span-1">
 <label htmlFor="chk-state" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">State</label>
 <input
 id="chk-state"
 type="text"
 required
 value={stateCode}
 onChange={(e) => setStateCode(e.target.value)}
 placeholder="NY"
 className="w-full text-xs font-mono px-4 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>

 <div className="sm:col-span-1 space-y-1.5">
 <label htmlFor="chk-zip" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">ZIP Code</label>
 <input
 id="chk-zip"
 type="text"
 required
 value={zipCode}
 onChange={(e) => setZipCode(e.target.value)}
 placeholder="10012"
 className="w-full text-xs font-mono px-4 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>

 </div>

 <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-between">
 <button
 type="button"
 onClick={() => router.push('/cart')}
 className="btn-secondary"
 >
 Return to bag
 </button>
 <button
 type="submit"
 className="btn-primary"
 >
 Confirm Logistics
 </button>
 </div>

 </form>
 )}

 {step === 2 && (
 <div className="space-y-6">
 
 <h2 className="font-serif text-2xl font-light text-[#1A1A1A] tracking-wider uppercase border-b border-[#EAE6DF] pb-3">
 Logistics Selection
 </h2>

 <div className="space-y-4">
 
 <button
 onClick={() => setDeliveryMethod('white-glove')}
 className={`w-full text-left p-5 border rounded-sm transition-all focus:outline-none flex gap-4 ${
 deliveryMethod === 'white-glove'
 ? 'border-[#1A1A1A] bg-[#F9F8F6] text-[#1A1A1A]'
 : 'border-[#EAE6DF] hover:border-[#7E756B]'
 }`}
 >
 <Truck className="w-6 h-6 text-[#C2BCAE] stroke-[1.2] mt-0.5" />
 <div className="space-y-1">
 <div className="flex justify-between items-center w-full">
 <span className="text-xs font-mono uppercase tracking-widest font-semibold block">White-Glove In-Room Carrier</span>
 <span className="font-mono text-xs font-bold text-[#D4AF37]">
 {subtotal >= 1500 ? 'COMPLIMENTARY' : '$150'}
 </span>
 </div>
 <p className="text-[11px] text-[#7E756B] font-sans leading-relaxed">
 Custom carrier placement directly in your room of preference, specialized unpacking, multi-density screw connection assembly, leveler configuration, and final packaging cleanup removal.
 </p>
 </div>
 </button>

 <button
 onClick={() => setDeliveryMethod('premium-ltl')}
 className={`w-full text-left p-5 border rounded-sm transition-all focus:outline-none flex gap-4 ${
 deliveryMethod === 'premium-ltl'
 ? 'border-[#1A1A1A] bg-[#F9F8F6] text-[#1A1A1A]'
 : 'border-[#EAE6DF] hover:border-[#7E756B]'
 }`}
 >
 <Users className="w-6 h-6 text-[#C2BCAE] stroke-[1.2] mt-0.5" />
 <div className="space-y-1">
 <div className="flex justify-between items-center w-full">
 <span className="text-xs font-mono uppercase tracking-widest font-semibold block">Premium Curbside Freight</span>
 <span className="font-mono text-xs font-bold text-[#1A1A1A]">$120</span>
 </div>
 <p className="text-[11px] text-[#7E756B] font-sans leading-relaxed">
 LTL flat curbside freight delivery packed over pallets. Frame assembly instructions, steel Allen-key components, and leveling instruction sheets included. Custom in-house placement not provided.
 </p>
 </div>
 </button>

 </div>

 <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-between">
 <button
 type="button"
 onClick={() => setStep(1)}
 className="inline-flex items-center justify-center rounded-sm border border-[#EAE6DF] px-6 py-3 text-xs uppercase tracking-widest text-[#7E756B] transition-colors hover:border-[#7E756B] hover:text-[#1A1A1A]"
 >
 Back Coordinates
 </button>
 <button
 onClick={handleNextStep2}
 className="btn-primary"
 >
 Proceed to Payment
 </button>
 </div>

 </div>
 )}

 {step === 3 && (
 <form onSubmit={handlePlaceFinalOrder} className="space-y-6">
 
 <h2 className="font-serif text-2xl font-light text-[#1A1A1A] tracking-wider uppercase border-b border-[#EAE6DF] pb-3">
 Secured Payment
 </h2>

 <div className="flex gap-4 border-b border-[#EAE6DF] pb-3 ">
 <button
 type="button"
 onClick={() => setPaymentChoice('card')}
 className={`text-xs font-mono tracking-widest uppercase pb-1.5 focus:outline-none ${
 paymentChoice === 'card' ? 'border-b-2 border-[#1A1A1A] text-[#1A1A1A] font-medium' : 'text-[#7E756B]'
 }`}
 >
 Credit Card
 </button>
 <button
 type="button"
 onClick={() => {
 setPaymentChoice('wire');
 setFormError(null);
 }}
 className={`text-xs font-mono tracking-widest uppercase pb-1.5 focus:outline-none ${
 paymentChoice === 'wire' ? 'border-b-2 border-[#1A1A1A] text-[#1A1A1A] font-medium' : 'text-[#7E756B]'
 }`}
 >
 Society Wire Transfer
 </button>
 </div>

 {paymentChoice === 'card' ? (
 <div className="space-y-5">
 
 <div className="space-y-1.5">
 <label htmlFor="chk-payname" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">Account holder Name</label>
 <input
 id="chk-payname"
 type="text"
 required
 value={cardName}
 onChange={(e) => setCardName(e.target.value)}
 placeholder="Anouk Vander"
 className="w-full text-xs font-mono px-4 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>

 <div className="space-y-1.5">
 <label htmlFor="chk-paycardno" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">Security Card Number</label>
 <div className="relative flex items-center">
 <CreditCard className="absolute left-3.5 w-4 h-4 text-[#C2BCAE]" />
 <input
 id="chk-paycardno"
 type="text"
 required
 value={cardNumber}
 onChange={(e) => setCardNumber(e.target.value.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim())}
 maxLength={19}
 placeholder="4111 2222 3333 4444"
 className="w-full text-xs font-mono pl-10 pr-4 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>
 </div>

 <div className="grid grid-cols-2 gap-6">
 
 <div className="space-y-1.5">
 <label htmlFor="chk-payexpiry" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">Expiration (MM/YY)</label>
 <input
 id="chk-payexpiry"
 type="text"
 required
 value={cardExpiry}
 onChange={(e) => setCardExpiry(e.target.value)}
 placeholder="11/29"
 maxLength={5}
 className="w-full text-xs font-mono px-4 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>

 <div className="space-y-1.5">
 <label htmlFor="chk-paycvv" className="block text-[10px] font-mono tracking-widest uppercase text-[#7E756B]">Security Code (CVV)</label>
 <div className="relative flex items-center">
 <Lock className="absolute left-3.5 w-4 h-4 text-[#C2BCAE]" />
 <input
 id="chk-paycvv"
 type="password"
 required
 value={cardCvv}
 onChange={(e) => setCardCvv(e.target.value)}
 placeholder="•••"
 maxLength={4}
 className="w-full text-xs font-mono pl-10 pr-4 py-3 bg-[#F9F8F6] border border-[#EAE6DF] rounded-sm focus:outline-none focus:border-[#1A1A1A]"
 />
 </div>
 </div>

 </div>

 </div>
 ) : (
 <div className="p-5 bg-[#F3EFE9] border border-[#EAE6DF] rounded-sm space-y-4 ">
 <div className="flex gap-2 items-center text-xs font-mono text-green-800 uppercase font-bold">
 <CheckCircle className="w-4 h-4 text-green-700" />
 <span>LuxeNest Prime Bank Wire Mode Selected</span>
 </div>
 <p className="text-[11px] text-[#7E756B] leading-relaxed font-sans">
 Upon order completion, bank invoice wire details will be dispatched immediately onto your verified email inbox (<span className="text-black font-semibold">{email || 'your-address'}</span>). We hold objects for 5 business days pending bank confirmation receipt.
 </p>
 
 <div className="p-3 bg-white rounded-sm text-[10px] font-mono text-[#1A1A1A] border border-[#EAE6DF] space-y-1">
 <div>Bank: JP Morgan Chase NYC Private Client Registry</div>
 <div>Account routing: •••••920</div>
 <div>Beneficiary: LuxeNest Living Copenhagen LLC</div>
 </div>
 </div>
 )}

 <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-between">
 <button
 type="button"
 onClick={() => setStep(2)}
 className="inline-flex items-center justify-center rounded-sm border border-[#EAE6DF] px-6 py-3 text-xs uppercase tracking-widest text-[#7E756B] transition-colors hover:border-[#7E756B] hover:text-[#1A1A1A]"
 >
 Back Logistics
 </button>
 <button
 type="submit"
 disabled={placingOrder}
 className="inline-flex items-center justify-center rounded-sm bg-green-700 px-8 py-3.5 text-xs uppercase tracking-[0.16em] text-white transition-colors hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-green-900/60"
 >
 {placingOrder ? 'Confirming with Carrier...' : 'Authorize & Launch Order'}
 </button>
 </div>

 </form>
 )}

 </div>

 <div className="space-y-6 rounded-sm border border-[#EAE6DF] bg-[#F3EFE9] p-5 sm:p-6 lg:col-span-4">
 
 <h3 className="font-serif text-lg tracking-widest uppercase text-[#1A1A1A] border-b border-[#EAE6DF] pb-3">
 YOUR SELECTION
 </h3>

 <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
 {cart.map((item) => (
 <div key={item.id} className="flex gap-3 items-center">
 <img src={item.product.images[0]} alt={item.product.name} className="w-10 h-12 object-cover rounded-sm border border-[#EAE6DF] bg-white flex-shrink-0" />
 <div className="flex-grow min-w-0">
 <span className="block text-xs font-serif text-[#1A1A1A] font-medium truncate">{item.product.name}</span>
 <span className="block text-[10px] font-mono text-[#7E756B] uppercase">Qty {item.quantity} • {item.selectedColor.name}</span>
 </div>
 <span className="font-mono text-xs text-[#1A1A1A] font-semibold flex-shrink-0">
 ${(item.product.price * item.quantity).toLocaleString()}
 </span>
 </div>
 ))}
 </div>

 <div className="space-y-3.5 text-xs font-mono uppercase tracking-wider pt-6 border-t border-[#EAE6DF] pb-6 border-b">
 
 <div className="flex justify-between text-[#7E756B]">
 <span>Subtotal</span>
 <span className="text-[#1A1A1A]">${subtotal.toLocaleString()}</span>
 </div>

 <div className="flex justify-between text-[#7E756B]">
 <span>Logistics (Mode: {deliveryMethod === 'white-glove' ? 'WG' : 'LTL'})</span>
 {shippingCost === 0 ? (
 <span className="text-green-700 font-semibold uppercase text-[10px]">Complimentary</span>
 ) : (
 <span className="text-[#1A1A1A]">${shippingCost.toLocaleString()}</span>
 )}
 </div>

 <div className="flex justify-between text-[#7E756B]">
 <span>Estimated Sales Taxes</span>
 <span className="text-[#1A1A1A]">${taxCost.toLocaleString()}</span>
 </div>

 </div>

 <div className="flex justify-between items-baseline pt-2">
 <span className="font-serif text-sm tracking-widest text-[#1a1a1a] uppercase font-bold">Total Authorization</span>
 <span className="font-serif text-2xl tracking-widest text-[#1A1A1A] font-semibold">${grandTotal.toLocaleString()}</span>
 </div>

 <div className="p-4 bg-white/70 rounded-xs border border-[#EAE6DF] space-y-2.5">
 <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-[#1A1A1A] uppercase font-bold">
 <Award className="w-4 h-4 text-[#D4AF37]" />
 <span>THE LUXENEST PROMISE</span>
 </div>
 <p className="text-[10px] text-[#7E756B] font-sans leading-relaxed">
 Every framing joint carries our fully serialized timber brand to guarantee authentic old-world workshop fabrication. Enjoy lifetime repair programs.
 </p>
 </div>

 </div>

 </div>

 </div>
 );
}
