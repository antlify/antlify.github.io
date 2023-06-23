import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import cookieconsent from "@jop-software/astro-cookieconsent";
import { cookieConsentConfig } from "./src/i18n/cookie";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "https://antlify.github.io",
  base: "",
  trailingSlash: 'ignore',
  integrations: [prefetch(), react(), sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), AutoImport({
    imports: ["@/shortcodes/Button", "@/shortcodes/Accordion", "@/shortcodes/Notice", "@/shortcodes/Video", "@/shortcodes/Youtube"]
  }), mdx(), cookieconsent(cookieConsentConfig)],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Tartalom"
    }]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    },
    extendDefaultPlugins: true
  }
});
