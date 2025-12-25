import AdScript from "@/app/ui/ad-script";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "2dee27924b68014e0a7dc793f7204cc8f7ff25d1":
      "2dee27924b68014e0a7dc793f7204cc8f7ff25d1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <AdScript />
      </body>
    </html>
  );
}
