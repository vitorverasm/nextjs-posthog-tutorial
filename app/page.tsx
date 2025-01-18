import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function BaseCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-col gap-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="w-max">{subtitle}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Ok</Button>
      </CardFooter>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center ">
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Advanced Experiments Next.js and Posthog
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Explore how to implement and manage feature experiments using
            Next.js and PostHog
          </p>
        </div>

        <div className="flex flex-row gap-4">
          <BaseCard
            title="CONTROL"
            subtitle="This is the CONTROL variant of the experiment."
          />
          <BaseCard
            title="TREATMENT"
            subtitle="This is the TREATMENT variant of the experiment."
          />
        </div>
      </main>
    </div>
  );
}
