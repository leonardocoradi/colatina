import InteriorPageLayout from "@/components/InteriorPageLayout";

const Seguranca = () => (
  <InteriorPageLayout>
    <section className="bg-[#080b10] px-4 py-16 text-white sm:px-6 sm:py-20">
      <div className="container">
        <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f5b900]">
          <span className="h-[3px] w-8 bg-[#f5b900]" /> Rastreamento e monitoramento
        </p>
        <h1 className="text-3xl font-extrabold uppercase sm:text-4xl">Segurança</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
          Esta página está reservada para a apresentação dos veículos rastreados, do sistema de monitoramento e do painel da operação. O layout será definido após o envio da referência visual do cliente.
        </p>
      </div>
    </section>
  </InteriorPageLayout>
);

export default Seguranca;
