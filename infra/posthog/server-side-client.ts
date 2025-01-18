import { cookies } from "next/headers";
import { PostHog } from "posthog-node"

export function PostHogServerSideClient() {
    const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
        host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        flushAt: 1,
        flushInterval: 0
    })
    return posthogClient
}

export const getClientDistinctId = (): string => {
    const phCookieKey = `ph_${process.env.NEXT_PUBLIC_POSTHOG_KEY}_posthog`;
    const nextJsCookies = cookies();
    const posthogCookie = nextJsCookies.get(phCookieKey);
    let distinctId;
    if (posthogCookie) {
        distinctId = JSON.parse(posthogCookie.value).distinct_id;
    } else {
        distinctId = crypto.randomUUID();
    }
    return distinctId;
};
