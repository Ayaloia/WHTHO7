import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const lxgw = localFont({
    src: "./LXGWWenKaiScreen.woff2",
    display: "swap",
    variable: "--font-lxgw",
});

export const metadata: Metadata = {
    title: "武汉 THO 7 · 楚韵九歌",
    description:
        "武汉 THO 7 · 楚韵九歌官网。武汉 THO 是纯度超高的东方 Project-Only 同人展会，首次创办至今已是第11年。",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} ${lxgw.variable} min-w-224px`}>
                {children}
            </body>
        </html>
    );
}
