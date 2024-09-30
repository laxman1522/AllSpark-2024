import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.scss';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "AllSpark'24",
  description: '',
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
        <Script src="/js/jquery-2.1.1.js" strategy="beforeInteractive" />
        <Script src="/js/main.js" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
