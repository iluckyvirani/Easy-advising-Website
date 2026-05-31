import ReactPixel from "react-facebook-pixel";

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

export const initFacebookPixel = (): void => {
  if (PIXEL_ID) {
    ReactPixel.init(PIXEL_ID);
  }
};

export const trackPageView = (): void => {
  ReactPixel.pageView();
};

export const trackEvent = (
  eventName: string,
  data?: Record<string, unknown>
): void => {
  ReactPixel.track(eventName, data);
};

export const trackCustomEvent = (
  eventName: string,
  data?: Record<string, unknown>
): void => {
  ReactPixel.trackCustom(eventName, data);
};

export type ClickTrackPayload = {
  button_name: string;
  button_category: string;
  element_type: string;
  link_url?: string;
};

function getClickableElement(target: EventTarget | null): HTMLElement | null {
  if (!(target instanceof Element)) return null;
  const el = target.closest(
    "button, a[href], [role='button'], input[type='submit'], input[type='button']"
  ) as HTMLElement | null;
  if (!el || el.hasAttribute("data-track-skip")) return null;
  return el;
}

function getElementLabel(el: HTMLElement): string {
  const explicit = el.getAttribute("data-track-name");
  if (explicit) return explicit;

  const aria = el.getAttribute("aria-label");
  if (aria) return aria;

  const text = el.textContent?.trim().replace(/\s+/g, " ");
  if (text) return text.slice(0, 120);

  if (el instanceof HTMLAnchorElement && el.hash) return el.hash;
  if (el instanceof HTMLAnchorElement && el.pathname) return el.pathname;

  return "Click";
}

function getClickCategory(el: HTMLElement): string {
  const explicit = el.getAttribute("data-track-category");
  if (explicit) return explicit;

  if (el.closest("header")) return "Navbar";
  if (el.closest("footer")) return "Footer";
  if (el.closest("#sessions")) return "Live Sessions";
  if (el.closest("#home")) return "Hero";
  if (el.closest("#advisors")) return "Become Advisor";

  const tag = el.tagName.toLowerCase();
  if (tag === "a") return "Link";
  return "Button";
}

function getLinkUrl(el: HTMLElement): string | undefined {
  if (el instanceof HTMLAnchorElement) return el.href || undefined;
  const parent = el.closest("a[href]") as HTMLAnchorElement | null;
  return parent?.href || undefined;
}

function isLeadConversion(url?: string): boolean {
  if (!url) return false;
  return (
    url.includes("play.google.com") ||
    url.includes("apps.apple.com") ||
    url.includes("/deeplink/")
  );
}

/** Track any button or link click for Meta Pixel. */
export function trackButtonClick(el: HTMLElement): void {
  const linkUrl = getLinkUrl(el);
  const payload: ClickTrackPayload = {
    button_name: getElementLabel(el),
    button_category: getClickCategory(el),
    element_type: el.tagName.toLowerCase(),
    ...(linkUrl ? { link_url: linkUrl } : {}),
  };

  if (isLeadConversion(linkUrl)) {
    trackEvent("Lead", payload);
  } else {
    trackCustomEvent("ButtonClick", payload);
  }
}

/** Document-level listener — tracks all button and link clicks site-wide. */
export function attachGlobalClickTracking(): () => void {
  const handler = (event: MouseEvent) => {
    const el = getClickableElement(event.target);
    if (!el) return;
    trackButtonClick(el);
  };

  document.addEventListener("click", handler, true);
  return () => document.removeEventListener("click", handler, true);
}
