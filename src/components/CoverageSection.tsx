import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  "Colatina", "Linhares", "São Mateus", "João Neiva",
  "Ibiraçu", "Aracruz", "Vitória", "Serra",
  "Vila Velha", "Cariacica", "Guarapari",
  "Cachoeiro de Itapemirim", "Marataízes",
];

const CoverageSection = () => {
  return (
    <section id="cobertura" className="relative overflow-hidden py-16 sm:py-24">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(0_80%_45%/0.08),transparent_60%)]" />

      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-3xl tracking-tight sm:text-6xl">
            <span className="text-foreground">ÁREA DE</span>{" "}
            <span className="text-gradient-gold">ATUAÇÃO</span>
          </h2>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Atuamos em diversas cidades do estado do Espírito Santo, oferecendo soluções ágeis, seguras e eficientes para o transporte de encomendas. Nossa cobertura abrange de norte a sul, garantindo praticidade e confiança para nossos clientes.
          </p>
        </motion.div>

        {/* Route highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-md rounded-xl border border-secondary/30 bg-secondary/5 p-4 text-center sm:mb-12 sm:p-6"
        >
          <p className="font-display text-2xl text-secondary tracking-wide">COLATINA ⟷ VITÓRIA</p>
          <p className="text-muted-foreground mt-1">Veículos de segunda a sábado</p>
        </motion.div>

        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {cities.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex min-w-0 items-center gap-2 rounded-lg border border-border bg-card p-3 transition-all hover:border-primary/40 hover:bg-card/80 sm:p-4"
            >
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-xs font-medium text-foreground sm:text-sm">{city}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
