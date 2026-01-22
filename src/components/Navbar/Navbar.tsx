"use client";
import Blogs from "@/assets/svgs/Blogs";
import DarkMode from "../DarkMode/DarkMode";
import { Burger } from "@/assets/svgs/Burger";
import Experiments from "@/assets/svgs/Experiments";
import UserIcon from "@/assets/svgs/UserIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const menu = [
    {
        label: "About",
        url: "/about",
        icon: () => <UserIcon />,
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
        <nav className="flex justify-between items-center gap-4 py-4 px-2 md:px-0">
            <div className="w-fit flex mx-auto">
                <Link
                    href="/"
                    className="flex items-center gap-2 group transition-all duration-300 hover:scale-105"
                >
                    <h5 className="font-anton transition-colors duration-300 text-lg">
                        erick<span className="text-secondary">larsen</span>
                    </h5>
                    <h4 className="origin-top-left rotate-[16.55deg] mt-[-0.625rem] transition-transform duration-300 group-hover:rotate-[30deg]">
                        🤟
                    </h4>
                </Link>

                <div className="flex items-center gap-2 md:gap-3">
                    <div className="transition-all duration-300 hover:scale-110">
                        <DarkMode />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
