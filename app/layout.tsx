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
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${lxgw.variable} min-w-224px`}>
                {children}
            </body>
        </html>
    );
}
