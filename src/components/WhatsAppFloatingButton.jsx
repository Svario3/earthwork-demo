import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function WhatsAppFloatingButton() {
  const url = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(companyInfo.whatsappDefaultMsg)}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 group flex items-center">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 px-3.5 py-1.5 bg-industrial-900 border border-emerald-500/40 text-white text-xs font-mono font-bold rounded-sm shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <span>Chat with Estimator on WhatsApp</span>
        <div className="text-[10px] text-emerald-400 font-normal">Instant 24/7 Dispatch Desk</div>
      </div>

      {/* Floating Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Titan Earthworks"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl shadow-emerald-500/40 transition-all transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none"></span>

        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      </a>
    </aside>
  );
}
