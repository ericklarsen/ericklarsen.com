"use client";
import DarkModeIcon from "@/assets/svgs/DarkModeIcon";
import LightModeIcon from "@/assets/svgs/LightModeIcon";
import Script from "next/script";
import { ChangeEventHandler, useEffect, useState } from "react";

type Props = {};

const DarkMode = (props: Props) => {
    const [theme, setTheme] = useState<string>();

    const toggleTheme = () => {
        if (theme == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    const maybeTheme = () => {
        const themeLocalStorage = localStorage.getItem("theme");
        const themeSystem = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

        return themeLocalStorage ?? themeSystem;
    };

    useEffect(() => {
        document.documentElement.dataset.theme = theme ?? maybeTheme();
        localStorage.setItem("theme", theme ?? maybeTheme());
        setTheme(theme ?? maybeTheme());

        const useSetTheme = (e: any) => {
            setTheme(e.matches ? "dark" : "light");
        };

        const watchSysTheme = window.matchMedia("(prefers-color-scheme: dark)");

        watchSysTheme.addEventListener("change", useSetTheme);

        return () => {
            watchSysTheme.removeEventListener("change", useSetTheme);
        };
    }, [theme]);

    return (
        <>
            <div
                className="cursor-pointer select-none p-2"
                onClick={toggleTheme}
                data-theme={theme}
            >
                <LightModeIcon className="light-mode" />
                <DarkModeIcon className="dark-mode" />
            </div>
        </>
    );
};

export default DarkMode;
