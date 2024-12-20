import type { Metadata } from "next";
import { BIZ_UDPGothic, Kablammo, Zen_Kaku_Gothic_New } from "next/font/google";
import Smooth from "./Components/Smooth";
import Mouse from "./Components/Mouse";
export const metadata: Metadata = {
  title: "rjhome2",
  description: "Generated by create next app",
};

const BIZ = Zen_Kaku_Gothic_New({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-biz",
});

const Kab = Kablammo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kab",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "black" }}>
      <body className={`${BIZ.variable} ${Kab.variable}`}>
        <Smooth>
          {children}
          <Mouse />
        </Smooth>
      </body>
    </html>
  );
}
