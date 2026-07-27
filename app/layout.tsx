import type { Metadata } from "next";
import { Bodoni_Moda, Archivo } from "next/font/google";
import { content } from "@/lib/content";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${content.brand} — Wood-fired pizza, Kreuzberg Berlin`,
  description: content.hero.subhead,
  openGraph: {
    title: `${content.brand} — Wood-fired pizza, Kreuzberg Berlin`,
    description: content.hero.subhead,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${bodoni.variable} ${archivo.variable}`}>
        {/* Enable JS-driven reveals only when motion is allowed. Runs before
            paint so there's no flash of hidden content, and no-JS keeps content
            visible (default CSS). */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js')}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
