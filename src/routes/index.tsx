import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Clock3,
  Facebook,
  Hammer,
  Instagram,
  Layers3,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const storefrontImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80";

const whatsappBase = "5577988560246";
const instagram = "https://www.instagram.com/fastdrywall.vitoriaconquista/";
const facebook = "https://www.facebook.com/fastdrywall.vitconquista.ba";
const maps =
  "https://www.google.com.br/maps/place/Fast+Drywall+%26+Steel+Frame:+Placa,+Gesso,+Forro+em+Vit%C3%B3ria+da+Conquista+BA/@-14.870544,-40.8437667,17z/data=!3m1!4b1!4m6!3m5!1s0x7463b0fef96b6b7:0xd7bae0bcd7a68159!8m2!3d-14.870544!4d-40.8411918!16s%2Fg%2F11rgcf4zvr";
const genericWhatsapp =
  "https://api.whatsapp.com/send/?phone=5577988560246&text=Ol%C3%A1%21%20Quero%20solicitar%20um%20or%C3%A7amento%20com%20a%20Fast%20Drywall.&type=phone_number&app_absent=0";

const services = [
  {
    icon: Layers3,
    title: "Drywall",
    text: "Paredes, divisórias e soluções internas com instalação ágil, menos sujeira e acabamento profissional.",
    bullets: ["Obra mais limpa", "Montagem ágil", "Conforto térmico e acústico"],
    image:
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Building2,
    title: "Steel Frame",
    text: "Estruturas em aço galvanizado para projetos que buscam precisão, produtividade e construção mais industrializada.",
    bullets: ["Estrutura leve", "Alta precisão", "Menos desperdício"],
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Wrench,
    title: "Gesso, Forro e Placas",
    text: "Materiais e soluções para tetos, acabamentos e sistemas de construção a seco, com suporte na escolha dos itens.",
    bullets: ["Variedade de materiais", "Estoque completo", "Pronta entrega"],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  },
];

const benefits = [
  { icon: Clock3, title: "Obra mais rápida", text: "Processos industrializados ajudam a reduzir etapas e retrabalho." },
  { icon: Sparkles, title: "Obra mais limpa", text: "Menos uso de processos úmidos e menor geração de entulho." },
  { icon: Package, title: "Menos desperdício", text: "Materiais dimensionados e montagem mais previsível." },
  { icon: Building2, title: "Maior precisão", text: "Perfis e sistemas padronizados favorecem alinhamento e acabamento." },
  { icon: ShieldCheck, title: "Conforto térmico e acústico", text: "O sistema pode receber isolamentos adequados ao desempenho do ambiente." },
  { icon: Truck, title: "Melhor organização", text: "Mais previsibilidade na compra e logística dos materiais." },
];

const products = [
  { title: "Placas de Drywall", description: "Placas para paredes, divisórias, forros e aplicações internas.", image: "https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=1200&q=80" },
  { title: "Perfis Steel Frame", description: "Perfis e estruturas em aço galvanizado para construção a seco.", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" },
  { title: "Forros e Gesso", description: "Soluções para teto, rebaixamento e acabamento de ambientes.", image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80" },
  { title: "Perfis e Acessórios", description: "Guias, montantes e complementos para montagem do sistema.", image: "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1200&q=80" },
];

const reviews = [
  { name: "Cliente satisfeito", text: "O melhor de Conquista!", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80" },
  { name: "Cliente Fast", text: "Além do ótimo atendimento, a loja possui preços excelentes.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80" },
  { name: "Cliente no Google", text: "Empresa boa, ótima qualidade, equipe exemplar e excelente.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80" },
];

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 rotate-45 place-items-center rounded-[10px] bg-red-600 shadow-[0_10px_30px_rgba(220,38,38,.24)] transition duration-300 hover:scale-105 hover:rotate-[50deg]">
        <div className="h-5 w-2.5 -rotate-45 rounded-sm border-b-[5px] border-r-[5px] border-white" />
      </div>
      <div className="leading-none">
        <div className="text-xl font-black tracking-[-0.04em] text-zinc-950">FAST</div>
        <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Drywall & Steel Frame</div>
      </div>
    </div>
  );
}

function SectionTag({ children }: { children: ReactNode }) {
  return <p className="text-sm font-black uppercase tracking-[.24em] text-red-600">{children}</p>;
}

function Index() {
  const [form, setForm] = useState({ name: "", phone: "", interest: "", message: "" });
  const isFormReady = form.name.trim().length >= 2 && form.phone.trim().length >= 8 && form.interest.trim().length >= 2;
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappBase}&text=${encodeURIComponent(`Olá! Meu nome é ${form.name}. Telefone: ${form.phone}. Tenho interesse em: ${form.interest}. ${form.message ? `Detalhes: ${form.message}.` : ""} Quero solicitar um orçamento com a Fast Drywall.`)}`;

  function updateField(field: "name" | "phone" | "interest" | "message", value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isFormReady) return;
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
          <a href="#inicio" aria-label="Fast Drywall início"><BrandMark /></a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-zinc-600 lg:flex">
            <a className="transition hover:text-red-600" href="#sobre">Sobre</a>
            <a className="transition hover:text-red-600" href="#servicos">Soluções</a>
            <a className="transition hover:text-red-600" href="#produtos">Produtos</a>
            <a className="transition hover:text-red-600" href="#avaliacoes">Avaliações</a>
            <a className="transition hover:text-red-600" href="#localizacao">Localização</a>
          </nav>
          <a href={genericWhatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"><MessageCircle className="h-4 w-4" /> Solicitar orçamento</a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative isolate overflow-hidden bg-zinc-950">
          <img src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80" alt="Construção a seco" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,.52),transparent_28%),linear-gradient(135deg,rgba(0,0,0,.94),rgba(0,0,0,.82))]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
            <div className="self-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-200"><Sparkles className="h-4 w-4 text-red-400" /> Construção a seco em Vitória da Conquista</div>
              <h1 className="max-w-4xl text-5xl font-black leading-[.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">Construir com inteligência é construir com a <span className="text-red-500">Fast Drywall.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">Soluções em Drywall, Steel Frame, gesso, forro e acessórios para uma obra mais rápida, limpa, organizada e com excelente acabamento.</p>
              <div className="mt-9 flex flex-wrap gap-3 text-sm font-medium text-zinc-300">{["Atendimento especializado","Estoque completo","Pronta entrega","Vitória da Conquista - BA"].map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 transition duration-300 hover:-translate-y-0.5 hover:border-red-500/40 hover:bg-white/10"><Check className="h-4 w-4 text-red-400" /> {item}</span>)}</div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900 p-7 sm:p-8">
                <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80" alt="Estrutura Steel Frame" className="absolute inset-0 h-full w-full object-cover opacity-18" />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 to-zinc-950/92" />
                <div className="relative">
                  <div className="mb-6 flex items-start justify-between gap-4"><div><p className="text-sm font-black uppercase tracking-[.22em] text-red-400">Solicite seu orçamento</p><h2 className="mt-2 text-3xl font-black leading-tight text-white">Preencha os dados e siga para o WhatsApp.</h2></div><BadgeCheck className="h-9 w-9 shrink-0 text-red-500" /></div>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Seu nome" className="h-12 w-full rounded-2xl border border-white/10 bg-white/8 px-4 text-sm font-medium text-white outline-none placeholder:text-zinc-400 transition focus:border-red-500/60" />
                    <input value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="Seu WhatsApp" className="h-12 w-full rounded-2xl border border-white/10 bg-white/8 px-4 text-sm font-medium text-white outline-none placeholder:text-zinc-400 transition focus:border-red-500/60" />
                    <select value={form.interest} onChange={(e) => updateField("interest", e.target.value)} className="h-12 w-full rounded-2xl border border-white/10 bg-white/8 px-4 text-sm font-medium text-white outline-none transition focus:border-red-500/60"><option value="" className="text-zinc-900">Selecione seu interesse</option><option className="text-zinc-900" value="Drywall">Drywall</option><option className="text-zinc-900" value="Steel Frame">Steel Frame</option><option className="text-zinc-900" value="Gesso e Forro">Gesso e Forro</option><option className="text-zinc-900" value="Placas e acessórios">Placas e acessórios</option><option className="text-zinc-900" value="Outro orçamento">Outro orçamento</option></select>
                    <textarea value={form.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Descreva rapidamente o que você precisa (opcional)" className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-medium text-white outline-none placeholder:text-zinc-400 transition focus:border-red-500/60" />
                    <button type="submit" disabled={!isFormReady} className={`inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl font-extrabold transition ${isFormReady ? "bg-red-600 text-white shadow-lg shadow-red-600/25 hover:-translate-y-0.5 hover:bg-red-700" : "cursor-not-allowed bg-zinc-700 text-zinc-300"}`}>Ir para o WhatsApp <ArrowRight className="h-5 w-5" /></button>
                    <p className="text-xs leading-5 text-zinc-400">O botão é ativado após preencher nome, WhatsApp e interesse.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-white py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.92fr_1.08fr] lg:px-8">
            <div className="group overflow-hidden rounded-[34px] border border-zinc-200 bg-zinc-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><img src={storefrontImage} alt="Loja Fast Drywall" className="h-full min-h-[430px] w-full object-cover transition duration-500 group-hover:scale-105" /></div>
            <div className="self-center">
              <SectionTag>Quem somos</SectionTag>
              <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-.04em] text-zinc-950 sm:text-6xl">Sua obra começa com a escolha certa.</h2>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-600">Nós da Fast Drywall somos especialistas em sistemas de construção a seco. Oferecemos produtos de alta qualidade, equipe preparada e todo o suporte que sua obra precisa para ganhar em agilidade, organização e acabamento impecável.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">{[
                { icon: ShieldCheck, label: "Produtos de qualidade" },
                { icon: Package, label: "Estoque completo" },
                { icon: Hammer, label: "Equipe especializada" },
                { icon: MessageCircle, label: "Suporte para sua obra" },
              ].map(({ icon: Icon, label }) => <div key={label} className="group rounded-[24px] border border-zinc-200 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg"><Icon className="h-7 w-7 text-red-500 transition duration-300 group-hover:scale-110 group-hover:rotate-6" /><div className="mt-5 text-2xl font-black tracking-tight text-zinc-950">{label}</div></div>)}</div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-zinc-100 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionTag>Soluções para sua obra</SectionTag>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-.04em] text-zinc-950 sm:text-6xl">Tudo para construir com mais eficiência.</h2>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">{services.map(({ icon: Icon, title, text, bullets, image }) => <article key={title} className="group overflow-hidden rounded-[30px] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"><div className="relative h-60 overflow-hidden"><img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/10 to-transparent" /><div className="absolute left-6 top-6 grid h-14 w-14 place-items-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/20 transition duration-300 group-hover:scale-110 group-hover:rotate-6"><Icon className="h-6 w-6" /></div></div><div className="p-7"><h3 className="text-2xl font-black tracking-tight text-zinc-950">{title}</h3><p className="mt-4 text-lg leading-8 text-zinc-600">{text}</p><div className="mt-6 space-y-3">{bullets.map((bullet) => <div key={bullet} className="flex items-center gap-2 text-sm font-semibold text-zinc-700"><Check className="h-4 w-4 text-red-600" /> {bullet}</div>)}</div></div></article>)}</div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionTag>Por que construir a seco?</SectionTag>
            <h2 className="mt-3 text-center text-4xl font-black tracking-[-.04em] text-zinc-950 sm:text-6xl">Mais controle, menos desperdício e uma obra melhor organizada.</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{benefits.map(({ icon: Icon, title, text }) => <div key={title} className="group rounded-[28px] border border-zinc-200 bg-zinc-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl"><Icon className="h-7 w-7 text-red-500 transition duration-300 group-hover:scale-110 group-hover:-rotate-6" /><h3 className="mt-5 text-2xl font-black tracking-tight text-zinc-950">{title}</h3><p className="mt-3 text-lg leading-8 text-zinc-600">{text}</p></div>)}</div>
          </div>
        </section>

        <section id="produtos" className="bg-zinc-950 py-20 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><SectionTag>Linha de produtos</SectionTag><h2 className="mt-3 max-w-4xl text-4xl font-black tracking-[-.04em] text-white sm:text-6xl">Produtos e materiais para sua obra.</h2></div><a href={genericWhatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-extrabold text-zinc-950 transition hover:-translate-y-0.5">Solicitar orçamento <ArrowRight className="h-4 w-4" /></a></div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{products.map((product) => <article key={product.title} className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl"><div className="relative h-64 overflow-hidden"><img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/15 to-transparent" /></div><div className="p-6"><h3 className="text-2xl font-black tracking-tight text-white">{product.title}</h3><p className="mt-4 text-lg leading-8 text-zinc-300">{product.description}</p></div></article>)}</div>
          </div>
        </section>

        <section className="bg-zinc-100 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionTag>Como funciona</SectionTag>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-.04em] text-zinc-950 sm:text-6xl">Como solicitar seu orçamento.</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{[["01","Fale com a Fast","Chame no WhatsApp."],["02","Informe sua necessidade","Conte o que precisa para a obra."],["03","Receba orientação","A equipe ajuda na escolha dos materiais."],["04","Solicite seu orçamento","Receba as informações para avançar."]].map(([number,title,text]) => <div key={number} className="group rounded-[28px] border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"><div className="text-2xl font-black tracking-tight text-red-600 transition duration-300 group-hover:translate-x-1">{number}</div><h3 className="mt-6 text-2xl font-black tracking-tight text-zinc-950">{title}</h3><p className="mt-4 text-lg leading-8 text-zinc-600">{text}</p></div>)}</div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><SectionTag>Reputação e confiança</SectionTag><h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-.04em] text-zinc-950 sm:text-6xl">Veja o que os clientes dizem.</h2></div><a href={maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 font-extrabold text-white transition hover:-translate-y-0.5">Ver avaliações no Google <ArrowRight className="h-4 w-4" /></a></div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">{reviews.map((review) => <article key={review.text} className="group overflow-hidden rounded-[30px] border border-zinc-200 bg-zinc-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"><div className="flex items-center gap-4 p-6 pb-0"><img src={review.image} alt={review.name} className="h-16 w-16 rounded-full object-cover ring-4 ring-white" /><div><div className="text-lg font-black text-zinc-950">{review.name}</div><div className="mt-1 flex gap-1 text-amber-500">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div></div></div><div className="p-6"><p className="text-2xl font-black leading-9 tracking-tight text-zinc-950">“{review.text}”</p><div className="mt-5 text-sm font-medium text-zinc-500">Avaliação pública da Fast Drywall</div></div></article>)}</div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-[34px] bg-red-600 px-8 py-12 text-white shadow-2xl shadow-red-600/20 lg:flex-row lg:items-center lg:justify-between lg:px-14"><div><SectionTag>Seu projeto pode começar agora</SectionTag><h2 className="mt-3 text-4xl font-black tracking-[-.04em] text-white sm:text-5xl">Peça seu orçamento sem compromisso.</h2><p className="mt-4 max-w-2xl text-xl leading-8 text-red-100">Fale com a equipe da Fast Drywall e receba atendimento rápido pelo WhatsApp.</p></div><a href={genericWhatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-red-600 transition hover:-translate-y-0.5">Chamar no WhatsApp <MessageCircle className="h-5 w-5" /></a></div></section>

        <section id="localizacao" className="border-t border-zinc-200 bg-zinc-100 py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[.78fr_1.22fr] lg:px-8">
            <div className="rounded-[30px] bg-zinc-950 p-8 text-white shadow-xl sm:p-10"><SectionTag>Onde estamos</SectionTag><h2 className="mt-3 text-4xl font-black tracking-tight text-white">Visite a Fast Drywall.</h2><div className="mt-8 space-y-6"><div className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-red-500" /><div><div className="font-bold">Av. Luís Eduardo Magalhães, Quadra 05</div><div className="mt-1 text-sm leading-6 text-zinc-400">Recreio · Vitória da Conquista - BA<br />CEP 45020-282</div></div></div><div className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-red-500" /><div><div className="font-bold">(77) 98856-0246</div><div className="mt-1 text-sm text-zinc-400">WhatsApp</div></div></div></div><a href={maps} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-bold transition hover:bg-white/15">Abrir no Google Maps <ArrowRight className="h-4 w-4" /></a></div>
            <div className="min-h-[420px] overflow-hidden rounded-[30px] border border-zinc-200 bg-white shadow-sm"><iframe title="Mapa da Fast Drywall em Vitória da Conquista" src="https://www.google.com/maps?q=-14.870544,-40.8411918&z=17&output=embed" className="h-full min-h-[420px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          </div>
        </section>
      </main>

      <footer className="bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><BrandMark /><p className="mt-3 text-lg leading-8 text-zinc-500">Drywall, Steel Frame, gesso, forro e acessórios em Vitória da Conquista.</p></div><div className="flex items-center gap-3">{[{ href: instagram, icon: Instagram },{ href: facebook, icon: Facebook },{ href: genericWhatsapp, icon: MessageCircle }].map(({ href, icon: Icon }) => <a key={href} href={href} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full border border-zinc-200 text-zinc-700 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-red-50 hover:text-red-600"><Icon className="h-5 w-5" /></a>)}</div><div className="text-sm text-zinc-500">© 2026 Fast Drywall & Steel Frame VCA</div></div></footer>

      <a href={genericWhatsapp} target="_blank" rel="noreferrer" aria-label="Pedir orçamento pelo WhatsApp" className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-900/25 transition hover:-translate-y-1 hover:bg-emerald-600 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3.5"><MessageCircle className="h-6 w-6" /><span className="hidden font-extrabold sm:inline">Pedir orçamento</span></a>
    </div>
  );
}
