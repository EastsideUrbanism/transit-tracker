import { themes as prismThemes } from "prism-react-renderer"
import type { Options as UmamiOptions } from "@dipakparmar/docusaurus-plugin-umami"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  title: "Transit Tracker",
  tagline: "DIY public transit arrivals board",
  favicon: "img/favicon.png",

  url: "https://transit-tracker.eastsideurbanism.org",
  baseUrl: "/",

  organizationName: "EastsideUrbanism",
  projectName: "transit-tracker",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@dipakparmar/docusaurus-plugin-umami",
      {
        websiteID: "a0f2b1c4-3d5e-4f8b-8a7c-9d6e0f3f1a2b",
        analyticsDomain: "umami.horner.tj",
        scriptName: "umami.js",
        dataDomains: "transit-tracker.eastsideurbanism.org",
      } satisfies UmamiOptions,
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/EastsideUrbanism/transit-tracker/tree/main/docs/",
        },
        theme: {
          customCss: ["./src/css/custom.css", "./src/css/bluesky-embed.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    image: "img/social.png",
    navbar: {
      title: "Transit Tracker",
      logo: {
        alt: "Transit Tracker Icon",
        src: "img/icon.svg",
        srcDark: "img/icon-dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          to: "configurator",
          label: "Configurator",
          position: "left",
        },
        {
          href: "https://github.com/EastsideUrbanism/transit-tracker",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Build Guide",
              to: "/docs/build-guide",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Eastside Urbanism",
              href: "https://eastsideurbanism.org/",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/zhXKQ4vMp8",
            },
            {
              label: "Bluesky",
              href: "https://bsky.app/profile/eastsideurbanism.org",
            },
          ],
        },
      ],
      copyright:
        "Transit Tracker is a project from <a href='https://eastsideurbanism.org'>Eastside Urbanism</a>. Licensed under CC BY-NC-SA 4.0",
    },
    prism: {
      additionalLanguages: ["yaml"],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
