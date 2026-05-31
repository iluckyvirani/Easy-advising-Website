export const BASE_URL = "https://easy-backend-pi.vercel.app";

/** Opens the Easy Advising app for a specific advisor (Reserve Seat on session details). */
export const ADVISOR_DEEPLINK_BASE = "https://easyadvising.in/deeplink/advisor";
// export const BASE_URL = "http://localhost:3000";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.easyadvising.app&pcampaignid=web_share";

export const APP_STORE_URL =
  "https://apps.apple.com/in/app/easy-advising-consultant/id6756213524";

export const ADVISOR_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.easyadvising.consultant&pcampaignid=web_share";

export const SUPPORT_EMAIL = "contact@easyadvising.com";

export const META_PIXEL_ID = "3515113125790041";

// Set to your WhatsApp number in international format (no +, no spaces) e.g. "919876543210"
// Leave empty string to hide the WhatsApp CTA.
export const WHATSAPP_NUMBER = "919876543210";
export const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hi Easy Advising team, I have a question about the app."
    )}`
  : "";
