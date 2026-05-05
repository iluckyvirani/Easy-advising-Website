import { useEffect, useState } from "react";
import { Video, Mic, Calendar, Users, Radio } from "lucide-react";
import axios from "axios";
import { PLAY_STORE_URL, BASE_URL } from "@/lib/constants";

interface LiveSession {
  id: number;
  type: "video" | "audio";
  live: boolean;
  title: string;
  host: string;
  role: string;
  avatar: string;
  time: string;
  viewers: string;
  seat: string;
  perQ: string;
  isActive: boolean;
}

export const LiveSessions = () => {
  const [sessions, setSessions] = useState<LiveSession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<LiveSession[]>(`${BASE_URL}/api/live-sessions/active`)
      .then((res) => setSessions(res.data))
      .catch((err) => console.error("Failed to fetch live sessions:", err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <section id="sessions" className="py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
              <Radio className="h-4 w-4" /> Live Sessions
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Join live <span className="text-brand-gradient">webinars & 1:1 calls</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Hop into live audio rooms, join video webinars, or book a 1-on-1 session with simple, upfront pricing.
            </p>
          </div>
        </div>

        {/* Mobile: horizontal swipe slider */}
        <div className="sm:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4 pb-2">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-card animate-pulse w-[85%] shrink-0 snap-center"
                  >
                    <div className="h-44 bg-accent" />
                    <div className="p-5 pt-6 space-y-3">
                      <div className="h-6 bg-accent rounded" />
                      <div className="h-4 bg-accent rounded w-3/4" />
                    </div>
                  </div>
                ))
              : sessions.map((s, i) => (
              <a
                key={i}
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-card transition-smooth w-[85%] shrink-0 snap-center"
              >
                <div className="relative h-44 bg-brand-gradient overflow-hidden">
                  <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
                  <img src={s.avatar} alt={s.host} className="absolute bottom-4 left-5 h-20 w-20 rounded-full border-4 border-card object-cover" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    {s.live && (
                      <span className="inline-flex items-center gap-1.5 bg-brand-red text-white text-xs font-bold px-2.5 py-1 rounded-full animate-pulse-ring">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" /> LIVE
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {s.type === "video" ? <Video className="h-3 w-3" /> : <Mic className="h-3 w-3" />}
                      {s.type === "video" ? "Video" : "Audio"}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex flex-col items-end gap-1.5">
                    <div className="bg-white text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">{s.seat}</div>
                    <div className="bg-white text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">{s.perQ}</div>
                  </div>
                </div>
                <div className="p-5 pt-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg leading-snug line-clamp-2">{s.title}</h3>
                  <div className="mt-2">
                    <p className="font-semibold text-sm">{s.host}</p>
                    <p className="text-xs text-muted-foreground">{s.role}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{s.time}</span>
                    <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{s.viewers}</span>
                  </div>
                  <div className="mt-4 inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-brand-gradient text-white font-semibold text-sm">
                    {s.live ? "Join Now" : "Reserve Seat"}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop / tablet: grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="relative flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-card animate-pulse"
                >
                  <div className="h-44 bg-accent" />
                  <div className="p-5 pt-6 space-y-3">
                    <div className="h-6 bg-accent rounded" />
                    <div className="h-4 bg-accent rounded w-3/4" />
                  </div>
                </div>
              ))
            : sessions.map((s, i) => (
            <a
              key={i}
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-smooth"
            >
              <div className="relative h-44 bg-brand-gradient overflow-hidden">
                <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
                <img src={s.avatar} alt={s.host} className="absolute bottom-4 left-5 h-20 w-20 rounded-full border-4 border-card object-cover" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  {s.live && (
                    <span className="inline-flex items-center gap-1.5 bg-brand-red text-white text-xs font-bold px-2.5 py-1 rounded-full animate-pulse-ring">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" /> LIVE
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {s.type === "video" ? <Video className="h-3 w-3" /> : <Mic className="h-3 w-3" />}
                    {s.type === "video" ? "Video" : "Audio"}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex flex-col items-end gap-1.5">
                  <div className="bg-white text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {s.seat}
                  </div>
                  <div className="bg-white text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {s.perQ}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-6 flex-1 flex flex-col">
                <h3 className="font-bold text-lg leading-snug group-hover:text-brand-red transition-smooth line-clamp-2">
                  {s.title}
                </h3>
                <div className="mt-2">
                  <p className="font-semibold text-sm">{s.host}</p>
                  <p className="text-xs text-muted-foreground">{s.role}</p>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {s.time}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {s.viewers}
                  </span>
                </div>

                <div className="mt-4 inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-brand-gradient text-white font-semibold text-sm group-hover:scale-[1.02] transition-smooth">
                  {s.live ? "Join Now" : "Reserve Seat"}
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Tapping any session opens it in the Easy Advising app — or redirects you to install it from the Play Store.
        </p>
      </div>
    </section>
  );
};
