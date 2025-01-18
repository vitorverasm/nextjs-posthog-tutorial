import { HomeCard } from "@/components/HomeCard";
import { Suspense } from "react";

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
          <Suspense fallback={<div>Loading...</div>}>
            <HomeCard />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
