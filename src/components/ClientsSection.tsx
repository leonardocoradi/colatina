import { motion } from "framer-motion";

const clients = [
  { name: "Garrafix", image: "/logos/WhatsApp%20Image%202026-09-25%20at%2012.46.30.jpeg" },
  { name: "Tiresur", image: "/logos/WhatsApp%20Image%202026-09-25%20at%2012.46.30%20(1).jpeg" },
  { name: "Capeças Autopeças", image: "/logos/WhatsApp%20Image%202026-09-25%20at%2012.46.32.jpeg" },
  { name: "Pellegrino", image: "/logos/WhatsApp%20Image%202026-09-25%20at%2012.46.31%20(3).jpeg" },
  { name: "Roles Autopeças", image: "/logos/WhatsApp%20Image%202026-09-25%20at%2012.46.31%20(4).jpeg" },
  { name: "Sama Autopeças", image: "/logos/WhatsApp%20Image%202026-09-25%20at%2012.46.32%20(1).jpeg" },
  { name: "Megatruck", image: "/logos/WhatsApp%20Image%202026-09-25%20at%2012.46.32%20(2).jpeg" },
  { name: "Hiper Truck", image: "/logos/WhatsApp%20Image%202026-09-25%20at%2012.46.31.jpeg" },
  { name: "Envia Peças", image: "/logos/WhatsApp%20Image%202026-09-25%20at%2012.46.31%20(1).jpeg" },
  { name: "Fort Sul", image: "/logos/WhatsApp%20Image%202026-09-25%20at%2012.46.31%20(2).jpeg" },
];

const ClientsSection = () => (
  <section id="clientes" className="scroll-mt-20 bg-[#080b10] py-14 text-white sm:py-16 lg:py-20">
    <div className="container px-4 sm:px-6">
      <div className="mb-8 grid gap-5 md:grid-cols-[1fr_1fr] md:items-end md:gap-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            <span className="h-[3px] w-8 bg-[#f5b900]" /> Clientes que confiam na
          </p>
          <h2 className="text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
            Colatina <span className="text-[#f5b900]">Express</span>
          </h2>
        </motion.div>
        <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Construímos parcerias com empresas de diferentes segmentos. A confiança dos nossos clientes nos inspira a seguir oferecendo transporte seguro, atendimento próximo e compromisso em cada entrega.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 5) * 0.05 }}
            className="flex min-h-28 items-center justify-center rounded-lg border border-[#f5b900]/50 bg-[#0d1118] p-3 transition-colors hover:border-[#f5b900] sm:min-h-32 sm:p-4"
          >
            <img src={client.image} alt={`Logo ${client.name}`} loading="lazy" className="max-h-24 w-full object-contain sm:max-h-28" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
