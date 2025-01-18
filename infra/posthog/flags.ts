import { flag } from "@vercel/flags/next";
import { getClientDistinctId, PostHogServerSideClient } from "./server-side-client";

export const isTestExperimentEnabled = flag({
    key: "test-experiment",
    decide: () => true,
});


export const isTestExperimentEnabledFromPosthog = flag({
    key: "test-experiment",
    decide: async () => {
        const client = PostHogServerSideClient();
        const distinctId = getClientDistinctId();
        const variant = await client.getFeatureFlag("test-experiment", distinctId);
        return variant === "treatment";
    },
});
