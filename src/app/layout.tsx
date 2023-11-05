import { Providers } from "./providers";
import type { Metadata } from "next";

const APP_NAME = "viranchee";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  title: { default: APP_NAME, template: "%s | nextarter-chakra" },
  description: "Next.js + chakra-ui + TypeScript template",
  applicationName: APP_NAME,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
