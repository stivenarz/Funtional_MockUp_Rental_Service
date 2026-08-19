import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const categories = [
  { icon: "⚡", label: "Electricista", count: 48 },
  { icon: "🔧", label: "Plomería", count: 63 },
  { icon: "🌿", label: "Jardinería", count: 31 },
  { icon: "🎨", label: "Pintura", count: 55 },
  { icon: "🧹", label: "Limpieza", count: 89 },
  { icon: "❄️", label: "Climatización", count: 27 },
  { icon: "🔨", label: "Carpintería", count: 42 },
  { icon: "🪟", label: "Vidriería", count: 19 },
];

const featuredServices = [
  {
    id: 1,
    title: "Mantenimiento Eléctrico Residencial",
    category: "Electricista",
    rating: 4.9,
    reviews: 128,
    price: "$45.000",
    unit: "/hr",
    verified: true,
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=340&fit=crop&auto=format",
    badge: "Más solicitado",
  },
  {
    id: 2,
    title: "Reparación de Fugas & Grifería",
    category: "Plomería",
    rating: 4.8,
    reviews: 97,
    price: "$38.000",
    unit: "/hr",
    verified: true,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=340&fit=crop&auto=format",
    badge: null,
  },
  {
    id: 3,
    title: "Jardinería & Paisajismo",
    category: "Diseño de Paisaje",
    rating: 5.0,
    reviews: 44,
    price: "$55.000",
    unit: "/visita",
    verified: false,
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=340&fit=crop&auto=format",
    badge: "Nuevo",
  },
  {
    id: 4,
    title: "Pintura de Interiores Premium",
    category: "Pintura",
    rating: 4.7,
    reviews: 76,
    price: "$32.000",
    unit: "/m²",
    verified: true,
    img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&h=340&fit=crop&auto=format",
    badge: null,
  },
];

const stats = [
  { value: "+500", label: "Profesionales verificados" },
  { value: "+12K", label: "Servicios completados" },
  { value: "4.9★", label: "Calificación promedio" },
  { value: "98%", label: "Satisfacción del cliente" },
];

export default function Landing() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    navigate("/explorar");
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#3B82F6] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#10B981] blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 bg-[#10B981]/20 text-[#34D399] text-xs font-semibold px-3 py-1 rounded-full mb-5" style={{ fontFamily: "JetBrains Mono, monospace" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse inline-block" />
              +500 profesionales verificados disponibles
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
              Soluciones para el hogar,{" "}
              <span className="text-[#3B82F6]">a un clic de distancia.</span>
            </h1>
            <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed">
              Conectamos a profesionales calificados con personas que buscan eficiencia y transparencia en servicios domésticos.
            </p>
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" strokeLinecap="round" />
                </svg>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="¿Qué servicio necesitas hoy?"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-[#64748B] rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#3B82F6] focus:bg-white/15 transition-all"
                />
              </div>
              <button
                type="submit"
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-[#3B82F6]/30 whitespace-nowrap"
              >
                Buscar servicio
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold text-[#0F172A]" style={{ fontFamily: "Manrope, sans-serif" }}>{s.value}</p>
              <p className="text-sm text-[#64748B] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: "Manrope, sans-serif" }}>
            Categorías de servicios
          </h2>
          <button onClick={() => navigate("/explorar")} className="text-sm text-[#3B82F6] font-medium hover:underline">
            Ver todas →
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => navigate("/explorar")}
              className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#3B82F6] hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-xs font-semibold text-[#0F172A] group-hover:text-[#3B82F6] transition-colors text-center leading-tight">
                {cat.label}
              </span>
              <span className="text-[10px] text-[#94A3B8]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                {cat.count} pros
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured services */}
      <section className="bg-[#F8FAFC] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: "Manrope, sans-serif" }}>
              Servicios destacados
            </h2>
            <button onClick={() => navigate("/explorar")} className="text-sm text-[#3B82F6] font-medium hover:underline">
              Ver todos →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredServices.map((svc) => (
              <div
                key={svc.id}
                onClick={() => navigate("/perfil")}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="relative h-44 bg-[#E2E8F0] overflow-hidden">
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {svc.verified && (
                    <span className="absolute top-2.5 left-2.5 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[#10B981] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                      Verificado
                    </span>
                  )}
                  {svc.badge && (
                    <span className="absolute top-2.5 right-2.5 bg-[#3B82F6] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {svc.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wider" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    {svc.category}
                  </span>
                  <h3 className="text-sm font-bold text-[#0F172A] mt-1 mb-2 leading-snug" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {svc.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-[#F59E0B] text-sm">★</span>
                      <span className="text-sm font-semibold text-[#0F172A]">{svc.rating}</span>
                      <span className="text-xs text-[#94A3B8]">({svc.reviews})</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-[#0F172A]">DESDE {svc.price}</span>
                      <span className="text-xs text-[#94A3B8]">{svc.unit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <span className="text-[#BFDBFE] text-xs font-semibold uppercase tracking-wider block mb-2" style={{ fontFamily: "JetBrains Mono, monospace" }}>
              Suscripción Pro
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
              Descuentos ilimitados en todos tus servicios
            </h3>
            <p className="text-[#BFDBFE] text-sm max-w-md">
              Únete a Rental Service Marketplace Pro y obtén atención prioritaria, garantía extendida y 15% de descuento en reparaciones de emergencia.
            </p>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="relative shrink-0 bg-white text-[#3B82F6] font-bold px-8 py-3 rounded-xl text-sm hover:bg-[#F0F9FF] transition-colors shadow-lg"
          >
            Saber más →
          </button>
        </div>
      </section>
    </Layout>
  );
}
