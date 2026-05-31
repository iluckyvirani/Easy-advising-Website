import { useEffect } from "react";
import { attachGlobalClickTracking } from "@/lib/metaPixel";

/** Captures every button and link click and sends it to Meta Pixel. */
const GlobalClickTracker = () => {
  useEffect(() => attachGlobalClickTracking(), []);
  return null;
};

export default GlobalClickTracker;
