"use client";
import Blogs from "@/assets/svgs/Blogs";
import DarkMode from "../DarkMode/DarkMode";
import { Burger } from "@/assets/svgs/Burger";
import Experiments from "@/assets/svgs/Experiments";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const menu = [
    {
        label: "About",
        url: "/about",
        icon: () => null,
    },
    {
        label: "Experiments",
        url: "/experiments",
        icon: () => <Experiments />,
    },
    {
        label: "Blogs",
        url: "/blogs",
        icon: () => <Blogs />,
    },
];

const Navbar = (props: Props) => {
    const pathname = usePathname();

    return (
        <nav className="flex justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
                <h5 className="font-anton">
                    erick<span className="text-secondary">larsen</span>
                </h5>
                <h4 className="origin-top-left rotate-[16.55deg] mt-[-0.625rem]">🤟</h4>
            </Link>

            <div className="flex flex-wrap items-center justify-end gap-1 md:gap-4">
                {menu.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.url}
                        className={`p-2 items-center gap-2 flex relative`}
                    >
                        {item.icon()}
                        <p className="hidden md:block font-medium">{item.label}</p>

                        {pathname === item.url && (
                            <div className="w-6 h-1 bg-primary absolute left-[50%] bottom-1 hidden md:block"></div>
                        )}
                    </Link>
                ))}
                <DarkMode />
            </div>
        </nav>
    );
};

export default Navbar;
