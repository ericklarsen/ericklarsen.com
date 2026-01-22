import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ["selector", '[data-theme="dark"]'],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                mono: ["var(--font-mono)"],
                sans: ["var(--font-sans)"],
                caveat: ["var(--font-caveat)"],
                anton: ["var(--font-anton)"],
            },
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                tertiary: "var(--color-tertiary)",
                sub: "var(--color-sub)",
                default: "var(--color-default)",
            },
        },
    },
    plugins: [],
};
export default config;
