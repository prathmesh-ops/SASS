import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TenantProvider } from "../components/TenantProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DoNotCall - DNC Registry Management Platform",
  description: "Comprehensive multi-tenant SaaS platform for DNC registry management with compliance tracking and verification."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <TenantProvider>
          {children}
        </TenantProvider>
      </body>
    </html>
  );
}
