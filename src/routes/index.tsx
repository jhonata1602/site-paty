import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Building2,
  Facebook,
  Home,
  Instagram,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  ShieldCheck,
  Star,
  User,
  Users,
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
import fastLogo from "@/assets/fast-logo-oficial.svg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fast Drywall & Steel Frame VCA | Vitória da Conquista" },
      {
        name: "description",
        content:
          "Drywall, Steel Frame, gesso, forros, placas e acessórios em Vitória da Conquista. Solicite seu orçamento pelo WhatsApp.",
      },
    ],
  }),
});

const phone = "5577988560246";
const heroImage = "https://www.westhollywooddrywallservices.com/weho-drywall-hero.png";
const maps =
  "https://www.google.com/maps/search/?api=1&query=Fast+Drywall+Steel+Frame+Vit%C3%B3ria+da+Conquista";
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
    image: solSteel,
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

const products = [
  { title: "Placas de Drywall", image: prodPlacas, interest: "Drywall" },
  { title: "Steel Frame", image: prodPerfisSf, interest: "Steel Frame" },
  { title: "Forros e Gesso", image: prodGesso, interest: "Gesso e forros" },
  { title: "Perfis e Acessórios", image: prodAcessorios, interest: "Perfis e acessórios" },
];

const reviews = [
  { name: "Marcos A.", image: av1, text: "O melhor de Conquista! Atendimento rápido e produtos de qualidade." },
  { name: "Renata L.", image: av2, text: "Além do ótimo atendimento, a loja possui preços excelentes." },
  { name: "Diego S.", image: av3, text: "Empresa boa, ótima qualidade nos materiais e equipe exemplar." },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <img
      src={fastLogo}
      alt="Fast Drywall & Steel Frame"
      className={`${footer ? "h-14 sm:h-16" : "h-12 sm:h-14"} w-auto object-contain`}
    />
  );
}

function WhatsAppMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white shadow-lg shadow-red-950/20">
      <Phone className={`${className} -rotate-12`} strokeWidth={2.5} />
      <span className="absolute -bottom-1 left-1 h-3 w-3 rotate-45 bg-red-500" />
    </span>
  );
}

function Index() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const ready =
    form.name.trim().length > 1 &&
    emailOk &&
    form.phone.trim().length >= 8 &&
    form.interest.length > 1;

  const leadUrl = wa(
    `Meu nome é ${form.name}. E-mail: ${form.email}. WhatsApp: ${form.phone}. Interesse: ${form.interest}.${
      form.message ? ` Detalhes: ${form.message}.` : ""
    } Quero solicitar um orçamento.`,
  );

  const set = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (ready) window.open(leadUrl, "_blank", "noopener,noreferrer");
  };

  const selectProduct = (interest: string) => {
    set("interest", interest);
  };

  const field =
    "h-11 w-full rounded-lg border border-white/10 bg-white/[.07] px-4 text-sm text-white placeholder:text-zinc-400 outline-none transition focus:border-red-500 focus:bg-white/[.1]";

  return (
    <div className="min-h-screen bg-white text-zinc-950 antialiased">
      <a
        href={wa("Quero solicitar um orçamento.")}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-[70] grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-2xl transition hover:scale-110 hover:bg-emerald-400"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-[84px] max-w-[1380px] items-center justify-between px-5 lg:px-8">
          <a href="#inicio" aria-label="Fast Drywall início" className="shrink-0">
            <Brand />
          </a>
          <nav className="hidden items-center gap-10 text-[13px] font-bold text-zinc-600 lg:flex">
            <a href="#sobre" className="transition hover:text-red-600">Sobre</a>
            <a href="#servicos" className="transition hover:text-red-600">Soluções</a>
            <a href="#produtos" className="transition hover:text-red-600">Produtos</a>
            <a href="#avaliacoes" className="transition hover:text-red-600">Avaliações</a>
            <a href="#localizacao" className="transition hover:text-red-600">Localização</a>
          </nav>
          <div className="w-10 lg:w-[250px]" aria-hidden="true" />
        </div>
      </header>

      <main>
        <section id="inicio" className="relative min-h-[650px] overflow-hidden bg-black text-white">
          <img src={heroImage} alt="Profissionais instalando placas de drywall" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.97)_0%,rgba(0,0,0,.88)_36%,rgba(0,0,0,.32)_68%,rgba(72,6,6,.72)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />

          <div className="relative mx-auto grid min-h-[650px] max-w-[1380px] items-center gap-12 px-5 py-12 lg:grid-cols-[1fr_.82fr] lg:px-8">
            <div className="max-w-[590px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 backdrop-blur-md">
                <span className="text-red-400">✦</span>
                <span className="text-[12px] font-bold text-zinc-200">Construção a seco em Vitória da Conquista</span>
              </div>
              <h1 className="mt-7 text-[3.1rem] font-black leading-[.93] tracking-[-.055em] sm:text-[4rem] lg:text-[4.5rem]">
                Construir com<br /> inteligência é<br /> construir com a<br /> <span className="text-red-500">Fast Drywall.</span>
              </h1>
              <p className="mt-7 max-w-[530px] text-[17px] leading-8 text-zinc-200">
                Soluções em drywall, steel frame, gesso, forro e acessórios para uma obra mais rápida, limpa, organizada e com excelente acabamento.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#formulario" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3.5 text-sm font-black text-white shadow-xl shadow-red-600/20 transition hover:bg-red-500">
                  Falar com a equipe <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#servicos" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-7 py-3.5 text-sm font-black text-white backdrop-blur transition hover:bg-white/10">
                  Ver soluções <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div id="formulario" className="relative ml-auto w-full max-w-[470px] scroll-mt-28 rounded-[24px] border border-white/10 bg-zinc-950/90 p-6 shadow-[0_25px_80px_rgba(0,0,0,.55)] backdrop-blur-xl lg:p-7">
              <div className="absolute right-6 top-6"><WhatsAppMark /></div>
              <p className="text-[11px] font-black uppercase tracking-[.28em] text-red-400">SOLICITE SEU ORÇAMENTO</p>
              <h2 className="mt-3 max-w-[340px] text-[1.72rem] font-black leading-[1.02] tracking-[-.035em]">Preencha os dados e siga para o WhatsApp.</h2>
              <p className="mt-2 text-[12px] text-zinc-400">Fale com nossa equipe e receba seu orçamento.</p>
              <form onSubmit={submit} className="mt-5 space-y-3">
                <div className="relative"><User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" /><input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Seu nome" className={`${field} pl-11`} /></div>
                <div className="relative"><Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" /><input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="Seu Gmail / e-mail" className={`${field} pl-11`} /></div>
                <div className="relative"><Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" /><input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="Seu WhatsApp" className={`${field} pl-11`} /></div>
                <select value={form.interest} onChange={(e) => set("interest", e.target.value)} className={field}>
                  <option value="" className="text-zinc-900">Selecione seu interesse</option>
                  <option className="text-zinc-900">Drywall</option>
                  <option className="text-zinc-900">Steel Frame</option>
                  <option className="text-zinc-900">Gesso e forros</option>
                  <option className="text-zinc-900">Perfis e acessórios</option>
                  <option className="text-zinc-900">Orçamento completo</option>
                </select>
                <textarea value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Descreva rapidamente o que você precisa (opcional)" className="min-h-[88px] w-full rounded-lg border border-white/10 bg-white/[.07] px-4 py-3 text-sm text-white placeholder:text-zinc-400 outline-none transition focus:border-red-500" />
                {ready ? (
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-3.5 text-sm font-black text-white transition hover:bg-emerald-400">
                    <MessageCircle className="h-4 w-4" /> Ir para o WhatsApp <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <div className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 py-3.5 text-sm font-black text-zinc-500">
                    <MessageCircle className="h-4 w-4" /> Preencha os campos obrigatórios
                  </div>
                )}
                <p className="text-center text-[10px] text-zinc-500">O botão do WhatsApp aparecerá quando preencher todos os campos obrigatórios.</p>
              </form>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-5 lg:grid-cols-2 lg:px-8">
            <div className="relative min-h-[560px] overflow-hidden rounded-3xl shadow-2xl">
              <img src={storeImg} alt="Fachada da Fast Drywall" className="absolute inset-0 h-full w-full object-cover object-[center_42%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/80 p-5 text-white backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[.25em] text-red-400">Loja física</p>
                <h3 className="mt-2 text-2xl font-black">Fast Drywall &amp; Steel Frame VCA</h3>
                <p className="mt-2 text-sm text-zinc-300">Vitória da Conquista - BA · (77) 98856-0246</p>
              </div>
            </div>
            <div className="flex h-full flex-col justify-center">
              <p className="text-xs font-black uppercase tracking-[.25em] text-red-600">Quem somos</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">Sua obra começa com a escolha certa.</h2>
              <p className="mt-6 text-base leading-8 text-zinc-600">A Fast Drywall &amp; Steel Frame VCA é referência em soluções para construção a seco em Vitória da Conquista. Trabalhamos com drywall, steel frame, placas, gesso, forros e acessórios, com atendimento especializado, variedade de produtos e suporte para sua obra.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, title: "Produtos de qualidade" },
                  { icon: Package, title: "Estoque completo" },
                  { icon: Users, title: "Equipe especializada" },
                  { icon: MessageCircle, title: "Suporte para sua obra" },
                ].map(({ icon: Icon, title }) => (
                  <div key={title} className="rounded-2xl border border-zinc-200 p-5 transition hover:-translate-y-1 hover:shadow-xl">
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
              {solutions.map(({ title, icon: Icon, image, text }) => (
                <article key={title} className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-52 overflow-hidden">
                    <img src={image} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-red-600 text-white"><Icon className="h-5 w-5" /></div>
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

        <section id="produtos" className="bg-[linear-gradient(135deg,#9f1018_0%,#d71920_55%,#f02a32_100%)] py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[.25em] text-red-100">Linha de produtos</p>
              <h2 className="mt-3 text-4xl font-black">Materiais de qualidade, pronta entrega.</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {products.map((p) => (
                <a
                  key={p.title}
                  href="#formulario"
                  onClick={() => selectProduct(p.interest)}
                  className="group overflow-hidden rounded-3xl border border-white/15 bg-zinc-950/90 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-2xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-red-600 shadow-lg transition group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="p-6"><h3 className="text-lg font-black">{p.title}</h3></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[.25em] text-red-600">Reputação e confiança</p>
              <h2 className="mt-3 text-4xl font-black">Clientes satisfeitos e atendimento que gera confiança.</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {reviews.map((r) => (
                <article key={r.name} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                  <div className="flex gap-1 text-amber-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                  <p className="mt-5 text-lg font-bold leading-8">“{r.text}”</p>
                  <div className="mt-6 flex items-center gap-4"><img src={r.image} alt={r.name} className="h-12 w-12 rounded-full object-cover" /><p className="font-black">{r.name}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-red-600 py-14 text-white">
          <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
            <h2 className="text-3xl font-black">Peça seu orçamento sem compromisso.</h2>
            <p className="mt-2 text-red-50">Preencha o formulário no início da página ou use o WhatsApp flutuante para falar com nossa equipe.</p>
          </div>
        </section>

        <section id="localizacao" className="bg-zinc-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[.25em] text-red-400">Onde estamos</p>
              <h2 className="mt-3 text-4xl font-black">Visite a Fast Drywall.</h2>
              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[.04] p-6">
                <MapPin className="h-5 w-5 text-red-500" />
                <p className="mt-3 text-sm leading-7 text-zinc-300">Av. Luís Eduardo Magalhães, Quadra 05<br />Recreio · Vitória da Conquista - BA<br />CEP 45020-282<br /><br />(77) 98856-0246</p>
              </div>
              <div className="mt-6">
                <a href={maps} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-sm font-black transition hover:border-red-500 hover:text-red-500">Abrir no Google Maps</a>
              </div>
            </div>
            <iframe title="Mapa Fast Drywall" src="https://www.google.com/maps?q=Av.+Lu%C3%ADs+Eduardo+Magalh%C3%A3es,+Quadra+05,+Recreio,+Vit%C3%B3ria+da+Conquista+-+BA&output=embed" className="h-[420px] w-full rounded-3xl border-0" loading="lazy" />
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-10 text-zinc-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a href="#inicio" aria-label="Voltar ao início" className="shrink-0">
            <Brand footer />
          </a>
          <p className="text-sm text-zinc-500">© 2026 Fast Drywall &amp; Steel Frame VCA</p>
          <div className="flex items-center gap-3">
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-violet-600 via-pink-500 to-orange-400 text-white shadow-lg transition hover:-translate-y-1"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-12 w-12 place-items-center rounded-full bg-[#1877F2] text-white shadow-lg transition hover:-translate-y-1"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={wa("Quero falar com a equipe.")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:-translate-y-1"
            >
              <Phone className="h-5 w-5 -rotate-12" strokeWidth={2.4} />
            </a>
            <a
              href={maps}
              target="_blank"
              rel="noreferrer"
              aria-label="Google Maps"
              className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-white shadow-lg ring-1 ring-zinc-200 transition hover:-translate-y-1"
            >
              <span className="absolute left-0 top-0 h-1/2 w-1/2 bg-[#34A853]" />
              <span className="absolute right-0 top-0 h-1/2 w-1/2 bg-[#4285F4]" />
              <span className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-[#FBBC05]" />
              <span className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-[#EA4335]" />
              <MapPin className="relative z-10 h-5 w-5 fill-white text-white" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
