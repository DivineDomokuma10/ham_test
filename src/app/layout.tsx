import type { Metadata } from "next";
import { montserrat } from "@/lib/font";

import "./globals.css";
import CustomLayout from "../sections/layout";

export const metadata: Metadata = {
  title: "Houses Around Me",
  description: "HAM landing page",
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "https://example.com/og.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
