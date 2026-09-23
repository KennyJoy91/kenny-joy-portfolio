import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phuong Linh Truong (Kenny Joy) | Digital Marketing & Communications Professional",
  description:
    "Master portfolio of Phuong Linh Truong (Kenny Joy), showcasing digital marketing, communications, public diplomacy, event delivery and research achievements.",
  keywords: [
    "Phuong Linh Truong",
    "Kenny Joy",
    "Digital Marketing",
    "Communications",
    "Public Relations",
    "Marketing Analytics",
  ],
  openGraph: {
    title: "Phuong Linh Truong (Kenny Joy) Portfolio",
    description:
      "Digital Marketing & Communications Professional portfolio for UK graduate opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
