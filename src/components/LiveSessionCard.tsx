import { Link } from "react-router-dom";
import { Video, Mic, Calendar, Users } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/constants";
import type { LiveSession } from "@/types/liveSession";
import { getSessionPath } from "@/types/liveSession";
import { cn } from "@/lib/utils";

interface LiveSessionCardProps {
  session: LiveSession;
  className?: string;
}

export const LiveSessionCard = ({ session: s, className }: LiveSessionCardProps) => {
  return (
    <article
      className={cn(
        "group flex flex-col rounded-xl bg-card border border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-smooth overflow-hidden",
        className
      )}
    >
      <div className={cn("relative overflow-hidden", !s.banner && "aspect-[16/9] bg-brand-gradient")}>
        {s.banner ? (
          <img
            src={s.banner}
            alt=""
            className="w-full h-auto block"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        )}

        {s.live && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 bg-brand-red text-white text-xs font-bold px-2.5 py-1 rounded-full animate-pulse-ring">
              <span className="h-1.5 w-1.5 rounded-full bg-white" /> LIVE
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start gap-3 -mt-8 relative z-10">
          <img
            src={s.avatar}
            alt={s.host}
            className="h-16 w-16 rounded-full border-4 border-card object-cover shrink-0 shadow-md"
          />
          <div className="min-w-0 pt-6">
            <p className="font-semibold text-sm">{s.host}</p>
            <p className="text-xs text-muted-foreground">{s.role}</p>
          </div>
        </div>

        <h3 className="mt-3 font-bold text-lg leading-snug line-clamp-2 group-hover:text-brand-red transition-smooth">
          {s.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 bg-secondary text-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
            {s.type === "video" ? <Video className="h-3 w-3" /> : <Mic className="h-3 w-3" />}
            {s.type === "video" ? "Video" : "Audio"}
          </span>
          <span className="inline-flex items-center bg-secondary text-foreground text-xs font-bold px-2.5 py-1 rounded-full">
            {s.seat}
          </span>
          <span className="inline-flex items-center bg-secondary text-foreground text-xs font-bold px-2.5 py-1 rounded-full">
            {s.perQ}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-brand-red/15 bg-brand-red/5 px-3 py-2.5">
            <div className="flex items-center gap-1.5 text-brand-red mb-1">
              <Calendar className="h-3.5 w-3.5 shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-wide">Date</span>
            </div>
            <p className="text-xs font-semibold text-foreground leading-snug line-clamp-2">{s.time}</p>
          </div>
          <div className="rounded-xl border border-brand-red/15 bg-brand-red/5 px-3 py-2.5">
            <div className="flex items-center gap-1.5 text-brand-red mb-1">
              <Users className="h-3.5 w-3.5 shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-wide">Registered</span>
            </div>
            <p className="text-xs font-semibold text-foreground">{s.viewers}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2  mt-4">
          <Link
            to={getSessionPath(s)}
            className="inline-flex items-center justify-center w-full py-2.5 rounded-xl border border-border bg-background font-semibold text-sm hover:bg-secondary transition-smooth"
          >
            View Details
          </Link>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-brand-gradient text-white font-semibold text-sm hover:scale-[1.02] transition-smooth"
          >
            {s.live ? "Join Now" : "Reserve Seat"}
          </a>
        </div>
      </div>
    </article>
  );
};
