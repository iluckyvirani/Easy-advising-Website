import ReactPixel from "react-facebook-pixel";

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

export const initFacebookPixel = (): void => {
  ReactPixel.init(PIXEL_ID);
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