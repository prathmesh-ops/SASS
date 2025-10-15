"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

export type Branding = {
  tenantName: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  logoUrl?: string | null;
  customCSS?: string;
};

export type LayoutConfig = {
  adminDashboardWidgets: string[]; // ids in order
  agentDashboardWidgets: string[]; // ids in order
  customNav?: Array<{ label: string; href: string }>; // optional custom links
};

export type TenantState = {
  branding: Branding;
  layout: LayoutConfig;
  setBranding: (b: Partial<Branding>) => void;
  setLayout: (l: Partial<LayoutConfig>) => void;
};

const defaultBranding: Branding = {
  tenantName: "DoNotCall",
  primaryColor: "#F97316", // dnc-orange
  secondaryColor: "#111827",
  accentColor: "#22C55E",
  logoUrl: null,
  customCSS: "",
};

const defaultLayout: LayoutConfig = {
  adminDashboardWidgets: [
    "stats",
    "weekly-activity",
    "top-agents",
    "recent-activity",
    "quick-stats",
    "system-status",
  ],
  agentDashboardWidgets: [
    "stats",
    "quick-verify",
    "quick-actions",
    "activity-chart",
    "recent-activity",
    "compliance-status",
  ],
  customNav: undefined,
};

const TenantContext = createContext<TenantState | undefined>(undefined);

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [branding, updateBranding] = useState<Branding>(defaultBranding);
  const [layout, updateLayout] = useState<LayoutConfig>(defaultLayout);

  const setBranding = (b: Partial<Branding>) =>
    updateBranding((prev) => ({ ...prev, ...b }));
  const setLayout = (l: Partial<LayoutConfig>) =>
    updateLayout((prev) => ({ ...prev, ...l }));

  const value = useMemo(
    () => ({ branding, layout, setBranding, setLayout }),
    [branding, layout]
  );

  return (
    <TenantContext.Provider value={value}>
      {/* CSS variables for theming */}
      <style suppressHydrationWarning>{`:root{--brand-primary:${
        branding.primaryColor
      };--brand-secondary:${branding.secondaryColor};--brand-accent:${
        branding.accentColor
      };}${branding.customCSS || ""}`}</style>
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant() {
  const ctx = useContext(TenantContext);
  if (!ctx) throw new Error("useTenant must be used within TenantProvider");
  return ctx;
}
