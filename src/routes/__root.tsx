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

const reviewAvatar4 = "data:image/jpeg;base64,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";

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
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

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
    const applyReviewLayout = () => {
      const section = document.getElementById("avaliacoes");
      if (!section) return;

      const grid = section.querySelector(".mt-12.grid") as HTMLElement | null;
      if (!grid) return;

      grid.style.alignItems = "stretch";
      grid.style.gridAutoRows = "1fr";

      const cards = Array.from(grid.children) as HTMLElement[];
      cards.forEach((card) => {
        card.style.height = "100%";
        card.style.minHeight = "260px";
        card.style.display = "flex";
        card.style.flexDirection = "column";
      });

      const fourth = cards[3];
      if (!fourth) return;

      const avatarHolder = fourth.querySelector(".mt-auto.flex.items-center.gap-4.pt-7");
      if (avatarHolder) {
        const oldAvatar = avatarHolder.firstElementChild;
        if (oldAvatar?.tagName !== "IMG") {
          const img = document.createElement("img");
          img.src = reviewAvatar4;
          img.alt = "Cliente Fast";
          img.className = "h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white shadow-sm";
          oldAvatar?.replaceWith(img);
        }

        const name = avatarHolder.querySelector("p");
        if (name) name.textContent = "Cliente Fast";
      }
    };

    const timer = window.setTimeout(applyReviewLayout, 100);
    const observer = new MutationObserver(applyReviewLayout);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <div className="border-t border-zinc-200 bg-white px-5 py-4 text-center text-xs text-zinc-500">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <a href="/politica-de-privacidade.html" className="font-semibold transition hover:text-red-600 hover:underline">
            Política de Privacidade
          </a>
          <span className="text-zinc-300" aria-hidden="true">|</span>
          <a href="/termos-de-uso.html" className="font-semibold transition hover:text-red-600 hover:underline">
            Termos de Uso
          </a>
        </div>
      </div>
    </QueryClientProvider>
  );
}
