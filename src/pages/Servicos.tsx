import {
  ArrowRight,
  Boxes,
  Cpu,
  Handshake,
  Package,
  PackageCheck,
  ShieldCheck,
  Truck,
  Warehouse,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import InteriorPageLayout from "@/components/InteriorPageLayout";
import truckImage from "@/assets/hero-truck.png";
import logisticsImage from "@/assets/about-logistics.png";
import warehouseImage from "@/assets/warehouse.jpg";
import monitoringImage from "@/assets/security-monitoring.png";

const services = [
  {
    title: "Transporte interestadual e intermunicipal",
    description: "Levamos sua carga a diferentes destinos com planejamento, acompanhamento e cuidado em cada etapa.",
    icon: Truck,
    image: truckImage,
    imagePosition: "50% 55%",
  },
  {
    title: "Remoção de containers",
    description: "Operações de remoção organizadas para movimentar containers com segurança e eficiência.",
    icon: Package,
    image: logisticsImage,
    imagePosition: "50% 50%",
  },
  {
    title: "Movimentação de containers",
    description: "Apoio à movimentação de cargas e containers com atenção à operação e aos prazos.",
    icon: Boxes,
    image: warehouseImage,
    imagePosition: "50% 55%",
  },
  {
    title: "Transporte de containers cheios",
    description: "Transporte planejado para levar sua carga ao destino com integridade e acompanhamento.",
    icon: Truck,
    image: truckImage,
    imagePosition: "75% 58%",
  },
  {
    title: "Entrega de containers vazios",
    description: "Entrega coordenada conforme as necessidades da operação e o cronograma combinado.",
    icon: PackageCheck,
    image: monitoringImage,
    imagePosition: "72% 50%",
  },
  {
    title: "Armazenagem",
    description: "Estrutura logística para apoiar o controle, a organização e a guarda de mercadorias.",
    icon: Warehouse,
    image: warehouseImage,
    imagePosition: "50% 50%",
  },
];

const heroBenefits = [
  { icon: ShieldCheck, title: "Segurança", detail: "em cada entrega" },
  { icon: Zap, title: "Agilidade", detail: "no que importa" },
  { icon: Handshake, title: "Compromisso", detail: "com o seu resultado" },
];

const reasons = [
  { icon: ShieldCheck, title: "Segurança", detail: "em todas as etapas" },
  { icon: Zap, title: "Agilidade", detail: "para atender sua demanda" },
  { icon: Cpu, title: "Tecnologia", detail: "e estrutura de ponta" },
  { icon: Handshake, title: "Compromisso", detail: "com o seu negócio" },
];

const Servicos = () => (
  <InteriorPageLayout>
    <div className="overflow-hidden bg-[#050a10] text-white">
      <section className="relative isolate min-h-[650px] overflow-hidden sm:min-h-[690px] lg:min-h-[620px]">
        <img
          src={truckImage}
          alt="Caminhão Colatina Express na estrada ao pôr do sol"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[56%_50%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#04080e]/15 via-[#04080e]/50 to-[#04080e] lg:bg-gradient-to-r lg:from-[#04080e]/95 lg:via-[#04080e]/85 lg:via-45% lg:to-[#04080e]/5" />
        <div className="container flex min-h-[650px] flex-col justify-end px-5 pb-7 sm:min-h-[690px] sm:px-8 sm:pb-8 lg:min-h-[620px] lg:justify-center lg:pb-24">
          <div className="max-w-[570px]">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.17em] sm:text-sm">
              <span className="h-[3px] w-8 bg-[#f5b900]" /> Nossos serviços
            </p>
            <h1 className="text-4xl font-black uppercase leading-[0.98] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Soluções logísticas<br className="hidden sm:block" /> completas para o seu<br className="hidden sm:block" /> <span className="text-[#f5b900]">negócio ir mais longe</span>
            </h1>
            <p className="mt-5 max-w-[470px] text-sm leading-relaxed text-white/80 sm:text-base">
              Oferecemos soluções de transporte e logística com foco em segurança, agilidade e eficiência. Cada operação é planejada para atender às necessidades do seu negócio, com o cuidado e o compromisso que você merece.
            </p>
          </div>
          <div className="mt-8 grid max-w-[570px] grid-cols-3 border-t border-white/25 pt-5 sm:mt-9 sm:pt-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:max-w-none lg:border-t-0 lg:bg-gradient-to-t lg:from-[#04080e]/95 lg:to-transparent lg:px-8 lg:pb-6 lg:pt-12">
            {heroBenefits.map(({ icon: Icon, title, detail }, index) => (
              <div key={title} className={`flex items-center gap-2 px-2 sm:gap-3 sm:px-5 ${index > 0 ? "border-l border-white/25" : ""}`}>
                <Icon className="h-6 w-6 shrink-0 text-[#f5b900] sm:h-8 sm:w-8" strokeWidth={1.8} />
                <div className="text-[9px] uppercase leading-snug sm:text-xs">
                  <p className="font-bold text-white">{title}</p><p className="mt-0.5 text-white/65">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f2f4] py-12 text-[#101722] sm:py-16 lg:py-20">
        <div className="container px-5 sm:px-8">
          <div className="mb-9 grid gap-5 lg:mb-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
            <div>
              <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#18202b]">
                <span className="h-[3px] w-8 bg-[#e9aa00]" /> Conheça nossos serviços
              </p>
              <h2 className="max-w-2xl text-3xl font-black uppercase leading-[1.02] sm:text-4xl">
                Transporte e logística <span className="block text-[#d89d00]">sob medida para o seu negócio</span>
              </h2>
            </div>
            <p className="border-l-0 border-[#d89d00] text-sm leading-relaxed text-[#424854] sm:text-base lg:border-l lg:pl-6">
              A Colatina Express oferece soluções completas em transporte e logística, com foco em cargas de alto valor e grande porte. Nossos serviços são planejados para garantir pontualidade, segurança e total integridade da sua mercadoria, da origem ao destino final.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map(({ title, description, icon: Icon, image, imagePosition }) => (
              <article key={title} className="group overflow-hidden border border-[#16202a]/10 bg-[#07111a] shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden sm:h-52">
                  <img src={image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" style={{ objectPosition: imagePosition }} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a10]/65 via-transparent to-transparent" />
                </div>
                <div className="relative min-h-[190px] p-5 pt-6 sm:p-6">
                  <div className="absolute -top-5 left-5 grid h-11 w-11 place-items-center border border-[#f5b900]/60 bg-[#07111a] text-[#f5b900] sm:left-6">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-3 text-sm font-extrabold uppercase leading-snug text-white sm:text-base">{title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-white/70 sm:text-sm">{description}</p>
                  <span className="mt-4 block h-[3px] w-9 bg-[#f5b900] transition-all duration-300 group-hover:w-14" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-white/10">
        <img src={truckImage} alt="Caminhão Colatina Express na estrada" className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_60%]" loading="lazy" />
        <div className="absolute inset-0 -z-10 bg-[#03070c]/80 sm:bg-gradient-to-r sm:from-[#03070c]/95 sm:via-[#03070c]/80 sm:to-[#03070c]/40" />
        <div className="container grid gap-8 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10 lg:py-16">
          <div className="max-w-md">
            <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-white/80">
              <span className="h-[3px] w-8 bg-[#f5b900]" /> Por que escolher a
            </p>
            <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">Colatina <span className="text-[#f5b900]">Express?</span></h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
              Mais do que transportar cargas, entregamos confiança, eficiência e resultados para o seu negócio.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0">
            {reasons.map(({ icon: Icon, title, detail }, index) => (
              <div key={title} className={`flex flex-col items-center px-3 text-center sm:border-l sm:border-white/25 sm:px-4 ${index > 0 ? "" : "sm:border-l-0"}`}>
                <Icon className="h-8 w-8 text-[#f5b900] sm:h-9 sm:w-9" strokeWidth={1.8} />
                <h3 className="mt-3 text-[10px] font-bold uppercase tracking-wide sm:text-xs">{title}</h3>
                <p className="mt-1 max-w-[130px] text-[10px] leading-snug text-white/65 sm:text-xs">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#f5b900]/30 bg-[#080d13]">
        <div className="container grid gap-5 px-5 py-7 sm:px-8 md:grid-cols-[1fr_1.1fr_auto] md:items-center md:gap-8 md:py-8">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f5b900] text-[#111]">
              <Truck className="h-6 w-6" />
            </div>
            <h2 className="text-sm font-extrabold uppercase leading-snug sm:text-base">Precisa de um serviço específico ou de uma cotação personalizada?</h2>
          </div>
          <p className="text-xs leading-relaxed text-white/70 sm:text-sm">Nossa equipe está pronta para entender sua demanda e encontrar a solução logística ideal.</p>
          <Link to="/contato" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#f5b900] px-6 py-3 text-xs font-extrabold uppercase text-[#111] transition-colors hover:bg-[#ffd13d] sm:text-sm">
            Solicite uma cotação <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  </InteriorPageLayout>
);

export default Servicos;
