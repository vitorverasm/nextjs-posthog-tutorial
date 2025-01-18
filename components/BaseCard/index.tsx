"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { captureClientSideEvent } from "@/infra/posthog/utils";

export default function BaseCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const handleClickOk = () => {
    captureClientSideEvent("card_click_ok", {
      title,
      subtitle,
    });
  };

  const handleClickCancel = () => {
    captureClientSideEvent("card_click_cancel", {
      title,
      subtitle,
    });
  };

  return (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-col gap-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="w-max">{subtitle}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" onClick={handleClickCancel}>
          Cancel
        </Button>
        <Button onClick={handleClickOk}>Ok</Button>
      </CardFooter>
    </Card>
  );
}
