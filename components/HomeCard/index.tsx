"use client";

import { FEATURE_FLAG_KEYS } from "@/infra/posthog/constants";
import { useFeatureFlagVariantKey } from "posthog-js/react";
import BaseCard from "../BaseCard";

export function HomeCard() {
  const variant = useFeatureFlagVariantKey(FEATURE_FLAG_KEYS.TEST_EXPERIMENT);

  if (variant === "treatment") {
    return (
      <BaseCard
        title="TREATMENT"
        subtitle="This is the TREATMENT variant of the experiment."
      />
    );
  }

  return (
    <BaseCard
      title="CONTROL"
      subtitle="This is the CONTROL variant of the experiment."
    />
  );
}
