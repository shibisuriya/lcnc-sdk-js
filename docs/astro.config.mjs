import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  compressHTML: false,
  site: "https://developers.kissflow.com/",
  base: "/",
  integrations: [
    starlight({
      favicon: "/favicon.ico",
      title: "Developers",
      logo: {
        light: "./src/assets/logo.light.png",
        dark: "./src/assets/logo.dark.png",
      },
      social: {
        github: "https://github.com/kissflow/lcnc-sdk-js",
      },
      customCss: ["./src/styles/override.css"],
      sidebar: [
        {
          label: "Getting started",
          link: "/",
        },
        {
          label: "sdk",
          autogenerate: { directory: "sdk" },
        },
        {
          label: "Custom Components",
          autogenerate: { directory: "custom-components" },
        },
      ],
      components: {
        Footer: "./src/components/footer.astro",
        SocialIcons: "./src/components/social.links.astro",
        Search: "./src/components/search.astro",
      },
    }),
  ],
});
