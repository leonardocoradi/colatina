import { motion } from "framer-motion";
import aboutImage from "@/assets/about-logistics.png";

const AboutSection = () => (
  <section id="sobre-nos" className="scroll-mt-20 bg-[#080b10] py-16 text-white sm:py-20 lg:py-24">
    <div className="container grid items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="order-2 lg:order-1"
      >
        <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f5b900]">
          <span className="h-[3px] w-8 bg-[#f5b900]" /> Sobre nós
        </p>
        <h2 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.65rem]">
          Uma empresa feita para levar o seu negócio <span className="text-[#f5b900]">mais longe.</span>
        </h2>
        <div className="mt-5 max-w-xl space-y-3 text-sm leading-relaxed text-white/75 sm:text-base">
          <p>
            A Colatina Express é uma empresa que nasceu no desejo de facilitar e agilizar as entregas de mercadorias. Sabemos que cada carga é importante e que a eficiência e a agilidade na entrega fazem toda a diferença para o sucesso do seu negócio.
          </p>
          <p>
            Por isso, investimos em estrutura, tecnologia e em uma equipe qualificada para oferecer soluções logísticas com segurança, pontualidade e cuidado em cada etapa do transporte.
          </p>
        </div>
        <p className="mt-6 border-l-4 border-[#f5b900] pl-4 text-sm font-semibold leading-relaxed text-white sm:text-base">
          Nosso compromisso é ser mais que um transportador: <span className="text-[#f5b900]">um parceiro estratégico para o crescimento da sua empresa.</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative order-1 overflow-hidden lg:order-2"
      >
        <img src={aboutImage} alt="Profissional da Colatina Express acompanhando a movimentação de cargas no centro logístico" className="aspect-[4/3] w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <p className="absolute bottom-5 right-5 max-w-xs text-right text-base font-semibold italic text-white sm:text-lg">
          Logística eficiente é<br /> sinônimo de <span className="text-[#f5b900]">resultados.</span>
        </p>
        <span className="absolute bottom-0 left-0 top-0 w-2 bg-[#f5b900]" />
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
