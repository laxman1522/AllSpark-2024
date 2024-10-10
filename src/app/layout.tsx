import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.scss';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "AllSpark'24",
  description:
    'A Grand CDW Tech Conference happening at Bengaluru on Oct 25 & 26',
};

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="/js/modernizr.js" />
        <Script src="/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-2.1.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/main.js" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
