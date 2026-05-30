export interface LiveSession {
  id: number;
  type: "video" | "audio";
  live: boolean;
  title: string;
  host: string;
  role: string;
  avatar: string;
  banner: string | null;
  time: string;
  viewers: string;
  seat: string;
  perQ: string;
  description?: string | null;
  slug?: string | null;
  isActive: boolean;
}

export function getSessionPath(session: Pick<LiveSession, "id" | "slug">): string {
  return `/live-sessions/${session.slug || session.id}`;
}

export function getSessionShareUrl(session: Pick<LiveSession, "id" | "slug" | "title" | "host">): string {
  const path = getSessionPath(session);
  if (typeof window !== "undefined") {
    return `${window.location.origin}${path}`;
  }
  return path;
}

export function getSessionDescription(session: LiveSession): string {
  const fromApi = session.description?.trim();
  if (fromApi) return fromApi;

  const format = session.type === "video" ? "video webinar" : "live audio room";
  return `Join ${session.host} (${session.role}) for an interactive ${format}: "${session.title}".

Get expert guidance, learn from real examples, and participate in live Q&A with other attendees. Seats are limited — reserve yours in the Easy Advising app before the session fills up.`;
}
