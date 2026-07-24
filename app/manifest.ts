import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Oferta social media dla Willa Developer",
    short_name: "Willa Developer",
    description:
      "Kompleksowa obsługa social mediów nastawiona na sprzedaż gotowych inwestycji.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1eb",
    theme_color: "#151414",
    lang: "pl-PL",
    categories: ["business", "marketing"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
