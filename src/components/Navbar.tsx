import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, Truck, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "/", label: "Início" },
  { href: "/#sobre-nos", label: "Quem somos" },
  { href: "/#especializacao", label: "Serviços" },
  { href: "/#diferenciais", label: "Diferenciais" },
  { href: "/#contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#080a0d]/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link to="/" aria-label="Colatina Express — início" className="shrink-0">
          <img src={logo} alt="Colatina Express Transportes" className="h-14 w-auto object-contain sm:h-[4.5rem]" />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative py-2 text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-[#f5b900]"
            >
              {label}
            </a>
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
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 hover:bg-white/5 hover:text-[#f5b900]"
                >
                  {label}
                </a>
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
