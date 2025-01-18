import { useFeatureFlagVariantKey } from "posthog-js/react";
import { FeatureFlagVariant } from "../types";

export default function useFeatureFlagVariant(featureFlagKey: string, options: { defaultValue: FeatureFlagVariant, defaultValueE2eTests?: FeatureFlagVariant }): FeatureFlagVariant {
    const variant = useFeatureFlagVariantKey(featureFlagKey);

    const isE2eTest = typeof navigator !== 'undefined' && navigator.userAgent.includes('(Playwright)');

    if (options.defaultValueE2eTests && isE2eTest) {
        return options.defaultValueE2eTests;
    }

    return (variant ?? options.defaultValue) as FeatureFlagVariant;
}
