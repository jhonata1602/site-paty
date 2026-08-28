import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ComponentType } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Facebook,
  Gauge,
  Hammer,
  Home,
  Instagram,
  Layers3,
  MapPin,
  MessageCircle,
  Package,
  PackageCheck,
  Phone,
  Recycle,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Thermometer,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";

import solDrywall from "@/assets/sol-drywall.jpg";
import solSteel from "@/assets/sol-steelframe.jpg";
import solForro from "@/assets/sol-forro.jpg";
import solPerfis from "@/assets/sol-perfis.jpg";
import prodPlacas from "@/assets/prod-placas.jpg";
import prodPerfisSf from "@/assets/prod-perfis-sf.jpg";
import prodGesso from "@/assets/prod-gesso.jpg";
import prodAcessorios from "@/assets/prod-acessorios.jpg";
import storeImg from "@/assets/fast-store-premium.jpg";
import av1 from "@/assets/av-1.jpg";
import av2 from "@/assets/av-2.jpg";
import av3 from "@/assets/av-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fast Drywall & Steel Frame VCA | Drywall e Steel Frame em Vitória da Conquista" },
      {
        name: "description",
        content:
          "Drywall, steel frame, gesso, forros, perfis e acessórios em Vitória da Conquista - BA. Atendimento especializado e orçamento rápido pelo WhatsApp.",
      },
      { property: "og:title", content: "Fast Drywall & Steel Frame VCA" },
      {
        property: "og:description",
        content:
          "Soluções completas em construção a seco em Vitória da Conquista - BA. Peça seu orçamento pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const waPhone = "5577988560246";
const maps =
  "https://www.google.com/maps/search/?api=1&query=Fast+Drywall+Steel+Frame+Vit%C3%B3ria+da+Conquista";
const googleReviews =
  "https://www.google.com/maps/search/?api=1&query=Fast+Drywall+Steel+Frame+Vit%C3%B3ria+da+Conquista";
const heroImage = "https://www.westhollywooddrywallservices.com/weho-drywall-hero.png";

const wa = (message: string) =>
  `https://wa.me/${waPhone}?text=${encodeURIComponent(`Olá, Fast Drywall! ${message}`)}`;

const solutions = [
  {
    icon: Layers3,
    title: "Drywall",
    image: solDrywall,
    text: "Paredes, divisórias e revestimentos com instalação rápida, obra limpa e acabamento profissional.",
    bullets: ["Instalação até 4x mais rápida", "Menos entulho e sujeira", "Pronto para pintura"],
  },
  {
    icon: Building2,
    title: "Steel Frame",
    image: solSteel,
    text: "Estruturas em aço galvanizado para obras leves, resistentes, precisas e altamente produtivas.",
    bullets: ["Obra até 40% mais rápida", "Estrutura leve e resistente", "Aço 100% reciclável"],
  },
  {
    icon: Home,
    title: "Gesso, forros e placas",
    image: solForro,
    text: "Tetos, rebaixamentos, sancas e acabamentos internos com excelente padrão visual.",
    bullets: ["Forros e rebaixamentos", "Sancas e acabamentos", "Conforto térmico e acústico"],
  },
  {
    icon: Wrench,
    title: "Perfis e acessórios",
    image: solPerfis,
    text: "Guias, montantes, parafusos, fitas, massas e acessórios para a montagem completa do sistema.",
    bullets: ["Linha completa", "Mais segurança na montagem", "Pronta entrega"],
  },
];

const products = [
  {
    title: "Placas de Drywall",
    image: prodPlacas,
    text: "Placas standard, RU e RF para paredes, divisórias e forros.",
  },
  {
    title: "Steel Frame",
    image: prodPerfisSf,
    text: "Perfis galvanizados para estruturas leves e construção a seco.",
  },
  {
    title: "Forros e Gesso",
    image: prodGesso,
    text: "Materiais para teto, rebaixamento e acabamento dos ambientes.",
  },
  {
    title: "Perfis e Acessórios",
    image: prodAcessorios,
    text: "Parafusos, fitas, cantoneiras, massas e ferramentas de montagem.",
  },
];

const benefits: [ComponentType<{ className?: string }>, string, string][] = [
  [Clock3, "Instalação até 4x mais rápida", "Menos etapas e muito mais produtividade na execução."],
  [Gauge, "Obra até 40% mais rápida", "Cronograma reduzido do início ao acabamento."],
  [Hammer, "Obra limpa e organizada", "Menos processos úmidos, entulho e retrabalho."],
  [PackageCheck, "Menos desperdício", "Materiais dimensionados e montagem previsível."],
  [Wallet, "Mais economia", "Redução de tempo de obra e de mão de obra."],
  [Sparkles, "Acabamento liso e pronto", "Superfícies alinhadas e prontas para pintura."],
  [Ruler, "Estrutura leve e resistente", "Alta precisão dimensional em cada montagem."],
  [Recycle, "Aço 100% reciclável", "Construção mais sustentável e responsável."],
  [Thermometer, "Conforto térmico e acústico", "Melhor desempenho e bem-estar nos ambientes."],
];

const reviews = [
  {
    name: "Marcos A.",
    role: "Cliente Fast",
    image: av1,
    text: "O melhor de Conquista! Atendimento rápido e produtos de qualidade.",
  },
  {
    name: "Renata L.",
    role: "Arquiteta",
    image: av2,
    text: "Além do ótimo atendimento, a loja possui preços excelentes.",
  },
  {
    name: "Diego S.",
    role: "Construtor",
    image: av3,
    text: "Empresa boa, ótima qualidade nos materiais e equipe exemplar.",
  },
];

const steps = [
  ["01", "Fale com a Fast", "Chame nossa equipe no WhatsApp."],
  ["02", "Informe sua necessidade", "Conte o que sua obra precisa."],
  ["03", "Receba orientação", "Indicamos a melhor solução técnica."],
  ["04", "Solicite seu orçamento", "Receba valores sem compromisso."],
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 shrink-0 place-items-center rotate-45 rounded-md border border-red-400/60 bg-gradient-to-br from-red-500 to-red-800 shadow-lg shadow-red-900/40">
        <span className="-rotate-45 text-lg font-black text-white">F</span>
      </div>
      <div className="leading-none">
        <div
          className={`font-black tracking-[-.05em] text-white ${compact ? "text-xl" : "text-2xl"}`}
        >
          FAST
        </div>
        <div className="mt-1 text-[9px] font-black uppercase tracking-[.18em] text-red-500">
          Drywall &amp; Steel Frame VCA
        </div>
      </div>
    </div>
  );
}

function Tag({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p
      className={`text-[11px] font-black uppercase tracking-[.28em] ${light ? "text-red-400" : "text-red-600"}`}
    >
      {children}
    </p>
  );
}

function SectionHead({
  tag,
  title,
  subtitle,
  light = false,
}: {
  tag: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Tag light={light}>{tag}</Tag>
      <h2
        className={`mt-3 text-3xl font-black leading-[1.05] tracking-[-.035em] sm:text-4xl ${light ? "text-white" : "text-zinc-950"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-7 ${light ? "text-zinc-400" : "text-zinc-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function FloatingWhats() {
  return (
    <a
      href={wa("Quero solicitar um orçamento.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl shadow-red-900/40 transition-all duration-300 hover:scale-110 hover:bg-emerald-500 active:bg-emerald-600 lg:h-16 lg:w-16"
    >
      <MessageCircle className="h-6 w-6 lg:h-7 lg:w-7" />
    </a>
  );
}

function Index() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const ready =
    form.name.trim().length > 1 &&
    emailOk &&
    form.phone.trim().length >= 8 &&
    form.interest.length > 1;
  const leadWhatsapp = wa(
    `Meu nome é ${form.name}. E-mail: ${form.email}. WhatsApp: ${form.phone}. Interesse: ${form.interest}.${form.message ? ` Detalhes: ${form.message}.` : ""} Quero solicitar um orçamento.`,
  );
  const set = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (ready) window.open(leadWhatsapp, "_blank", "noopener,noreferrer");
  };

  const field =
    "h-12 w-full rounded-xl border border-white/10 bg-white/[.06] px-4 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-red-500 focus:bg-white/[.09]";

  return (
    <div className="min-h-screen bg-white text-zinc-950 antialiased">
      <FloatingWhats />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" className="transition hover:opacity-90">
            <Brand />
          </a>
          <nav className="hidden items-center gap-8 text-[13px] font-bold text-zinc-300 lg:flex">
            {[
              ["Sobre", "#sobre"],
              ["Soluções", "#servicos"],
              ["Produtos", "#produtos"],
              ["Avaliações", "#avaliacoes"],
              ["Localização", "#localizacao"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="relative py-1 transition hover:text-white">
                <span className="after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-red-500 after:transition-transform after:duration-300 hover:after:scale-x-100">
                  {label}
                </span>
              </a>
            ))}
          </nav>
          <a
            href="#formulario"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-red-600 px-5 text-xs font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 active:bg-red-700"
          >
            Solicitar orçamento
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden bg-zinc-950 text-white">
          <img
            src={heroImage}
            alt="Profissionais instalando placas de drywall"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(9,9,11,.97)_0%,rgba(9,9,11,.9)_45%,rgba(60,4,4,.72)_100%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.85fr] lg:px-8 lg:py-28">
            <div className="max-w-xl">
              <Tag light>Construção a seco em Vitória da Conquista</Tag>
              <h1 className="mt-5 text-[2.75rem] font-black leading-[.95] tracking-[-.05em] sm:text-6xl lg:text-[4.25rem]">
                Construir com inteligência é construir com a{" "}
                <span className="text-red-500">Fast Drywall.</span>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-8 text-zinc-300">
                Soluções em drywall, steel frame, gesso, forro e acessórios para uma obra mais
                rápida, limpa, organizada e com excelente acabamento.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#formulario"
                  className="group inline-flex h-14 items-center gap-2 rounded-full bg-red-600 px-8 text-base font-black text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500"
                >
                  Solicitar orçamento
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#servicos"
                  className="group inline-flex h-14 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 text-base font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-500"
                >
                  Ver soluções
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div
              id="formulario"
              className="rounded-3xl border border-white/10 bg-zinc-900/70 p-7 shadow-2xl shadow-black/50 backdrop-blur-xl"
            >
              <h2 className="text-2xl font-black leading-tight tracking-[-.03em]">
                Peça seu orçamento agora.
              </h2>
              <p className="mt-2 text-xs leading-5 text-zinc-400">
                Preencha os dados e siga direto para o WhatsApp.
              </p>
              <form onSubmit={submit} className="mt-6 space-y-3.5">
                <input
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Seu nome"
                  className={field}
                />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="Seu Gmail / e-mail"
                  className={field}
                />
                <input
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="Seu WhatsApp"
                  className={field}
                />
                <select
                  value={form.interest}
                  onChange={(e) => set("interest", e.target.value)}
                  className={field}
                >
                  <option value="" className="text-zinc-900">
                    Selecione seu interesse
                  </option>
                  <option className="text-zinc-900">Drywall</option>
                  <option className="text-zinc-900">Steel Frame</option>
                  <option className="text-zinc-900">Gesso e forros</option>
                  <option className="text-zinc-900">Perfis e acessórios</option>
                  <option className="text-zinc-900">Orçamento completo</option>
                </select>
                <textarea
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  placeholder="Mensagem (opcional)"
                  className="min-h-[96px] w-full rounded-xl border border-white/10 bg-white/[.06] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-red-500 focus:bg-white/[.09]"
                />
                <button
                  disabled={!ready}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-black transition-all duration-300 ${
                    ready
                      ? "bg-red-600 text-white shadow-lg shadow-red-600/25 hover:-translate-y-0.5 hover:bg-emerald-500 active:bg-emerald-600"
                      : "cursor-not-allowed bg-white/10 text-zinc-500"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" /> Ir para o WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-zinc-100 shadow-2xl shadow-zinc-900/10 ring-1 ring-zinc-200">
              <img
                src={storeImg}
                alt="Fachada da loja Fast Drywall & Steel Frame VCA"
                loading="lazy"
                width={1280}
                height={1024}
                className="h-[540px] w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-zinc-950/85 p-6 text-white backdrop-blur-xl">
                <Tag light>Loja física</Tag>
                <h3 className="mt-2 text-2xl font-black tracking-[-.03em]">
                  Fast Drywall &amp; Steel Frame VCA
                </h3>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-300">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" /> Vitória da Conquista - BA
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-red-500" /> (77) 98856-0246
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Drywall", "Steel Frame", "Gesso", "Acessórios"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Tag>Quem somos</Tag>
              <h2 className="mt-3 text-4xl font-black leading-[1] tracking-[-.045em] sm:text-5xl">
                Sua obra começa com a escolha certa.
              </h2>
              <p className="mt-6 text-base leading-8 text-zinc-600">
                A Fast Drywall &amp; Steel Frame VCA é referência em soluções para construção a seco
                em Vitória da Conquista. Trabalhamos com drywall, steel frame, placas, gesso, forros
                e acessórios, com atendimento especializado, variedade de produtos e suporte para
                ajudar sua obra a ganhar agilidade, organização e acabamento profissional.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {(
                  [
                    [ShieldCheck, "Produtos de qualidade"],
                    [Package, "Estoque completo"],
                    [Users, "Equipe especializada"],
                    [MessageCircle, "Suporte para sua obra"],
                  ] as [ComponentType<{ className?: string }>, string][]
                ).map(([Icon, title]) => (
                  <div
                    key={title}
                    className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-black tracking-[-.02em]">{title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOLUÇÕES */}
        <section id="servicos" className="border-y border-zinc-200 bg-zinc-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHead
              tag="Soluções para sua obra"
              title="Tudo que sua obra precisa em construção a seco."
              subtitle="Materiais, orientação técnica e linha completa para drywall, steel frame, gesso e acabamentos."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {solutions.map(({ icon: Icon, title, image, text, bullets }) => (
                <article
                  key={title}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-2xl hover:shadow-zinc-900/10"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      width={1280}
                      height={860}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/45 to-transparent" />
                    <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-red-600 text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-black tracking-[-.03em]">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p>
                    <div className="mt-5 space-y-2.5">
                      {bullets.map((b) => (
                        <div key={b} className="flex gap-2 text-xs font-semibold text-zinc-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHead
              tag="Por que construir a seco?"
              title="Mais velocidade, menos desperdício, melhor acabamento."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(([Icon, title, text]) => (
                <div
                  key={title}
                  className="group flex gap-4 rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-zinc-900/5"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black leading-snug tracking-[-.02em]">{title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-zinc-500">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUTOS */}
        <section id="produtos" className="bg-zinc-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHead
              light
              tag="Linha de produtos"
              title="Materiais de qualidade, pronta entrega."
              subtitle="Consulte disponibilidade e valores direto com nossa equipe."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {products.map((p) => (
                <article
                  key={p.title}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[.04] transition-all duration-300 hover:-translate-y-1.5 hover:border-red-500/40 hover:bg-white/[.07]"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1280}
                      height={860}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-black tracking-[-.03em]">{p.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{p.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <SectionHead
              tag="Como solicitar seu orçamento"
              title="É rápido, fácil e sem compromisso."
            />
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map(([n, t, d], i) => (
                <div key={n} className="relative">
                  <div className="group h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-zinc-900/5">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-red-600 text-xs font-black text-white transition-colors duration-300 group-hover:bg-red-500">
                      {n}
                    </div>
                    <h3 className="mt-5 text-base font-black tracking-[-.02em]">{t}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{d}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-zinc-300 lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section id="avaliacoes" className="border-y border-zinc-200 bg-zinc-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHead
              tag="Reputação e confiança"
              title="Clientes satisfeitos e atendimento que gera confiança."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {reviews.map((r) => (
                <article
                  key={r.name}
                  className="flex flex-col rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5"
                >
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 flex-1 text-lg font-bold leading-8 tracking-[-.02em]">
                    “{r.text}”
                  </p>
                  <div className="mt-6 flex items-center gap-4 border-t border-zinc-100 pt-6">
                    <img
                      src={r.image}
                      alt={r.name}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-red-100"
                    />
                    <div>
                      <p className="text-sm font-black">{r.name}</p>
                      <p className="text-xs text-zinc-500">{r.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href={googleReviews}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 text-sm font-black text-zinc-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-300 hover:text-red-600"
              >
                <Star className="h-4 w-4" /> Ver mais avaliações no Google
              </a>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden bg-red-600 py-16 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.16),transparent_55%)]" />
          <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center lg:flex-row lg:px-8 lg:text-left">
            <div>
              <h2 className="text-3xl font-black leading-tight tracking-[-.04em] sm:text-4xl">
                Peça seu orçamento sem compromisso.
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-red-50">
                Fale agora com nossa equipe e receba as melhores soluções para sua obra.
              </p>
            </div>
            <a
              href="#formulario"
              className="group inline-flex h-16 shrink-0 items-center gap-3 rounded-full bg-white px-9 text-base font-black text-red-600 shadow-2xl shadow-red-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:text-white"
            >
              Ir para o formulário
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="bg-zinc-950 py-20 text-white lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div>
              <Tag light>Onde estamos</Tag>
              <h2 className="mt-3 text-4xl font-black leading-[1] tracking-[-.04em]">
                Visite a Fast Drywall.
              </h2>
              <div className="mt-8 space-y-4">
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <p className="text-sm leading-7 text-zinc-300">
                    Av. Luís Eduardo Magalhães, Quadra 05
                    <br />
                    Recreio · Vitória da Conquista - BA
                    <br />
                    CEP 45020-282
                  </p>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-5">
                  <Phone className="h-5 w-5 shrink-0 text-red-500" />
                  <p className="text-sm font-bold text-zinc-200">(77) 98856-0246</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-500"
                >
                  <MapPin className="h-4 w-4" /> Abrir no Google Maps
                </a>
              </div>
            </div>
            <iframe
              title="Mapa Fast Drywall"
              src="https://www.google.com/maps?q=-14.870544,-40.8411918&z=17&output=embed"
              className="h-[460px] w-full rounded-3xl border border-white/10"
              loading="lazy"
            />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black py-14 text-zinc-400">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-4 lg:px-8">
          <div>
            <Brand />
            <p className="mt-5 max-w-xs text-sm leading-7">
              Soluções completas em drywall, steel frame, gesso, forros, perfis e acessórios em
              Vitória da Conquista - BA.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-[#1877F2] text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={maps}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-500"
                aria-label="Google Maps"
              >
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[.2em] text-white">Navegação</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["Sobre", "#sobre"],
                ["Soluções", "#servicos"],
                ["Produtos", "#produtos"],
                ["Avaliações", "#avaliacoes"],
                ["Localização", "#localizacao"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-red-400">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[.2em] text-white">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" /> (77) 98856-0246
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                Av. Luís Eduardo Magalhães, Q. 05 · Recreio, Vitória da Conquista - BA
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[.2em] text-white">Orçamento</h3>
            <p className="mt-5 text-sm leading-7">
              Atendimento rápido e sem compromisso pelo WhatsApp.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-6 text-xs lg:px-8">
          © 2026 Fast Drywall &amp; Steel Frame VCA · Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
