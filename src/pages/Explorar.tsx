import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const allServices = [
  { id: 1, title: "Mantenimiento Eléctrico Residencial", category: "Electricista", rating: 4.9, reviews: 128, price: "$45.000", unit: "/hr", verified: true, img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=340&fit=crop&auto=format" },
  { id: 2, title: "Reparación de Fugas & Grifería", category: "Plomería", rating: 4.8, reviews: 97, price: "$38.000", unit: "/hr", verified: true, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=340&fit=crop&auto=format" },
  { id: 3, title: "Jardinería & Paisajismo", category: "Jardinería", rating: 5.0, reviews: 44, price: "$55.000", unit: "/visita", verified: false, img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=340&fit=crop&auto=format" },
  { id: 4, title: "Pintura de Interiores Premium", category: "Pintura", rating: 4.7, reviews: 76, price: "$32.000", unit: "/m²", verified: true, img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&h=340&fit=crop&auto=format" },
  { id: 5, title: "Instalación de Aire Acondicionado", category: "Climatización", rating: 4.6, reviews: 53, price: "$85.000", unit: "/visita", verified: true, img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=340&fit=crop&auto=format" },
  { id: 6, title: "Carpintería y Muebles a Medida", category: "Carpintería", rating: 4.9, reviews: 61, price: "$60.000", unit: "/hr", verified: false, img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=340&fit=crop&auto=format" },
  { id: 7, title: "Limpieza Profunda del Hogar", category: "Limpieza", rating: 4.8, reviews: 214, price: "$25.000", unit: "/hr", verified: true, img: "https://images.unsplash.com/photo-1558618047-3c8c76ca6c27?w=600&h=340&fit=crop&auto=format" },
  { id: 8, title: "Instalación de Paneles de Vidrio", category: "Vidriería", rating: 4.5, reviews: 29, price: "$70.000", unit: "/m²", verified: false, img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=340&fit=crop&auto=format" },
];

const categories = ["Todos", "Electricista", "Plomería", "Jardinería", "Pintura", "Limpieza", "Climatización", "Carpintería", "Vidriería"];

export default function Explorar() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("rating");
  const navigate = useNavigate();

  const filtered = allServices
    .filter((s) => {
      const matchCat = activeCategory === "Todos" || s.category === activeCategory;
      const matchQuery = s.title.toLowerCase().includes(query.toLowerCase()) || s.category.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price") return parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""));
      if (sortBy === "reviews") return b.reviews - a.reviews;
      return 0;
    });

  return (
    <Layout>
      {/* Search header */}
      <div className="bg-[#0F172A] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-extrabold text-white mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Buscador de Servicios
          </h1>
          <div className="flex gap-3">
            <div className="relative flex-1 max-w-xl">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="¿Qué servicio necesitas hoy?"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-[#64748B] rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#3B82F6] transition-all"
              />
            </div>
            <button className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-4 py-2.5 rounded-xl hover:bg-white/15 transition-colors">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path d="M3 4h18M7 12h10M11 20h2" strokeLinecap="round" />
              </svg>
              Filtros
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-[#0F172A] text-white"
                  : "bg-white border border-[#E2E8F0] text-[#64748B] hover:border-[#3B82F6] hover:text-[#3B82F6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-[#64748B]">
            <span className="font-bold text-[#0F172A]">{filtered.length}</span> servicios encontrados
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#94A3B8]">Ordenar por:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E2E8F0] rounded-lg px-3 py-1.5 text-[#0F172A] focus:outline-none focus:border-[#3B82F6] bg-white"
            >
              <option value="rating">Mejor valorados</option>
              <option value="reviews">Más reseñas</option>
              <option value="price">Menor precio</option>
            </select>
          </div>
        </div>

        {/* Cards grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#94A3B8]">
            <svg className="w-12 h-12 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" strokeLinecap="round" />
            </svg>
            <p className="font-semibold text-[#64748B]">No se encontraron servicios</p>
            <p className="text-sm mt-1">Intenta con otra búsqueda o categoría</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {filtered.map((svc) => (
              <div
                key={svc.id}
                onClick={() => navigate("/perfil")}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="relative h-44 bg-[#E2E8F0] overflow-hidden">
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {svc.verified && (
                    <span className="absolute top-2.5 left-2.5 flex items-center gap-1 bg-white/90 text-[#10B981] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                      Verificado
                    </span>
                  )}
                  <button className="absolute top-2.5 right-2.5 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center text-[#94A3B8] hover:text-[#EF4444] transition-colors">
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" />
                    </svg>
                  </button>
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
                  <button className="mt-3 w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1.5">
                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round"/></svg>
                    Reservar ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
