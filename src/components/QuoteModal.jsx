import React, { useState } from 'react';
import { 
  X, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Building, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { companyInfo } from '../data/companyData';

export default function QuoteModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: initialService || 'Earthmoving & Land Clearing',
    location: '',
    volume: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setError('Please fill out name, phone, and email address.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-industrial-900 border-2 border-caterpillar rounded-sm shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 bg-industrial-950 border-b border-industrial-800 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-caterpillar animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-caterpillar font-bold">
                Rapid Project Estimating
              </span>
            </div>
            <h3 className="text-2xl font-black font-heading uppercase text-white mt-0.5">
              Request An Earthwork Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-industrial-800 rounded-sm"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black font-heading uppercase text-white">
                Quote Request Dispatched
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. A dedicated estimator from Titan Earthworks will review your specifications and contact you directly.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-caterpillar text-black font-black font-heading text-xs uppercase tracking-wider rounded-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-950/80 border border-red-500/40 text-red-200 text-xs rounded-sm">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Bradley"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 bg-industrial-950 border border-industrial-700 text-white text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-caterpillar"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Bradley Civil GC"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 bg-industrial-950 border border-industrial-700 text-white text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-caterpillar"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 bg-industrial-950 border border-industrial-700 text-white text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-caterpillar"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 bg-industrial-950 border border-industrial-700 text-white text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-caterpillar"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                    Target Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2 bg-industrial-950 border border-industrial-700 text-white text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-caterpillar cursor-pointer"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Turnkey Full Heavy Civil Package">
                      Turnkey Full Heavy Civil Package
                    </option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                    Site Location / City
                  </label>
                  <input
                    type="text"
                    placeholder="Dallas / Fort Worth Area"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2 bg-industrial-950 border border-industrial-700 text-white text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-caterpillar"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-slate-300 font-bold block mb-1">
                  Project Notes / Scope Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Estimated cut/fill volume, target start date, site accessibility, or specific machinery required..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 bg-industrial-950 border border-industrial-700 text-white text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-caterpillar"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-caterpillar hover:bg-caterpillar-light text-black font-black font-heading text-sm uppercase tracking-wider rounded-sm shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Request to Estimating Desk</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
