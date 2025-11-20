import { Phone, MessageSquare } from "lucide-react";

export default function CTA(){
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-t from-white to-blue-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Need a plumber today?</h2>
        <p className="mt-3 text-slate-600">We offer same-day service in most areas. Call now or request a free quote and we'll get back to you quickly.</p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="tel:+15551234567" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-sm transition-colors">
            <Phone size={18} /> Call 555-123-4567
          </a>
          <a href="#" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-blue-700 ring-1 ring-inset ring-blue-200 px-6 py-3 rounded-md transition-colors">
            <MessageSquare size={18} /> Request a quote
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500">24/7 emergency service available</p>
      </div>
    </section>
  );
}
