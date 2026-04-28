"use client";

import * as React from "react";

interface DiscoveryCallContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const DiscoveryCallContext = React.createContext<DiscoveryCallContextValue | null>(null);

export function DiscoveryCallProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const value = React.useMemo<DiscoveryCallContextValue>(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [isOpen],
  );

  return (
    <DiscoveryCallContext.Provider value={value}>
      {children}
    </DiscoveryCallContext.Provider>
  );
}

export function useDiscoveryCall() {
  const ctx = React.useContext(DiscoveryCallContext);
  if (!ctx) {
    throw new Error("useDiscoveryCall must be used within DiscoveryCallProvider");
  }
  return ctx;
}
