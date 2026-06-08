"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface EmailAddressProps {
  user: string;
  domain: string;
  className?: string;
  fallbackHref: string;
  fallbackLabel: string;
}

export function EmailAddress({
  user,
  domain,
  className,
  fallbackHref,
  fallbackLabel,
}: EmailAddressProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Link href={fallbackHref} className={className}>
        {fallbackLabel}
      </Link>
    );
  }

  const email = `${user}@${domain}`;
  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
