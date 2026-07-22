import type { LoadContext, Plugin } from "@docusaurus/types"
import { AtpAgent } from "@atproto/api"
import { getPostThread } from "react-bluesky-embed/api"
import type { PostThread } from "react-bluesky-embed/api"

export interface BlueskyPostParams {
  did: string
  rkey: string
}

export interface BlueskyPost extends BlueskyPostParams {
  postThread: PostThread
}

const POSTS: BlueskyPostParams[] = [
  { did: "did:plc:kxl3ljro3smgvt2bshey2vya", rkey: "3mlmxg2n2wk2y" },
  { did: "did:plc:rcvzfbkjuznscymsvbgszpln", rkey: "3m6j7cvsyjk26" },
  { did: "did:plc:kd3h7d7gev3kk77i33j6vtng", rkey: "3m6sesfjshc2v" },
  { did: "did:plc:necklg6lonmgj63paywrzogw", rkey: "3mlriexwnb22n" },
  { did: "did:plc:4fcty2dkz4tzc3xp42vv73qv", rkey: "3mef5ey73ok2l" },
  { did: "did:plc:qg74h56j6z4l7pbyueych7qi", rkey: "3ljy6vxmft22f" },
  { did: "did:plc:mytl26cgab464n3e5eputxf3", rkey: "3ljwcfaufc22e" },
  { did: "did:plc:pmqv7bhxcvbyshp3gqrtfbsr", rkey: "3ljyg6s623c2l" },
  { did: "did:plc:rwg72ziv7y3vwe6mt6qbejbb", rkey: "3ljyeozobd22w" },
  { did: "did:plc:gq6wthafyehp4gizacwd6x5d", rkey: "3ljyacacl6k2j" },
  { did: "did:plc:mc5hqf754fb2ls6k2dyjb4jw", rkey: "3ljzvsd4q3q2k" },
  { did: "did:plc:6vatl6lhsv3ninhf7n4ssria", rkey: "3ljyge6jvvc2x" },
]

async function createAuthenticatedAgent(): Promise<AtpAgent | undefined> {
  const { BLUESKY_IDENTIFIER, BLUESKY_APP_PASSWORD, BLUESKY_SERVICE_URL } =
    process.env

  if (!BLUESKY_IDENTIFIER || !BLUESKY_APP_PASSWORD) {
    return undefined
  }

  const agent = new AtpAgent({
    service: BLUESKY_SERVICE_URL ?? "https://bsky.social",
  })
  await agent.login({
    identifier: BLUESKY_IDENTIFIER,
    password: BLUESKY_APP_PASSWORD,
  })
  return agent
}

async function fetchPostThread(
  agent: AtpAgent | undefined,
  { did, rkey }: BlueskyPostParams,
): Promise<PostThread | undefined> {
  if (!agent) {
    return getPostThread({ did, rkey }, { depth: 0 })
  }

  const uri = `at://${did}/app.bsky.feed.post/${rkey}`
  const { data } = await agent.getPostThread({ uri, depth: 0 })
  return data.thread as PostThread
}

export default function blueskyPostsPlugin(
  _context: LoadContext,
): Plugin<BlueskyPost[]> {
  return {
    name: "bluesky-posts-plugin",

    async loadContent() {
      // An authenticated app password login avoids the stricter rate limits
      // applied to the unauthenticated public.api.bsky.app endpoint.
      const agent = await createAuthenticatedAgent().catch((error: unknown) => {
        console.warn(
          `[bluesky-posts-plugin] Failed to authenticate with Bluesky, falling back to unauthenticated requests: ${
            error instanceof Error ? error.message : error
          }`,
        )
        return undefined
      })

      const posts = await Promise.all(
        POSTS.map(async ({ did, rkey }) => {
          const postThread = await fetchPostThread(agent, {
            did,
            rkey,
          }).catch((error: unknown) => {
            console.warn(
              `[bluesky-posts-plugin] Skipping post ${did}/${rkey}: ${
                error instanceof Error ? error.message : error
              }`,
            )
            return undefined
          })
          return { did, rkey, postThread }
        }),
      )
      return posts.filter(
        (post): post is BlueskyPost => post.postThread != null,
      )
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content)
    },
  }
}
