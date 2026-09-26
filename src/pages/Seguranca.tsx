import {
  Activity,
  AlertTriangle,
  Clock3,
  Crosshair,
  Handshake,
  MapPin,
  Radio,
  Satellite,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import InteriorPageLayout from "@/components/InteriorPageLayout";
import truckImage from "@/assets/hero-truck.png";
import monitoringImage from "@/assets/about-logistics.png";
import logo from "@/assets/logo.png";

const gold = "#f5b900";

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

const TrackingPanel = () => (
  <div
    className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-[#07111ddd] p-3 shadow-2xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:w-[min(310px,calc(100%-3rem))] sm:p-4"
    aria-label="Painel ilustrativo de acompanhamento de veículos"
  >
    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
      <div>
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">Central de monitoramento</p>
        <p className="mt-1 text-xs font-bold text-white sm:text-sm">Acompanhamento da frota</p>
      </div>
      <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-emerald-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Operação
      </span>
    </div>
    <div className="relative mt-3 h-24 overflow-hidden rounded-lg border border-white/10 bg-[#0d1b26] sm:h-28">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <svg viewBox="0 0 300 110" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M18 85 C58 80 53 28 100 36 S153 92 194 68 S242 28 282 31" fill="none" stroke={gold} strokeWidth="2.5" strokeDasharray="5 5" />
        <path d="M32 22 C73 28 89 75 127 74 S184 21 218 42 S252 83 282 87" fill="none" stroke="#71b8d5" strokeWidth="1.5" strokeDasharray="4 5" opacity=".8" />
        <circle cx="18" cy="85" r="5" fill={gold} /><circle cx="194" cy="68" r="5" fill={gold} /><circle cx="282" cy="31" r="5" fill={gold} />
        <circle cx="127" cy="74" r="4" fill="#71b8d5" /><circle cx="218" cy="42" r="4" fill="#71b8d5" />
      </svg>
      <span className="absolute left-[5%] top-[65%] rounded bg-[#07111d]/80 px-1.5 py-0.5 text-[8px] font-semibold text-white/85">ES-101</span>
      <span className="absolute right-[5%] top-[10%] rounded bg-[#07111d]/80 px-1.5 py-0.5 text-[8px] font-semibold text-white/85">ES-204</span>
    </div>
    <div className="mt-3 flex items-center justify-between gap-2 text-[9px] text-white/65 sm:text-[10px]">
      <span className="inline-flex items-center gap-1.5"><MapPin className="h-3 w-3 text-[#f5b900]" /> Rotas acompanhadas</span>
      <span className="inline-flex items-center gap-1.5"><Radio className="h-3 w-3 text-[#f5b900]" /> Sinal ativo</span>
    </div>
  </div>
);

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
            <img src={monitoringImage} alt="Profissional da Colatina Express acompanhando a operação logística no centro de distribuição" className="absolute inset-0 h-full w-full object-cover object-[52%_50%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02070d]/65 via-transparent to-[#02070d]/10" />
            <TrackingPanel />
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

      <section className="relative isolate overflow-hidden border-b border-[#f5b900]/30">
        <img src={truckImage} alt="Caminhão Colatina Express seguindo pela estrada" className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_54%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03070c] via-[#03070c]/85 to-[#03070c]/45" />
        <div className="container flex min-h-[260px] flex-col items-center justify-between gap-6 px-5 py-9 text-center sm:min-h-[300px] sm:flex-row sm:px-8 sm:text-left">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white/75 sm:justify-start">
              <span className="h-[2px] w-7 bg-[#f5b900]" /> Tecnologia e pessoas trabalhando juntas
            </p>
            <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl">Para levar o que é importante <span className="text-[#f5b900]">até você.</span></h2>
          </div>
          <img src={logo} alt="Colatina Express Transportes" className="h-20 w-auto max-w-[220px] object-contain sm:h-24 sm:max-w-[250px]" />
        </div>
      </section>
    </div>
  </InteriorPageLayout>
);

export default Seguranca;
