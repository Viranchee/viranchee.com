import type { Metadata, Viewport } from "next";

import Providers from "~/app/providers";
import Layout from "~/lib/layout";
export const runtime = "edge";
type RootLayoutProps = {
  children: React.ReactNode;
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

const APP_NAME = "Hi, I'm Viranchee";
export const metadata: Metadata = {
  title: { default: APP_NAME, template: "%s | LOLOLOL" },
  description: "Viranchee's portfolio",
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
