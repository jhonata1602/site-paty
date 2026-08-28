import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  Hammer,
  Home,
  Layers3,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Recycle,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  UserRound,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const waPhone = "5577988560246";
const whatsapp = `https://wa.me/${waPhone}`;
const instagram = "https://www.instagram.com/fastdrywall.vitoriaconquista/";
const facebook = "https://www.facebook.com/fastdrywall.vitconquista.ba";
const maps = "https://www.google.com/maps/search/?api=1&query=Fast+Drywall+Steel+Frame+Vit%C3%B3ria+da+Conquista";
const storefront = "/assets/fast-store.jpg";

const heroImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=84";

const solutions = [
  {
    icon: Layers3,
    title: "Drywall",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=84",
    text: "Paredes, divisórias e revestimentos com instalação rápida, acabamento profissional e obra mais limpa.",
    bullets: ["Instalação até 4x mais rápida", "Obra limpa e sem entulho", "Acabamento pronto para pintura"],
  },
  {
    icon: Building2,
    title: "Steel Frame",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=84",
    text: "Estruturas leves e resistentes em aço galvanizado, com precisão industrial e alta produtividade.",
    bullets: ["Estrutura leve e resistente", "Até 40% mais rápida", "Aço 100% reciclável"],
  },
  {
    icon: Home,
    title: "Gesso, forros e placas",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=84",
    text: "Soluções para tetos, rebaixamentos, acabamentos e ambientes internos com variedade de materiais.",
    bullets: ["Diversos modelos de forros", "Sancas e molduras em gesso", "Estética e valorização do ambiente"],
  },
  {
    icon: Wrench,
    title: "Perfis e acessórios",
    image: "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1200&q=84",
    text: "Linha completa de perfis, parafusos, fitas, massas e acessórios para uma instalação segura e eficiente.",
    bullets: ["Acessórios de qualidade", "Maior segurança e desempenho", "Tudo para sua instalação"],
  },
];

const benefits = [
  { icon: Sparkles, title: "Instalação até 4x mais rápida", text: "Mais agilidade do início ao acabamento." },
  { icon: Building2, title: "Obra até 40% mais rápida", text: "Menos tempo de obra e mais produtividade." },
  { icon: Hammer, title: "Obra limpa e organizada", text: "Sem entulho, sujeira e bagunça no canteiro." },
  { icon: PackageCheck, title: "Menos desperdício", text: "Materiais precisos, menos resíduos." },
  { icon: Truck, title: "Mais economia em tempo e mão de obra", text: "Redução de custos e melhor aproveitamento." },
  { icon: ShieldCheck, title: "Acabamento liso e pronto", text: "Superfície perfeita para pintura ou revestimento." },
  { icon: Home, title: "Estrutura leve e resistente", text: "Segurança, durabilidade e melhor desempenho." },
  { icon: Recycle, title: "Aço 100% reciclável", text: "Construção sustentável com responsabilidade." },
  { icon: CheckCircle2, title: "Conforto térmico e acústico", text: "Ambientes mais confortáveis, eficientes e silenciosos." },
];

const products = [
  { title: "Placas de Drywall", image: "https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=1000&q=84", text: "Placas resistentes com excelente acabamento para paredes, revestimentos e forros." },
  { title: "Perfis Steel Frame", image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=84", text: "Perfis galvanizados com precisão industrial para estruturas leves e duráveis." },
  { title: "Forros e Gesso", image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1000&q=84", text: "Forros modulares, placas de gesso e soluções que valorizam seus ambientes." },
  { title: "Perfis e Acessórios", image: "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1000&q=84", text: "Parafusos, fitas, massas e acessórios para instalação segura e eficiente." },
];

const reviews = [
  { name: "Rafael Almeida", role: "Engenheiro Civil", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=84", text: "Materiais de excelente qualidade e atendimento impecável. Nossa obra ficou pronta muito mais rápido do que o previsto!" },
  { name: "Juliana Martins", role: "Arquiteta", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=84", text: "Equipe atenciosa e muito técnica. O steel frame deu leveza e agilidade para o nosso projeto. Recomendo muito!" },
  { name: "Carlos Henrique", role: "Construtor", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=84", text: "Tudo que precisei encontrei na Fast Drywall. Preço justo, produtos de qualidade e entrega rápida." },
];

function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-10 w-10 place-items-center rotate-45 rounded-sm border border-red-400 bg-gradient-to-br from-red-500 to-red-800 shadow-lg">
        <div className="h-5 w-2 -rotate-45 rounded-sm border-b-4 border-r-4 border-white" />
      </div>
      <div className="leading-none">
        <div className={`text-2xl font-black tracking-[-.04em] ${dark ? "text-white" : "text-zinc-950"}`}>FAST</div>
        <div className="mt-1 text-[9px] font-black text-red-500">Drywall & Steel Frame VCA</div>
      </div>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-black uppercase tracking-[.25em] text-red-600">{children}</p>;
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
          <a href="#inicio"><Brand dark /></a>
          <nav className="hidden items-center gap-7 text-xs font-bold text-white/90 lg:flex">
            <a href="#sobre" className="transition hover:text-red-400">Sobre</a>
            <a href="#servicos" className="transition hover:text-red-400">Soluções</a>
            <a href="#produtos" className="transition hover:text-red-400">Produtos</a>
            <a href="#avaliacoes" className="transition hover:text-red-400">Avaliações</a>
            <a href="#localizacao" className="transition hover:text-red-400">Localização</a>
          </nav>
          <a href="#formulario" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-red-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-500">
            <MessageCircle className="h-4 w-4" /> Solicitar orçamento <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden bg-black text-white">
          <img src={heroImage} alt="Profissionais instalando drywall" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.95)_0%,rgba(0,0,0,.77)_48%,rgba(0,0,0,.68)_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_.78fr] lg:items-center lg:px-8 lg:py-20">
            <div className="max-w-xl">
              <h1 className="text-5xl font-black leading-[.93] tracking-[-.055em] sm:text-6xl lg:text-7xl">
                Construir com inteligência é construir com a <span className="text-red-500">Fast Drywall.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-zinc-200">Soluções em drywall, steel frame, gesso, forro e acessórios para uma obra mais rápida, limpa, organizada e com excelente acabamento.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-500">Falar com a equipe <MessageCircle className="h-4 w-4" /></a>
                <a href="#servicos" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white/10">Ver soluções <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>

            <div id="formulario" className="rounded-[22px] border border-white/10 bg-zinc-950/90 p-5 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black leading-tight">Preencha os dados e siga para o WhatsApp.</h2>
                  <p className="mt-2 text-xs text-zinc-400">Fale com nossa equipe e receba seu orçamento.</p>
                </div>
                <MessageCircle className="h-7 w-7 text-red-500" />
              </div>
              <form onSubmit={submit} className="space-y-3">
                <label className="relative block"><UserRound className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" /><input value={form.name} onChange={(e)=>set("name",e.target.value)} placeholder="Seu nome" className="h-12 w-full rounded-lg border border-white/10 bg-zinc-800/80 pl-11 pr-4 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-red-500" /></label>
                <label className="relative block"><MessageCircle className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" /><input type="email" value={form.email} onChange={(e)=>set("email",e.target.value)} placeholder="Seu Gmail / e-mail" className="h-12 w-full rounded-lg border border-white/10 bg-zinc-800/80 pl-11 pr-4 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-red-500" /></label>
                <label className="relative block"><Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" /><input value={form.phone} onChange={(e)=>set("phone",e.target.value)} placeholder="Seu WhatsApp" className="h-12 w-full rounded-lg border border-white/10 bg-zinc-800/80 pl-11 pr-4 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-red-500" /></label>
                <select value={form.interest} onChange={(e)=>set("interest",e.target.value)} className="h-12 w-full rounded-lg border border-white/10 bg-zinc-800/80 px-4 text-sm text-white outline-none focus:border-red-500"><option value="" className="text-zinc-900">Selecione seu interesse</option><option className="text-zinc-900">Drywall</option><option className="text-zinc-900">Steel Frame</option><option className="text-zinc-900">Gesso e forros</option><option className="text-zinc-900">Perfis e acessórios</option><option className="text-zinc-900">Orçamento completo</option></select>
                <textarea value={form.message} onChange={(e)=>set("message",e.target.value)} placeholder="Descreva rapidamente o que você precisa (opcional)" className="min-h-[92px] w-full rounded-lg border border-white/10 bg-zinc-800/80 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-red-500" />
                <button disabled={!ready} className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg text-sm font-black transition ${ready ? "bg-emerald-500 text-white hover:bg-emerald-600" : "cursor-not-allowed bg-zinc-700 text-zinc-400"}`}><MessageCircle className="h-4 w-4" /> Ir para o WhatsApp <ArrowRight className="h-4 w-4" /></button>
                <p className="text-center text-[10px] text-zinc-500">O botão será ativado após preencher todos os campos obrigatórios.</p>
              </form>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-12 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <div className="relative overflow-hidden rounded-[10px] shadow-xl">
              <img src={storefront} alt="Loja Fast Drywall" className="h-[470px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-xl bg-zinc-950/90 p-5 text-white backdrop-blur">
                <Tag>Loja física</Tag>
                <h3 className="mt-2 text-xl font-black">Fast Drywall & Steel Frame VCA</h3>
                <p className="mt-2 text-xs text-zinc-300">Vitória da Conquista - BA</p>
                <div className="mt-3 flex items-center gap-2 text-xs"><Phone className="h-4 w-4 text-red-500" /> (77) 98856-0246</div>
                <div className="mt-4 flex flex-wrap gap-2">{["Drywall","Steel Frame","Gesso","Acessórios"].map((item)=><span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold">{item}</span>)}</div>
              </div>
            </div>
            <div className="self-center">
              <Tag>Quem somos</Tag>
              <h2 className="mt-3 text-4xl font-black leading-[.96] tracking-[-.04em] sm:text-5xl">Sua obra começa com a escolha certa.</h2>
              <p className="mt-5 text-base leading-8 text-zinc-600">A Fast Drywall & Steel Frame VCA é referência em soluções para construção a seco em Vitória da Conquista. Trabalhamos com drywall, steel frame, placas, gesso, forros e acessórios, com atendimento especializado, variedade de produtos e suporte para ajudar sua obra a ganhar agilidade, organização e acabamento profissional.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[{icon:ShieldCheck,t:"Produtos de qualidade",d:"Materiais selecionados para entregar o melhor resultado."},{icon:PackageCheck,t:"Estoque completo",d:"Variedade e disponibilidade para sua obra não parar."},{icon:Hammer,t:"Equipe especializada",d:"Atendimento técnico e suporte do começo ao fim."},{icon:MessageCircle,t:"Suporte para sua obra",d:"Acompanhamento e soluções que fazem a diferença."}].map(({icon:Icon,t,d})=><div key={t} className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><Icon className="h-6 w-6 text-red-500 transition group-hover:scale-110" /><h3 className="mt-4 text-lg font-black">{t}</h3><p className="mt-2 text-xs leading-5 text-zinc-600">{d}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-zinc-50 py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center"><Tag>Soluções para sua obra</Tag><h2 className="mt-2 text-3xl font-black sm:text-4xl">Soluções completas para cada etapa do seu projeto.</h2></div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {solutions.map(({icon:Icon,title,image,text,bullets})=><article key={title} className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><img src={image} alt={title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" /><div className="p-5"><div className="flex items-center gap-2"><Icon className="h-5 w-5 text-red-500" /><h3 className="text-xl font-black">{title}</h3></div><p className="mt-3 text-xs leading-5 text-zinc-600">{text}</p><div className="mt-4 space-y-2">{bullets.map((b)=><div key={b} className="flex gap-2 text-xs font-semibold text-zinc-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />{b}</div>)}</div></div></article>)}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center"><Tag>Por que construir a seco?</Tag><h2 className="mt-2 text-3xl font-black sm:text-4xl">Mais vantagens para sua obra.</h2></div>
            <div className="mt-8 grid gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {benefits.map(({icon:Icon,title,text})=><div key={title} className="group text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-full border-2 border-red-200 bg-red-50 text-red-500 transition group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white"><Icon className="h-6 w-6" /></div><h3 className="mt-3 text-sm font-black leading-5">{title}</h3><p className="mt-1 text-[11px] leading-4 text-zinc-500">{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="produtos" className="bg-zinc-950 py-12 text-white lg:py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center"><Tag>Linha de produtos</Tag><h2 className="mt-2 text-3xl font-black sm:text-4xl">Materiais de alta qualidade para resultados superiores.</h2></div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{products.map((p)=><article key={p.title} className="overflow-hidden rounded-xl border border-white/10 bg-white/5"><img src={p.image} alt={p.title} className="h-44 w-full object-cover" /><div className="p-5"><h3 className="text-lg font-black">{p.title}</h3><p className="mt-2 text-xs leading-5 text-zinc-300">{p.text}</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-black transition hover:bg-emerald-500">Ver produtos <ArrowRight className="h-3.5 w-3.5" /></a></div></article>)}</div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="text-center"><Tag>Como solicitar seu orçamento</Tag><h2 className="mt-2 text-3xl font-black sm:text-4xl">É rápido, fácil e sem compromisso.</h2></div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[{n:"01",icon:MessageCircle,t:"Fale com a Fast",d:"Preencha o formulário ou fale com nossa equipe pelo WhatsApp."},{n:"02",icon:ClipboardList,t:"Informe sua necessidade",d:"Conte sobre seu projeto e o que você precisa para sua obra."},{n:"03",icon:UserRound,t:"Receba orientação",d:"Nossos especialistas vão entender e indicar as melhores soluções."},{n:"04",icon:MessageCircle,t:"Solicite seu orçamento",d:"Receba seu orçamento rápido e comece sua obra com segurança."}].map(({n,icon:Icon,t,d})=><div key={n} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"><div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-full bg-red-600 text-xs font-black text-white">{n}</div><Icon className="h-6 w-6 text-zinc-500" /></div><h3 className="mt-4 text-sm font-black">{t}</h3><p className="mt-2 text-xs leading-5 text-zinc-500">{d}</p></div>)}</div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-zinc-50 py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center"><Tag>Veja o que os clientes dizem</Tag><h2 className="mt-2 text-3xl font-black sm:text-4xl">Confiança que se constrói com resultado.</h2></div>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">{reviews.map((r)=><article key={r.name} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"><div className="flex gap-4"><img src={r.image} alt={r.name} className="h-16 w-16 rounded-full object-cover" /><div><div className="flex gap-1 text-red-500">{[0,1,2,3,4].map((i)=><Star key={i} className="h-4 w-4 fill-current" />)}</div><p className="mt-3 text-xs leading-5 text-zinc-600">“{r.text}”</p><p className="mt-3 text-xs font-black">{r.name}</p><p className="text-[10px] text-zinc-500">{r.role}</p></div></div></article>)}</div>
          </div>
        </section>

        <section className="bg-red-600 py-5 text-white"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row lg:px-8"><div className="flex items-center gap-4"><MessageCircle className="h-12 w-12" /><div><h2 className="text-2xl font-black">Peça seu orçamento sem compromisso.</h2><p className="mt-1 text-xs text-red-100">Fale agora com nossa equipe e receba as melhores soluções para sua obra.</p></div></div><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-black text-white transition hover:bg-emerald-600">Falar no WhatsApp <MessageCircle className="h-4 w-4" /> <ArrowRight className="h-4 w-4" /></a></div></section>

        <section id="localizacao" className="bg-zinc-950 text-white"><div className="mx-auto grid max-w-7xl lg:grid-cols-[.8fr_1.2fr]"><div className="p-8 lg:p-10"><Tag>Onde estamos</Tag><p className="mt-5 text-sm leading-6 text-zinc-300">Av. Luís Eduardo Magalhães, Quadra 05<br/>Recreio · Vitória da Conquista - BA<br/>CEP 45020-282</p><div className="mt-5 flex items-center gap-2 text-sm font-black"><Phone className="h-5 w-5 text-red-500" />(77) 98856-0246</div><a href={maps} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-black transition hover:bg-white/10"><MapPin className="h-4 w-4" /> Abrir no Google Maps <ArrowRight className="h-4 w-4" /></a></div><iframe title="Mapa Fast Drywall" src="https://www.google.com/maps?q=-14.870544,-40.8411918&z=17&output=embed" className="h-[350px] w-full border-0" loading="lazy" /></div></section>
      </main>

      <footer className="bg-black text-white"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 md:grid-cols-2 lg:grid-cols-5 lg:px-8"><div className="lg:col-span-1"><Brand dark/><p className="mt-4 text-xs leading-5 text-zinc-400">Soluções em drywall, steel frame, gesso, forro e acessórios para uma obra mais rápida e organizada.</p></div><div><p className="text-xs font-black uppercase tracking-widest">Navegação</p><div className="mt-3 space-y-2 text-xs text-zinc-400"><a className="block hover:text-white" href="#sobre">Sobre</a><a className="block hover:text-white" href="#servicos">Soluções</a><a className="block hover:text-white" href="#produtos">Produtos</a><a className="block hover:text-white" href="#avaliacoes">Avaliações</a></div></div><div><p className="text-xs font-black uppercase tracking-widest">Soluções</p><div className="mt-3 space-y-2 text-xs text-zinc-400"><p>Drywall</p><p>Steel Frame</p><p>Gesso, forros e placas</p><p>Perfis e acessórios</p></div></div><div><p className="text-xs font-black uppercase tracking-widest">Produtos</p><div className="mt-3 space-y-2 text-xs text-zinc-400"><p>Placas de Drywall</p><p>Perfis Steel Frame</p><p>Forros e Gesso</p><p>Perfis e Acessórios</p></div></div><div><p className="text-xs font-black uppercase tracking-widest">Fale conosco</p><div className="mt-3 space-y-2 text-xs text-zinc-400"><p>(77) 98856-0246</p><p>contato@fastdrywallvca.com.br</p><div className="flex gap-3 pt-2"><a href={instagram} target="_blank" rel="noreferrer" className="hover:text-red-500">Instagram</a><a href={facebook} target="_blank" rel="noreferrer" className="hover:text-red-500">Facebook</a></div></div></div></div><div className="border-t border-white/10 py-4 text-center text-[10px] text-zinc-500">© 2026 Fast Drywall & Steel Frame VCA. Todos os direitos reservados.</div></footer>
    </div>
  );
}
