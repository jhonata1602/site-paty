import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Check,
  Facebook,
  Hammer,
  Instagram,
  Layers3,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  TimerReset,
  Truck,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const whatsapp =
  "https://api.whatsapp.com/send/?phone=5577988560246&text=Ol%C3%A1%21%20Quero%20solicitar%20um%20or%C3%A7amento%20com%20a%20Fast%20Drywall.&type=phone_number&app_absent=0";
const instagram = "https://www.instagram.com/fastdrywall.vitoriaconquista/";
const facebook = "https://www.facebook.com/fastdrywall.vitconquista.ba";
const maps =
  "https://www.google.com.br/maps/place/Fast+Drywall+%26+Steel+Frame:+Placa,+Gesso,+Forro+em+Vit%C3%B3ria+da+Conquista+BA/@-14.870544,-40.8437667,17z/data=!3m1!4b1!4m6!3m5!1s0x7463b0fef96b6b7:0xd7bae0bcd7a68159!8m2!3d-14.870544!4d-40.8411918!16s%2Fg%2F11rgcf4zvr";

const drywallImage =
  "https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/FetchRules/Rich_Content/UL-POD-2-Installs-Faster-627x627.jpg";
const ceilingImage =
  "https://www.abctravaux.org/wp-content/uploads/2022/06/installer-un-faux-plafond-750x500.jpg";
const steelImage =
  "https://www.ildinc.ca/cdn/shop/articles/18.jpg?v=1723746910&width=1024";
const steelHouseImage =
  "https://image.made-in-china.com/2f0j00mqOijbKwUFGn/Light-Gauge-Steel-Framing-Construction-System-for-Your-New-House.jpg";
const drywallStockImage =
  "https://static.wixstatic.com/media/233124_79c4f64a6b964f74b7c3ff83d7a054fd~mv2.jpg/v1/fill/w_640%2Ch_426%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/233124_79c4f64a6b964f74b7c3ff83d7a054fd~mv2.jpg";
const drywallMaterialImage =
  "https://www.technimat-outillage.fr/5741-large_default/vis-a-placo-en-bande-boite-de-1000-pieces-senco-o-35mm.jpg";

const solutions = [
  {
    icon: Layers3,
    title: "Drywall",
    text: "Paredes, divisórias e soluções internas com instalação ágil, menos sujeira e acabamento profissional.",
    image: drywallImage,
    bullets: ["Obra mais limpa", "Montagem ágil", "Conforto térmico e acústico"],
  },
  {
    icon: Building2,
    title: "Steel Frame",
    text: "Estruturas em aço galvanizado para projetos que buscam precisão, produtividade e uma construção mais industrializada.",
    image: steelImage,
    bullets: ["Estrutura leve", "Alta precisão", "Menos desperdício"],
  },
  {
    icon: Wrench,
    title: "Gesso, Forro e Placas",
    text: "Materiais e soluções para tetos, acabamentos e sistemas de construção a seco, com suporte na escolha dos itens.",
    image: ceilingImage,
    bullets: ["Variedade de materiais", "Estoque completo", "Pronta entrega"],
  },
];

const productLines = [
  { title: "Placas de Drywall", text: "Placas para paredes, divisórias, forros e aplicações internas.", image: drywallStockImage },
  { title: "Perfis Steel Frame", text: "Perfis e estruturas em aço galvanizado para construção a seco.", image: steelHouseImage },
  { title: "Forros e Gesso", text: "Soluções para teto, rebaixamento e acabamento de ambientes.", image: ceilingImage },
  { title: "Perfis e Acessórios", text: "Guias, montantes e complementos para montagem do sistema.", image: drywallMaterialImage },
];

const reviews = [
  "O melhor de Conquista!",
  "Além do ótimo atendimento, a loja possui preços excelentes.",
  "Empresa boa, ótima qualidade, equipe exemplar e excelente.",
];

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 rotate-45 place-items-center rounded-[10px] bg-red-600 shadow-[0_10px_30px_rgba(220,38,38,.24)]">
        <div className="h-5 w-2.5 -rotate-45 rounded-sm border-b-[5px] border-r-[5px] border-white" />
      </div>
      <div className="leading-none">
        <div className="text-xl font-black tracking-[-0.04em] text-zinc-950">FAST</div>
        <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Drywall & Steel Frame</div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
          <a href="#inicio" aria-label="Fast Drywall"><Brand /></a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-zinc-600 lg:flex">
            <a href="#sobre" className="hover:text-red-600">Sobre</a>
            <a href="#solucoes" className="hover:text-red-600">Soluções</a>
            <a href="#produtos" className="hover:text-red-600">Produtos</a>
            <a href="#avaliacoes" className="hover:text-red-600">Avaliações</a>
            <a href="#localizacao" className="hover:text-red-600">Localização</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-black text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700">
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Solicitar orçamento</span><span className="sm:hidden">Orçamento</span>
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative isolate overflow-hidden bg-zinc-950">
          <img src={drywallImage} alt="Instalação de drywall" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(220,38,38,.46),transparent_28%),linear-gradient(120deg,rgba(0,0,0,.96),rgba(0,0,0,.74))]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-28">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-200"><Sparkles className="h-4 w-4 text-red-400" />Construção a seco em Vitória da Conquista</div>
              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">Construir com inteligência é construir com a <span className="text-red-500">Fast Drywall.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">Soluções em Drywall, Steel Frame, gesso, forro e acessórios para uma obra mais rápida, limpa, organizada e com excelente acabamento.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 font-black text-white shadow-xl shadow-red-600/20 hover:bg-red-700">Solicitar orçamento no WhatsApp <ArrowRight className="h-4 w-4" /></a>
                <a href="#produtos" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white hover:bg-white/10">Ver produtos</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-200">{["Atendimento especializado","Estoque completo","Pronta entrega","Vitória da Conquista - BA"].map((item)=><span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5"><Check className="h-4 w-4 text-red-400" />{item}</span>)}</div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[.06] p-4 shadow-2xl backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[27px] border border-white/10 bg-zinc-900 p-8">
                <img src={steelImage} alt="Estrutura Steel Frame" className="absolute inset-0 h-full w-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/25 to-zinc-950/95" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-5"><div><p className="text-sm font-black uppercase tracking-[.18em] text-red-400">Fast Drywall VCA</p><h2 className="mt-3 text-3xl font-black text-white">Sua obra começa com a escolha certa.</h2></div><Hammer className="h-9 w-9 shrink-0 text-red-500" /></div>
                  <div className="mt-8 grid grid-cols-2 gap-3">{["Drywall","Steel Frame","Placas","Gesso","Forros","Acessórios"].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-zinc-100">{item}</div>)}</div>
                  <div className="mt-7 rounded-2xl bg-red-600 p-5 text-white"><div className="text-xs font-bold uppercase tracking-[.16em] text-red-100">WhatsApp</div><div className="mt-2 text-2xl font-black">(77) 98856-0246</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
            <div className="overflow-hidden rounded-[34px] border border-zinc-200 bg-zinc-950">
              <img src={drywallStockImage} alt="Estoque de placas drywall" className="h-[420px] w-full object-cover opacity-85" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[.2em] text-red-600">Quem somos</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Sua obra começa com a escolha certa.</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">A Fast Drywall é especializada em sistemas de construção a seco e reúne materiais, atendimento e suporte para ajudar sua obra a ganhar agilidade, organização e acabamento profissional.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[[ShieldCheck,"Produtos de qualidade"],[PackageCheck,"Estoque completo"],[Hammer,"Equipe especializada"],[MessageCircle,"Suporte para sua obra"]].map(([Icon,label])=><div key={String(label)} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"><Icon className="h-6 w-6 text-red-600" /><div className="mt-3 font-black">{label}</div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="solucoes" className="bg-zinc-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-sm font-black uppercase tracking-[.2em] text-red-600">Soluções para sua obra</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-.04em] sm:text-5xl">Tudo para construir com mais eficiência.</h2>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">{solutions.map(({icon:Icon,title,text,image,bullets})=><article key={title} className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="relative h-56"><img src={image} alt={title} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" /><div className="absolute left-5 top-5 grid h-14 w-14 place-items-center rounded-2xl bg-red-600 text-white"><Icon className="h-6 w-6" /></div></div><div className="p-7"><h3 className="text-2xl font-black">{title}</h3><p className="mt-3 leading-7 text-zinc-600">{text}</p><div className="mt-6 space-y-3">{bullets.map((b)=><div key={b} className="flex gap-2 text-sm font-semibold text-zinc-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />{b}</div>)}</div></div></article>)}</div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center"><p className="text-sm font-black uppercase tracking-[.2em] text-red-600">Por que construir a seco?</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Mais controle, menos desperdício e uma obra melhor organizada.</h2></div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{[[TimerReset,"Obra mais rápida","Processos industrializados ajudam a reduzir etapas e retrabalho."],[Sparkles,"Obra mais limpa","Menos uso de processos úmidos e menor geração de entulho."],[PackageCheck,"Menos desperdício","Materiais dimensionados e montagem mais previsível."],[Building2,"Maior precisão","Perfis e sistemas padronizados favorecem alinhamento e acabamento."],[ShieldCheck,"Conforto térmico e acústico","O sistema pode receber isolamentos adequados ao desempenho do ambiente."],[Truck,"Melhor organização","Mais previsibilidade na compra e logística dos materiais."]].map(([Icon,title,text])=><div key={String(title)} className="rounded-[26px] border border-zinc-200 bg-white p-6"><Icon className="h-7 w-7 text-red-600" /><h3 className="mt-4 text-xl font-black">{title}</h3><p className="mt-2 leading-7 text-zinc-600">{text}</p></div>)}</div>
          </div>
        </section>

        <section id="produtos" className="bg-zinc-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-sm font-black uppercase tracking-[.2em] text-red-400">Linha de produtos</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Produtos e materiais para sua obra.</h2></div><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-black text-zinc-950">Solicitar orçamento <ArrowRight className="h-4 w-4" /></a></div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{productLines.map((p)=><article key={p.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5"><div className="relative h-60"><img src={p.image} alt={p.title} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" /></div><div className="p-6"><h3 className="text-xl font-black">{p.title}</h3><p className="mt-2 leading-7 text-zinc-400">{p.text}</p></div></article>)}</div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-sm font-black uppercase tracking-[.2em] text-red-600">Como funciona</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Como solicitar seu orçamento.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-4">{[["01","Fale com a Fast","Chame no WhatsApp."],["02","Informe sua necessidade","Conte o que precisa para a obra."],["03","Receba orientação","A equipe ajuda na escolha dos materiais."],["04","Solicite seu orçamento","Receba as informações para avançar."]].map(([n,t,x])=><div key={n} className="rounded-[26px] border border-zinc-200 bg-zinc-50 p-6"><div className="text-sm font-black text-red-600">{n}</div><h3 className="mt-4 text-xl font-black">{t}</h3><p className="mt-2 leading-7 text-zinc-600">{x}</p></div>)}</div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-zinc-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-sm font-black uppercase tracking-[.2em] text-red-600">Reputação e confiança</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Veja o que os clientes dizem.</h2></div><a href={maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 font-black text-white">Ver avaliações no Google <ArrowRight className="h-4 w-4" /></a></div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">{reviews.map((review)=><blockquote key={review} className="rounded-[28px] border border-zinc-200 bg-white p-7"><div className="flex gap-1 text-amber-500">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}</div><p className="mt-5 text-xl font-bold leading-8">“{review}”</p><footer className="mt-5 text-sm font-semibold text-zinc-500">Avaliação pública da Fast Drywall</footer></blockquote>)}</div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-red-600 px-6 py-12 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14"><div className="max-w-2xl"><p className="text-sm font-black uppercase tracking-[.2em] text-red-100">Seu projeto pode começar agora</p><h2 className="mt-3 text-3xl font-black tracking-[-.04em] sm:text-4xl">Peça seu orçamento sem compromisso.</h2><p className="mt-4 text-lg text-red-100">Fale com a equipe da Fast Drywall e receba atendimento rápido pelo WhatsApp.</p></div><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-black text-red-600 lg:mt-0">Chamar no WhatsApp <MessageCircle className="h-5 w-5" /></a></div></section>

        <section id="localizacao" className="border-t border-zinc-200 bg-zinc-50 py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
            <div className="rounded-[30px] bg-zinc-950 p-8 text-white"><p className="text-sm font-black uppercase tracking-[.2em] text-red-400">Onde estamos</p><h2 className="mt-3 text-3xl font-black">Visite a Fast Drywall.</h2><div className="mt-8 space-y-6"><div className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-red-500" /><div><div className="font-bold">Av. Luís Eduardo Magalhães, Quadra 05</div><div className="mt-1 text-sm leading-6 text-zinc-400">Recreio · Vitória da Conquista - BA<br />CEP 45020-282</div></div></div><div className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-red-500" /><div><div className="font-bold">(77) 98856-0246</div><div className="mt-1 text-sm text-zinc-400">WhatsApp</div></div></div></div><a href={maps} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-bold">Abrir no Google Maps <ArrowRight className="h-4 w-4" /></a></div>
            <div className="min-h-[430px] overflow-hidden rounded-[30px] border border-zinc-200 bg-white"><iframe title="Mapa da Fast Drywall" src="https://www.google.com/maps?q=-14.870544,-40.8411918&z=17&output=embed" className="h-full min-h-[430px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          </div>
        </section>
      </main>

      <footer className="bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><Brand /><p className="mt-3 text-sm text-zinc-500">Drywall, Steel Frame, gesso, forro e acessórios em Vitória da Conquista.</p></div><div className="flex gap-3"><a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200"><Instagram className="h-5 w-5" /></a><a href={facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200"><Facebook className="h-5 w-5" /></a><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200"><MessageCircle className="h-5 w-5" /></a></div><div className="text-sm text-zinc-500">© 2026 Fast Drywall & Steel Frame VCA</div></div></footer>

      <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Pedir orçamento" className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-900/25 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3.5"><MessageCircle className="h-6 w-6" /><span className="hidden font-black sm:inline">Pedir orçamento</span></a>
    </div>
  );
}
