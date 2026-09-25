import { motion } from "framer-motion";
import { ArrowRight, FileText, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-truck.png";

const HeroSection = () => (
  <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#080a0d] pt-16 md:min-h-[min(780px,88vh)] md:flex-row md:items-center md:pt-20">
    <div className="relative w-full shrink-0 md:hidden">
      <img
        src={heroImage}
        alt="Caminhão Colatina Express Transportes na estrada ao entardecer"
        className="aspect-video w-full object-contain"
        fetchPriority="high"
      />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#080a0d]" />
    </div>
    <div className="absolute inset-0 -z-20 hidden md:block">
      <img
        src={heroImage}
        alt="Caminhão Colatina Express Transportes na estrada ao entardecer"
        className="h-full w-full object-cover object-[56%_center]"
        fetchPriority="high"
      />
    </div>
    <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-[#080a0d] via-[#080a0d]/90 to-[#080a0d]/10 md:block" />
    <div className="absolute inset-0 -z-10 hidden bg-gradient-to-t from-[#080a0d]/70 via-transparent to-[#080a0d]/20 md:block" />
    <div className="absolute inset-y-0 left-0 -z-10 hidden w-[58%] bg-[linear-gradient(105deg,rgba(5,7,9,.55),transparent)] md:block" />

    <div className="container relative z-10 w-full px-4 pb-8 pt-5 sm:px-6 md:pb-24 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
        <div className="mb-5 flex items-center gap-4">
          <span className="h-1 w-14 bg-[#f5b900]" />
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white sm:text-base">
            Quem somos
          </span>
        </div>

        <h1 className="font-display text-5xl uppercase leading-[0.88] tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-9xl">
          Colatina
          <span className="block text-[#f5b900]">Express</span>
        </h1>
        <p className="mt-3 font-display text-base uppercase tracking-[0.38em] text-white sm:mt-4 sm:text-2xl sm:tracking-[0.45em]">
          Transportes
        </p>

        <div className="mt-6 max-w-xl">
          <h2 className="text-lg font-bold leading-tight text-white sm:text-2xl">
            Conectando caminhos.<br />Movimentando negócios.
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/85 sm:mt-3 sm:text-base">
            Soluções em transporte com segurança, agilidade e compromisso para levar sua carga ao destino com a confiança que sua empresa merece.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-col md:flex-row">
          <Link
            to="/quem-somos"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#f5b900] px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-[#111] transition hover:bg-[#ffd13d] md:w-auto md:gap-3 md:px-6 md:text-sm"
          >
            <Truck className="h-5 w-5" />
            Conheça a Colatina Express
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/solicitar-coleta"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/70 bg-black/20 px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white/10 md:w-auto md:gap-3 md:px-6 md:text-sm"
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
