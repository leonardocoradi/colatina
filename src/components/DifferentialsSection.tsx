import { motion } from "framer-motion";
import { Clock3, Handshake, MapPin, ShieldCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Segurança", text: "Cuidado com sua carga em todas as etapas." },
  { icon: Clock3, title: "Agilidade", text: "Compromisso com os prazos de entrega." },
  { icon: MapPin, title: "Acompanhamento", text: "Informação clara durante o transporte." },
  { icon: Handshake, title: "Experiência", text: "Equipe preparada para atender você." },
];

const DifferentialsSection = () => (
  <section id="diferenciais" className="scroll-mt-20 bg-[#080b10] py-12 text-white sm:py-14">
    <div className="container grid gap-8 px-6 lg:grid-cols-[1.1fr_2.9fr] lg:items-center">
      <div>
        <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
          <span className="h-[3px] w-8 bg-[#f5b900]" /> Por que escolher a
        </p>
        <h2 className="text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
          Colatina Express<span className="text-[#f5b900]">?</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 divide-x divide-white/20 md:grid-cols-4">
        {items.map(({ icon: Icon, title, text }, index) => (
          <motion.div key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="px-4 py-3 text-center sm:px-6">
            <Icon className="mx-auto mb-3 h-9 w-9 text-[#f5b900] sm:h-10 sm:w-10" strokeWidth={2.2} />
            <h3 className="text-xs font-extrabold uppercase sm:text-sm">{title}</h3>
            <p className="mx-auto mt-2 max-w-[150px] text-[11px] leading-relaxed text-white/65 sm:text-xs">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
