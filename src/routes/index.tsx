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
  { title: "Placas de Drywall", image: prodPlacas },
  { title: "Perfis Steel Frame", image: prodPerfisSf },
  { title: "Forros e Gesso", image: prodGesso },
  { title: "Perfis e Acessórios", image: prodAcessorios },
];

const reviews = [
  { name: "Marcos A.", image: av1, text: "O melhor de Conquista! Atendimento rápido e produtos de qualidade." },
  { name: "Renata L.", image: av2, text: "Além do ótimo atendimento, a loja possui preços excelentes." },
  { name: "Diego S.", image: av3, text: "Empresa boa, ótima qualidade nos materiais e equipe exemplar." },
];

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 rotate-45 place-items-center rounded-md border border-red-400/60 bg-gradient-to-br from-red-500 to-red-800 shadow-lg shadow-red-950/50">
        <span className="-rotate-45 text-lg font-black text-white">F</span>
      </div>
      <div className="leading-none">
        <div className="text-2xl font-black tracking-[-.05em] text-white">FAST</div>
        <div className="mt-1 text-[9px] font-black uppercase tracking-[.16em] text-red-500">
          Drywall &amp; Steel Frame VCA
        </div>
      </div>
    </div>
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

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between px-5 lg:px-8">
          <a href="#inicio"><Brand /></a>
          <nav className="hidden items-center gap-10 text-[13px] font-bold text-zinc-300 lg:flex">
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#servicos" className="hover:text-white">Soluções</a>
            <a href="#produtos" className="hover:text-white">Produtos</a>
            <a href="#avaliacoes" className="hover:text-white">Avaliações</a>
            <a href="#localizacao" className="hover:text-white">Localização</a>
          </nav>
          <a href="#formulario" className="inline-flex h-11 items-center gap-2 rounded-full bg-red-600 px-6 text-xs font-black text-white transition hover:bg-red-500">
            Solicitar orçamento
          </a>
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

            <div id="formulario" className="relative ml-auto w-full max-w-[470px] rounded-[24px] border border-white/10 bg-zinc-950/90 p-6 shadow-[0_25px_80px_rgba(0,0,0,.55)] backdrop-blur-xl lg:p-7">
              <MessageCircle className="absolute right-6 top-6 h-8 w-8 text-red-500" />
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
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img src={storeImg} alt="Fachada da Fast Drywall" className="h-[500px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/80 p-5 text-white backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[.25em] text-red-400">Loja física</p>
                <h3 className="mt-2 text-2xl font-black">Fast Drywall &amp; Steel Frame VCA</h3>
                <p className="mt-2 text-sm text-zinc-300">Vitória da Conquista - BA · (77) 98856-0246</p>
              </div>
            </div>
            <div>
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
              <div className="mt-7"><a href="#formulario" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-red-500">Falar com a Fast <ArrowRight className="h-4 w-4" /></a></div>
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
                    <div className="mt-6"><a href="#formulario" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-sm font-black text-white transition hover:bg-red-500">Pedir orçamento <ArrowRight className="h-4 w-4" /></a></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="produtos" className="bg-zinc-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center"><p className="text-xs font-black uppercase tracking-[.25em] text-red-400">Linha de produtos</p><h2 className="mt-3 text-4xl font-black">Materiais de qualidade, pronta entrega.</h2></div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {products.map((p) => (
                <article key={p.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[.04]">
                  <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
                  <div className="p-6"><h3 className="text-lg font-black">{p.title}</h3><div className="mt-5"><a href="#formulario" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/[.07] py-3 text-sm font-black text-white transition hover:border-red-600 hover:bg-red-600">Solicitar orçamento <ArrowRight className="h-4 w-4" /></a></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center"><p className="text-xs font-black uppercase tracking-[.25em] text-red-600">Reputação e confiança</p><h2 className="mt-3 text-4xl font-black">Clientes satisfeitos e atendimento que gera confiança.</h2></div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {reviews.map((r) => (
                <article key={r.name} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                  <div className="flex gap-1 text-amber-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                  <p className="mt-5 text-lg font-bold leading-8">“{r.text}”</p>
                  <div className="mt-6 flex items-center gap-4"><img src={r.image} alt={r.name} className="h-12 w-12 rounded-full object-cover" /><p className="font-black">{r.name}</p></div>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href="#formulario" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-red-500">Falar com a Fast <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </section>

        <section className="bg-red-600 py-14 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center lg:flex-row lg:px-8 lg:text-left">
            <div><h2 className="text-3xl font-black">Peça seu orçamento sem compromisso.</h2><p className="mt-2 text-red-50">Fale agora com nossa equipe e receba as melhores soluções para sua obra.</p></div>
            <a href="#formulario" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-red-600 transition hover:bg-red-50">Solicitar orçamento <ArrowRight className="h-4 w-4" /></a>
          </div>
        </section>

        <section id="localizacao" className="bg-zinc-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[.25em] text-red-400">Onde estamos</p>
              <h2 className="mt-3 text-4xl font-black">Visite a Fast Drywall.</h2>
              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[.04] p-6"><MapPin className="h-5 w-5 text-red-500" /><p className="mt-3 text-sm leading-7 text-zinc-300">Av. Luís Eduardo Magalhães, Quadra 05<br />Recreio · Vitória da Conquista - BA<br />CEP 45020-282<br /><br />(77) 98856-0246</p></div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={maps} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-sm font-black transition hover:border-red-500 hover:text-red-500">Abrir no Google Maps</a>
                <a href="#formulario" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white transition hover:bg-red-500">Solicitar orçamento <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
            <iframe title="Mapa Fast Drywall" src="https://www.google.com/maps?q=Av.+Lu%C3%ADs+Eduardo+Magalh%C3%A3es,+Quadra+05,+Recreio,+Vit%C3%B3ria+da+Conquista+-+BA&output=embed" className="h-[420px] w-full rounded-3xl border-0" loading="lazy" />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-9 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <Brand />
          <p className="text-sm text-zinc-500">© 2026 Fast Drywall &amp; Steel Frame VCA</p>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/fastdrywall.vitoriaconquista/" target="_blank" rel="noreferrer"><Instagram className="h-5 w-5" /></a>
            <a href="https://www.facebook.com/fastdrywall.vitconquista.ba" target="_blank" rel="noreferrer"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
