import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import { Metadata } from "next";
import Script from "next/script";

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
        <Script id="deep-demand-analytics">
          {`
            (function(tuv){ 
            var d = document, 
                s = d.createElement('script'), 
                l = d.scripts[d.scripts.length - 1]; 
            s.settings = tuv || {}; 
            s.src = "\/\/deep-demand.com\/cHDM9.6ybn2O5wliSvWqQu9ANfjZcHzoNHDTAGyRMTyu0y2HN-zqMZ0UMgDPI\/0s"; 
            s.async = true; 
            s.referrerPolicy = 'no-referrer-when-downgrade'; 
            l.parentNode.insertBefore(s, l); 
            })({}) 
          `}
        </Script>
      </body>
    </html>
  );
}
