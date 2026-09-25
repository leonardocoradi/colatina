import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-white/15 bg-[#05070a] py-7 text-white">
    <div className="container flex flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row">
      <Link to="/" aria-label="Colatina Express — início" className="shrink-0">
        <img src={logo} alt="Colatina Express Transportes" className="h-16 w-auto object-contain" />
      </Link>
      <nav aria-label="Navegação do rodapé" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/75">
        <Link to="/" className="hover:text-[#f5b900]">Início</Link>
        <a href="/#sobre-nos" className="hover:text-[#f5b900]">Quem somos</a>
        <a href="/#especializacao" className="hover:text-[#f5b900]">Serviços</a>
        <a href="/#diferenciais" className="hover:text-[#f5b900]">Diferenciais</a>
        <a href="/#contato" className="hover:text-[#f5b900]">Contato</a>
      </nav>
      <div className="border-l-0 border-[#f5b900] pl-0 text-center text-xs text-white/70 lg:border-l lg:pl-5 lg:text-left">
        <p className="font-bold text-white">Colatina Express Transportes</p>
        <p>Conectando destinos. Impulsionando o seu negócio.</p>
        <a href="tel:+5527997357959" className="mt-1 inline-block hover:text-[#f5b900]">(27) 99735-7959</a>
        <a href="mailto:comercial@colatinaexpress.com.br" className="mt-1 block break-all hover:text-[#f5b900]">comercial@colatinaexpress.com.br</a>
      </div>
    </div>
    <p className="container mt-5 px-6 text-center text-[10px] text-white/45 lg:text-left">
      © {new Date().getFullYear()} Colatina Express. Todos os direitos reservados.
    </p>
  </footer>
);

export default Footer;
