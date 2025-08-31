import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Disco do Dia - Os 100 Maiores da Música Brasileira",
  description:
    "Descubra diariamente um clássico da música brasileira! Sorteie álbuns da lista dos 100 maiores discos pela Rolling Stone Brasil e redescubra os tesouros da MPB.",
  keywords: [
    "música brasileira",
    "MPB",
    "Rolling Stone",
    "Spotify",
    "álbuns clássicos",
    "bossa nova",
    "tropicália",
  ],
  authors: [{ name: "Disco do Dia" }],
  creator: "Disco do Dia",
  publisher: "Disco do Dia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://album-giveaway.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Disco do Dia - Os 100 Maiores da Música Brasileira",
    description:
      "Descubra diariamente um clássico da música brasileira! Sorteie álbuns da lista dos 100 maiores discos pela Rolling Stone Brasil.",
    url: "https://album-giveaway.vercel.app",
    siteName: "Disco do Dia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Disco do Dia - Descubra os clássicos da música brasileira",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disco do Dia - Os 100 Maiores da Música Brasileira",
    description:
      "Descubra diariamente um clássico da música brasileira! Sorteie álbuns da lista dos 100 maiores discos pela Rolling Stone Brasil.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
