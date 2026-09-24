import { createFileRoute } from "@tanstack/react-router";
import { createHash } from "node:crypto";

type CapiPayload = {
  eventName?: "PageView" | "Lead" | "Contact";
  eventId?: string;
  eventSourceUrl?: string;
  userData?: {
    email?: string;
    phone?: string;
    firstName?: string;
  };
  browserIds?: {
    fbp?: string;
    fbc?: string;
  };
};

const PIXEL_ID = "1134825301849821";

const normalize = (value?: string) => value?.trim().toLowerCase() || "";
const hash = (value?: string) => {
  const normalized = normalize(value);
  return normalized ? createHash("sha256").update(normalized).digest("hex") : undefined;
};

export const Route = createFileRoute("/api/meta-capi")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const accessToken = process.env.META_CONVERSIONS_API_TOKEN;
        const graphVersion = process.env.META_GRAPH_API_VERSION || "v24.0";

        if (!accessToken) {
          return Response.json(
            { ok: false, stage: "env", error: "META_CONVERSIONS_API_TOKEN is not configured" },
            { status: 503 },
          );
        }

        const eventId = `diagnostic_${Date.now()}`;
        const payload = {
          test_event_code: "TEST89923",
          data: [
            {
              event_name: "PageView",
              event_time: Math.floor(Date.now() / 1000),
              event_id: eventId,
              action_source: "website",
              event_source_url: "https://www.fastdrywallsteelframevca.com/",
              user_data: {
                client_user_agent: request.headers.get("user-agent") || "Vercel CAPI diagnostic",
              },
            },
          ],
        };

        const response = await fetch(
          `https://graph.facebook.com/${graphVersion}/${PIXEL_ID}/events?access_token=${encodeURIComponent(accessToken)}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          },
        );

        const result = await response.json().catch(() => ({}));

        return Response.json(
          {
            ok: response.ok,
            stage: "meta",
            status: response.status,
            eventId,
            meta: result,
          },
          { status: response.ok ? 200 : 502 },
        );
      },
      POST: async ({ request }) => {
        const accessToken = process.env.META_CONVERSIONS_API_TOKEN;
        const graphVersion = process.env.META_GRAPH_API_VERSION || "v24.0";

        if (!accessToken) {
          return Response.json(
            { ok: false, error: "META_CONVERSIONS_API_TOKEN is not configured" },
            { status: 503 },
          );
        }

        const body = (await request.json().catch(() => ({}))) as CapiPayload;
        const eventName = body.eventName;
        const eventId = body.eventId;

        if (!eventName || !eventId) {
          return Response.json({ ok: false, error: "Missing eventName or eventId" }, { status: 400 });
        }

        const forwardedFor =
          request.headers.get("x-forwarded-for") ||
          request.headers.get("x-real-ip") ||
          request.headers.get("x-vercel-forwarded-for") ||
          "";
        const clientIp = forwardedFor.split(",")[0]?.trim() || undefined;
        const userAgent = request.headers.get("user-agent") || undefined;

        const userData: Record<string, string | string[]> = {};
        const em = hash(body.userData?.email);
        const ph = body.userData?.phone
          ? createHash("sha256")
              .update(body.userData.phone.replace(/\D/g, ""))
              .digest("hex")
          : undefined;
        const fn = hash(body.userData?.firstName);

        if (em) userData.em = [em];
        if (ph) userData.ph = [ph];
        if (fn) userData.fn = [fn];
        if (body.browserIds?.fbp) userData.fbp = body.browserIds.fbp;
        if (body.browserIds?.fbc) userData.fbc = body.browserIds.fbc;
        if (clientIp) userData.client_ip_address = clientIp;
        if (userAgent) userData.client_user_agent = userAgent;

        const payload = {
          test_event_code: "TEST89923",
          data: [
            {
              event_name: eventName,
              event_time: Math.floor(Date.now() / 1000),
              event_id: eventId,
              action_source: "website",
              event_source_url: body.eventSourceUrl || "https://www.fastdrywallsteelframevca.com/",
              user_data: userData,
            },
          ],
        };

        const response = await fetch(
          `https://graph.facebook.com/${graphVersion}/${PIXEL_ID}/events?access_token=${encodeURIComponent(accessToken)}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          },
        );

        const result = await response.json().catch(() => ({}));

        return Response.json(
          { ok: response.ok, meta: result },
          { status: response.ok ? 200 : 502 },
        );
      },
    },
  },
});
