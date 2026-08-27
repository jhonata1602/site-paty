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
  Phone,
  ShieldCheck,
  Star,
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

const services = [
  {
    icon: Layers3,
    title: "Drywall",
    text: "Paredes e divisórias com instalação rápida, obra limpa e acabamento profissional.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Building2,
    title: "Steel Frame",
    text: "Sistema leve, resistente e eficiente para obras modernas e produtivas.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Wrench,
    title: "Gesso, Forro e Placas",
    text: "Variedade de produtos e acessórios para completar sua obra com praticidade.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  },
];

const products = [
  { title: "Placas de Drywall", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" },
  { title: "Perfis Steel Frame", image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80" },
  { title: "Forros e Acabamentos", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" },
  { title: "Acessórios", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80" },
];

const reviews = [
  "O melhor de Conquista!",
  "Além do ótimo atendimento, a loja possui preços excelentes.",
  "Empresa boa, ótima qualidade, equipe exemplar e excelente.",
];

function BrandMark() {
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
          <a href="#inicio"><BrandMark /></a>
          <nav className="hidden gap-8 text-sm font-semibold text-zinc-600 lg:flex">
            <a href="#servicos" className="hover:text-red-600">Soluções</a>
            <a href="#produtos" className="hover:text-red-600">Produtos</a>
            <a href="#avaliacoes" className="hover:text-red-600">Avaliações</a>
            <a href="#localizacao" className="hover:text-red-600">Localização</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 hover:bg-red-700">
            <MessageCircle className="h-4 w-4" /> Solicitar orçamento
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative isolate overflow-hidden bg-zinc-950">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80" alt="Construção moderna" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,.45),transparent_28%),linear-gradient(135deg,rgba(0,0,0,.94),rgba(0,0,0,.74))]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-200">Vitória da Conquista · Construção a seco</div>
              <h1 className="max-w-4xl text-5xl font-black leading-[.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">Construir com inteligência é construir com a <span className="text-red-500">Fast Drywall.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">Soluções em Drywall, Steel Frame, gesso, forro e acessórios para uma obra mais rápida, organizada e com excelente acabamento.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 font-extrabold text-white shadow-xl shadow-red-600/20 hover:bg-red-700">Pedir orçamento <ArrowRight className="h-4 w-4" /></a>
                <a href="#produtos" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white hover:bg-white/10">Ver produtos</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-zinc-300">
                {['Atendimento especializado','Estoque completo','Melhor custo-benefício'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5"><Check className="h-4 w-4 text-red-400" />{item}</span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-zinc-900 p-8">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" alt="Fast Drywall" className="absolute inset-0 h-full w-full object-cover opacity-22" />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/25 to-zinc-950/90" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-red-400">Fast Drywall VCA</p><h2 className="mt-3 text-3xl font-black text-white">Sua obra começa com a escolha certa.</h2></div><Hammer className="h-9 w-9 shrink-0 text-red-500" /></div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">{['Drywall','Steel Frame','Placas','Gesso','Forros','Acessórios'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-zinc-100">{item}</div>)}</div>
                  <div className="mt-7 rounded-2xl bg-red-600 p-5 text-white"><div className="text-xs font-bold uppercase tracking-[.16em] text-red-100">WhatsApp</div><div className="mt-2 text-2xl font-black">(77) 98856-0246</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-zinc-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-sm font-black uppercase tracking-[.22em] text-red-600">Soluções para sua obra</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-.04em] sm:text-5xl">Tudo para construir com mais eficiência.</h2>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, text, image }) => (
                <article key={title} className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-56 overflow-hidden"><img src={image} alt={title} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/10 to-transparent" /><div className="absolute left-5 top-5 grid h-14 w-14 place-items-center rounded-2xl bg-red-600 text-white"><Icon className="h-6 w-6" /></div></div>
                  <div className="p-7"><h3 className="text-2xl font-black">{title}</h3><p className="mt-3 leading-7 text-zinc-600">{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="produtos" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-sm font-black uppercase tracking-[.22em] text-red-600">Linha de produtos</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Imagens de produtos e soluções da Fast.</h2></div><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 font-bold text-zinc-800 hover:border-red-200 hover:bg-red-50 hover:text-red-700">Solicitar orçamento <ArrowRight className="h-4 w-4" /></a></div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {products.map((product) => (
                <article key={product.title} className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="relative h-64 overflow-hidden"><img src={product.image} alt={product.title} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/15 to-transparent" /><div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/12 px-4 py-3 text-sm font-bold text-white backdrop-blur-sm">{product.title}</div></div></article>
              ))}
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-zinc-950 py-20 text-white lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div><p className="text-sm font-black uppercase tracking-[.22em] text-red-400">Por que escolher a Fast</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em] text-white sm:text-5xl">Confiança, qualidade e atendimento.</h2><p className="mt-5 text-lg leading-8 text-zinc-300">A Fast Drywall combina produtos de qualidade, pronta entrega e equipe especializada para orientar sua obra do jeito certo.</p><div className="mt-8 grid gap-3"><div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"><ShieldCheck className="h-5 w-5 text-red-400" /><span className="font-semibold text-zinc-200">Produtos de qualidade</span></div><div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"><Truck className="h-5 w-5 text-red-400" /><span className="font-semibold text-zinc-200">Pronta entrega</span></div><div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"><Hammer className="h-5 w-5 text-red-400" /><span className="font-semibold text-zinc-200">Atendimento especializado</span></div></div></div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8"><div className="flex items-center justify-between gap-4"><div><p className="text-sm font-black uppercase tracking-[.22em] text-red-400">Avaliações</p><h3 className="mt-2 text-3xl font-black">Veja o que os clientes dizem.</h3></div><a href={maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-zinc-950">Google <ArrowRight className="h-4 w-4" /></a></div><div className="mt-8 grid gap-4">{reviews.map((review)=><blockquote key={review} className="rounded-[24px] border border-white/10 bg-black/20 p-6"><div className="flex gap-1 text-amber-400">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}</div><p className="mt-4 text-lg font-bold leading-8">“{review}”</p><footer className="mt-3 text-sm text-zinc-400">Avaliação pública da Fast Drywall</footer></blockquote>)}</div></div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-red-600 px-6 py-12 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14"><div className="max-w-2xl"><p className="text-sm font-black uppercase tracking-[.22em] text-red-100">Seu projeto pode começar agora</p><h2 className="mt-3 text-3xl font-black tracking-[-.04em] sm:text-4xl">Peça seu orçamento sem compromisso.</h2><p className="mt-4 text-lg leading-7 text-red-100">Fale diretamente com a equipe da Fast Drywall pelo WhatsApp.</p></div><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-black text-red-600 lg:mt-0">Chamar no WhatsApp <MessageCircle className="h-5 w-5" /></a></div></section>

        <section id="localizacao" className="border-t border-zinc-200 bg-zinc-50 py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[.78fr_1.22fr] lg:px-8">
            <div className="rounded-[30px] bg-zinc-950 p-8 text-white sm:p-10"><p className="text-sm font-black uppercase tracking-[.22em] text-red-400">Onde estamos</p><h2 className="mt-3 text-3xl font-black tracking-tight text-white">Visite a Fast Drywall.</h2><div className="mt-8 space-y-6"><div className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-red-500" /><div><div className="font-bold">Av. Luís Eduardo Magalhães, Quadra 05</div><div className="mt-1 text-sm leading-6 text-zinc-400">Recreio · Vitória da Conquista - BA<br />CEP 45020-282</div></div></div><div className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-red-500" /><div><div className="font-bold">(77) 98856-0246</div><div className="mt-1 text-sm text-zinc-400">WhatsApp</div></div></div></div><a href={maps} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-bold hover:bg-white/15">Abrir no Google Maps <ArrowRight className="h-4 w-4" /></a></div>
            <div className="min-h-[420px] overflow-hidden rounded-[30px] border border-zinc-200 bg-white"><iframe title="Mapa da Fast Drywall em Vitória da Conquista" src="https://www.google.com/maps?q=-14.870544,-40.8411918&z=17&output=embed" className="h-full min-h-[420px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          </div>
        </section>
      </main>

      <footer className="bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><BrandMark /><p className="mt-3 text-sm text-zinc-500">Soluções em Drywall, Steel Frame, gesso, placas e forro em Vitória da Conquista.</p></div><div className="flex items-center gap-3"><a href={instagram} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200 text-zinc-700 hover:border-red-200 hover:bg-red-50 hover:text-red-600"><Instagram className="h-5 w-5" /></a><a href={facebook} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200 text-zinc-700 hover:border-red-200 hover:bg-red-50 hover:text-red-600"><Facebook className="h-5 w-5" /></a><a href={whatsapp} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200 text-zinc-700 hover:border-red-200 hover:bg-red-50 hover:text-red-600"><MessageCircle className="h-5 w-5" /></a></div><div className="text-sm text-zinc-500">© 2026 Fast Drywall & Steel Frame VCA</div></div></footer>

      <a href={whatsapp} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-900/25 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3.5"><MessageCircle className="h-6 w-6" /><span className="hidden font-extrabold sm:inline">Pedir orçamento</span></a>
    </div>
  );
}
