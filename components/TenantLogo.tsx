"use client";

import React from "react";
import { Shield } from "lucide-react";
import { useTenant } from "./TenantProvider";

export default function TenantLogo({
  size = 40,
  showName = true,
}: {
  size?: number;
  showName?: boolean;
}) {
  const { branding } = useTenant();
  const bgStyle = {
    backgroundColor: branding.primaryColor,
  } as React.CSSProperties;

  return (
    <div className="flex items-center space-x-2">
      {branding.logoUrl ? (
        <img
          src={branding.logoUrl}
          alt={`${branding.tenantName} logo`}
          width={size}
          height={size}
          className="rounded-lg object-contain bg-dnc-dark-card border border-dnc-dark-border"
          style={{ width: size, height: size }}
        />
      ) : (
        <div
          className="rounded-lg flex items-center justify-center"
          style={{ width: size, height: size, ...bgStyle }}
        >
          <Shield
            className="text-white"
            style={{ width: size * 0.6, height: size * 0.6 }}
          />
        </div>
      )}
      {showName && (
        <span className="text-xl font-bold text-white">
          {branding.tenantName}
        </span>
      )}
    </div>
  );
}
