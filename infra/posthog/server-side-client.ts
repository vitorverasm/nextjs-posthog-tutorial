import { PostHog } from "posthog-node"

export function PostHogServerSideClient() {
    const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
        host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        flushAt: 1,
        flushInterval: 0
    })
    return posthogClient
}
