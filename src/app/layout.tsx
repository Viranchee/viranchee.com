import { Metadata, Viewport } from "next";
import { Providers } from "./providers";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};
const APP_NAME = "nextarter-chakra";

export const metadata: Metadata = {
  title: { default: APP_NAME, template: "%s | nextarter-chakra" },
  description: "Next.js + chakra-ui + TypeScript template",
  applicationName: APP_NAME,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
