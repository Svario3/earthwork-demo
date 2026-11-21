import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  UploadCloud, 
  FileText,
  Building,
  Navigation
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { servicesData } from '../data/servicesData';

export default function ContactSection({ prefillData, onClearPrefill }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Earthmoving & Land Clearing',
    location: '',
    timeline: 'Within 2-4 Weeks',
    estimatedVolume: '',
    projectDescription: '',
    planFileName: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState(null);

  // Sync if prefill data comes from Cost Estimator or Service Card
  useEffect(() => {
    if (prefillData) {
      setFormData(prev => ({
        ...prev,
        service: prefillData.service || prev.service,
        estimatedVolume: prefillData.cubicYards || prev.estimatedVolume,
        projectDescription: prefillData.projectType 
          ? `[Auto-Estimated via Calculator]: Project Scope: ${prefillData.projectType}, Area: ${prefillData.areaSize}, Depth: ${prefillData.cutDepth}, Soil: ${prefillData.soilType}, Haulage: ${prefillData.haulRequired}. Estimated Budget: ${prefillData.estimatedCost}.\n\nAdditional Requirements: `
          : prev.projectDescription
      }));
    }
  }, [prefillData]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for dispatch';
    } else if (!/^[0-9+\s\-()]{7,20}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.projectDescription.trim() || formData.projectDescription.length < 10) {
      errs.projectDescription = 'Please provide at least a brief description of project scope (min 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      const generatedRef = 'TE-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRefId(generatedRef);
      setIsSubmitting(false);
    }, 800);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, planFileName: e.target.files[0].name }));
    }
  };

  const resetForm = () => {
    setSubmittedRefId(null);
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      service: 'Earthmoving & Land Clearing',
      location: '',
      timeline: 'Within 2-4 Weeks',
      estimatedVolume: '',
      projectDescription: '',
      planFileName: ''
    });
    if (onClearPrefill) onClearPrefill();
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-industrial-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-caterpillar/10 border border-caterpillar/30 rounded-sm mb-3">
            <Mail className="w-4 h-4 text-caterpillar" />
            <span className="text-xs font-mono uppercase tracking-widest text-caterpillar font-bold">
              Dispatch & Project Bidding Hub
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase">
            Request an Earthwork <span className="text-caterpillar">Bid or Dispatch Fleet</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Submit your civil specifications for a certified 3D CAD volumetric takeoff, or contact our 24/7 heavy mobilization desk directly.
          </p>
        </div>

        {/* 2-Column Content Grid: Contact Details & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info, Hours & Map Preview */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-industrial-900 border border-industrial-800 p-6 sm:p-8 rounded-sm shadow-xl space-y-6">
              <h3 className="text-xl font-black font-heading uppercase text-white border-b border-industrial-800 pb-3 flex items-center justify-between">
                <span>Headquarters & Yard</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </h3>

              <div className="space-y-4 text-sm">
                {/* Physical Yard */}
                <div className="flex items-start space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-caterpillar shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading uppercase">Heavy Fleet Terminal:</strong>
                    <span>{companyInfo.address.street}</span><br />
                    <span>{companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}</span>
                    <span className="text-xs font-mono text-slate-400 block mt-0.5">{companyInfo.yardLocation}</span>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start space-x-3 text-slate-300">
                  <Phone className="w-5 h-5 text-caterpillar shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading uppercase">24/7 Rapid Dispatch:</strong>
                    <a href={`tel:${companyInfo.directPhone}`} className="text-caterpillar hover:text-caterpillar-light font-mono font-bold text-base">
                      {companyInfo.phoneDisplay}
                    </a>
                    <span className="text-xs text-slate-400 block font-mono">Toll-Free Direct: {companyInfo.phone}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 text-slate-300">
                  <Mail className="w-5 h-5 text-caterpillar shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading uppercase">Estimating & Bids:</strong>
                    <a href={`mailto:${companyInfo.quotesEmail}`} className="text-slate-200 hover:text-caterpillar font-mono">
                      {companyInfo.quotesEmail}
                    </a>
                    <span className="text-xs text-slate-400 block font-mono">Operations: {companyInfo.email}</span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-3 text-slate-300">
                  <Clock className="w-5 h-5 text-caterpillar shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading uppercase">Operating Schedule:</strong>
                    <span className="text-xs text-slate-300 block">{companyInfo.businessHours.office}</span>
                    <span className="text-xs text-slate-300 block">{companyInfo.businessHours.saturday}</span>
                    <span className="text-xs text-emerald-400 font-mono block mt-0.5 font-bold">
                      {companyInfo.businessHours.dispatch}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-4 border-t border-industrial-800">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(companyInfo.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black font-heading uppercase tracking-wider rounded-sm flex items-center justify-center space-x-2.5 shadow-lg shadow-emerald-900/30 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat With Estimator On WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps / Terminal Coordinates Container */}
            <div className="bg-industrial-900 border border-industrial-800 rounded-sm overflow-hidden shadow-xl">
              <div className="p-3 bg-industrial-950 border-b border-industrial-800 flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5 text-caterpillar font-bold">
                  <Navigation className="w-3.5 h-3.5" />
                  Terminal Coordinates: 32.7767° N, 96.7970° W
                </span>
                <span className="text-emerald-400">GPS Live</span>
              </div>
              <div className="h-56 w-full relative bg-industrial-950">
                <iframe
                  title="Titan Earthworks Dispatch Terminal Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107314.77918349788!2d-97.040327!3d32.899809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d431c3b10b3%3A0xb36b760be850787e!2sDallas-Fort%20Worth%20International%20Airport!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* Yard pin overlay */}
                <div className="absolute bottom-3 left-3 bg-industrial-950/95 border border-caterpillar/40 px-3 py-1 text-[11px] font-mono text-slate-200 rounded-sm pointer-events-none">
                  DFW Heavy Iron Fleet Yard & Logistics Depot
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Enquiry & Bid Form */}
          <div className="lg:col-span-7 bg-industrial-900 border-2 border-industrial-800 hover:border-caterpillar/40 transition-colors p-6 sm:p-10 rounded-sm shadow-2xl relative">
            
            {/* Top Indicator */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-industrial-800">
              <div>
                <h3 className="text-2xl font-black font-heading uppercase text-white">
                  Formal Project Bid Request
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Complete the technical specs below. Certified estimators review submissions within 4 hours.
                </p>
              </div>
              <ShieldCheck className="w-8 h-8 text-caterpillar hidden sm:block" />
            </div>

            {/* Success Confirmation Modal State */}
            {submittedRefId ? (
              <div className="p-8 bg-industrial-950 border-2 border-emerald-500/60 rounded-sm text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-black font-heading uppercase text-white">
                  Enquiry Successfully Received
                </h4>
                <div className="inline-block p-3 bg-industrial-900 border border-caterpillar/40 rounded-sm font-mono text-xs">
                  <span className="text-slate-400 block mb-0.5">Tracking Reference Number:</span>
                  <span className="text-lg font-bold text-caterpillar">{submittedRefId}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your civil earthmoving request has been dispatched to our Senior Estimator (Marcus Vance, P.E.). We will review your site volume requirements and contact you via <strong className="text-white">{formData.phone}</strong>.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-industrial-800 hover:bg-industrial-700 text-slate-200 text-xs font-bold uppercase tracking-wider rounded-sm"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=Regarding%20Reference%20${submittedRefId}:%20`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-heading uppercase tracking-wider rounded-sm flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Follow Up On WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Robert Hawkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-industrial-950 border rounded-sm text-sm text-white focus:outline-none focus:ring-1 focus:ring-caterpillar ${
                        errors.name ? 'border-red-500' : 'border-industrial-700'
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1.5">
                      Company / General Contractor
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Pinnacle Commercial Builders"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-industrial-950 border border-industrial-700 rounded-sm text-sm text-white focus:outline-none focus:ring-1 focus:ring-caterpillar"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1.5">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. (555) 327-8496"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-industrial-950 border rounded-sm text-sm text-white focus:outline-none focus:ring-1 focus:ring-caterpillar ${
                        errors.phone ? 'border-red-500' : 'border-industrial-700'
                      }`}
                    />
                    {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1.5">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rhawkins@pinnacle.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-industrial-950 border rounded-sm text-sm text-white focus:outline-none focus:ring-1 focus:ring-caterpillar ${
                        errors.email ? 'border-red-500' : 'border-industrial-700'
                      }`}
                    />
                    {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Row 3: Service Required & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1.5">
                      Primary Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-industrial-950 border border-industrial-700 rounded-sm text-sm text-white focus:outline-none focus:ring-1 focus:ring-caterpillar cursor-pointer"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title} className="bg-industrial-900 text-white">
                          {s.title}
                        </option>
                      ))}
                      <option value="Turnkey Full Heavy Civil Package" className="bg-industrial-900 text-white">
                        Turnkey Full Heavy Civil Package
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1.5">
                      Target Mobilization Window
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-industrial-950 border border-industrial-700 rounded-sm text-sm text-white focus:outline-none focus:ring-1 focus:ring-caterpillar cursor-pointer"
                    >
                      <option value="Emergency (Within 48 Hours)">Emergency (Within 48 Hours)</option>
                      <option value="Within 2-4 Weeks">Within 2–4 Weeks</option>
                      <option value="1-3 Months">1–3 Months</option>
                      <option value="Future Budgetary / Q3-Q4 Bidding">Future Budgetary / Bidding Phase</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Project Location & Estimated Volume */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1.5">
                      Project Location / City & State
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Fort Worth, TX"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-industrial-950 border border-industrial-700 rounded-sm text-sm text-white focus:outline-none focus:ring-1 focus:ring-caterpillar"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1.5">
                      Estimated Volume / Acreage
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 150,000 cu. yds or 25 Acres"
                      value={formData.estimatedVolume}
                      onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-industrial-950 border border-industrial-700 rounded-sm text-sm text-white focus:outline-none focus:ring-1 focus:ring-caterpillar"
                    />
                  </div>
                </div>

                {/* Row 5: Detailed Project Description */}
                <div>
                  <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1.5">
                    Project Scope & Geotechnical Details *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe cut-and-fill depth, soil conditions (rock, clay, sand), storm basin requirements, or utility trenches..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-industrial-950 border rounded-sm text-sm text-white focus:outline-none focus:ring-1 focus:ring-caterpillar ${
                      errors.projectDescription ? 'border-red-500' : 'border-industrial-700'
                    }`}
                  ></textarea>
                  {errors.projectDescription && (
                    <span className="text-[11px] text-red-400 mt-1 block">{errors.projectDescription}</span>
                  )}
                </div>

                {/* File Attachment Mock (Civil Plans / CAD Upload) */}
                <div className="p-4 bg-industrial-950 border border-dashed border-industrial-700 rounded-sm text-center">
                  <label className="cursor-pointer block">
                    <UploadCloud className="w-8 h-8 text-caterpillar mx-auto mb-1.5" />
                    <span className="text-xs font-bold text-white block uppercase font-heading">
                      Attach Civil Engineering Plans or Boring Logs (Optional)
                    </span>
                    <span className="text-[11px] text-slate-400 block font-mono mt-0.5">
                      Accepts PDF, DWG, DXF, or ZIP files (up to 50MB)
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                  {formData.planFileName && (
                    <div className="mt-2 text-xs font-mono text-emerald-400 flex items-center justify-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Attached: {formData.planFileName}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-caterpillar hover:bg-caterpillar-light text-black font-black font-heading text-base uppercase tracking-wider rounded-sm shadow-xl shadow-caterpillar/25 hover:shadow-caterpillar/40 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Specs to Estimating Team...</span>
                    ) : (
                      <>
                        <span>Submit Project Bid Request</span>
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center font-mono mt-2.5">
                    Your plans remain strictly confidential under mutual NDA standards.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
