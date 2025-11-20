import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <CTA />
        <footer className="border-t border-slate-200/70 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
            <p>© {new Date().getFullYear()} BlueStream Plumbing. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#services" className="hover:text-blue-700">Services</a>
              <a href="#about" className="hover:text-blue-700">About</a>
              <a href="#contact" className="hover:text-blue-700">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
