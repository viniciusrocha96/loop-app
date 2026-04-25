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
        <link rel="preconnect" href="https://payt.site" />
        <link rel="dns-prefetch" href="https://payt.site" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "69ec44825b6d5779d85c057c";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
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
