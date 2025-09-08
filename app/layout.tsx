import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Money Manager",
  description: "Manage your finances effectively",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
