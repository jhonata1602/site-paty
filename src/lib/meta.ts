declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

export const META_PIXEL_ID = "1134825301849821";

const makeEventId = () =>
  `evt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

const readCookie = (name: string) => {
  if (typeof document === "undefined") return undefined;
  const item = document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${name}=`));
  return item ? decodeURIComponent(item.slice(name.length + 1)) : undefined;
};

export async function trackMetaEvent(
  eventName: "PageView" | "Lead" | "Contact",
  userData?: {
    email?: string;
    phone?: string;
    firstName?: string;
  },
) {
  const eventId = makeEventId();

  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName, {}, { eventID: eventId });
  }

  if (typeof window !== "undefined") {
    void fetch("/api/meta-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        eventName,
        eventId,
        eventSourceUrl: window.location.href,
        userData,
        browserIds: {
          fbp: readCookie("_fbp"),
          fbc: readCookie("_fbc"),
        },
      }),
    }).catch(() => {
      // Tracking must never interrupt the user experience.
    });
  }

  return eventId;
}

export function initMetaPixel() {
  if (typeof window === "undefined" || window.fbq) return;

  const fbq = function (...args: unknown[]) {
    const fn = fbq as unknown as {
      callMethod?: (...values: unknown[]) => void;
      queue?: unknown[][];
    };
    if (fn.callMethod) fn.callMethod(...args);
    else {
      fn.queue ??= [];
      fn.queue.push(args);
    }
  } as unknown as typeof window.fbq;

  const typed = fbq as unknown as {
    push?: typeof fbq;
    loaded?: boolean;
    version?: string;
    queue?: unknown[][];
  };

  typed.push = fbq;
  typed.loaded = true;
  typed.version = "2.0";
  typed.queue = [];

  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  window.fbq("init", META_PIXEL_ID);
}
