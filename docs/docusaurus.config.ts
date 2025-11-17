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
        websiteID: "fc090cbd-ac45-42b8-9da4-6d5a4037964f",
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
          showLastUpdateTime: true,
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
          to: "docs/user-manual/faq/agency-support",
          label: "Supported Agencies",
          position: "left",
        },
        {
          to: "configurator",
          label: "Configurator",
          position: "left",
        },
        {
          to: "docs/user-manual/troubleshooting",
          label: "Need Help?",
          position: "right",
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
    algolia: {
      appId: "8OZCDSZZBS",
      apiKey: "50910132f5b276791d199f3f10632ebf",
      indexName: "transit-tracker-eastsideurbanism",
    },
  } satisfies Preset.ThemeConfig,
}

export default config
