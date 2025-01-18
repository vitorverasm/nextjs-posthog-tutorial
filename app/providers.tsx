// app/providers.jsx
"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export default function PostHogProvider({
  children,
  distinctId,
  featureFlags,
}: {
  children: React.ReactNode;
  distinctId: string;
  featureFlags: Record<string, string>;
}) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false,
        bootstrap: {
          distinctID: distinctId,
          featureFlags,
        },
      });

      posthog.featureFlags.override(featureFlags);
    }
  }, [distinctId, featureFlags]);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
