import type { Metadata } from 'next';
import './globals.scss';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "AllSpark'24",
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <Script src="/js/modernizr.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-2.1.1.js" strategy="beforeInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </head>
      <body>{children}</body>
    </html>
  );
}
