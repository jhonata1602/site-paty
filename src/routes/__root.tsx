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
    const section = document.getElementById("avaliacoes");
    if (!section) return;

    const cards = section.querySelectorAll(".mt-12.grid > *");
    const fourthCard = cards.item(3) as HTMLElement | null;
    if (!fourthCard) return;

    const avatarPlaceholder = fourthCard.querySelector(".mt-auto.flex.items-center.gap-4.pt-7 > span");
    if (!avatarPlaceholder) return;

    const avatar = document.createElement("img");
    avatar.src = reviewAvatar4;
    avatar.alt = "Cliente Fast";
    avatar.className = "h-12 w-12 shrink-0 rounded-full object-cover";
    avatarPlaceholder.replaceWith(avatar);
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
