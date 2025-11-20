import { Wrench, Droplet, Flame, ShowerHead, Thermometer, Waves } from "lucide-react";

const services = [
  { icon: Wrench, title: "Repairs", desc: "Leaks, clogs, burst pipes, and fixture repairs." },
  { icon: ShowerHead, title: "Installations", desc: "Faucets, sinks, toilets, showers, disposals." },
  { icon: Thermometer, title: "Water Heaters", desc: "Repair, replacement, and maintenance." },
  { icon: Droplet, title: "Water Quality", desc: "Filtration, softeners, and testing." },
  { icon: Flame, title: "Gas Lines", desc: "Inspection, repair, and new lines." },
  { icon: Waves, title: "Sewer & Drain", desc: "Camera inspections and hydro-jetting." },
];

export default function Services(){
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Our Services</h2>
          <p className="mt-3 text-slate-600">Comprehensive plumbing solutions for your home or business.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group rounded-xl bg-white/80 backdrop-blur border border-slate-200/70 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-md bg-blue-600/10 text-blue-700 grid place-items-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="text-sm text-slate-600 mt-1">{desc}</p>
              <div className="mt-4 text-sm text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
