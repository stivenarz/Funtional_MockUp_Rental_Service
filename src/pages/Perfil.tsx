import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const skills = ["Instalación Sanitarios", "Detección de Fugas", "Reparación Termos", "Fontanería Cocinas", "Certificados Gas", "Desatascos"];

const reviews = [
  {
    id: 1,
    name: "María Castro",
    initials: "MC",
    color: "#3B82F6",
    time: "Hace 2 días",
    service: "Reparación de fuga",
    rating: 5,
    text: "Excelente trabajo. Roberto llegó puntual, detectó la fuga rápidamente y me explicó todo el proceso. Muy limpio y profesional. Lo recomiendo totalmente.",
  },
  {
    id: 2,
    name: "Juan López",
    initials: "JL",
    color: "#10B981",
    time: "Hace 1 semana",
    service: "Instalación de termo",
    rating: 4,
    text: "Muy buen trato y eficiencia. El precio fue razonable y cumplió con los tiempos prometidos. Solo eché de menos que trajera todas las herramientas en el primer viaje, pero lo solucionó pronto.",
  },
  {
    id: 3,
    name: "Lucía Herrera",
    initials: "LH",
    color: "#F59E0B",
    time: "Hace 2 semanas",
    service: "Fontanería cocina",
    rating: 5,
    text: "Increíble profesional. Solucionó un problema que llevaba meses sin solucionar en menos de una hora. Precios justos y trabajo impecable.",
  },
];

const navItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "servicios", label: "Servicios" },
  { id: "perfil", label: "Perfil" },
  { id: "buscador", label: "Buscador" },
  { id: "pagos", label: "Pagos" },
];

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width={size} height={size} viewBox="0 0 20 20" fill={s <= rating ? "#F59E0B" : "#E2E8F0"}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Perfil() {
  const [activeNav, setActiveNav] = useState("perfil");
  const navigate = useNavigate();

  function handleNav(id: string) {
    setActiveNav(id);
    if (id === "dashboard") navigate("/dashboard");
    if (id === "buscador") navigate("/explorar");
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Top nav */}
      <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#3B82F6] rounded-lg flex items-center justify-center">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M8 1L2 5v8h4V9h4v4h4V5L8 1z" fill="white" />
              </svg>
            </div>
            <span className="font-bold text-[#0F172A] text-[15px]" style={{ fontFamily: "Manrope, sans-serif" }}>
              Rental Service Marketplace
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm text-[#64748B] hover:text-[#0F172A]">Inicio</Link>
            <Link to="/explorar" className="text-sm text-[#64748B] hover:text-[#0F172A]">Explorar</Link>
            <Link to="/perfil" className="text-sm text-[#3B82F6] font-semibold border-b-2 border-[#3B82F6] pb-0.5">Perfil</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="text-[#64748B] p-1.5 rounded-lg hover:bg-[#F1F5F9]">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="w-8 h-8 bg-[#0F172A] rounded-full flex items-center justify-center text-white text-xs font-bold">RG</div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full px-4 py-6 gap-6">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-56 shrink-0">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 flex flex-col gap-1 mb-4">
            <p className="text-xs font-bold text-[#3B82F6] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Panel de Control</p>
            <p className="text-[10px] text-[#94A3B8] mb-3">Gestión de Servicios</p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                  activeNav === item.id
                    ? "bg-[#EFF6FF] text-[#3B82F6]"
                    : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => navigate("/explorar")}
            className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-sm px-4 py-3 rounded-xl transition-all"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path d="M12 4v16M4 12h16" strokeLinecap="round" />
            </svg>
            Nuevo Servicio
          </button>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          {/* Profile banner */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden mb-5">
            <div className="h-36 bg-gradient-to-r from-[#0F172A] to-[#1e3a5f] relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=300&fit=crop&auto=format"
                alt="Workshop tools"
                className="w-full h-full object-cover opacity-40"
              />
            </div>
            <div className="px-6 pb-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-10">
                <div className="w-20 h-20 rounded-2xl border-4 border-white overflow-hidden bg-[#E2E8F0] shadow-md shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format&face"
                    alt="Roberto Gómez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 mt-2 sm:mt-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-xl font-extrabold text-[#0F172A]" style={{ fontFamily: "Manrope, sans-serif" }}>
                      Roberto Gómez
                    </h1>
                    <span className="flex items-center gap-1 bg-[#DCFCE7] text-[#16A34A] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                      Verificado
                    </span>
                  </div>
                  <p className="text-sm text-[#64748B] mt-0.5">
                    Especialista en Fontanería y Reformas del Hogar · 12 años de experiencia
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button className="border border-[#E2E8F0] text-[#0F172A] font-semibold text-sm px-4 py-2 rounded-xl hover:bg-[#F8FAFC] transition-colors flex items-center gap-1.5">
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round"/></svg>
                    Mensaje
                  </button>
                  <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-sm px-4 py-2 rounded-xl transition-all flex items-center gap-1.5">
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round"/></svg>
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Left col */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Reputation */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
                <h3 className="font-bold text-[#0F172A] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>Reputación</h3>
                <p className="text-5xl font-extrabold text-[#3B82F6] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>4.8</p>
                <Stars rating={5} size={18} />
                <p className="text-xs text-[#94A3B8] mt-1">Basado en 154 valoraciones</p>
                <div className="mt-4 space-y-2">
                  {[
                    { label: "Calidad del servicio", pct: 98 },
                    { label: "Puntualidad", pct: 92 },
                    { label: "Precio competitivo", pct: 85 },
                  ].map(({ label, pct }) => (
                    <div key={label}>
                      <div className="flex justify-between text-[10px] font-semibold text-[#64748B] mb-1 uppercase tracking-wider" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                        <span>{label}</span><span>{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                        <div className="h-full bg-[#3B82F6] rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
                <h3 className="font-bold text-[#0F172A] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>Habilidades Verificadas</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span key={s} className="text-xs font-medium bg-[#F1F5F9] text-[#475569] px-3 py-1.5 rounded-lg border border-[#E2E8F0] hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right col */}
            <div className="lg:col-span-3 flex flex-col gap-5">
              {/* About */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
                <h3 className="font-bold text-[#0F172A] mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>Sobre Roberto</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Soy un profesional comprometido con la excelencia en el mantenimiento del hogar. Me especializo en soluciones integrales de fontanería para viviendas particulares y locales comerciales. Mi enfoque se basa en la transparencia: proporciono presupuestos detallados sin sorpresas y garantizo todos mis trabajos por 6 meses. Mi objetivo es que cada cliente se sienta tranquilo al dejar su hogar en mis manos.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-[#F1F5F9]">
                  <div>
                    <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-0.5" style={{ fontFamily: "JetBrains Mono, monospace" }}>Zona de servicio</p>
                    <p className="text-sm font-semibold text-[#0F172A]">Madrid y alrededores</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-0.5" style={{ fontFamily: "JetBrains Mono, monospace" }}>Miembro desde</p>
                    <p className="text-sm font-semibold text-[#0F172A]">Marzo 2021</p>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#0F172A]" style={{ fontFamily: "Manrope, sans-serif" }}>Reseñas de Clientes</h3>
                  <button className="text-xs text-[#3B82F6] font-medium hover:underline">Ver todas</button>
                </div>
                <div className="space-y-4">
                  {reviews.map((r) => (
                    <div key={r.id} className="border-b border-[#F1F5F9] pb-4 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                            style={{ background: r.color }}
                          >
                            {r.initials}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#0F172A]">{r.name}</p>
                            <p className="text-[10px] text-[#94A3B8]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                              {r.time} · {r.service}
                            </p>
                          </div>
                        </div>
                        <Stars rating={r.rating} size={13} />
                      </div>
                      <p className="text-sm text-[#475569] leading-relaxed">{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E2E8F0] mt-6">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#94A3B8]">
            <span className="font-semibold text-[#3B82F6]">Rental Service Marketplace</span> · © 2024 Soluciones para el Hogar
          </p>
          <div className="flex gap-4">
            {["Privacidad", "Términos", "Contacto", "Ayuda"].map((l) => (
              <span key={l} className="text-xs text-[#94A3B8] hover:text-[#64748B] cursor-pointer">{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
