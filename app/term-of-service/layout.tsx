import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Term of Service - Money Manager",
  description: "Term of Service for Money Manager Application",
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
