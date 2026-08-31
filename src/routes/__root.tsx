import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const reviewAvatar4 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA4KCw0LCQ4NDA0QDw4RFiQXFhQUFiwgIRokNC43NjMuMjI6QVNGOj1OPjIySGJJTlZYXV5dOEVmbWVabFNbXVn/2wBDAQ8QEBYTFioXFypZOzI7WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVn/wAARCABgAGADASIAAhEBAxE...TRUNCATED...";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">O endereço acessado não existe ou foi movido.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Voltar ao início</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">A página não carregou</h1>
        <p className="mt-2 text-sm text-muted-foreground">Ocorreu um erro. Tente atualizar a página ou volte ao início.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Tentar novamente</button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">Voltar ao início</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fast Drywall & Steel Frame VCA | Vitória da Conquista" },
      { name: "description", content: "Fast Drywall & Steel Frame em Vitória da Conquista. Soluções em drywall, steel frame, placas, gesso e forro. Solicite seu orçamento pelo WhatsApp." },
      { name: "author", content: "Fast Drywall & Steel Frame VCA" },
      { property: "og:title", content: "Fast Drywall & Steel Frame VCA" },
      { property: "og:description", content: "Soluções modernas em Drywall e Steel Frame para uma obra mais rápida, econômica e limpa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: "/hero-overrides.css" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <style>{`footer > div::after { content: none !important; display: none !important; }`}</style>
      </head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    const applyBrandLogo = () => {
      const logos = document.querySelectorAll<HTMLImageElement>('img[alt="Fast Drywall & Steel Frame"]');
      logos.forEach((logo) => {
        logo.src = "/fast-logo-2026.svg?v=20260828-2";
      });
      return logos.length >= 2;
    };

    applyBrandLogo();
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      if (applyBrandLogo() || attempts >= 20) window.clearInterval(timer);
    }, 250);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleFooterPhoneClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const phoneLink = target?.closest('footer a[aria-label="WhatsApp"]');
      const form = document.getElementById("formulario");

      if (!phoneLink || !form) return;

      event.preventDefault();
      event.stopPropagation();

      const headerOffset = 96;
      const targetTop = form.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });

      window.setTimeout(() => {
        document.getElementById("lead-name")?.focus({ preventScroll: true });
      }, 650);
    };

    document.addEventListener("click", handleFooterPhoneClick, true);
    return () => document.removeEventListener("click", handleFooterPhoneClick, true);
  }, []);

  useEffect(() => {
    let attempts = 0;
    const applyFourthReview = () => {
      attempts += 1;
      const section = document.getElementById("avaliacoes");
      const grid = section?.querySelector(".mt-12.grid");
      const fourthCard = grid?.children.item(3) as HTMLElement | null;
      if (!fourthCard) return false;

      const reviewText = fourthCard.querySelector("p.mt-5") as HTMLParagraphElement | null;
      if (reviewText && !reviewText.textContent?.includes("Tive um problema na minha obra")) {
        reviewText.textContent = "“Tive um problema na minha obra e a equipe da Fast Drywall me atendeu muito bem. Resolveram tudo com atenção, rapidez e um atendimento especial.”";
      }

      const footer = fourthCard.querySelector(".mt-auto.flex.items-center.gap-4.pt-7") as HTMLElement | null;
      if (!footer) return false;

      const existingImg = footer.querySelector("img");
      if (!existingImg) {
        const placeholder = footer.querySelector("span");
        if (placeholder) {
          const avatar = document.createElement("img");
          avatar.src = reviewAvatar4;
          avatar.alt = "Thiago T.";
          avatar.className = "h-12 w-12 shrink-0 rounded-full object-cover";
          placeholder.replaceWith(avatar);
        }
      } else if (existingImg.src !== reviewAvatar4) {
        existingImg.src = reviewAvatar4;
        existingImg.alt = "Thiago T.";
        existingImg.className = "h-12 w-12 shrink-0 rounded-full object-cover";
      }

      const name = footer.querySelector("p");
      if (name && name.textContent !== "Thiago T.") name.textContent = "Thiago T.";
      return true;
    };

    applyFourthReview();
    const timer = window.setInterval(() => {
      if (applyFourthReview() || attempts >= 20) window.clearInterval(timer);
    }, 250);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <div className="border-t border-zinc-200 bg-white px-5 py-4 text-center text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <a href="/politica-de-privacidade.html" className="font-bold text-red-600 transition hover:text-red-700 hover:underline">
            Política de Privacidade
          </a>
          <span className="text-zinc-300" aria-hidden="true">|</span>
          <a href="/termos-de-uso.html" className="font-bold text-red-600 transition hover:text-red-700 hover:underline">
            Termos de Uso
          </a>
        </div>
      </div>
    </QueryClientProvider>
  );
}
