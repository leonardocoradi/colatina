import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, Truck, X } from "lucide-react";
import logo from "@/assets/header-logo.png";

const links = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/seguranca", label: "Segurança" },
  { to: "/clientes", label: "Clientes" },
  { to: "/contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#080a0d]/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link to="/" aria-label="Colatina Express — início" className="shrink-0">
          <img src={logo} alt="Colatina Express Transportes" className="h-16 w-auto max-w-[62vw] object-contain sm:h-20 sm:max-w-none" />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative py-2 text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-[#f5b900]"
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          to="/contato"
          className="hidden items-center gap-2 rounded-full bg-[#f5b900] px-5 py-3 text-xs font-bold uppercase text-[#111] transition hover:bg-[#ffd13d] lg:inline-flex"
        >
          <Truck className="h-4 w-4" />
          Solicite uma cotação
        </Link>

        <button
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b900] lg:hidden"
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
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-[#080a0d] sm:max-h-[calc(100dvh-5rem)] lg:hidden"
          >
            <div className="flex flex-col gap-1 p-5">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 hover:bg-white/5 hover:text-[#f5b900]"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contato"
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
