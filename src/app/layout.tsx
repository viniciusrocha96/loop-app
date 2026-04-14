import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LOOP",
  description: "Descubra seu perfil de organização",
  icons: {
    icon: "/favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="facebook-domain-verification" content="80s810k61f4dnmw108q60wgleqqrhf" />
        <link rel="preconnect" href="https://ggcheckout.com.br" />
        <link rel="dns-prefetch" href="https://ggcheckout.com.br" />
        <Script id="utmify-pixel-init" strategy="lazyOnload">
          {`window.pixelId = "69bd5c3fbf8bf7367e588327";`}
        </Script>
        <Script
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          strategy="lazyOnload"
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="lazyOnload"
        />
        {children}
        <SpeedInsights />
        <GoogleAnalytics gaId="G-LVH6DXVFBB" />
      </body>
    </html>
  );
}
