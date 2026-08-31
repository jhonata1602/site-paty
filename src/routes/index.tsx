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
import heroSteelFrame from "@/assets/hero-steel-frame.png.asset.json";

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
      {
        property: "og:title",
        content: "Drywall e Steel Frame em Vitória da Conquista | Fast Drywall",
      },
      {
        property: "og:description",
        content:
          "Materiais e soluções em Drywall, Steel Frame, gesso, forros, placas e acessórios em Vitória da Conquista.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
    ],
  }),
});

const phone = "5577988560246";
const heroImage = heroSteelFrame.url;
const maps = "https://maps.app.goo.gl/eiki7GtC96wXzcgHA";
const instagram = "https://www.instagram.com/fastdrywall.vitoriaconquista/";
const facebook = "https://www.facebook.com/fastdrywall.vitconquista.ba";
const wa = (text: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(`Olá, Fast Drywall! ${text}`)}`;

const solutions = [
  {
    title: "Drywall",
    icon: Layers3,
    image: solDrywall,
    text: "Paredes, divisórias e revestimentos com instalação rápida, obra limpa e acabamento profissional.",
  },
  {
    title: "Steel Frame",
    icon: Building2,
    image: prodPerfisSf,
    text: "Estruturas em aço galvanizado para obras leves, resistentes, precisas e produtivas.",
  },
  {
    title: "Gesso, forros e placas",
    icon: Home,
    image: solForro,
    text: "Tetos, rebaixamentos e acabamentos internos com excelente padrão visual.",
  },
  {
    title: "Perfis e acessórios",
    icon: Wrench,
    image: solPerfis,
    text: "Guias, montantes, parafusos, fitas, massas e acessórios para a montagem completa.",
  },
];

const reviews = [
  {
    name: "Marcos A.",
    image: av1,
    text: "O melhor de Conquista! Atendimento rápido e produtos de qualidade.",
  },
  {
    name: "Renata L.",
    image: av2,
    text: "Além do ótimo atendimento, a loja possui preços excelentes.",
  },
  {
    name: "Diego S.",
    image: av3,
    text: "Empresa boa, ótima qualidade nos materiais e equipe exemplar.",
  },
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
    <svg
      viewBox="0 0 420 105"
      role="img"
      aria-label="Fast Drywall & Steel Frame"
      className={`${footer ? "h-16 sm:h-[72px]" : "h-14 sm:h-16"} w-auto shrink-0`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff2b2b" />
          <stop offset="0.48" stopColor="#d20f19" />
          <stop offset="1" stopColor="#78070f" />
        </linearGradient>
        <linearGradient id={gradientId2} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff4242" />
          <stop offset="0.55" stopColor="#c90d16" />
          <stop offset="1" stopColor="#860810" />
        </linearGradient>
      </defs>
      <g transform="translate(8 7)">
        <path d="M46 0 L92 46 L46 92 L0 46 Z" fill={`url(#${gradientId})`} />
        <path d="M46 8 L84 46 L46 84 L8 46 Z" fill="#9f0b13" />
        <path d="M46 2 L90 46 L46 90 L2 46 Z" fill="none" stroke="#e31b23" strokeWidth="5" />
        <path
          d="M46 2 V32 L31 46 L46 61 V90"
          fill="none"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path d="M33 46 L46 33 L60 46 L46 59 Z" fill={`url(#${gradientId2})`} />
      </g>
      <g transform="translate(118 1)">
        <text x="0" y="61" fontFamily="Impact, Haettenschweiler, 'Arial Narrow Bold', Arial, sans-serif" fontSize="72" fontWeight="900" fill="#050505" letterSpacing="-2">FAST</text>
        <text x="3" y="82" fontFamily="Arial, Helvetica, sans-serif" fontSize="19" fontWeight="800" fill="#d71920">Drywall &amp;</text>
        <text x="3" y="102" fontFamily="Arial, Helvetica, sans-serif" fontSize="19" fontWeight="800" fill="#d71920">Steel Frame</text>
      </g>
    </svg>
  );
}

function WhatsAppMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-950/20">
      <Phone className={`${className} -rotate-12`} strokeWidth={2.5} />
      <span className="absolute -bottom-1 left-1 h-3 w-3 rotate-45 bg-[#25D366]" />
    </span>
  );
}

function Index() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "" });
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const ready =
    form.name.trim().length > 1 &&
    emailOk &&
    form.phone.trim().length >= 8 &&
    form.interest.length > 1;

  const leadUrl = wa(
    `Meu nome é ${form.name}. E-mail: ${form.email}. WhatsApp: ${form.phone}. Interesse: ${form.interest}. Quero solicitar um orçamento.`,
  );

  const openExternal = (url: string) => {
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) window.location.assign(url);
  };

  const handleExternal = (event: MouseEvent<HTMLAnchorElement>, url: string) => {
    event.preventDefault();
    openExternal(url);
  };

  const scrollToForm = () => {
    const target = document.getElementById("formulario");
    if (!target) return;
    const headerOffset = 145;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
    window.setTimeout(() => {
      document.getElementById("lead-name")?.focus({ preventScroll: true });
    }, 650);
  };

  const set = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (ready) openExternal(leadUrl);
  };

  const field =
    "h-12 w-full rounded-xl border border-white/10 bg-white/[.07] px-4 text-sm text-white placeholder:text-zinc-400 outline-none transition focus:border-red-500 focus:bg-white/[.1]";

  return (
    <div className="min-h-screen bg-white text-zinc-950 antialiased">
      <button
        type="button"
        onClick={scrollToForm}
        aria-label="Solicitar orçamento"
        title="Solicitar orçamento"
        className="fixed bottom-6 right-6 z-[70] grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-2xl transition hover:scale-110 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300/40"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-[84px] max-w-[1380px] items-center justify-between px-5 lg:px-8">
          <a href="#inicio" aria-label="Fast Drywall início" className="shrink-0">
            <Brand />
          </a>
          <nav className="hidden items-center gap-10 text-[13px] font-bold text-zinc-600 lg:flex">
            <a href="#sobre" className="transition hover:text-red-600">Sobre</a>
            <a href="#servicos" className="transition hover:text-red-600">Soluções</a>
            <a href="#steel-frame" className="transition hover:text-red-600">Steel Frame</a>
            <a href="#avaliacoes" className="transition hover:text-red-600">Avaliações</a>
            <a href="#localizacao" className="transition hover:text-red-600">Localização</a>
          </nav>
          <div className="w-10 lg:w-[250px]" aria-hidden="true" />
        </div>
        <div className="border-t border-zinc-100 lg:hidden">
          <nav aria-label="Navegação principal" className="mx-auto flex max-w-[1380px] items-center gap-6 overflow-x-auto px-5 py-3 text-[12px] font-black text-zinc-600 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <a href="#sobre" className="shrink-0 transition hover:text-red-600">Sobre</a>
            <a href="#servicos" className="shrink-0 transition hover:text-red-600">Soluções</a>
            <a href="#steel-frame" className="shrink-0 transition hover:text-red-600">Steel Frame</a>
            <a href="#avaliacoes" className="shrink-0 transition hover:text-red-600">Avaliações</a>
            <a href="#localizacao" className="shrink-0 transition hover:text-red-600">Localização</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative min-h-[720px] overflow-hidden bg-black text-white">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Profissional trabalhando com sistema de construção a seco" className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.98)_0%,rgba(0,0,0,.94)_34%,rgba(0,0,0,.62)_55%,rgba(0,0,0,.18)_78%,rgba(82,5,8,.34)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 to-transparent" />
          </div>
          <div className="relative mx-auto flex min-h-[720px] max-w-[1380px] items-center px-5 py-16 lg:px-8">
            <div className="max-w-[720px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 backdrop-blur-md">
                <span className="text-red-400">✦</span>
                <span className="text-[12px] font-bold text-zinc-200">Especialistas em construção a seco</span>
              </div>
              <h1 className="mt-7 text-[2.85rem] font-black leading-[.95] tracking-[-.05em] sm:text-[3.8rem] lg:text-[4.6rem]">
                Construir com<br />inteligência é<br />construir com a<br />
                <span className="text-red-500">Fast Drywall.</span>
              </h1>
              <p className="mt-7 max-w-[610px] text-[17px] leading-8 text-zinc-200">
                Materiais e soluções em drywall, steel frame, gesso, forros, placas, perfis e acessórios para uma obra mais rápida, limpa, organizada e com excelente acabamento.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button type="button" onClick={scrollToForm} className="inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3.5 text-sm font-black text-white shadow-xl shadow-red-600/20 transition hover:bg-red-500">
                  Solicitar orçamento <ArrowRight className="h-4 w-4" />
                </button>
                <a href="#servicos" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-7 py-3.5 text-sm font-black text-white backdrop-blur transition hover:bg-white/10">
                  Ver soluções <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-5 lg:grid-cols-2 lg:px-8">
            <div className="flex w-full items-center justify-center overflow-hidden rounded-3xl bg-white shadow-2xl lg:min-h-[560px]">
              <img src={storeImg} alt="Fachada da Fast Drywall em Vitória da Conquista" className="block h-auto max-h-[560px] w-full object-contain" />
            </div>
            <div className="flex h-full flex-col justify-center">
              <p className="text-xs font-black uppercase tracking-[.25em] text-red-600">Quem somos</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">Sua obra começa com a escolha certa.</h2>
              <p className="mt-6 text-base leading-8 text-zinc-600">
                A Fast Drywall &amp; Steel Frame VCA é uma loja especializada em materiais e soluções para construção a seco em Vitória da Conquista. Trabalhamos com drywall, steel frame, placas, gesso, forros, perfis e acessórios, com atendimento especializado, variedade de produtos e suporte para sua obra.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, title: "Produtos de qualidade" },
                  { icon: Package, title: "Estoque completo" },
                  { icon: Users, title: "Equipe especializada" },
                  { icon: MessageCircle, title: "Suporte para sua obra" },
                ].map(({ icon: Icon, title }) => (
                  <div key={title} className="rounded-2xl border border-zinc-200 bg-white/90 p-5 transition hover:-translate-y-1 hover:shadow-xl">
                    <Icon className="h-6 w-6 text-red-600" />
                    <p className="mt-4 font-black">{title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="border-y border-zinc-200 bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[.25em] text-red-600">Soluções para sua obra</p>
              <h2 className="mt-3 text-4xl font-black">Tudo que sua obra precisa em construção a seco.</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {solutions.map(({ title, image, text }) => (
                <article key={title} className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-52 overflow-hidden">
                    <img src={image} alt={`${title} em Vitória da Conquista`} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="steel-frame" className="relative overflow-hidden bg-[linear-gradient(135deg,#8f0d14_0%,#c9141c_48%,#ef2931_100%)] py-20 text-white lg:py-24">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[.28em] text-red-100">Steel Frame</p>
              <h2 className="mt-3 max-w-[620px] text-4xl font-black leading-tight sm:text-5xl">Inovação que valoriza seu projeto.</h2>
              <p className="mt-5 max-w-[650px] text-base leading-8 text-red-50/90">Tecnologia construtiva para quem busca eficiência, precisão, organização e desempenho do início ao acabamento.</p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {steelBenefits.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[.14]">
                    <div className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-red-600 shadow-lg"><Icon className="h-5 w-5" strokeWidth={2.2} /></span>
                      <div>
                        <h3 className="font-black">{title}</h3>
                        <p className="mt-1 text-sm leading-6 text-red-50/85">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="formulario" className="scroll-mt-40 rounded-[28px] border border-white/10 bg-zinc-950/95 p-6 shadow-[0_28px_90px_rgba(0,0,0,.34)] backdrop-blur-xl lg:scroll-mt-28 lg:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[.28em] text-red-400">SOLICITE SEU ORÇAMENTO</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight sm:text-[1.9rem]">Fale com a equipe da Fast Drywall.</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">Preencha seus dados e continue para o WhatsApp.</p>
                </div>
                <WhatsAppMark />
              </div>

              <form onSubmit={submit} className="mt-6 space-y-3.5">
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
                <select required value={form.interest} onChange={(e) => set("interest", e.target.value)} className={field}>
                  <option value="" className="text-zinc-900">Selecione seu interesse</option>
                  <option className="text-zinc-900">Drywall</option>
                  <option className="text-zinc-900">Steel Frame</option>
                  <option className="text-zinc-900">Gesso e forros</option>
                  <option className="text-zinc-900">Perfis e acessórios</option>
                  <option className="text-zinc-900">Orçamento completo</option>
                </select>

                <button type="submit" disabled={!ready} className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-black transition ${ready ? "bg-emerald-500 text-white hover:bg-emerald-400" : "cursor-not-allowed bg-white/10 text-zinc-500"}`}>
                  <MessageCircle className="h-4 w-4" /> Continuar para o WhatsApp <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-center text-[10px] leading-5 text-zinc-500">Seus dados são usados para atendimento e continuidade do seu orçamento.</p>
              </form>
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[.25em] text-red-600">Reputação e confiança</p>
              <h2 className="mt-3 text-4xl font-black">Clientes satisfeitos e atendimento que gera confiança.</h2>
              <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-red-600" />
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {reviews.map((r) => (
                <article key={r.name} className="flex min-h-[250px] h-full flex-col rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex gap-1 text-amber-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                  <p className="mt-5 text-[17px] font-bold leading-8">“{r.text}”</p>
                  <div className="mt-auto flex items-center gap-4 pt-7"><img src={r.image} alt={r.name} className="h-12 w-12 rounded-full object-cover" /><p className="font-black">{r.name}</p></div>
                </article>
              ))}
              <a href={maps} onClick={(event) => handleExternal(event, maps)} className="flex min-h-[250px] h-full flex-col rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl" aria-label="Ver mais avaliações no Google">
                <div className="flex gap-1 text-amber-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-5 text-[17px] font-bold leading-8">“Veja mais avaliações e experiências de clientes no Google.”</p>
                <div className="mt-auto flex items-center gap-4 pt-7"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-zinc-200 text-zinc-700 ring-2 ring-white shadow-sm"><User className="h-6 w-6" strokeWidth={2.2} /></span><p className="font-black">Clientes Fast</p></div>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-red-600 py-14 text-white">
          <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
            <h2 className="text-3xl font-black">Peça seu orçamento sem compromisso.</h2>
            <p className="mt-2 text-red-50">Encontre os materiais certos para sua obra com atendimento especializado.</p>
            <button type="button" onClick={scrollToForm} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-red-600 shadow-xl transition hover:-translate-y-0.5 hover:bg-zinc-50">
              Solicitar orçamento <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        <section id="localizacao" className="bg-zinc-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[.78fr_1.22fr] lg:items-stretch lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-white/[.04] p-7 shadow-2xl shadow-black/20 lg:p-8">
              <p className="text-xs font-black uppercase tracking-[.28em] text-red-400">Onde estamos</p>
              <h2 className="mt-3 text-4xl font-black">Visite a Fast Drywall.</h2>
              <div className="mt-8 flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-red-600/15 text-red-400"><MapPin className="h-5 w-5" /></span>
                <p className="text-sm leading-7 text-zinc-300">
                  Av. Luís Eduardo Magalhães, Quadra 05<br />
                  Recreio · Vitória da Conquista - BA<br />
                  CEP 45020-282
                </p>
              </div>
              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-red-600/15 text-red-400"><Phone className="h-5 w-5" /></span>
                <p className="text-base font-black text-white">(77) 98856-0246</p>
              </div>
              <a href={maps} onClick={(event) => handleExternal(event, maps)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-5 py-3 text-sm font-black transition hover:border-red-500 hover:text-red-400">
                Abrir no Google Maps <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <iframe title="Mapa da Fast Drywall em Vitória da Conquista" src="https://www.google.com/maps?q=Av.+Lu%C3%ADs+Eduardo+Magalh%C3%A3es,+Quadra+05,+Recreio,+Vitória+da+Conquista+-+BA&output=embed" className="h-[460px] w-full rounded-3xl border-0 shadow-2xl shadow-black/20" loading="lazy" />
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-10 text-zinc-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a href="#inicio" aria-label="Voltar ao início" className="shrink-0"><Brand footer /></a>
          <div className="flex items-center gap-3">
            <a href={instagram} onClick={(event) => handleExternal(event, instagram)} aria-label="Instagram" className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-violet-600 via-pink-500 to-orange-400 text-white shadow-lg transition hover:-translate-y-1"><Instagram className="h-5 w-5" /></a>
            <a href={facebook} onClick={(event) => handleExternal(event, facebook)} aria-label="Facebook" className="grid h-12 w-12 place-items-center rounded-full bg-[#1877F2] text-white shadow-lg transition hover:-translate-y-1"><Facebook className="h-5 w-5" /></a>
            <button type="button" onClick={scrollToForm} aria-label="WhatsApp" className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:-translate-y-1"><Phone className="h-5 w-5 -rotate-12" strokeWidth={2.4} /></button>
            <a href={maps} onClick={(event) => handleExternal(event, maps)} aria-label="Google Maps" className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-white shadow-lg ring-1 ring-zinc-200 transition hover:-translate-y-1">
              <span className="absolute left-0 top-0 h-1/2 w-1/2 bg-[#34A853]" /><span className="absolute right-0 top-0 h-1/2 w-1/2 bg-[#4285F4]" /><span className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-[#FBBC05]" /><span className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-[#EA4335]" /><MapPin className="relative z-10 h-5 w-5 fill-white text-white" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
