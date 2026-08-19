import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/explorar", label: "Explorar" },
    { to: "/dashboard", label: "Panel" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
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
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === to
                    ? "text-[#3B82F6] border-b-2 border-[#3B82F6] pb-0.5"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex text-[#64748B] hover:text-[#0F172A] transition-colors p-1.5 rounded-lg hover:bg-[#F1F5F9]">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <Link
              to="/perfil"
              className="w-8 h-8 bg-[#0F172A] rounded-full flex items-center justify-center text-white text-xs font-bold hover:bg-[#1e293b] transition-colors"
            >
              RG
            </Link>
            <button
              className="md:hidden p-1.5 text-[#64748B]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                {menuOpen
                  ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                  : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#E2E8F0] px-4 py-3 flex flex-col gap-2">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-sm font-medium ${
                  location.pathname === to
                    ? "bg-[#EFF6FF] text-[#3B82F6]"
                    : "text-[#64748B] hover:bg-[#F8FAFC]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-[#0F172A] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-[#3B82F6] rounded-md flex items-center justify-center">
                <svg width="13" height="13" fill="none" viewBox="0 0 16 16">
                  <path d="M8 1L2 5v8h4V9h4v4h4V5L8 1z" fill="white" />
                </svg>
              </div>
              <span className="font-bold text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
                Rental Service Marketplace
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm">Soluciones para el hogar, a un clic de distancia.</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Navegación</p>
            <div className="flex flex-col gap-1.5">
              {["Inicio", "Explorar", "Panel de Control", "Perfil"].map((l) => (
                <span key={l} className="text-sm text-[#94A3B8] hover:text-white cursor-pointer transition-colors">{l}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Legal</p>
            <div className="flex flex-col gap-1.5">
              {["Privacidad", "Términos", "Contacto", "Ayuda"].map((l) => (
                <span key={l} className="text-sm text-[#94A3B8] hover:text-white cursor-pointer transition-colors">{l}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#1e293b] max-w-7xl mx-auto px-4 py-4">
          <p className="text-[#475569] text-xs">© 2024 Rental Service Marketplace · Soluciones para el Hogar</p>
        </div>
      </footer>
    </div>
  );
}
