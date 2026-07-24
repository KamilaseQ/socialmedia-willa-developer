"use client";

import { useEffect } from "react";

export function RevealController() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    const onScroll = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 36);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return () => window.removeEventListener("scroll", onScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      document.documentElement.classList.remove("reveal-ready");
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
