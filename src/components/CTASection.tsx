import { motion } from "framer-motion";
import { ArrowRight, Clock3, ShieldCheck, Star, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import truckImage from "@/assets/hero-truck.png";

const benefits = [
  { icon: ShieldCheck, label: "Mais segurança" },
  { icon: Clock3, label: "Entrega no prazo" },
  { icon: Star, label: "Atendimento próximo" },
];

const CTASection = () => (
  <section id="contato" className="relative isolate scroll-mt-20 overflow-hidden border-y border-[#f5b900]/40 bg-[#080b10] text-white">
    <div className="absolute inset-y-0 left-0 -z-10 hidden w-[42%] lg:block">
      <img src={truckImage} alt="Caminhão Colatina Express na estrada" className="h-full w-full object-cover object-[35%_center]" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#080b10]/15 to-[#080b10]" />
    </div>

    <div className="relative aspect-video w-full overflow-hidden sm:aspect-[2.2/1] lg:hidden">
      <img src={truckImage} alt="Caminhão Colatina Express na estrada" className="h-full w-full object-cover object-center" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080b10]/10 to-[#080b10]" />
    </div>

    <div className="container grid gap-7 px-4 pb-8 pt-2 sm:px-6 sm:pb-10 lg:min-h-[320px] lg:grid-cols-[0.75fr_1.3fr_1.1fr] lg:items-center lg:gap-8 lg:py-10">
      <div className="hidden lg:block" aria-hidden="true" />

      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="mb-2 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/85">
          <span className="h-[3px] w-8 bg-[#f5b900]" /> Vamos juntos
        </p>
        <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
          Sua empresa também pode <span className="text-[#f5b900]">fazer parte dessa história.</span>
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75">
          Conte com a Colatina Express para transportar o que é essencial para o seu negócio. Estamos prontos para atender você.
        </p>
      </motion.div>

      <div className="flex flex-col justify-center gap-5">
        <Link to="/solicitar-coleta" className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#f5b900] px-5 py-3 text-sm font-bold text-[#101318] transition hover:bg-[#ffd13d] sm:w-fit">
          <Truck className="h-5 w-5" /> Solicite uma cotação <ArrowRight className="h-4 w-4" />
        </Link>
        <div className="grid grid-cols-3 divide-x divide-white/20">
          {benefits.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 px-2 text-center text-[10px] font-semibold leading-tight text-white/80 sm:text-xs">
              <Icon className="h-5 w-5 text-[#f5b900] sm:h-6 sm:w-6" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
