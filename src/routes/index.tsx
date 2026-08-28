import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Box,
  Building2,
  Check,
  Clock3,
  Facebook,
  Hammer,
  Home,
  Instagram,
  Layers3,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Recycle,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const waPhone = "5577988560246";
const whatsapp =
  "https://api.whatsapp.com/send/?phone=5577988560246&text=Ol%C3%A1%21%20Quero%20solicitar%20um%20or%C3%A7amento%20com%20a%20Fast%20Drywall.&type=phone_number&app_absent=0";
const instagram = "https://www.instagram.com/fastdrywall.vitoriaconquista/";
const facebook = "https://www.facebook.com/fastdrywall.vitconquista.ba";
const maps =
  "https://www.google.com.br/maps/place/Fast+Drywall+%26+Steel+Frame:+Placa,+Gesso,+Forro+em+Vit%C3%B3ria+da+Conquista+BA/@-14.870544,-40.8437667,17z";
const storefront = "/assets/fast-store.jpg";

const services = [
  {
    icon: Layers3,
    title: "Drywall",
    text: "Paredes, divisórias e revestimentos com instalação ágil, obra mais limpa e acabamento profissional.",
    image:
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Instalação até 4x mais rápida que a alvenaria",
      "Obra limpa, sem excesso de entulho",
      "Acabamento liso, pronto para pintura",
    ],
  },
  {
    icon: Building2,
    title: "Steel Frame",
    text: "Estruturas leves e resistentes em aço galvanizado para projetos com produtividade e precisão industrial.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Obra até 40% mais rápida",
      "Estrutura leve e resistente",
      "Aço 100% reciclável",
    ],
  },
  {
    icon: Home,
    title: "Gesso, Forros e Placas",
    text: "Soluções para tetos, rebaixamentos e acabamentos com variedade de materiais e suporte na escolha.",
    image:
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Diversos modelos de forros",
      "Sancas, placas e acabamentos",
      "Pronta entrega e suporte",
    ],
  },
  {
    icon: Wrench,
    title: "Perfis e Acessórios",
    text: "Guias, montantes, perfis e complementos para uma instalação completa, segura e eficiente.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Linha completa de acessórios",
      "Melhor custo-benefício",
      "Tudo para sua instalação",
    ],
  },
];

const benefits = [
  {
    icon: Clock3,
    title: "Instalação até 4x mais rápida",
    text: "Mais agilidade do início ao acabamento com sistemas de construção a seco.",
  },
  {
    icon: Building2,
    title: "Obra até 40% mais rápida",
    text: "Steel Frame reduz etapas e aumenta a produtividade do projeto.",
  },
  {
    icon: Sparkles,
    title: "Obra limpa e organizada",
    text: "Menos processos úmidos, menos sujeira e menor geração de entulho.",
  },
  {
    icon: Package,
    title: "Menos desperdício",
    text: "Materiais dimensionados e montagem previsível ajudam a reduzir perdas.",
  },
  {
    icon: ShieldCheck,
    title: "Conforto térmico e acústico",
    text: "Os sistemas podem receber isolamentos adequados para ambientes mais confortáveis.",
  },
  {
    icon: Recycle,
    title: "Aço 100% reciclável",
    text: "Construção mais racional e sustentável com estrutura metálica industrializada.",
  },
];

const products = [
  {
    title: "Placas de Drywall",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=1000&q=80",
    text: "Placas para paredes, divisórias, forros e aplicações internas.",
  },
  {
    title: "Perfis Steel Frame",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=80",
    text: "Perfis e estruturas em aço galvanizado para construção a seco.",
  },
  {
    title: "Forros e Gesso",
    image:
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1000&q=80",
    text: "Soluções para teto, rebaixamento e acabamento de ambientes.",
  },
  {
    title: "Perfis e Acessórios",
    image:
      "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1000&q=80",
    text: "Guias, montantes e complementos para montagem do sistema.",
  },
];

const reviews = [
  {
    name: "Cliente Fast Drywall",
    text: "O melhor de Conquista! Atendimento rápido e materiais de qualidade.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Cliente Fast Drywall",
    text: "Além do ótimo atendimento, a loja possui preços excelentes e equipe atenciosa.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Cliente Fast Drywall",
    text: "Empresa boa, ótima qualidade, equipe exemplar e excelente atendimento.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
];

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 rotate-45 place-items-center rounded-[10px] bg-red-600 shadow-lg transition duration-300 hover:scale-105 hover:rotate-[50deg]">
        <div className="h-5 w-2.5 -rotate-45 rounded-sm border-b-[5px] border-r-[5px] border-white" />
      </div>
      <div>
        <div className="text-xl font-black leading-none text-zinc-950">FAST</div>
        <div className="mt-1 text-[10px] font-semibold uppercase tracking-[.18em] text-zinc-500">
          Drywall & Steel Frame
        </div>
      </div>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-black uppercase tracking-[.24em] text-red-600">
      {children}
    </p>
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
    form.name.trim().length >= 2 &&
    emailOk &&
    form.phone.trim().length >= 8 &&
    form.interest.length > 1;

  const leadWhatsapp = `https://api.whatsapp.com/send?phone=${waPhone}&text=${encodeURIComponent(
    `Olá! Meu nome é ${form.name}. E-mail: ${form.email}. WhatsApp: ${form.phone}. Interesse: ${form.interest}.${form.message ? ` Detalhes: ${form.message}.` : ""} Quero solicitar um orçamento com a Fast Drywall.`,
  )}`;

  const set = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (ready) window.open(leadWhatsapp, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
          <a href="#inicio">
            <Brand />
          </a>
          <nav className="hidden gap-8 text-sm font-semibold text-zinc-600 lg:flex">
            <a href="#sobre" className="hover:text-red-600">Sobre</a>
            <a href="#servicos" className="hover:text-red-600">Soluções</a>
            <a href="#produtos" className="hover:text-red-600">Produtos</a>
            <a href="#avaliacoes" className="hover:text-red-600">Avaliações</a>
            <a href="#localizacao" className="hover:text-red-600">Localização</a>
          </nav>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-500 active:bg-emerald-500"
          >
            <MessageCircle className="h-4 w-4" /> Solicitar orçamento
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative isolate overflow-hidden bg-zinc-950">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
            alt="Funcionários instalando placas"
            className="absolute inset-0 h-full w-full object-cover opacity-[.14]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,.46),transparent_28%),linear-gradient(135deg,rgba(0,0,0,.96),rgba(0,0,0,.84))]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-24">
            <div className="self-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-200">
                <Sparkles className="h-4 w-4 text-red-400" /> Construção a seco em Vitória da Conquista
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[.96] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">
                Construir com inteligência é construir com a <span className="text-red-500">Fast Drywall.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
                Soluções em Drywall, Steel Frame, gesso, forro e acessórios para uma obra mais rápida, limpa, organizada e com excelente acabamento.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-500 active:bg-emerald-500"
                >
                  Falar com a equipe <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Ver soluções <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900 p-7 sm:p-8">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                  alt="Equipe de obra"
                  className="absolute inset-0 h-full w-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/45 to-zinc-950/95" />
                <div className="relative">
                  <div className="mb-6 flex justify-between gap-4">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[.22em] text-red-400">Solicite seu orçamento</p>
                      <h2 className="mt-2 text-3xl font-black text-white">Preencha os dados e siga para o WhatsApp.</h2>
                      <p className="mt-3 text-sm text-zinc-400">Preencha seus dados para falar com nossa equipe.</p>
                    </div>
                    <BadgeCheck className="h-9 w-9 shrink-0 text-red-500" />
                  </div>

                  <form onSubmit={submit} className="space-y-3">
                    <input
                      value={form.name}
                      onChange={(event) => set("name", event.target.value)}
                      placeholder="Seu nome"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-red-500/60"
                    />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) => set("email", event.target.value)}
                      placeholder="Seu Gmail / e-mail"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-red-500/60"
                    />
                    <input
                      value={form.phone}
                      onChange={(event) => set("phone", event.target.value)}
                      placeholder="Seu WhatsApp"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-red-500/60"
                    />
                    <select
                      value={form.interest}
                      onChange={(event) => set("interest", event.target.value)}
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none"
                    >
                      <option value="" className="text-zinc-900">Selecione seu interesse</option>
                      <option className="text-zinc-900">Drywall</option>
                      <option className="text-zinc-900">Steel Frame</option>
                      <option className="text-zinc-900">Gesso e Forro</option>
                      <option className="text-zinc-900">Placas e acessórios</option>
                      <option className="text-zinc-900">Outro orçamento</option>
                    </select>
                    <textarea
                      value={form.message}
                      onChange={(event) => set("message", event.target.value)}
                      placeholder="Descreva rapidamente o que você precisa (opcional)"
                      className="min-h-[105px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-red-500/60"
                    />
                    <button
                      disabled={!ready}
                      className={`inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl font-extrabold transition ${
                        ready
                          ? "bg-red-600 text-white shadow-lg hover:-translate-y-0.5 hover:bg-emerald-500 active:bg-emerald-500"
                          : "cursor-not-allowed bg-zinc-700 text-zinc-300"
                      }`}
                    >
                      Ir para o WhatsApp <ArrowRight className="h-5 w-5" />
                    </button>
                    <p className="text-xs text-zinc-400">O botão é ativado após preencher nome, e-mail, WhatsApp e interesse.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-white py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
            <div className="space-y-5">
              <div className="group relative overflow-hidden rounded-[34px] border border-zinc-200 bg-zinc-50 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                <img
                  src={storefront}
                  alt="Fachada da Fast Drywall"
                  className="h-[520px] w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />
                <div className="absolute left-5 top-5 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-xl backdrop-blur">
                  <div className="text-lg font-black text-zinc-950">FAST</div>
                  <div className="text-[10px] font-bold uppercase tracking-[.18em] text-red-600">Drywall & Steel Frame</div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/10 bg-zinc-950/88 p-6 text-white backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[.22em] text-red-400">Loja física</p>
                  <p className="mt-2 text-2xl font-black">Fast Drywall & Steel Frame VCA</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-300">
                    <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-red-500" />Vitória da Conquista - BA</span>
                    <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-red-500" />(77) 98856-0246</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Drywall", "Steel Frame", "Gesso", "Acessórios"].map((item) => (
                      <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-zinc-100">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Até 4x mais rápido", "Drywall"],
                  ["Até 40% mais rápido", "Steel Frame"],
                  ["Atendimento especializado", "Equipe preparada"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <p className="text-[11px] font-black uppercase tracking-[.2em] text-red-600">Destaque</p>
                    <p className="mt-3 text-xl font-black leading-tight text-zinc-950">{title}</p>
                    <p className="mt-2 text-sm text-zinc-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="self-center">
              <Tag>Quem somos</Tag>
              <h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-6xl">Sua obra começa com a escolha certa.</h2>
              <p className="mt-6 text-xl leading-9 text-zinc-600">
                A Fast Drywall & Steel Frame VCA é referência em soluções para construção a seco em Vitória da Conquista. Trabalhamos com drywall, steel frame, placas, gesso, forros e acessórios, com atendimento especializado, variedade de produtos e suporte para ajudar sua obra a ganhar agilidade, organização e acabamento profissional.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, label: "Produtos de qualidade", text: "Materiais selecionados para melhor resultado." },
                  { icon: Box, label: "Estoque completo", text: "Variedade para sua obra não parar." },
                  { icon: Hammer, label: "Equipe especializada", text: "Atendimento técnico do começo ao fim." },
                  { icon: MessageCircle, label: "Suporte para sua obra", text: "Orientação para escolher a solução certa." },
                ].map(({ icon: Icon, label, text }) => (
                  <div key={label} className="group rounded-[24px] border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg">
                    <Icon className="h-7 w-7 text-red-500 transition group-hover:scale-110 group-hover:rotate-6" />
                    <div className="mt-5 text-xl font-black">{label}</div>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-zinc-100 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Tag>Soluções para sua obra</Tag>
            <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-[-.04em] sm:text-6xl">Soluções completas para cada etapa do seu projeto.</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map(({ icon: Icon, title, text, image, bullets }) => (
                <article key={title} className="group overflow-hidden rounded-[30px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative h-56 overflow-hidden">
                    <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 grid h-14 w-14 place-items-center rounded-2xl bg-red-600 text-white transition group-hover:scale-110 group-hover:bg-emerald-500">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black">{title}</h3>
                    <p className="mt-4 leading-7 text-zinc-600">{text}</p>
                    <div className="mt-5 space-y-3">
                      {bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-2 text-sm font-semibold leading-6 text-zinc-700">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-red-600" />{bullet}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center">
              <Tag>Por que construir a seco?</Tag>
              <h2 className="mx-auto mt-3 max-w-5xl text-4xl font-black tracking-[-.04em] sm:text-6xl">Mais vantagens para sua obra.</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="group rounded-[28px] border border-zinc-200 bg-zinc-50 p-7 transition hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl">
                  <Icon className="h-8 w-8 text-red-500 transition group-hover:scale-110 group-hover:-rotate-6" />
                  <h3 className="mt-5 text-2xl font-black">{title}</h3>
                  <p className="mt-3 leading-8 text-zinc-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-100 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[32px] border border-zinc-200 bg-white p-8 shadow-sm">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-red-50 text-red-600"><Blocks className="h-7 w-7" /></div>
                <Tag>Drywall</Tag>
                <h3 className="mt-3 text-3xl font-black">Versatilidade e ciência para ambientes internos.</h3>
                <div className="mt-6 space-y-4 text-zinc-700">
                  {["Mais economia em tempo e mão de obra","Acabamento liso, pronto para pintura ou revestimento","Excelente isolamento acústico e térmico"].map((item)=><div key={item} className="flex gap-3"><BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-red-600"/><span>{item}</span></div>)}
                </div>
              </div>
              <div className="rounded-[32px] bg-zinc-950 p-8 text-white shadow-xl">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white"><Recycle className="h-7 w-7" /></div>
                <p className="mt-6 text-sm font-black uppercase tracking-[.24em] text-red-400">Steel Frame</p>
                <h3 className="mt-3 text-3xl font-black">Inovação que valoriza seu projeto.</h3>
                <div className="mt-6 space-y-4 text-zinc-200">
                  {["Estrutura leve e resistente","Precisão e qualidade industrial","Conforto térmico e acústico superior"].map((item)=><div key={item} className="flex gap-3"><BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-red-400"/><span>{item}</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="produtos" className="bg-zinc-950 py-20 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[.24em] text-red-400">Linha de produtos</p>
                <h2 className="mt-3 text-4xl font-black sm:text-6xl">Materiais de alta qualidade para resultados superiores.</h2>
              </div>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-extrabold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-white">
                Solicitar orçamento <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {products.map((product) => (
                <article key={product.title} className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition hover:-translate-y-2 hover:bg-white/10">
                  <div className="relative h-64 overflow-hidden">
                    <img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/15 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black">{product.title}</h3>
                    <p className="mt-4 leading-8 text-zinc-300">{product.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-100 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Tag>Como solicitar seu orçamento</Tag>
            <h2 className="mt-3 text-4xl font-black sm:text-6xl">É rápido, fácil e sem compromisso.</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["01","Fale com a Fast","Preencha o formulário ou fale com nossa equipe pelo WhatsApp."],
                ["02","Informe sua necessidade","Conte sobre seu projeto e o que você precisa para sua obra."],
                ["03","Receba orientação","Nossa equipe vai entender e indicar as melhores soluções."],
                ["04","Solicite seu orçamento","Receba seu orçamento rápido e avance com segurança."],
              ].map(([number,title,text]) => (
                <div key={number} className="group rounded-[28px] border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl">
                  <div className="text-2xl font-black text-red-600 transition group-hover:translate-x-1">{number}</div>
                  <h3 className="mt-6 text-2xl font-black">{title}</h3>
                  <p className="mt-4 leading-8 text-zinc-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <Tag>Veja o que os clientes dizem</Tag>
                <h2 className="mt-3 text-4xl font-black sm:text-6xl">Confiança que se constrói com resultado.</h2>
              </div>
              <a href={maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-emerald-500">
                Ver avaliações no Google <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {reviews.map((review) => (
                <article key={review.text} className="group rounded-[30px] border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                  <div className="flex items-center gap-4">
                    <img src={review.image} alt="Pessoa sorrindo" className="h-16 w-16 rounded-full object-cover ring-4 ring-white" />
                    <div>
                      <div className="font-black">{review.name}</div>
                      <div className="mt-1 flex gap-1 text-amber-500">
                        {[0,1,2,3,4].map((index)=><Star key={index} className="h-4 w-4 fill-current" />)}
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-2xl font-black leading-9">“{review.text}”</p>
                  <div className="mt-5 text-xs font-bold text-zinc-500">Avaliação pública da Fast Drywall</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[34px] bg-red-600 px-8 py-12 text-white shadow-2xl lg:flex-row lg:items-center lg:justify-between lg:px-14">
            <div>
              <p className="text-sm font-black uppercase tracking-[.24em] text-red-100">Seu projeto pode começar agora</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">Peça seu orçamento sem compromisso.</h2>
              <p className="mt-4 text-xl text-red-100">Fale com a equipe da Fast Drywall e receba atendimento rápido pelo WhatsApp.</p>
            </div>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-red-600 transition hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-white active:bg-emerald-500">
              Chamar no WhatsApp <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </section>

        <section id="localizacao" className="border-t border-zinc-200 bg-zinc-100 py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[.78fr_1.22fr] lg:px-8">
            <div className="rounded-[30px] bg-zinc-950 p-8 text-white shadow-xl sm:p-10">
              <p className="text-sm font-black uppercase tracking-[.24em] text-red-400">Onde estamos</p>
              <h2 className="mt-3 text-4xl font-black">Visite a Fast Drywall.</h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                  <div>
                    <div className="font-bold">Av. Luís Eduardo Magalhães, Quadra 05</div>
                    <div className="mt-1 text-sm leading-6 text-zinc-400">Recreio · Vitória da Conquista - BA<br/>CEP 45020-282</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                  <div>
                    <div className="font-bold">(77) 98856-0246</div>
                    <div className="mt-1 text-sm text-zinc-400">WhatsApp</div>
                  </div>
                </div>
              </div>
              <a href={maps} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-bold hover:bg-white/15">
                Abrir no Google Maps <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="min-h-[420px] overflow-hidden rounded-[30px] border border-zinc-200 bg-white shadow-sm">
              <iframe title="Mapa Fast Drywall" src="https://www.google.com/maps?q=-14.870544,-40.8411918&z=17&output=embed" className="h-full min-h-[420px] w-full border-0" loading="lazy" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <Brand />
            <p className="mt-3 text-sm text-zinc-500">Drywall, Steel Frame, gesso, forro e acessórios em Vitória da Conquista.</p>
          </div>
          <div className="flex gap-3">
            <a href={instagram} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full border border-zinc-200 transition hover:-translate-y-1 hover:text-red-600"><Instagram className="h-5 w-5" /></a>
            <a href={facebook} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full border border-zinc-200 transition hover:-translate-y-1 hover:text-red-600"><Facebook className="h-5 w-5" /></a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full border border-zinc-200 transition hover:-translate-y-1 hover:bg-emerald-500 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
          </div>
          <div className="text-sm text-zinc-500">© 2026 Fast Drywall & Steel Frame VCA</div>
        </div>
      </footer>

      <a href={whatsapp} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition hover:-translate-y-1 hover:bg-emerald-600 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3.5">
        <MessageCircle className="h-6 w-6" />
        <span className="hidden font-extrabold sm:inline">Pedir orçamento</span>
      </a>
    </div>
  );
}
