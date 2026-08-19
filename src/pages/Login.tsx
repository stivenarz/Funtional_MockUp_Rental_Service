import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState<"cliente" | "proveedor">("cliente");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden flex min-h-[560px]">
        {/* Left panel */}
        <div className="hidden md:flex flex-col justify-between w-[44%] bg-[#0F172A] p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 right-[-60px] w-64 h-64 rounded-full bg-[#3B82F6] blur-3xl" />
            <div className="absolute bottom-10 left-[-40px] w-48 h-48 rounded-full bg-[#10B981] blur-3xl" />
          </div>
          <div className="relative">
            <Link to="/" className="flex items-center gap-2 mb-12">
              <div className="w-7 h-7 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path d="M8 1L2 5v8h4V9h4v4h4V5L8 1z" fill="white" />
                </svg>
              </div>
              <span className="font-bold text-white text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
                Rental Service Marketplace
              </span>
            </Link>
            <h2 className="text-3xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
              Soluciones para el hogar, a un clic de distancia.
            </h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Conectamos a profesionales calificados con personas que buscan eficiencia y transparencia en servicios domésticos.
            </p>
          </div>
          <div className="relative">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["#3B82F6", "#10B981", "#F59E0B"].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0F172A]" style={{ background: c }} />
                ))}
              </div>
              <span className="text-[#94A3B8] text-sm">+500 profesionales verificados</span>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-10">
          {/* Mobile logo */}
          <Link to="/" className="flex md:hidden items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-[#3B82F6] rounded-md flex items-center justify-center">
              <svg width="13" height="13" fill="none" viewBox="0 0 16 16">
                <path d="M8 1L2 5v8h4V9h4v4h4V5L8 1z" fill="white" />
              </svg>
            </div>
            <span className="font-bold text-[#0F172A] text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
              Rental Service Marketplace
            </span>
          </Link>

          {/* Tabs */}
          <div className="flex gap-1 bg-[#F1F5F9] rounded-xl p-1 mb-6">
            {(["login", "register"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                  tab === t
                    ? "bg-white text-[#0F172A] shadow-sm"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                {t === "login" ? "Iniciar Sesión" : "Crear Cuenta"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === "register" && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Nombre completo</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" />
                    </svg>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Juan Pérez"
                      className="w-full border border-[#E2E8F0] rounded-xl pl-9 pr-4 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Tipo de cuenta</label>
                  <div className="flex gap-2">
                    {(["cliente", "proveedor"] as const).map((r) => (
                      <button
                        type="button"
                        key={r}
                        onClick={() => setRole(r)}
                        className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all capitalize ${
                          role === r
                            ? "bg-[#EFF6FF] border-[#3B82F6] text-[#3B82F6]"
                            : "bg-white border-[#E2E8F0] text-[#64748B] hover:border-[#94A3B8]"
                        }`}
                      >
                        {r === "cliente" ? "👤 Cliente" : "🔧 Proveedor"}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Correo Electrónico</label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@serviloc.com"
                  className="w-full border border-[#E2E8F0] rounded-xl pl-9 pr-4 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#0F172A]">Contraseña</label>
                {tab === "login" && (
                  <button type="button" className="text-xs text-[#3B82F6] hover:underline">
                    ¿Olvidaste tu contraseña?
                  </button>
                )}
              </div>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
                </svg>
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-[#E2E8F0] rounded-xl pl-9 pr-10 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#64748B]">
                  {showPass
                    ? <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" strokeLinecap="round" /></svg>
                    : <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  }
                </button>
              </div>
            </div>

            {tab === "login" && (
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-3.5 h-3.5 rounded border-[#E2E8F0] accent-[#3B82F6]"
                />
                <span className="text-xs text-[#64748B]">Mantener sesión iniciada</span>
              </label>
            )}

            <button
              type="submit"
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-3 rounded-xl text-sm transition-all hover:shadow-md hover:shadow-[#3B82F6]/30"
            >
              {tab === "login" ? "Acceder al Panel →" : "Crear mi cuenta →"}
            </button>
          </form>

          <div className="mt-5 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E2E8F0]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-[#94A3B8]">o continúa con</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border border-[#E2E8F0] rounded-xl py-2.5 text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-[#E2E8F0] rounded-xl py-2.5 text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </button>
          </div>

          <p className="text-center text-[#94A3B8] text-xs mt-5">
            Privacidad · Términos · Ayuda
          </p>
          <p className="text-center text-[#94A3B8] text-[10px] mt-1">
            © 2024 Rental Service Marketplace · Soluciones para el Hogar
          </p>
        </div>
      </div>
    </div>
  );
}
