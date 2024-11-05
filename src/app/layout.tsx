import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "StartUps",
  description: "Where Startup Ideas Live",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased container`}
      >
        {children}
      </body>
    </html>
  );
}
