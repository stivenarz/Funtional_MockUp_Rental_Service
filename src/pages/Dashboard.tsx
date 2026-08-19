import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const navItems = [
  {
    id: "dashboard", label: "Dashboard", icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    )
  },
  {
    id: "servicios", label: "Servicios", icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "perfil", label: "Perfil", icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "buscador", label: "Buscador", icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "pagos", label: "Pagos", icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" strokeLinecap="round" />
      </svg>
    )
  },
];

const reservations = [
  { id: "R-1042", service: "Mantenimiento Eléctrico", provider: "Carlos Mendez", date: "22 Ago 2026", status: "Confirmado", amount: "$90.000", color: "#10B981" },
  { id: "R-1038", service: "Reparación Grifería", provider: "Pedro Sánchez", date: "18 Ago 2026", status: "Completado", amount: "$76.000", color: "#3B82F6" },
  { id: "R-1031", service: "Jardinería & Paisajismo", provider: "Roberto Gómez", date: "10 Ago 2026", status: "Completado", amount: "$110.000", color: "#3B82F6" },
  { id: "R-1025", service: "Pintura Salón Principal", provider: "Ana Torres", date: "02 Ago 2026", status: "Cancelado", amount: "$64.000", color: "#EF4444" },
];

const kpis = [
  { label: "Servicios activos", value: "3", delta: "+1 este mes", positive: true, icon: "🔧" },
  { label: "Total gastado", value: "$340K", delta: "+$76K vs anterior", positive: false, icon: "💳" },
  { label: "Proveedores favoritos", value: "7", delta: "+2 nuevos", positive: true, icon: "⭐" },
  { label: "Reservas pendientes", value: "1", delta: "Para esta semana", positive: true, icon: "📅" },
];

export default function Dashboard() {
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate();

  function handleNav(id: string) {
    setActive(id);
    if (id === "perfil") navigate("/perfil");
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
            <Link to="/" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">Inicio</Link>
            <Link to="/explorar" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">Explorar</Link>
            <Link to="/perfil" className="text-sm text-[#3B82F6] font-semibold border-b-2 border-[#3B82F6] pb-0.5">Perfil</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="text-[#64748B] hover:text-[#0F172A] p-1.5 rounded-lg hover:bg-[#F1F5F9]">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="w-8 h-8 bg-[#0F172A] rounded-full flex items-center justify-center text-white text-xs font-bold">
              JG
            </div>
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
                  active === item.id
                    ? "bg-[#EFF6FF] text-[#3B82F6]"
                    : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                }`}
              >
                <span className={active === item.id ? "text-[#3B82F6]" : "text-[#94A3B8]"}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => navigate("/explorar")}
            className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-sm px-4 py-3 rounded-xl transition-all shadow hover:shadow-md"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path d="M12 4v16M4 12h16" strokeLinecap="round" />
            </svg>
            Nuevo Servicio
          </button>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="mb-6">
            <h1 className="text-2xl font-extrabold text-[#0F172A]" style={{ fontFamily: "Manrope, sans-serif" }}>
              Bienvenido, Juan 👋
            </h1>
            <p className="text-sm text-[#64748B] mt-0.5">Aquí tienes un resumen de tu actividad reciente.</p>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="bg-white rounded-2xl border border-[#E2E8F0] p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl">{kpi.icon}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    kpi.positive ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#FEF3C7] text-[#D97706]"
                  }`} style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    {kpi.delta}
                  </span>
                </div>
                <p className="text-2xl font-extrabold text-[#0F172A]" style={{ fontFamily: "Manrope, sans-serif" }}>{kpi.value}</p>
                <p className="text-xs text-[#64748B] mt-0.5">{kpi.label}</p>
              </div>
            ))}
          </div>

          {/* Reservations */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-[#E2E8F0]">
              <h2 className="font-bold text-[#0F172A] text-base" style={{ fontFamily: "Manrope, sans-serif" }}>Mis Reservas</h2>
              <button className="text-xs text-[#3B82F6] font-medium hover:underline">Ver todas →</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    {["ID", "Servicio", "Proveedor", "Fecha", "Estado", "Monto"].map((h) => (
                      <th key={h} className="text-left text-[10px] font-bold text-[#64748B] uppercase tracking-wider px-5 py-3" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((r, i) => (
                    <tr key={r.id} className={`border-t border-[#F1F5F9] hover:bg-[#F8FAFC] transition-colors ${i % 2 === 0 ? "" : "bg-[#FAFAFA]"}`}>
                      <td className="px-5 py-3.5 font-mono text-[11px] text-[#64748B]">{r.id}</td>
                      <td className="px-5 py-3.5 font-semibold text-[#0F172A]">{r.service}</td>
                      <td className="px-5 py-3.5 text-[#64748B]">{r.provider}</td>
                      <td className="px-5 py-3.5 text-[#64748B]">{r.date}</td>
                      <td className="px-5 py-3.5">
                        <span
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                          style={{
                            background: r.color + "20",
                            color: r.color,
                            fontFamily: "JetBrains Mono, monospace",
                          }}
                        >
                          {r.status}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 font-bold text-[#0F172A]">{r.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
