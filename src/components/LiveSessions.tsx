import { useEffect, useState } from "react";
import { Radio } from "lucide-react";
import axios from "axios";
import { BASE_URL } from "@/lib/constants";
import { LiveSessionCard } from "@/components/LiveSessionCard";
import type { LiveSession } from "@/types/liveSession";

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

  const skeletonCard = (className?: string) => (
    <div
      className={`flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-card animate-pulse ${className ?? ""}`}
    >
      <div className="bg-accent aspect-[16/9]" />
      <div className="p-5 space-y-3">
        <div className="flex gap-3">
          <div className="h-16 w-16 rounded-full bg-accent shrink-0 -mt-10" />
          <div className="flex-1 pt-8 space-y-2">
            <div className="h-4 bg-accent rounded w-2/3" />
            <div className="h-3 bg-accent rounded w-1/2" />
          </div>
        </div>
        <div className="h-6 bg-accent rounded" />
        <div className="h-10 bg-accent rounded" />
      </div>
    </div>
  );

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

        <div className="sm:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4 pb-2">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i}>{skeletonCard("w-[85%] shrink-0 snap-center")}</div>
                ))
              : sessions.map((s) => (
                  <LiveSessionCard
                    key={s.id}
                    session={s}
                    className="w-[85%] shrink-0 snap-center"
                  />
                ))}
          </div>
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <div key={i}>{skeletonCard()}</div>)
            : sessions.map((s) => (
                <LiveSessionCard key={s.id} session={s} />
              ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          View full session details on the website, or reserve a seat in the Easy Advising app.
        </p>
      </div>
    </section>
  );
};
