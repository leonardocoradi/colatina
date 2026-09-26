import { Mail, Phone } from "lucide-react";
import InteriorPageLayout from "@/components/InteriorPageLayout";

const contacts = [
  {
    label: "Telefone",
    value: "(27) 99735-7959",
    href: "tel:+5527997357959",
    icon: Phone,
  },
  {
    label: "E-mail",
    value: "comercial@colatinaexpress.com.br",
    href: "mailto:comercial@colatinaexpress.com.br",
    icon: Mail,
  },
];

const Contato = () => (
  <InteriorPageLayout showWhatsApp={false}>
    <section className="relative isolate flex min-h-[68vh] items-center overflow-hidden bg-[#050a10] px-4 py-16 text-white sm:min-h-[72vh] sm:px-6 sm:py-20">
      <div className="absolute -left-24 top-1/4 -z-10 h-72 w-72 rounded-full bg-[#f5b900]/10 blur-[100px]" />
      <div className="absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#f5b900]/[0.07] blur-[100px]" />

      <div className="container w-full max-w-5xl">
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/75 sm:text-sm">
            <span className="h-[3px] w-8 bg-[#f5b900]" /> Contato <span className="h-[3px] w-8 bg-[#f5b900]" />
          </p>
          <h1 className="text-3xl font-black uppercase leading-tight sm:text-5xl">
            Fale com a <span className="text-[#f5b900]">Colatina Express</span>
          </h1>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 sm:gap-6">
          {contacts.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="group flex min-h-32 min-w-0 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-[#f5b900]/60 hover:bg-white/[0.07] sm:min-h-40 sm:gap-5 sm:p-7"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#f5b900]/40 bg-[#f5b900]/10 text-[#f5b900] transition-colors group-hover:bg-[#f5b900] group-hover:text-[#111] sm:h-14 sm:w-14">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-white/55">{label}</span>
                <span className="mt-2 block break-all text-base font-semibold text-white group-hover:text-[#f5b900] sm:text-lg">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  </InteriorPageLayout>
);

export default Contato;
