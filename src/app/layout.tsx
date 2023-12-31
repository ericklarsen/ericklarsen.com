import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anton, Caveat, IBM_Plex_Mono, Mooli, Roboto_Mono } from "next/font/google";

const sans = localFont({
    display: "swap",
    src: "./fonts/SpaceGrotesk-VariableFont_wght.ttf",
    variable: "--font-sans",
});

const mono = localFont({
    src: "./fonts/RobotoMono-VariableFont_wght.ttf",
    display: "swap",
    variable: "--font-mono",
});

const caveat = localFont({
    src: "./fonts/Caveat-VariableFont_wght.ttf",
    display: "swap",
    variable: "--font-caveat",
});

const anton = localFont({
    src: "./fonts/Anton-Regular.ttf",
    display: "swap",
    variable: "--font-anton",
});

export const metadata: Metadata = {
    title: "Erick Larsen - Frontend Developer",
    description:
        "Hey what's up! I'm Erick, a passionate FrontEnd Developer with expertise in React, Redux, Next.js, JavaScript, and UI/UX design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${sans.variable} ${mono.variable} ${caveat.variable} ${anton.variable}`}
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: [
                            // set initial theme
                            `try {`,
                            `var __storedPerf = localStorage.getItem('theme') || '';`,
                            `var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');`,

                            `if (!__storedPerf && darkQuery.matches) {`,
                            `__storedPerf = 'dark';`,
                            `}`,

                            `document.documentElement.setAttribute('data-theme', __storedPerf || 'light');`,

                            // setup listener to make it reactive
                            `darkQuery.addListener(function(e) {`,
                            `var __newTheme = e.matches ? 'dark' : 'light';`,
                            `document.documentElement.setAttribute('data-theme', __newTheme);`,
                            `typeof window.__themeBinding === 'function' && window.__themeBinding(__newTheme);`,
                            `});`,
                            `} catch (err) {`,
                            `console.log('error in setting initial theme', err);`,
                            `}`,
                        ].join(""),
                    }}
                ></script>
            </head>
            <body className="max-w-[90rem] mx-auto overflow-x-hidden">{children}</body>
        </html>
    );
}
