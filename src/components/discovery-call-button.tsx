"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useDiscoveryCall } from "@/lib/discovery-call-context";

export function DiscoveryCallButton({
  children = "Book a Discovery Call",
  onClick: onClickProp,
  ...props
}: ButtonProps) {
  const { open } = useDiscoveryCall();
  return (
    <Button
      type="button"
      onClick={(e) => {
        open();
        onClickProp?.(e);
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
