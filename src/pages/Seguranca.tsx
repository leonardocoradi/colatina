import {
  Activity,
  AlertTriangle,
  Clock3,
  Crosshair,
  Handshake,
  MapPin,
  Satellite,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import InteriorPageLayout from "@/components/InteriorPageLayout";
import truckImage from "@/assets/hero-truck.png";
import monitoringImage from "@/assets/security-monitoring.png";
import logo from "@/assets/logo.png";

const heroHighlights = [
  { icon: Crosshair, title: "Rastreamento", detail: "em tempo real" },
  { icon: Clock3, title: "Monitoramento", detail: "24 horas" },
  { icon: UsersRound, title: "Equipe especializada", detail: "de controle" },
  { icon: ShieldCheck, title: "Mais tranquilidade", detail: "para o seu negócio" },
];

const monitoringFeatures = [
  {
    icon: MapPin,
    title: "Rastreamento em tempo real",
    text: "Localização da frota acompanhada ao longo de cada trajeto.",
  },
  {
    icon: Satellite,
    title: "Comunicação via satélite",
    text: "Conexão para apoiar o acompanhamento mesmo em rotas remotas.",
  },
  {
    icon: AlertTriangle,
    title: "Alerta e prevenção",
    text: "Atenção a ocorrências para apoiar uma resposta rápida da operação.",
  },
  {
    icon: UsersRound,
    title: "Equipe especializada",
    text: "Profissionais preparados para acompanhar a movimentação das cargas.",
  },
];

const values = [
  { icon: ShieldCheck, title: "Segurança", detail: "da sua carga" },
  { icon: Activity, title: "Agilidade", detail: "nas entregas" },
  { icon: Clock3, title: "Pontualidade", detail: "em cada trajeto" },
  { icon: Handshake, title: "Compromisso", detail: "com o seu negócio" },
];

const Seguranca = () => (
  <InteriorPageLayout>
    <div className="overflow-hidden bg-[#050a10] text-white">
      <section className="relative isolate">
        <div className="relative min-h-[660px] overflow-hidden sm:min-h-[700px] lg:min-h-[660px]">
          <img
            src={truckImage}
            alt="Caminhão Colatina Express em uma estrada ao pôr do sol"
            className="h-[270px] w-full object-cover object-[48%_52%] sm:h-[360px] lg:absolute lg:inset-0 lg:h-full lg:object-[58%_50%]"
          />
          <div className="absolute inset-x-0 top-[170px] h-[120px] bg-gradient-to-b from-transparent to-[#050a10] sm:top-[260px] sm:h-[130px] lg:inset-0 lg:h-auto lg:bg-gradient-to-r lg:from-[#050a10] lg:via-[#050a10]/90 lg:via-40% lg:to-[#050a10]/5" />
          <div className="absolute inset-x-0 top-[238px] bottom-0 bg-[#050a10] sm:top-[330px] lg:top-0 lg:bg-transparent" />
          <div className="container relative z-10 flex min-h-[660px] flex-col justify-end px-5 pb-7 sm:min-h-[700px] sm:px-8 sm:pb-8 lg:min-h-[660px] lg:justify-center lg:pb-28">
            <div className="max-w-[570px]">
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-white sm:text-sm">
                <ShieldCheck className="h-7 w-7 text-[#f5b900] sm:h-9 sm:w-9" />
                <span className="h-[2px] w-7 bg-[#f5b900]" /> Nosso diferencial
              </p>
              <h1 className="text-4xl font-black uppercase leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
                Segurança <span className="block text-[#f5b900]">em toda a jornada</span>
              </h1>
              <p className="mt-5 max-w-[490px] text-sm leading-relaxed text-white/80 sm:text-base">
                Sua carga é nossa prioridade. Com veículos rastreados, tecnologia de monitoramento e uma equipe especializada, acompanhamos cada etapa do transporte.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-y-5 border-t border-white/20 pt-5 sm:mt-10 sm:grid-cols-4 sm:gap-y-0 sm:pt-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:border-t-0 lg:bg-gradient-to-t lg:from-[#050a10] lg:via-[#050a10]/95 lg:to-transparent lg:px-6 lg:pb-6 lg:pt-12">
              {heroHighlights.map(({ icon: Icon, title, detail }, index) => (
                <div key={title} className={`flex items-center gap-3 px-2 sm:px-4 lg:border-r lg:border-white/20 ${index === heroHighlights.length - 1 ? "lg:border-r-0" : ""}`}>
                  <Icon className="h-7 w-7 shrink-0 text-[#f5b900] sm:h-8 sm:w-8" strokeWidth={1.8} />
                  <div className="text-[10px] uppercase leading-snug sm:text-xs">
                    <p className="font-bold text-white">{title}</p><p className="mt-0.5 text-white/65">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#07111a] py-14 sm:py-20">
        <div className="container grid gap-9 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-12">
          <div>
            <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white/75">
              <span className="h-[2px] w-7 bg-[#f5b900]" /> Monitoramento 24 horas
            </p>
            <h2 className="text-3xl font-black uppercase leading-[1.02] sm:text-4xl">
              Tecnologia que <span className="text-[#f5b900]">vai mais longe</span> por você
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Acompanhar a operação é parte do cuidado com a sua carga. Nossos recursos de rastreamento e monitoramento apoiam o controle dos veículos do início ao fim do trajeto.
            </p>
            <div className="mt-6 space-y-4">
              {monitoringFeatures.map(({ icon: Icon, title, text: description }) => (
                <div key={title} className="flex gap-3">
                  <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#f5b900]/35 bg-[#f5b900]/10 text-[#f5b900]">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-[#f5b900] sm:text-sm">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/65 sm:text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-sm border border-white/10 sm:min-h-[420px] lg:min-h-[500px]">
            <img src={monitoringImage} alt="Central de monitoramento da Colatina Express com mapa de rotas, veículos rastreados e operadores" className="absolute inset-0 h-full w-full object-cover object-[50%_50%]" />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#03070b] py-8 sm:py-10">
        <div className="container grid grid-cols-2 gap-y-7 px-4 sm:px-8 lg:grid-cols-4 lg:gap-y-0">
          {values.map(({ icon: Icon, title, detail }, index) => (
            <div key={title} className={`flex flex-col items-center justify-center gap-2 px-2 text-center sm:flex-row sm:gap-3 sm:text-left lg:border-r lg:border-white/20 ${index === values.length - 1 ? "lg:border-r-0" : ""}`}>
              <Icon className="h-8 w-8 shrink-0 text-[#f5b900] sm:h-9 sm:w-9" strokeWidth={1.8} />
              <div className="text-[10px] uppercase leading-snug sm:text-xs">
                <p className="font-bold text-white">{title}</p><p className="mt-0.5 text-white/65">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-[#f5b900]/30">
        <img src={truckImage} alt="Caminhão Colatina Express seguindo pela estrada ao pôr do sol" className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_58%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03070c]/95 via-[#03070c]/75 to-[#03070c]/35" />
        <div className="container flex min-h-[170px] flex-col items-center justify-center gap-4 px-5 py-6 text-center sm:min-h-[190px] sm:flex-row sm:justify-between sm:gap-8 sm:px-8 sm:text-left">
          <div className="max-w-2xl">
            <p className="mb-2 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white/85 sm:justify-start sm:text-xs">
              <span className="h-[2px] w-7 shrink-0 bg-[#f5b900]" /> Tecnologia e pessoas trabalhando juntas
            </p>
            <h2 className="text-base font-bold uppercase leading-snug sm:text-lg">Para levar o que é importante <span className="text-[#f5b900]">até você.</span></h2>
          </div>
          <img src={logo} alt="Colatina Express Transportes" className="h-14 w-auto max-w-[170px] object-contain sm:h-[4.5rem] sm:max-w-[210px]" />
        </div>
      </section>
    </div>
  </InteriorPageLayout>
);

export default Seguranca;
