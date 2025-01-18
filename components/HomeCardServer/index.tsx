import { isTestExperimentEnabledFromPosthog } from "@/infra/posthog/flags";
import BaseCard from "../BaseCard";

export async function HomeCardServer() {
  const isTreatment = await isTestExperimentEnabledFromPosthog();

  if (isTreatment) {
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
