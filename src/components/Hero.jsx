import { PhoneCall, Shield, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "radial-gradient(circle at 20% 10%, rgba(59,130,246,0.15), transparent 30%), radial-gradient(circle at 80% 30%, rgba(2,132,199,0.14), transparent 35%), radial-gradient(circle at 40% 90%, rgba(59,130,246,0.12), transparent 35%)"
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 text-sm mb-4">
            <Shield size={16} /> Licensed • Insured • Local
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Reliable plumbing services you can trust
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            From leaks and clogs to full installations — our local team delivers fast, friendly, and professional service across your area.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="tel:+15551234567" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-sm transition-colors">
              <PhoneCall size={18} /> Call now
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-blue-700 ring-1 ring-inset ring-blue-200 px-6 py-3 rounded-md transition-colors">
              Get a free quote
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2"><Clock size={16} className="text-blue-600"/> 24/7 emergency</div>
            <div className="flex items-center gap-2"><Shield size={16} className="text-blue-600"/> Satisfaction guaranteed</div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-200 via-blue-100 to-white shadow-xl border border-white/60 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQbHVtYmVyJTIwYXQlMjB3b3JrfGVufDB8MHx8fDE3NjM2NTg2ODV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Plumber at work" className="w-full h-full object-cover mix-blend-multiply" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-xl shadow-lg ring-1 ring-slate-200 p-4">
            <p className="text-sm text-slate-600">Serving homes and businesses across town since 1998.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
