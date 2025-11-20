import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-blue-600 text-white grid place-items-center font-bold shadow-sm">PL</div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">BlueStream Plumbing</p>
              <p className="text-xs text-slate-500">Trusted local plumbers</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#services" className="hover:text-blue-700 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-700 transition-colors">About</a>
            <a href="#reviews" className="hover:text-blue-700 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+15551234567" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm transition-colors">
              <Phone size={18} /> Call 555-123-4567
            </a>
          </div>

          <button aria-label="Open Menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-slate-100">
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/60 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3 text-slate-700">
            <a onClick={() => setOpen(false)} href="#services" className="py-2">Services</a>
            <a onClick={() => setOpen(false)} href="#about" className="py-2">About</a>
            <a onClick={() => setOpen(false)} href="#reviews" className="py-2">Reviews</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2">Contact</a>
            <a href="tel:+15551234567" className="mt-2 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-fit">
              <Phone size={18} /> Call 555-123-4567
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
