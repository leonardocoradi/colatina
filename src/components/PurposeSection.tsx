import { Eye, Gem, Goal } from "lucide-react";

const values = [
  { icon: Goal, title: "Nossa missão", text: "Oferecer soluções logísticas eficientes, com foco em segurança, agilidade e excelência no transporte." },
  { icon: Eye, title: "Nossa visão", text: "Ser reconhecida pela qualidade, confiança e inovação em cada entrega." },
  { icon: Gem, title: "Nossos valores", text: "Ética, respeito, transparência e busca constante por bons resultados." },
];

const PurposeSection = () => (
  <section className="bg-[#f5b900] py-8 text-[#101318] sm:py-10">
    <div className="container grid gap-6 px-6 md:grid-cols-3 md:divide-x md:divide-black/25">
      {values.map(({ icon: Icon, title, text }) => (
        <div key={title} className="flex gap-4 md:px-7 first:md:pl-0 last:md:pr-0">
          <Icon className="mt-1 h-8 w-8 shrink-0" strokeWidth={2.1} />
          <div>
            <h2 className="text-sm font-extrabold uppercase">{title}</h2>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-black/80 sm:text-sm">{text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PurposeSection;
