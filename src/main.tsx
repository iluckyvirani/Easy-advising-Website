import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { initFacebookPixel } from "./lib/metaPixel.ts";

initFacebookPixel();

createRoot(document.getElementById("root")!).render(<App />);