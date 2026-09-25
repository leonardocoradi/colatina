import { motion } from "framer-motion";
import { ArrowRight, FileText, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-van.jpg";

const HeroSection = () => (
  <section className="relative isolate flex min-h-[760px] min-h-screen items-center overflow-hidden bg-[#080a0d] pt-20">
    <div className="absolute inset-0 -z-20">
      <img
        src={heroImage}
        alt="Van da Colatina Express na estrada ao entardecer"
        className="h-full w-full object-cover object-[62%_center]"
        fetchPriority="high"
      />
    </div>
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080a0d] via-[#080a0d]/90 to-[#080a0d]/10" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080a0d]/70 via-transparent to-[#080a0d]/20" />
    <div className="absolute inset-y-0 left-0 -z-10 w-[58%] bg-[linear-gradient(105deg,rgba(5,7,9,.55),transparent)]" />

    <div className="container px-6 pb-20 pt-16 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <div className="mb-5 flex items-center gap-4">
          <span className="h-1 w-14 bg-[#f5b900]" />
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white sm:text-base">
            Seja bem-vindo à
          </span>
        </div>

        <h1 className="font-display text-6xl uppercase leading-[0.84] tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-9xl">
          Colatina
          <span className="block text-[#f5b900]">Express</span>
        </h1>
        <p className="mt-4 font-display text-xl uppercase tracking-[0.45em] text-white sm:text-2xl">
          Transportes
        </p>

        <div className="mt-6 max-w-xl">
          <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl">
            Conectando caminhos.<br />Movimentando negócios.
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
            Soluções em transporte com segurança, agilidade e compromisso para levar sua carga ao destino com a confiança que sua empresa merece.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/quem-somos"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#f5b900] px-6 py-3 text-xs font-bold uppercase tracking-wide text-[#111] transition hover:bg-[#ffd13d] sm:text-sm"
          >
            <Truck className="h-5 w-5" />
            Conheça a Colatina Express
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/solicitar-coleta"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/70 bg-black/20 px-6 py-3 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white/10 sm:text-sm"
          >
            <FileText className="h-5 w-5" />
            Solicite uma cotação
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
