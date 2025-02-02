import { isTestExperimentEnabledWithVercelToolbarOverride } from "@/infra/posthog/flags";
import { FlagValues } from "@vercel/flags/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PostHogProvider from "./providers";
import { getClientDistinctId } from "@/infra/posthog/server-side-client";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const distinctId = getClientDistinctId();
  const isTestExperimentEnabled =
    await isTestExperimentEnabledWithVercelToolbarOverride();

  const featureFlags = {
    "test-experiment": isTestExperimentEnabled ? "treatment" : "control",
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PostHogProvider distinctId={distinctId} featureFlags={featureFlags}>
          {children}
        </PostHogProvider>
        <FlagValues values={{ isTestExperimentEnabled }} />
      </body>
    </html>
  );
}
