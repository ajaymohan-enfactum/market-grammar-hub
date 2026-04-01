import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import App from "./App.tsx";
import "./index.css";

posthog.init("phc_C0roMVCpRCtVAu94QSdV21RlxqHDfmAkN2XC3smD1VV", {
  api_host: "https://us.i.posthog.com",
  autocapture: false,
});

posthog.capture("brand_book_opened");

createRoot(document.getElementById("root")!).render(<App />);
