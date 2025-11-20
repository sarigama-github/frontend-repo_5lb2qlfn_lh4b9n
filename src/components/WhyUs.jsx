import { BadgeCheck, Clock, Shield, Sparkles } from "lucide-react";

const points = [
  { icon: BadgeCheck, title: "Quality workmanship", text: "Skilled, licensed professionals on every job." },
  { icon: Clock, title: "On-time & prepared", text: "We arrive when we say we will, fully equipped." },
  { icon: Shield, title: "Upfront pricing", text: "Honest quotes with no surprises on your bill." },
  { icon: Sparkles, title: "Respect for your home", text: "Clean, tidy, and careful from start to finish." },
];

export default function WhyUs(){
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Why choose us</h2>
          <p className="mt-3 text-slate-600">A local team that treats every job like it's in our own home.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {points.map(({icon:Icon,title,text}) => (
              <div key={title} className="rounded-xl bg-blue-50/40 border border-blue-100 p-5">
                <div className="w-9 h-9 rounded-md bg-blue-600/10 text-blue-700 grid place-items-center mb-3">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600 mt-1">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 via-white to-blue-50 border border-white/60 shadow-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1677078610152-8a627d8ced8d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWFtJTIwYXQlMjB3b3JrfGVufDB8MHx8fDE3NjM2NTg2ODZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Team at work" className="w-full h-full object-cover mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
