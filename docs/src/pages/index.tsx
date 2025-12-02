import type { ReactNode } from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"
import { useColorMode } from "@docusaurus/theme-common"
import styles from "./index.module.css"
import { PostThread } from "react-bluesky-embed"

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

  const postData = [
    {
      did: "did:plc:rcvzfbkjuznscymsvbgszpln",
      rkey: "3m6j7cvsyjk26",
    },
    {
      did: "did:plc:qg74h56j6z4l7pbyueych7qi",
      rkey: "3ljy6vxmft22f",
    },
    {
      did: "did:plc:mytl26cgab464n3e5eputxf3",
      rkey: "3ljwcfaufc22e",
    },
    {
      did: "did:plc:pmqv7bhxcvbyshp3gqrtfbsr",
      rkey: "3ljyg6s623c2l",
    },
    {
      did: "did:plc:rwg72ziv7y3vwe6mt6qbejbb",
      rkey: "3ljyeozobd22w",
    },
    {
      did: "did:plc:gq6wthafyehp4gizacwd6x5d",
      rkey: "3ljyacacl6k2j",
    },
    {
      did: "did:plc:mc5hqf754fb2ls6k2dyjb4jw",
      rkey: "3ljzvsd4q3q2k",
    },
    {
      did: "did:plc:6vatl6lhsv3ninhf7n4ssria",
      rkey: "3ljyge6jvvc2x",
    },
  ]

  const columns = [[], [], []]
  postData.forEach((post, index) => {
    columns[index % columns.length].push(post)
  })

  return (
    <div className={clsx(styles.blueskyPosts)}>
      {columns.map((columnPosts, colIndex) => (
        <div key={`column-${colIndex}`} className={styles.blueskyColumn}>
          {columnPosts.map(({ did, rkey }) => (
            <PostThread
              key={`${did}-${rkey}`}
              params={{ did, rkey }}
              config={{ depth: 0 }}
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
        <BlueskyEmbeds />
      </main>
    </Layout>
  )
}
