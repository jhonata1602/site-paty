import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Hammer,
  Home,
  Layers3,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Recycle,
  ShieldCheck,
  Star,
  Truck,
  UserRound,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const waPhone = "5577988560246";
const whatsapp = `https://wa.me/${waPhone}`;
const maps = "https://www.google.com/maps/search/?api=1&query=Fast+Drywall+Steel+Frame+Vit%C3%B3ria+da+Conquista";
const storefront = "/assets/fast-store.jpg";

const images = {
  hero: "https://www.westhollywooddrywallservices.com/weho-drywall-hero.png",
  drywall: "https://www.northhillsdrywallservices.com/drywall-install-progress.png",
  steel: "https://steelframe.pt/wp-content/uploads/2022/05/preco-lsf-m2.jpg",
  boards: "https://pvu.thebluebook.com/inc/img/qp/52019/drywall1.jpg",
  profiles: "https://handyman.dk/media/10371000/staalreglar.jpg",
  steelBuild: "https://static.wixstatic.com/media/ffd5dd_af141ab7e0af45ba82be3579eb6a137a~mv2_d_2000_1224_s_2.jpg/v1/fill/w_560%2Ch_400%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/ffd5dd_af141ab7e0af45ba82be3579eb6a137a~mv2_d_2000_1224_s_2.jpg",
  ceiling: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=86",
};

const solutions = [
  {
    icon: Layers3,
    title: "Drywall",
    image: images.drywall,
    text: "Paredes, divisórias e revestimentos com instalação rápida, acabamento profissional e obra mais limpa.",
    bullets: ["Instalação até 4x mais rápida", "Menos entulho e sujeira", "Acabamento pronto para pintura"],
  },
  {
    icon: Building2,
    title: "Steel Frame",
    image: images.steel,
    text: "Estruturas em aço galvanizado para obras leves, resistentes, precisas e altamente produtivas.",
    bullets: ["Obra até 40% mais rápida", "Estrutura leve e resistente", "Aço 100% reciclável"],
  },
  {
    icon: Home,
    title: "Gesso, forros e placas",
    image: images.ceiling,
    text: "Soluções para tetos, rebaixamentos, acabamentos e ambientes internos com excelente padrão visual.",
    bullets: ["Forros e rebaixamentos", "Sancas e acabamentos", "Conforto térmico e acústico"],
  },
  {
    icon: Wrench,
    title: "Perfis e acessórios",
    image: images.profiles,
    text: "Guias, montantes, perfis, parafusos, fitas, massas e acessórios para montagem completa do sistema.",
    bullets: ["Linha completa", "Maior segurança na montagem", "Pronta entrega"],
  },
];

const products = [
  { title: "Placas de Drywall", image: images.boards, text: "Placas para paredes, divisórias, revestimentos e forros." },
  { title: "Perfis Steel Frame", image: images.profiles, text: "Perfis galvanizados para estruturas leves e construção a seco." },
  { title: "Estruturas Steel Frame", image: images.steelBuild, text: "Sistemas estruturais para projetos residenciais e comerciais." },
  { title: "Forros e Gesso", image: images.ceiling, text: "Materiais para teto, rebaixamento e acabamento dos ambientes." },
];

const benefits = [
  [Clock3, "Mais rapidez", "Menos etapas e mais produtividade na execução."],
  [Hammer, "Obra mais limpa", "Menos processos úmidos, entulho e retrabalho."],
  [PackageCheck, "Menos desperdício", "Materiais dimensionados e montagem previsível."],
  [ShieldCheck, "Acabamento superior", "Superfícies alinhadas e prontas para acabamento."],
  [Recycle, "Construção sustentável", "Aço reciclável e melhor aproveitamento dos materiais."],
  [Home, "Conforto", "Soluções que favorecem desempenho térmico e acústico."],
] as const;

const reviews = [
  { name: "Cliente Fast", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=84", text: "O melhor de Conquista! Atendimento rápido e produtos de qualidade." },
  { name: "Cliente Fast", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=84", text: "Além do ótimo atendimento, a loja possui preços excelentes." },
  { name: "Cliente Fast", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=84", text: "Empresa boa, ótima qualidade e equipe exemplar." },
];

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-10 w-10 place-items-center rotate-45 rounded-sm border border-red-400 bg-gradient-to-br from-red-500 to-red-800 shadow-lg">
        <div className="h-5 w-2 -rotate-45 rounded-sm border-b-4 border-r-4 border-white" />
      </div>
      <div className="leading-none">
        <div className="text-2xl font-black tracking-[-.04em] text-white">FAST</div>
        <div className="mt-1 text-[9px] font-black text-red-500">Drywall & Steel Frame VCA</div>
      </div>
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return <p className="text-[11px] font-black uppercase tracking-[.25em] text-red-600">{children}</p>;
}

function WhatsButton({ label, message = "Quero solicitar um orçamento." }: { label: string; message?: string }) {
  const url = `https://wa.me/${waPhone}?text=${encodeURIComponent(`Olá, Fast Drywall! ${message}`)}`;
  return (
    <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-600/15 transition hover:-translate-y-0.5 hover:bg-emerald-500 active:bg-emerald-500">
      <MessageCircle className="h-4 w-4" /> {label} <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function Index() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const ready = form.name.trim().length > 1 && emailOk && form.phone.trim().length >= 8 && form.interest.length > 1;
  const leadWhatsapp = `https://wa.me/${waPhone}?text=${encodeURIComponent(`Olá! Meu nome é ${form.name}. E-mail: ${form.email}. WhatsApp: ${form.phone}. Interesse: ${form.interest}.${form.message ? ` Detalhes: ${form.message}.` : ""} Quero solicitar um orçamento com a Fast Drywall.`)}`;
  const set = (key: keyof typeof form, value: string) => setForm((prev) => ({ ...prev, [key]: value }));
  const submit = (e: FormEvent) => { e.preventDefault(); if (ready) window.open(leadWhatsapp, "_blank", "noopener,noreferrer"); };

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#inicio"><Brand /></a>
          <nav className="hidden items-center gap-7 text-xs font-bold text-white/90 lg:flex">
            <a href="#sobre" className="hover:text-red-400">Sobre</a>
            <a href="#servicos" className="hover:text-red-400">Soluções</a>
            <a href="#produtos" className="hover:text-red-400">Produtos</a>
            <a href="#avaliacoes" className="hover:text-red-400">Avaliações</a>
            <a href="#localizacao" className="hover:text-red-400">Localização</a>
          </nav>
          <a href="#formulario" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-xs font-black text-white transition hover:bg-emerald-500"><MessageCircle className="h-4 w-4" /> Solicitar orçamento</a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden bg-black text-white">
          <img src={images.hero} alt="Profissionais instalando placas de drywall" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.96)_0%,rgba(0,0,0,.82)_48%,rgba(60,0,0,.65)_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_.82fr] lg:items-center lg:px-8 lg:py-20">
            <div className="max-w-xl">
              <h1 className="text-5xl font-black leading-[.93] tracking-[-.055em] sm:text-6xl lg:text-7xl">Construir com inteligência é construir com a <span className="text-red-500">Fast Drywall.</span></h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-zinc-200">Soluções em drywall, steel frame, gesso, forro e acessórios para uma obra mais rápida, limpa, organizada e com excelente acabamento.</p>
              <div className="mt-8 flex flex-wrap gap-3"><WhatsButton label="Falar com a equipe" /><a href="#servicos" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-3 text-sm font-black text-white hover:bg-white/10">Ver soluções <ArrowRight className="h-4 w-4" /></a></div>
            </div>

            <div id="formulario" className="rounded-[22px] border border-white/10 bg-zinc-950/90 p-5 shadow-2xl backdrop-blur-xl">
              <h2 className="text-2xl font-black leading-tight">Preencha os dados e siga para o WhatsApp.</h2>
              <p className="mt-2 text-xs text-zinc-400">Fale com nossa equipe e receba seu orçamento.</p>
              <form onSubmit={submit} className="mt-5 space-y-3">
                <label className="relative block"><UserRound className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" /><input value={form.name} onChange={(e)=>set("name",e.target.value)} placeholder="Seu nome" className="h-12 w-full rounded-lg border border-white/10 bg-zinc-800/80 pl-11 pr-4 text-sm text-white outline-none focus:border-red-500" /></label>
                <input type="email" value={form.email} onChange={(e)=>set("email",e.target.value)} placeholder="Seu Gmail / e-mail" className="h-12 w-full rounded-lg border border-white/10 bg-zinc-800/80 px-4 text-sm text-white outline-none focus:border-red-500" />
                <input value={form.phone} onChange={(e)=>set("phone",e.target.value)} placeholder="Seu WhatsApp" className="h-12 w-full rounded-lg border border-white/10 bg-zinc-800/80 px-4 text-sm text-white outline-none focus:border-red-500" />
                <select value={form.interest} onChange={(e)=>set("interest",e.target.value)} className="h-12 w-full rounded-lg border border-white/10 bg-zinc-800/80 px-4 text-sm text-white outline-none focus:border-red-500"><option value="" className="text-zinc-900">Selecione seu interesse</option><option className="text-zinc-900">Drywall</option><option className="text-zinc-900">Steel Frame</option><option className="text-zinc-900">Gesso e forros</option><option className="text-zinc-900">Perfis e acessórios</option><option className="text-zinc-900">Orçamento completo</option></select>
                <textarea value={form.message} onChange={(e)=>set("message",e.target.value)} placeholder="Descreva rapidamente o que você precisa (opcional)" className="min-h-[92px] w-full rounded-lg border border-white/10 bg-zinc-800/80 px-4 py-3 text-sm text-white outline-none focus:border-red-500" />
                <button disabled={!ready} className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg text-sm font-black transition ${ready ? "bg-emerald-500 text-white hover:bg-emerald-600" : "cursor-not-allowed bg-zinc-700 text-zinc-400"}`}><MessageCircle className="h-4 w-4" /> Ir para o WhatsApp</button>
              </form>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-zinc-100 shadow-xl">
              <img src={storefront} alt="Fachada da loja Fast Drywall" className="h-[520px] w-full object-cover contrast-105 saturate-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-zinc-950/90 p-5 text-white backdrop-blur">
                <Tag>Loja física</Tag>
                <h3 className="mt-2 text-2xl font-black">Fast Drywall & Steel Frame VCA</h3>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-300"><span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-red-500" />Vitória da Conquista - BA</span><span className="flex items-center gap-2"><Phone className="h-4 w-4 text-red-500" />(77) 98856-0246</span></div>
              </div>
            </div>
            <div className="self-center">
              <Tag>Quem somos</Tag>
              <h2 className="mt-3 text-4xl font-black leading-[.96] tracking-[-.04em] sm:text-5xl">Sua obra começa com a escolha certa.</h2>
              <p className="mt-5 text-base leading-8 text-zinc-600">A Fast Drywall & Steel Frame VCA é referência em soluções para construção a seco em Vitória da Conquista. Trabalhamos com drywall, steel frame, placas, gesso, forros e acessórios, com atendimento especializado, variedade de produtos e suporte para sua obra.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">{[[ShieldCheck,"Produtos de qualidade"],[PackageCheck,"Estoque completo"],[Hammer,"Equipe especializada"],[MessageCircle,"Suporte para sua obra"]].map(([Icon,title])=><div key={title as string} className="group rounded-xl border border-zinc-200 p-5 transition hover:-translate-y-1 hover:shadow-lg"><Icon className="h-6 w-6 text-red-500 transition group-hover:scale-110" /><h3 className="mt-4 text-lg font-black">{title as string}</h3></div>)}</div>
              <div className="mt-7"><WhatsButton label="Conhecer a Fast pelo WhatsApp" message="Quero conhecer melhor a Fast Drywall e pedir orientação." /></div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-zinc-50 py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center"><Tag>Soluções para sua obra</Tag><h2 className="mt-2 text-3xl font-black sm:text-4xl">Imagens e soluções que realmente representam o que a Fast trabalha.</h2></div>
            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{solutions.map(({icon:Icon,title,image,text,bullets})=><article key={title} className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><img src={image} alt={title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" /><div className="p-5"><div className="flex items-center gap-2"><Icon className="h-5 w-5 text-red-500" /><h3 className="text-xl font-black">{title}</h3></div><p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p><div className="mt-4 space-y-2">{bullets.map((b)=><div key={b} className="flex gap-2 text-xs font-semibold text-zinc-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />{b}</div>)}</div><div className="mt-5"><WhatsButton label="Pedir orçamento" message={`Quero orçamento de ${title}.`} /></div></div></article>)}</div>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center"><Tag>Por que construir a seco?</Tag><h2 className="mt-2 text-3xl font-black sm:text-4xl">Mais vantagens para sua obra.</h2></div>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(([Icon,title,text])=><div key={title} className="group rounded-2xl border border-zinc-200 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"><div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-red-50 text-red-500 transition group-hover:bg-red-500 group-hover:text-white"><Icon className="h-6 w-6" /></div><h3 className="mt-3 font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{text}</p></div>)}</div>
            <div className="mt-8 text-center"><WhatsButton label="Tirar dúvidas no WhatsApp" message="Quero tirar dúvidas sobre construção a seco." /></div>
          </div>
        </section>

        <section id="produtos" className="bg-zinc-950 py-14 text-white lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center"><Tag>Linha de produtos</Tag><h2 className="mt-2 text-3xl font-black sm:text-4xl">Produtos com imagens do próprio segmento.</h2></div>
            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{products.map((p)=><article key={p.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"><img src={p.image} alt={p.title} className="h-48 w-full object-cover" /><div className="p-5"><h3 className="text-lg font-black">{p.title}</h3><p className="mt-2 text-sm leading-6 text-zinc-300">{p.text}</p><div className="mt-5"><WhatsButton label="Consultar" message={`Quero consultar ${p.title}.`} /></div></div></article>)}</div>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="text-center"><Tag>Como solicitar seu orçamento</Tag><h2 className="mt-2 text-3xl font-black sm:text-4xl">É rápido, fácil e sem compromisso.</h2></div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[["01","Fale com a Fast"],["02","Informe sua necessidade"],["03","Receba orientação"],["04","Solicite seu orçamento"]].map(([n,t])=><div key={n} className="rounded-xl border border-zinc-200 p-5 shadow-sm"><div className="grid h-9 w-9 place-items-center rounded-full bg-red-600 text-xs font-black text-white">{n}</div><h3 className="mt-4 text-sm font-black">{t}</h3></div>)}</div>
            <div className="mt-8 text-center"><WhatsButton label="Começar meu orçamento" /></div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-zinc-50 py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center"><Tag>Reputação e confiança</Tag><h2 className="mt-2 text-3xl font-black sm:text-4xl">Clientes satisfeitos e atendimento que gera confiança.</h2></div>
            <div className="mt-9 grid gap-5 lg:grid-cols-3">{reviews.map((r)=><article key={r.text} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-4"><img src={r.image} alt={r.name} className="h-14 w-14 rounded-full object-cover" /><div><div className="flex gap-1 text-amber-500">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}</div><p className="mt-1 font-black">{r.name}</p></div></div><p className="mt-5 text-lg font-bold leading-7">“{r.text}”</p></article>)}</div>
            <div className="mt-8 text-center"><WhatsButton label="Falar com a Fast" /></div>
          </div>
        </section>

        <section className="bg-red-600 py-8 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 text-center lg:flex-row lg:text-left lg:px-8"><div><h2 className="text-3xl font-black">Peça seu orçamento sem compromisso.</h2><p className="mt-2 text-red-100">Fale agora com nossa equipe e receba orientação para sua obra.</p></div><WhatsButton label="Falar no WhatsApp" /></div>
        </section>

        <section id="localizacao" className="bg-zinc-950 py-14 text-white lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8"><div><Tag>Onde estamos</Tag><h2 className="mt-3 text-3xl font-black">Visite a Fast Drywall.</h2><div className="mt-6 space-y-4 text-sm text-zinc-300"><p className="flex gap-2"><MapPin className="h-5 w-5 text-red-500" />Av. Luís Eduardo Magalhães, Quadra 05<br/>Recreio · Vitória da Conquista - BA<br/>CEP 45020-282</p><p className="flex gap-2"><Phone className="h-5 w-5 text-red-500" />(77) 98856-0246</p></div><div className="mt-7"><WhatsButton label="Chamar a loja" message="Quero falar com a loja Fast Drywall." /></div></div><iframe title="Mapa Fast Drywall" src="https://www.google.com/maps?q=-14.870544,-40.8411918&z=17&output=embed" className="min-h-[390px] w-full rounded-2xl border-0" loading="lazy" /></div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-8 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-zinc-400 lg:flex-row lg:items-center lg:justify-between lg:px-8"><Brand /><p>© 2026 Fast Drywall & Steel Frame VCA</p><a href={maps} target="_blank" rel="noreferrer" className="hover:text-white">Abrir no Google Maps</a></div></footer>
    </div>
  );
}
