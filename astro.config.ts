import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import mermaid from "astro-mermaid";
import rehypeExternalLinks from "rehype-external-links";
import { remarkReadingTime } from "./src/utils/remarkReadingTime";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    mermaid({
      theme: "default",
      autoTheme: true,
    }),
    sitemap({
      filter: page => SITE.showArchives || !page.endsWith("/archives"),
    }),
    mdx(),
    react(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [remarkCollapse, { test: "Table of contents" }],
      remarkReadingTime,
    ],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["nofollow", "noopener", "noreferrer"],
        },
      ],
    ],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        // Astro 5 and @shikijs/transformers can resolve duplicate Shiki type
        // packages; the runtime transformer contract is identical.
        transformerNotationHighlight() as unknown as Parameters<
          typeof defineConfig
        >[0] extends { markdown?: { shikiConfig?: { transformers?: infer T } } }
          ? T extends (infer U)[]
            ? U
            : never
          : never,
        transformerNotationWordHighlight() as unknown as Parameters<
          typeof defineConfig
        >[0] extends { markdown?: { shikiConfig?: { transformers?: infer T } } }
          ? T extends (infer U)[]
            ? U
            : never
          : never,
        transformerNotationDiff({
          matchAlgorithm: "v3",
        }) as unknown as Parameters<typeof defineConfig>[0] extends {
          markdown?: { shikiConfig?: { transformers?: infer T } };
        }
          ? T extends (infer U)[]
            ? U
            : never
          : never,
      ],
    },
  },
  vite: {
    // eslint-disable-next-line
    // @ts-ignore
    // This will be fixed in Astro 6 with Vite 7 support
    // See: https://github.com/withastro/astro/issues/14030
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    preserveScriptOrder: true,
  },
});
