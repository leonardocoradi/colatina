import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-van.jpg";

const CTASection = () => (
  <section id="contato" className="scroll-mt-20 relative isolate overflow-hidden bg-[#080b10] py-14 text-white sm:py-16 lg:py-20">
    <img src={heroImage} alt="Estrada ao entardecer" className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]" loading="lazy" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080b10] via-[#080b10]/90 to-[#080b10]/25" />
    <div className="container px-4 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl">
        <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/85">
          <span className="h-[3px] w-8 bg-[#f5b900]" /> Juntos, movemos
        </p>
        <h2 className="text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
          Grandes <span className="text-[#f5b900]">conquistas.</span>
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
          Conte com a Colatina Express para transportar o que é essencial para o seu negócio. Estamos prontos para ser seu parceiro em todas as rotas.
        </p>
        <Link to="/solicitar-coleta" className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#f5b900] px-5 py-3 text-sm font-bold text-[#101318] transition hover:bg-[#ffd13d]">
          <MessageCircle className="h-4 w-4" /> Solicite uma cotação <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
