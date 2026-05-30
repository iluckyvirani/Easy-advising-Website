import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Loader2,
  MessageCircle,
  Mic,
  Share2,
  Ticket,
  Users,
  Video,
} from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo.webp";
import { Footer } from "@/components/Footer";
import { fetchLiveSession } from "@/lib/liveSessionApi";
import { PLAY_STORE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { LiveSession } from "@/types/liveSession";
import { getSessionDescription, getSessionPath, getSessionShareUrl } from "@/types/liveSession";

import { trackEvent } from "@/lib/metaPixel";



function SessionCtaButton({
  live,
  className,
  onClick,
}: {
  live: boolean;
  className?: string;
  onClick: () => void;
}) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center flex-1 min-w-0 px-6 py-3.5 rounded-xl bg-brand-gradient text-white font-semibold text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] transition-smooth shadow-soft",
        className
      )}
    >
      {live ? "Join Now" : "Reserve Seat"}
    </a>
  );
}

const LiveSessionDetail = () => {
  const { slug: slugParam } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [session, setSession] = useState<LiveSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slugParam) {
      setError("Session not found.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetchLiveSession(slugParam)
      .then((data) => {
        setSession(data);
        if (data.slug && slugParam !== data.slug) {
          navigate(getSessionPath(data), { replace: true });
        }
      })
      .catch(() => setError("This session could not be loaded. It may have ended or been removed."))
      .finally(() => setLoading(false));
  }, [slugParam, navigate]);

  const description = session ? getSessionDescription(session) : "";

  const handleShare = useCallback(async () => {
    if (!session) return;

    const url = getSessionShareUrl(session);
    const shareData = {
      title: session.title,
      text: `Join "${session.title}" with ${session.host} on Easy Advising`,
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard");
    } catch {
      toast.error("Could not share this session");
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      trackEvent("ViewContent", {
        content_name: session.title,
        content_category: "Live Session",
      });
    }
  }, [session]);

  const handleJoinNow = () => {
    trackEvent("Lead", {
      session_name: session?.title,
      host: session?.host,
    });

    window.open(PLAY_STORE_URL, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="container flex items-center justify-between gap-3 h-14 sm:h-16 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img src={logo} alt="Easy Advising" className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-white p-0.5 shrink-0" />
            <span className="font-extrabold text-base sm:text-lg truncate hidden sm:inline">
              Easy Advising
            </span>
          </Link>
          <Link
            to="/#sessions"
            className="inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to sessions</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-5 sm:py-8 lg:py-12">
        <div className="container max-w-5xl px-4 sm:px-6">
          {loading && (
            <div className="flex flex-col items-center justify-center py-20 sm:py-24 text-muted-foreground">
              <Loader2 className="h-10 w-10 animate-spin text-brand-red mb-4" />
              <p className="text-sm font-medium">Loading session details…</p>
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 text-center shadow-card">
              <p className="text-muted-foreground text-sm sm:text-base">{error}</p>
              <Link
                to="/#sessions"
                className="mt-6 inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-gradient text-white font-semibold text-sm"
              >
                Browse live sessions
              </Link>
            </div>
          )}

          {!loading && session && (
            <article className="space-y-4 sm:space-y-6">
              <div className="rounded-xl sm:rounded-2xl border border-border bg-card overflow-hidden shadow-card">
                <div className={cn("relative bg-muted/40", !session.banner && "aspect-video bg-brand-gradient")}>
                  {session.banner ? (
                    <img
                      src={session.banner}
                      alt={session.title}
                      className="w-full h-auto block"
                    />
                  ) : (
                    <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
                  )}
                  {session.live && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 bg-brand-red text-white text-xs font-bold px-2.5 py-1 rounded-full animate-pulse-ring shadow-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" /> LIVE
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8 shadow-card space-y-5 sm:space-y-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    <img
                      src={session.avatar}
                      alt={session.host}
                      className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl border-2 border-border object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-bold text-sm sm:text-lg truncate">{session.host}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">{session.role}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-foreground hover:bg-secondary hover:text-brand-red transition-smooth"
                    aria-label="Share session"
                  >
                    <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>

                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight">
                    {session.title}
                  </h1>
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-secondary text-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                      {session.type === "video" ? <Video className="h-3.5 w-3.5" /> : <Mic className="h-3.5 w-3.5" />}
                      {session.type === "video" ? "Video Session" : "Audio room"}
                    </span>
                    {session.live && (
                      <span className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-xs font-bold px-3 py-1.5 rounded-full">
                        Happening now
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="rounded-xl border border-brand-red/15 bg-brand-red/5 p-3.5 sm:p-4">
                    <div className="flex items-center gap-2 text-brand-red mb-1.5 sm:mb-2">
                      <Calendar className="h-4 w-4 shrink-0" />
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wide">
                        Schedule
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold leading-snug">{session.time}</p>
                  </div>
                  <div className="rounded-xl border border-brand-red/15 bg-brand-red/5 p-3.5 sm:p-4">
                    <div className="flex items-center gap-2 text-brand-red mb-1.5 sm:mb-2">
                      <Users className="h-4 w-4 shrink-0" />
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wide">
                        Registered
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold">{session.viewers}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/50 p-3.5 sm:p-4">
                    <div className="flex items-center gap-2 text-brand-red mb-1.5 sm:mb-2">
                      <Ticket className="h-4 w-4 shrink-0" />
                      <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                        Seat pricing
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold">{session.seat}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/50 p-3.5 sm:p-4">
                    <div className="flex items-center gap-2 text-brand-red mb-1.5 sm:mb-2">
                      <MessageCircle className="h-4 w-4 shrink-0" />
                      <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                        Q&amp;A
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold">{session.perQ}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-border space-y-3">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {session.live
                      ? "Join this session in the Easy Advising app."
                      : "Limited seats available — reserve your spot in the app."}
                  </p>
                  <div className="flex gap-2 sm:gap-3">
                    <SessionCtaButton live={session.live} onClick={handleJoinNow}
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8 shadow-card">
                <h2 className="text-base sm:text-lg font-bold">About this session</h2>
                <div className="mt-3 sm:mt-4 text-muted-foreground leading-relaxed whitespace-pre-wrap text-sm sm:text-[15px]">
                  {description}
                </div>
              </div>
            </article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LiveSessionDetail;
