import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Facebook,
  Hammer,
  Instagram,
  Layers3,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const whatsapp = "https://api.whatsapp.com/send/?phone=5577988560246&text=Ol%C3%A1%21%20Quero%20solicitar%20um%20or%C3%A7amento%20com%20a%20Fast%20Drywall.&type=phone_number&app_absent=0";
const instagram = "https://www.instagram.com/fastdrywall.vitoriaconquista/";
const facebook = "https://www.facebook.com/fastdrywall.vitconquista.ba";
const maps = "https://www.google.com.br/maps/place/Fast+Drywall+%26+Steel+Frame:+Placa,+Gesso,+Forro+em+Vit%C3%B3ria+da+Conquista+BA/@-14.870544,-40.8437667,17z/data=!3m1!4b1!4m6!3m5!1s0x7463b0fef96b6b7:0xd7bae0bcd7a68159!8m2!3d-14.870544!4d-40.8411918!16s%2Fg%2F11rgcf4zvr";

const services = [
  { icon: Layers3, title: "Drywall", text: "Soluções modernas para paredes, divisórias e ambientes com instalação ágil, obra mais limpa e ótimo acabamento.", bullets: ["Instalação até 4x mais rápida que a alvenaria", "Menos entulho", "Conforto térmico e acústico"] },
  { icon: Building2, title: "Steel Frame", text: "Sistema construtivo leve, resistente e preciso para projetos que buscam produtividade e inovação.", bullets: ["Obra até 40% mais rápida", "Aço 100% reciclável", "Precisão industrial"] },
  { icon: Wrench, title: "Gesso, Forro e Placas", text: "Materiais e soluções para complementar sua obra a seco com praticidade, variedade e suporte especializado.", bullets: ["Produtos de qualidade", "Estoque completo", "Pronta entrega"] },
];

const benefits = [
  { icon: BadgeCheck, title: "Produtos de qualidade", text: "Materiais selecionados para uma obra bem executada." },
  { icon: PackageCheck, title: "Estoque completo", text: "Tudo o que você precisa para construção a seco em um só lugar." },
  { icon: Truck, title: "Pronta entrega", text: "Mais agilidade para não travar o andamento do seu projeto." },
  { icon: ShieldCheck, title: "Equipe especializada", text: "Orientação para você escolher a solução adequada para sua obra." },
];

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 rotate-45 place-items-center rounded-[10px] bg-red-600 shadow-[0_10px_30px_rgba(220,38,38,.22)]">
        <div className="h-5 w-2.5 -rotate-45 rounded-sm border-b-[5px] border-r-[5px] border-white" />
      </div>
      <div className="leading-none">
        <div className="text-xl font-black tracking-[-0.04em]">FAST</div>
        <div className="mt-1 text-[10px] font-semibold uppercase tracking-[.16em] text-zinc-500">Drywall & Steel Frame</div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
          <a href="#inicio"><Brand /></a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-zinc-600 lg:flex">
            <a href="#servicos" className="hover:text-red-600">Soluções</a>
            <a href="#vantagens" className="hover:text-red-600">Por que a Fast</a>
            <a href="#avaliacoes" className="hover:text-red-600">Avaliações</a>
            <a href="#localizacao" className="hover:text-red-600">Localização</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-red-600/20 hover:bg-red-700">
            <MessageCircle className="h-4 w-4" /> <span className="hidden sm:inline">Solicitar orçamento</span><span className="sm:hidden">Orçamento</span>
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden bg-zinc-950">
          <div className="absolute inset-0 [background:radial-gradient(circle_at_78%_18%,rgba(220,38,38,.34),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(127,29,29,.23),transparent_34%)]" />
          <div className="absolute -right-16 top-24 h-64 w-64 rotate-45 rounded-[50px] border border-white/10 bg-white/[.03]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-8 lg:py-28">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-200"><Sparkles className="h-4 w-4 text-red-400" /> Construção a seco em Vitória da Conquista</div>
              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.96] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">Construir com inteligência é construir com a <span className="text-red-500">Fast Drywall.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">Soluções modernas em Drywall e Steel Frame para uma obra mais rápida, econômica, limpa e com excelente acabamento.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 font-black text-white shadow-xl shadow-red-600/20 hover:bg-red-700">Pedir orçamento no WhatsApp <ArrowRight className="h-4 w-4" /></a>
                <a href="#servicos" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white hover:bg-white/10">Conhecer soluções</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-300">
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-red-400" /> Equipe especializada</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-red-400" /> Estoque completo</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-red-400" /> Melhor custo-benefício</span>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-white/[.055] p-4 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[26px] border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div><p className="text-sm font-black uppercase tracking-[.18em] text-red-400">Fast Drywall VCA</p><h2 className="mt-3 text-3xl font-black tracking-tight text-white">Sua obra começa com a escolha certa.</h2></div>
                  <Hammer className="h-9 w-9 shrink-0 text-red-500" />
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3">{["Drywall", "Steel Frame", "Placas", "Gesso", "Forros", "Acessórios"].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-zinc-100"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-red-500" />{item}</div>)}</div>
                <div className="mt-7 rounded-2xl bg-red-600 p-5 text-white"><div className="text-xs font-bold uppercase tracking-[.16em] text-red-100">WhatsApp</div><div className="mt-2 text-2xl font-black">(77) 98856-0246</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-3 lg:px-8">
            {["Atendimento especializado", "Estoque completo e pronta entrega", "Vitória da Conquista - BA"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-zinc-50 px-5 py-4 text-sm font-bold"><Check className="h-4 w-4 text-red-600" />{item}</div>)}
          </div>
        </section>

        <section id="servicos" className="bg-zinc-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[.18em] text-red-600">Soluções para sua obra</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Tudo para construir com mais eficiência.</h2><p className="mt-5 text-lg leading-8 text-zinc-600">Materiais e sistemas modernos para projetos residenciais, comerciais, reformas e novas construções.</p></div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">{services.map(({icon:Icon,title,text,bullets}) => <article key={title} className="rounded-[28px] border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-red-600 text-white"><Icon className="h-6 w-6" /></div><h3 className="mt-6 text-2xl font-black">{title}</h3><p className="mt-3 leading-7 text-zinc-600">{text}</p><div className="mt-6 space-y-3">{bullets.map(b => <div key={b} className="flex items-start gap-2 text-sm font-semibold text-zinc-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />{b}</div>)}</div></article>)}</div>
          </div>
        </section>

        <section id="vantagens" className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div><p className="text-sm font-black uppercase tracking-[.18em] text-red-600">Por que escolher a Fast</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Menos complicação. Mais resultado na obra.</h2><p className="mt-5 text-lg leading-8 text-zinc-600">Especialistas em sistemas de construção a seco, com produtos de qualidade, equipe preparada e suporte para sua obra.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-black text-red-600">Falar com a equipe <ArrowRight className="h-4 w-4" /></a></div>
            <div className="grid gap-4 sm:grid-cols-2">{benefits.map(({icon:Icon,title,text}) => <div key={title} className="rounded-[26px] border border-zinc-200 p-6"><Icon className="h-7 w-7 text-red-600" /><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-2 leading-7 text-zinc-600">{text}</p></div>)}</div>
          </div>
        </section>

        <section className="bg-zinc-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[.18em] text-red-400">Atendimento simples</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Do primeiro contato ao orçamento.</h2></div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">{[["01","Conte seu projeto","Chame no WhatsApp e explique o que você precisa."],["02","Receba orientação","A equipe ajuda a identificar materiais e soluções adequadas."],["03","Solicite seu orçamento","Receba as informações para avançar com mais clareza."]].map(([n,t,x]) => <div key={n} className="rounded-[26px] border border-white/10 bg-white/5 p-7"><div className="text-sm font-black text-red-400">{n}</div><h3 className="mt-5 text-2xl font-black">{t}</h3><p className="mt-3 leading-7 text-zinc-400">{x}</p></div>)}</div>
          </div>
        </section>

        <section id="avaliacoes" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-50 p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[.18em] text-red-600">Reputação e confiança</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Veja o que os clientes dizem no Google.</h2><p className="mt-5 text-lg leading-8 text-zinc-600">Para manter o site fiel às avaliações reais, os depoimentos podem ser adicionados aqui diretamente a partir do Perfil da Empresa no Google.</p></div>
              <a href={maps} target="_blank" rel="noreferrer" className="mt-7 inline-flex shrink-0 items-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 font-black text-white hover:bg-red-600 lg:mt-0">Ver avaliações no Google <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 lg:px-8 lg:pb-28"><div className="mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-red-600 px-7 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between"><div><p className="text-sm font-black uppercase tracking-[.18em] text-red-100">Seu projeto pode começar agora</p><h2 className="mt-3 text-3xl font-black tracking-[-.04em] sm:text-4xl">Peça seu orçamento sem compromisso.</h2><p className="mt-4 text-lg text-red-100">Fale diretamente com a equipe da Fast Drywall.</p></div><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-black text-red-600 lg:mt-0">Chamar no WhatsApp <MessageCircle className="h-5 w-5" /></a></div></section>

        <section id="localizacao" className="border-t border-zinc-200 bg-zinc-50 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div className="rounded-[30px] bg-zinc-950 p-8 text-white sm:p-10"><p className="text-sm font-black uppercase tracking-[.18em] text-red-400">Onde estamos</p><h2 className="mt-3 text-3xl font-black">Visite a Fast Drywall.</h2><div className="mt-8 space-y-6"><div className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-red-500" /><div><div className="font-bold">Av. Luís Eduardo Magalhães, Quadra 05</div><div className="mt-1 text-sm leading-6 text-zinc-400">Recreio · Vitória da Conquista - BA<br />CEP 45020-282</div></div></div><div className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-red-500" /><div><div className="font-bold">(77) 98856-0246</div><div className="mt-1 text-sm text-zinc-400">WhatsApp</div></div></div></div><a href={maps} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-bold">Abrir no Google Maps <ArrowRight className="h-4 w-4" /></a></div>
            <div className="min-h-[420px] overflow-hidden rounded-[30px] border border-zinc-200 bg-white"><iframe title="Mapa da Fast Drywall" src="https://www.google.com/maps?q=-14.870544,-40.8411918&z=17&output=embed" className="h-full min-h-[420px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          </div>
        </section>
      </main>

      <footer><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8"><Brand /><div className="flex items-center gap-3"><a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200 hover:text-red-600"><Instagram className="h-5 w-5" /></a><a href={facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200 hover:text-red-600"><Facebook className="h-5 w-5" /></a><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200 hover:text-red-600"><MessageCircle className="h-5 w-5" /></a></div><div className="text-sm text-zinc-500">© 2026 Fast Drywall & Steel Frame VCA</div></div></footer>

      <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Pedir orçamento pelo WhatsApp" className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3.5"><MessageCircle className="h-6 w-6" /><span className="hidden font-extrabold sm:inline">Pedir orçamento</span></a>
    </div>
  );
}
