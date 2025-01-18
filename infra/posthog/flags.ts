import { decrypt } from "@vercel/flags";
import { flag } from "@vercel/flags/next";
import { cookies } from "next/headers";
import { getClientDistinctId, PostHogServerSideClient } from "./server-side-client";

export const isTestExperimentEnabled = flag({
    key: "test-experiment",
    decide: () => true,
});


export const isTestExperimentEnabledFromPosthog = flag({
    key: "test-experiment",
    decide: async () => {
        // If there is no override, return the value from PostHog
        // 1. Get the Posthog server side client
        const client = PostHogServerSideClient();
        // 2. Get the distinct id from the client
        // distinct_id is a hash that identifies the user on PostHog
        const distinctId = getClientDistinctId();
        // 3. Get the feature flag value from PostHog
        const variant = await client.getFeatureFlag("test-experiment", distinctId);
        // 4. Return if the user is in the treatment group
        return variant === "treatment";
    },
});

export const isTestExperimentEnabledWithVercelToolbarOverride = flag({
    key: "test-experiment",
    decide: async () => {
        // Check if there is a flag override form Vercel Toolbar
        const overrides = cookies().get('vercel-flag-overrides')?.value;
        if (overrides) {
            const decryptedOverrides = await decrypt(overrides) as { [key: string]: string };
            if (decryptedOverrides?.isTestExperimentEnabled === "treatment") {
                return true;
            }
            return false;
        }

        // If there is no override, return the value from PostHog
        // 1. Get the Posthog server side client
        const client = PostHogServerSideClient();
        // 2. Get the distinct id from the client
        // distinct_id is a hash that identifies the user on PostHog
        const distinctId = getClientDistinctId();
        // 3. Get the feature flag value from PostHog
        const variant = await client.getFeatureFlag("test-experiment", distinctId);
        // 4. Return if the user is in the treatment group
        return variant === "treatment";
    },
});
