import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Menu, Truck, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Sobre nós" },
  { to: "/nossa-missao", label: "Serviços" },
  { to: "/area-de-atuacao", label: "Diferenciais" },
  { to: "/solicitar-coleta", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute inset-x-0 top-0 z-40 border-b border-white/10 bg-[#080a0d]/85 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between px-6">
        <Link to="/" aria-label="Colatina Express — início" className="shrink-0">
          <img src={logo} alt="Colatina Express Transportes" className="h-[4.5rem] w-auto object-contain" />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `relative py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${isActive ? "text-[#f5b900] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-[#f5b900]" : "text-white/80 hover:text-white"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/solicitar-coleta"
          className="hidden items-center gap-2 rounded-full bg-[#f5b900] px-5 py-3 text-xs font-bold uppercase text-[#111] transition hover:bg-[#ffd13d] lg:inline-flex"
        >
          <Truck className="h-4 w-4" />
          Solicite uma cotação
        </Link>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#080a0d] lg:hidden"
          >
            <div className="flex flex-col gap-1 p-5">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wide ${isActive ? "text-[#f5b900]" : "text-white/80 hover:bg-white/5 hover:text-white"}`}
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/solicitar-coleta"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#f5b900] px-5 py-3 text-sm font-bold uppercase text-[#111]"
              >
                <Truck className="h-4 w-4" /> Solicite uma cotação
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
