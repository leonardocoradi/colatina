import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import warehouseImage from "@/assets/warehouse.jpg";

const ServicesSection = () => (
  <section id="especializacao" className="scroll-mt-20 bg-[#f1f2f4] py-16 text-[#11151c] sm:py-20 lg:py-24">
    <div className="container grid items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden">
        <img src={warehouseImage} alt="Centro logístico com estrutura para movimentação de cargas" className="aspect-[4/3] w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <span className="absolute bottom-0 left-0 top-0 w-3 -skew-x-6 bg-[#f5b900]" />
        <p className="absolute bottom-5 left-6 max-w-xs text-xl font-bold italic leading-tight text-white sm:text-2xl">
          Especialistas em <span className="text-[#f5b900]">transporte e logística de autopeças.</span>
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:pl-2">
        <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#1c2635]">
          <span className="h-[3px] w-8 bg-[#e9aa00]" /> Nossa especialização
        </p>
        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
          Transporte e logística de <span className="text-[#d89d00]">autopeças</span>
        </h2>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#424854] sm:text-base">
          <p>
            Atuamos com foco no transporte e na logística de autopeças, atendendo fabricantes, distribuidores, revendedores e oficinas. Entendemos a importância desse segmento e oferecemos um serviço personalizado, com acompanhamento da carga e compromisso com os prazos.
          </p>
          <p>
            Nossa equipe experiente trabalha para que suas autopeças cheguem ao destino com segurança e integridade.
          </p>
        </div>
        <Link to="/solicitar-coleta" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#18202b] hover:text-[#b27d00]">
          Converse com nossa equipe <ArrowUpRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
