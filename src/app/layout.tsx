import type { Metadata } from 'next';
import './globals.scss';

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
        <script src="js/modernizr.js"></script>
        <script src="js/jquery-2.1.1.js"></script>
        <script src="js/main.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
