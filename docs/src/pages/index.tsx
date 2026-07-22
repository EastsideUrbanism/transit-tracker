import type { ReactNode } from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"
import { useColorMode } from "@docusaurus/theme-common"
import { usePluginData } from "@docusaurus/useGlobalData"
import styles from "./index.module.css"
import { EmbeddedPostThread } from "react-bluesky-embed"
import type { BlueskyPost } from "../plugins/bluesky-posts"

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className={clsx(styles.heroCols)}>
          <div className="col">
            <img src="img/transit-tracker.webp" />
          </div>
          <div className="col">
            <Heading as="h1" className="hero__title">
              Transit Tracker
            </Heading>
            <p className="hero__subtitle">
              Transit Tracker is a DIY customizable public transit arrivals
              board for your home.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/build-guide"
              >
                Build Your Own
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/build-parties"
              >
                Join a Build Party
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function BlueskyEmbeds(): ReactNode {
  const { colorMode } = useColorMode()
  const embedTheme = colorMode === "dark" ? "dark" : "light"
  const posts = usePluginData("bluesky-posts-plugin") as BlueskyPost[]

  const columns: BlueskyPost[][] = [[], [], []]
  posts.forEach((post, index) => {
    columns[index % columns.length].push(post)
  })

  return (
    <div className={clsx(styles.blueskyPosts)}>
      {columns.map((columnPosts, colIndex) => (
        <div key={`column-${colIndex}`} className={styles.blueskyColumn}>
          {columnPosts.map(({ did, rkey, postThread }) => (
            <EmbeddedPostThread
              key={`${did}-${rkey}`}
              postThread={postThread}
              theme={embedTheme}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function Home(): ReactNode {
  return (
    <Layout description="Transit Tracker is a DIY customizable public transit arrivals board for your home.">
      <HomepageHeader />
      <main>
        <div className={clsx(styles.showcaseTitle)}>
          <Heading as="h1">⭐ Showcase ⭐</Heading>
          <Heading as="h3">Show yours off with #TransitTracker!</Heading>
        </div>
        <BlueskyEmbeds />
      </main>
    </Layout>
  )
}
