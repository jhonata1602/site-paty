import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type MouseEvent } from "react";
import {
  ArrowRight,
  Building2,
  Facebook,
  Feather,
  Gauge,
  Home,
  Instagram,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Recycle,
  Ruler,
  ShieldCheck,
  Star,
  User,
  Users,
  Volume2,
  Wrench,
} from "lucide-react";

import solDrywall from "@/assets/sol-drywall.jpg";
import solForro from "@/assets/sol-forro.jpg";
import solPerfis from "@/assets/sol-perfis.jpg";
import prodPerfisSf from "@/assets/prod-perfis-sf.jpg";
import storeImg from "@/assets/fast-store-premium.jpg";
import av1 from "@/assets/av-1.jpg";
import av2 from "@/assets/av-2.jpg";
import av3 from "@/assets/av-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Drywall e Steel Frame em Vitória da Conquista | Fast Drywall" },
      {
        name: "description",
        content:
          "Loja de Drywall e Steel Frame em Vitória da Conquista. Placas, perfis, gesso, forros e acessórios para construção a seco. Peça seu orçamento pelo WhatsApp.",
      },
      {
        name: "keywords",
        content:
          "drywall Vitória da Conquista, steel frame Vitória da Conquista, loja de drywall, placas de drywall, perfis para drywall, gesso, forro de gesso, construção a seco",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Drywall e Steel Frame em Vitória da Conquista | Fast Drywall" },
      { property: "og:description", content: "Materiais e soluções em Drywall, Steel Frame, gesso, forros, placas e acessórios em Vitória da Conquista." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
    ],
  }),
});

const phone = "5577988560246";
const heroImage = "/hero-primeira-dobra.png";
const maps = "https://maps.app.goo.gl/eiki7GtC96wXzcgHA";
const instagram = "https://www.instagram.com/fastdrywall.vitoriaconquista/";
const facebook = "https://www.facebook.com/fastdrywall.vitconquista.ba";
const wa = (text: string) => `https://wa.me/${phone}?text=${encodeURIComponent(`Olá, Fast Drywall! ${text}`)}`;

const solutions = [
  { title: "Drywall", icon: Layers3, image: solDrywall, text: "Paredes, divisórias e revestimentos com instalação rápida, obra limpa e acabamento profissional." },
  { title: "Steel Frame", icon: Building2, image: prodPerfisSf, text: "Estruturas em aço galvanizado para obras leves, resistentes, precisas e produtivas." },
  { title: "Gesso, forros e placas", icon: Home, image: solForro, text: "Tetos, rebaixamentos e acabamentos internos com excelente padrão visual." },
  { title: "Perfis e acessórios", icon: Wrench, image: solPerfis, text: "Guias, montantes, parafusos, fitas, massas e acessórios para a montagem completa." },
];

const reviews = [
  { name: "Marcos A.", image: av1, text: "O melhor de Conquista! Atendimento rápido e produtos de qualidade." },
  { name: "Renata L.", image: av2, text: "Além do ótimo atendimento, a loja possui preços excelentes." },
  { name: "Diego S.", image: av3, text: "Empresa boa, ótima qualidade nos materiais e equipe exemplar." },
];

const steelBenefits = [
  { icon: Gauge, title: "Construção mais rápida", text: "Sistema racionalizado para ganhar produtividade e reduzir etapas na obra." },
  { icon: Feather, title: "Estrutura leve e resistente", text: "Perfis em aço galvanizado com alta eficiência estrutural e excelente desempenho." },
  { icon: Ruler, title: "Precisão e qualidade industrial", text: "Montagem precisa, padronizada e pensada para um acabamento profissional." },
  { icon: Recycle, title: "Alto potencial de reciclagem", text: "Estrutura em aço que favorece um processo construtivo mais consciente e organizado." },
  { icon: Volume2, title: "Conforto térmico e acústico", text: "Soluções que permitem composições eficientes para melhorar o conforto dos ambientes." },
];

function Brand({ footer = false }: { footer?: boolean }) {
  const gradientId = footer ? "fast-red-footer" : "fast-red-header";
  const gradientId2 = footer ? "fast-red2-footer" : "fast-red2-header";
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <svg
        viewBox="0 0 240 76"
        role="img"
        aria-label="Fast Drywall & Steel Frame"
        className={`${footer ? "h-14 sm:h-16" : "h-10 sm:h-11 lg:h-12"} w-auto shrink-0`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff2828" />
            <stop offset="50%" stopColor="#c50f17" />
            <stop offset="100%" stopColor="#75060d" />
          </linearGradient>
          <linearGradient id={gradientId2} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff3d3d" />
            <stop offset="55%" stopColor="#c40e16" />
            <stop offset="100%" stopColor="#7e080f" />
          </linearGradient>
        </defs>
        {/* Diamond */}
        <g transform="translate(4 4)">
          <path d="M34 0 L68 34 L34 68 L0 34 Z" fill={`url(#${gradientId})`} />
          <path d="M34 6 L62 34 L34 62 L6 34 Z" fill="#9f0b13" />
          <path d="M34 2 L66 34 L34 66 L2 34 Z" fill="none" stroke="#e31b23" strokeWidth="3.5" />
          <path d="M34 2 V24 L23 34 L34 45 V66" fill="none" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="square" strokeLinejoin="miter" />
          <path d="M24 34 L34 24 L44 34 L34 44 Z" fill={`url(#${gradientId2})`} />
        </g>
        {/* Text */}
        <g transform="translate(82 2)">
          <text x="0" y="44" fontFamily="'Arial Black', Impact, Haettenschweiler, sans-serif" fontSize="50" fontWeight="900" fill="#050505" letterSpacing="-1.5">FAST</text>
          <text x="2" y="59" fontFamily="Arial, Helvetica, sans-serif" fontSize="13.5" fontWeight="900" fill="#d71920">Drywall &amp;</text>
          <text x="2" y="73" fontFamily="Arial, Helvetica, sans-serif" fontSize="13.5" fontWeight="900" fill="#d71920">Steel Frame</text>
        </g>
      </svg>
    </div>
  );
}

function WhatsAppMark({ className = "h-5 w-5" }: { className?: string }) {
  return <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-950/20"><Phone className={`${className} -rotate-12`} strokeWidth={2.5} /><span className="absolute -bottom-1 left-1 h-3 w-3 rotate-45 bg-[#25D366]" /></span>;
}

function Index() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "" });
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const ready = form.name.trim().length > 1 && emailOk && form.phone.trim().length >= 8 && form.interest.length > 1;
  const leadUrl = wa(`Meu nome é ${form.name}. E-mail: ${form.email}. WhatsApp: ${form.phone}. Interesse: ${form.interest}. Quero solicitar um orçamento.`);
  const budgetUrl = wa("Quero solicitar um orçamento para minha obra.");
  const openExternal = (url: string) => { const opened = window.open(url, "_blank", "noopener,noreferrer"); if (!opened) window.location.assign(url); };
  const handleExternal = (event: MouseEvent<HTMLAnchorElement>, url: string) => { event.preventDefault(); openExternal(url); };
  const scrollToForm = () => { const target = document.getElementById("formulario"); if (!target) return; const targetTop = target.getBoundingClientRect().top + window.scrollY - 145; window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" }); window.setTimeout(() => document.getElementById("lead-name")?.focus({ preventScroll: true }), 650); };
  const set = (key: keyof typeof form, value: string) => setForm((prev) => ({ ...prev, [key]: value }));
  const submit = (e: FormEvent) => { e.preventDefault(); if (ready) openExternal(leadUrl); };
  const field = "h-11 w-full rounded-xl border border-white/10 bg-white/[.07] px-4 text-sm text-white placeholder:text-zinc-400 outline-none transition focus:border-red-500 focus:bg-white/[.1]";

  return (
    <div className="min-h-screen bg-white text-zinc-950 antialiased">
      <button type="button" onClick={scrollToForm} aria-label="Solicitar orçamento" title="Solicitar orçamento" className="fixed bottom-6 right-6 z-[70] grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-2xl transition hover:scale-110 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300/40"><MessageCircle className="h-6 w-6" /></button>

      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white shadow-sm">
        <div className="mx-auto flex h-[74px] sm:h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#inicio" aria-label="Fast Drywall início" className="shrink-0">
            <Brand />
          </a>
          <nav className="hidden items-center gap-8 text-[15px] font-bold text-zinc-900 md:flex lg:gap-12 xl:gap-14">
            <a href="#sobre" className="transition-colors hover:text-red-600">Sobre</a>
            <a href="#servicos" className="transition-colors hover:text-red-600">Soluções</a>
            <a href="#steel-frame" className="transition-colors hover:text-red-600">Steel Frame</a>
            <a href="#avaliacoes" className="transition-colors hover:text-red-600">Avaliações</a>
            <a href="#localizacao" className="transition-colors hover:text-red-600">Localização</a>
          </nav>
        </div>
        <div className="border-t border-zinc-100 md:hidden bg-white/95 backdrop-blur-sm">
          <nav aria-label="Navegação principal móvel" className="mx-auto flex items-center justify-between gap-4 overflow-x-auto px-4 py-2.5 text-[13px] font-bold text-zinc-800 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <a href="#sobre" className="shrink-0 transition-colors hover:text-red-600">Sobre</a>
            <a href="#servicos" className="shrink-0 transition-colors hover:text-red-600">Soluções</a>
            <a href="#steel-frame" className="shrink-0 transition-colors hover:text-red-600">Steel Frame</a>
            <a href="#avaliacoes" className="shrink-0 transition-colors hover:text-red-600">Avaliações</a>
            <a href="#localizacao" className="shrink-0 transition-colors hover:text-red-600">Localização</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
          <img src={heroImage} alt="Fast Drywall: construir com inteligência" className="absolute inset-0 h-full w-full object-cover" />
          <h1 className="sr-only">Construir com inteligência é construir com a Fast Drywall.</h1>
          <a href={budgetUrl} onClick={(event) => handleExternal(event, budgetUrl)} aria-label="Solicitar orçamento pelo WhatsApp" className="absolute bottom-[9.5%] left-[4.8%] h-[7.6%] w-[20%] rounded-full bg-transparent text-transparent focus:outline-none focus:ring-4 focus:ring-red-500/70">Solicitar orçamento</a>
          <a href="#servicos" aria-label="Ver soluções" className="absolute bottom-[9.5%] left-[26%] h-[7.6%] w-[16.5%] rounded-full bg-transparent text-transparent focus:outline-none focus:ring-4 focus:ring-white/70">Ver soluções</a>
        </section>

        <section id="sobre" className="py-20 lg:py-24"><div className="mx-auto grid max-w-7xl items-stretch gap-12 px-5 lg:grid-cols-2 lg:px-8"><div className="flex w-full items-center justify-center overflow-hidden rounded-3xl bg-white shadow-2xl lg:min-h-[560px]"><img src={storeImg} alt="Fachada da Fast Drywall em Vitória da Conquista" className="block h-auto max-h-[560px] w-full object-contain" /></div><div className="flex h-full flex-col justify-center"><p className="text-xs font-black uppercase tracking-[.25em] text-red-600">Quem somos</p><h2 className="mt-3 text-4xl font-black sm:text-5xl">Sua obra começa com a escolha certa.</h2><p className="mt-6 text-base leading-8 text-zinc-600">A Fast Drywall &amp; Steel Frame VCA é uma loja especializada em materiais e soluções para construção a seco em Vitória da Conquista. Trabalhamos com drywall, steel frame, placas, gesso, forros, perfis e acessórios, com atendimento especializado, variedade de produtos e suporte para sua obra.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{[{ icon: ShieldCheck, title: "Produtos de qualidade" }, { icon: Package, title: "Estoque completo" }, { icon: Users, title: "Equipe especializada" }, { icon: MessageCircle, title: "Suporte para sua obra" }].map(({ icon: Icon, title }) => <div key={title} className="rounded-2xl border border-zinc-200 bg-white/90 p-5 transition hover:-translate-y-1 hover:shadow-xl"><Icon className="h-6 w-6 text-red-600" /><p className="mt-4 font-black">{title}</p></div>)}</div></div></div></section>

        <section id="servicos" className="border-y border-zinc-200 bg-zinc-50 py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="text-center"><p className="text-xs font-black uppercase tracking-[.25em] text-red-600">Soluções para sua obra</p><h2 className="mt-3 text-4xl font-black">Tudo que sua obra precisa em construção a seco.</h2></div><div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{solutions.map(({ title, image, text }) => <article key={title} className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="relative h-52 overflow-hidden"><img src={image} alt={`${title} em Vitória da Conquista`} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /></div><div className="p-6"><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p></div></article>)}</div></div></section>

        <section id="steel-frame" className="relative overflow-hidden bg-[linear-gradient(135deg,#8f0d14_0%,#c9141c_48%,#ef2931_100%)] py-14 text-white lg:py-16">
          <div className="relative mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.08fr_.92fr] lg:items-stretch lg:px-8">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[.28em] text-red-100">Steel Frame</p>
                <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">Inovação que valoriza seu projeto.</h2>
                <p className="mt-2 text-sm leading-relaxed text-red-50/90">Tecnologia construtiva para quem busca eficiência, precisão, organização e desempenho do início ao acabamento.</p>
              </div>

              <div className="my-auto grid gap-2.5 pt-4">
                {steelBenefits.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 transition hover:bg-white/[.15]">
                    <div className="flex items-center gap-3.5">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-red-600 shadow-md">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="text-sm font-black leading-snug">{title}</h3>
                        <p className="text-[12px] leading-snug text-red-50/85">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="formulario" className="scroll-mt-40 flex flex-col justify-between rounded-[24px] border border-white/10 bg-zinc-950/95 p-6 shadow-[0_24px_70px_rgba(0,0,0,.30)] lg:p-7">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[.25em] text-red-400">SOLICITE SEU ORÇAMENTO</p>
                  <h3 className="mt-1.5 text-[1.45rem] font-black leading-tight text-white">Fale com a equipe da Fast Drywall.</h3>
                  <p className="mt-1 text-[12px] leading-5 text-zinc-400">Preencha seus dados e continue para o WhatsApp.</p>
                </div>
                <WhatsAppMark />
              </div>

              <form onSubmit={submit} className="mt-4 space-y-3">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                  <input id="lead-name" required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Seu nome" className={`${field} pl-11`} />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                  <input required value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="WhatsApp / contato" className={`${field} pl-11`} />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                  <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="Seu e-mail" className={`${field} pl-11`} />
                </div>
                <div className="relative">
                  <Package className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                  <select required value={form.interest} onChange={(e) => set("interest", e.target.value)} className={`${field} pl-11`}>
                    <option value="" className="text-zinc-900">Selecione seu interesse</option>
                    <option className="text-zinc-900">Drywall</option>
                    <option className="text-zinc-900">Steel Frame</option>
                    <option className="text-zinc-900">Gesso e forros</option>
                    <option className="text-zinc-900">Perfis e acessórios</option>
                    <option className="text-zinc-900">Orçamento completo</option>
                  </select>
                </div>
                <button type="submit" disabled={!ready} className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-black transition ${ready ? "bg-emerald-500 text-white hover:bg-emerald-400" : "cursor-not-allowed bg-white/10 text-zinc-500"}`}>
                  <MessageCircle className="h-4 w-4" /> Continuar para o WhatsApp <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-zinc-50 py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="text-center"><p className="text-xs font-black uppercase tracking-[.25em] text-red-600">Reputação e confiança</p><h2 className="mt-3 text-4xl font-black">Clientes satisfeitos e atendimento que gera confiança.</h2></div><div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{reviews.map((r) => <article key={r.name} className="flex min-h-[250px] h-full flex-col rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm"><div className="flex gap-1 text-amber-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div><p className="mt-5 text-[17px] font-bold leading-8">“{r.text}”</p><div className="mt-auto flex items-center gap-4 pt-7"><img src={r.image} alt={r.name} className="h-12 w-12 rounded-full object-cover" /><p className="font-black">{r.name}</p></div></article>)}<a href={maps} onClick={(event) => handleExternal(event, maps)} className="flex min-h-[250px] h-full flex-col rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm" aria-label="Ver mais avaliações no Google"><div className="flex gap-1 text-amber-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div><p className="mt-5 text-[17px] font-bold leading-8">“Veja mais avaliações e experiências de clientes no Google.”</p></a></div></div></section>

        <section className="bg-red-600 py-14 text-white"><div className="mx-auto max-w-7xl px-5 text-center lg:px-8"><h2 className="text-3xl font-black">Peça seu orçamento sem compromisso.</h2><p className="mt-2 text-red-50">Encontre os materiais certos para sua obra com atendimento especializado.</p><a href={budgetUrl} onClick={(event) => handleExternal(event, budgetUrl)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-red-600 shadow-xl">Solicitar orçamento <ArrowRight className="h-4 w-4" /></a></div></section>

        <section id="localizacao" className="bg-zinc-950 py-20 text-white"><div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[.78fr_1.22fr] lg:items-stretch lg:px-8"><div className="rounded-3xl border border-white/10 bg-white/[.04] p-7 shadow-2xl lg:p-8"><p className="text-xs font-black uppercase tracking-[.28em] text-red-400">Onde estamos</p><h2 className="mt-3 text-4xl font-black">Visite a Fast Drywall.</h2><div className="mt-8 flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-5"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-red-600/15 text-red-400"><MapPin className="h-5 w-5" /></span><p className="text-sm leading-7 text-zinc-300">Av. Luís Eduardo Magalhães, Quadra 05<br />Recreio · Vitória da Conquista - BA<br />CEP 45020-282</p></div><div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5"><p className="text-base font-black text-white">(77) 98856-0246</p></div><a href={maps} onClick={(event) => handleExternal(event, maps)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-5 py-3 text-sm font-black">Abrir no Google Maps <ArrowRight className="h-4 w-4" /></a></div><iframe title="Mapa da Fast Drywall em Vitória da Conquista" src="https://www.google.com/maps?q=Av.+Lu%C3%ADs+Eduardo+Magalh%C3%A3es,+Quadra+05,+Recreio,+Vitória+da+Conquista+-+BA&output=embed" className="h-[460px] w-full rounded-3xl border-0" loading="lazy" /></div></section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-10 text-zinc-900"><div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8"><a href="#inicio" aria-label="Voltar ao início" className="shrink-0"><Brand footer /></a><div className="flex items-center gap-3"><a href={instagram} onClick={(event) => handleExternal(event, instagram)} aria-label="Instagram" className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-violet-600 via-pink-500 to-orange-400 text-white shadow-lg"><Instagram className="h-5 w-5" /></a><a href={facebook} onClick={(event) => handleExternal(event, facebook)} aria-label="Facebook" className="grid h-12 w-12 place-items-center rounded-full bg-[#1877F2] text-white shadow-lg"><Facebook className="h-5 w-5" /></a><a href={maps} onClick={(event) => handleExternal(event, maps)} aria-label="Google Maps" className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-white shadow-lg ring-1 ring-zinc-200"><span className="absolute left-0 top-0 h-1/2 w-1/2 bg-[#34A853]" /><span className="absolute right-0 top-0 h-1/2 w-1/2 bg-[#4285F4]" /><span className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-[#FBBC05]" /><span className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-[#EA4335]" /><MapPin className="relative z-10 h-5 w-5 fill-white text-white" /></a></div></div></footer>
    </div>
  );
}
