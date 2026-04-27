import { PLAY_STORE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import playstoreIcon from "@/assets/playstore.png";

export const PlayStoreButton = ({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) => {
  const isDark = variant === "dark";
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-smooth shadow-soft hover:scale-[1.03] hover:shadow-glow",
        isDark
          ? "bg-foreground text-background"
          : "bg-background text-foreground border border-border",
        className
      )}
      aria-label="Get it on Google Play"
    >
      {/* Google Play icon */}
      <img src={playstoreIcon} alt="" className="h-7 w-7 object-contain" aria-hidden="true" />
      <div className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase opacity-80">Get it on</span>
        <span className="text-base font-semibold">Google Play</span>
      </div>
    </a>
  );
};
