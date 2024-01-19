"use client";

import { Burger } from "@/assets/svgs/Burger";
import { Calendar } from "@/assets/svgs/Calendar";
import { Location } from "@/assets/svgs/Location";
import Ai from "@/assets/svgs/expertises/Ai";
import Bun from "@/assets/svgs/expertises/Bun";
import ExpressIcon from "@/assets/svgs/expertises/ExpressIcon";
import Figma from "@/assets/svgs/expertises/Figma";
import MongoDB from "@/assets/svgs/expertises/MongoDB";
import MySQL from "@/assets/svgs/expertises/MySQL";
import { Nextjs } from "@/assets/svgs/expertises/Nextjs";
import NodeJs from "@/assets/svgs/expertises/NodeJs";
import Php from "@/assets/svgs/expertises/Php";
import PostgreSQL from "@/assets/svgs/expertises/PostgreSQL";
import Ps from "@/assets/svgs/expertises/Ps";
import ReactIcon from "@/assets/svgs/expertises/ReactIcon";
import Redux from "@/assets/svgs/expertises/Redux";
import Sass from "@/assets/svgs/expertises/Sass";
import StyledComponents from "@/assets/svgs/expertises/StyledComponents";
import Svelte from "@/assets/svgs/expertises/Svelte";
import Tailwind from "@/assets/svgs/expertises/Tailwind";
import Typescript from "@/assets/svgs/expertises/Typescript";
import Image from "next/image";

import "./page.css";
import Git from "@/assets/svgs/Git";
import Linkedin from "@/assets/svgs/Linkedin";
import Instagram from "@/assets/svgs/Instagram";
import Send from "@/assets/svgs/Send";
import Blogs from "../assets/svgs/Blogs";
import DarkMode from "@/components/DarkMode/DarkMode";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MainWrapper from "@/components/MainWrapper/MainWrapper";
import Link from "next/link";

const expertises = [
    {
        id: "platform",
        icons: [
            (key: any, className: string) => <Nextjs key={key} className={className} />,
            (key: any, className: string) => <ReactIcon key={key} className={className} />,
            (key: any, className: string) => <Redux key={key} className={className} />,
            (key: any, className: string) => <Typescript key={key} className={className} />,
            (key: any, className: string) => <NodeJs key={key} className={className} />,
            (key: any, className: string) => <Svelte key={key} className={className} />,
            (key: any, className: string) => <Php key={key} className={className} />,
            (key: any, className: string) => <ExpressIcon key={key} className={className} />,
            (key: any, className: string) => <Bun key={key} className={className} />,
        ],
    },
    {
        id: "styling-and-database",
        icons: [
            (key: any, className: string) => <Tailwind key={key} className={className} />,
            (key: any, className: string) => <StyledComponents key={key} className={className} />,
            (key: any, className: string) => <Sass key={key} className={className} />,
            (key: any, className: string) => <MySQL key={key} className={className} />,
            (key: any, className: string) => <PostgreSQL key={key} className={className} />,
            (key: any, className: string) => <MongoDB key={key} className={className} />,
        ],
    },
    {
        id: "additional",
        icons: [
            (key: any, className: string) => <Ai key={key} className={className} />,
            (key: any, className: string) => <Ps key={key} className={className} />,
            (key: any, className: string) => <Figma key={key} className={className} />,
        ],
    },
];

const experiences = [
    {
        title: "Senior Developer - 2Viz",
        location: "Frankfurt, Hesse, Germany - Remote",
        date: "Jan 2024 - Present",
        active: true,
    },
    {
        title: "Frontend Developer - 2Viz",
        location: "Frankfurt, Hesse, Germany - Remote",
        date: "Apr 2021 - Des 2023",
        active: false,
    },
    {
        title: "Frontend Developer - Kulina",
        location: "Jakarta, Indonesia - Remote",
        date: "Sep 2020 - Apr 2021",
        active: false,
    },
    {
        title: "Fullstack Developer - Self Employed",
        location: "Pekanbaru, Indonesia",
        date: "Oct 2018 - Sep 2020",
        active: false,
    },
];

const socials = [
    {
        url: "https://github.com/ericklarsen",
        icon: () => <Git />,
    },
    {
        url: "https://www.linkedin.com/in/ericklarsenn/",
        icon: () => <Linkedin />,
    },
    {
        url: "https://www.instagram.com/ericklarsenn/",
        icon: () => <Instagram />,
    },
    // {
    //     url: "mailto:ericklarsenn@gmail.com",
    //     icon: () => <Send />,
    // },
];

export default function Home() {
    return (
        <MainWrapper>
            <div className="flex flex-wrap md:justify-center gap-10 mt-10">
                <section id="short-description" className="w-full lg:max-w-[50%]">
                    <h2 className="font-caveat font-extrabold ">Hey what's up!</h2>
                    <p className="font-mono mt-4">
                        I'm Erick, a passionate FrontEnd Developer with expertise in React, Redux,
                        Next.js, JavaScript, and UI/UX design.
                        <br />
                        I'm always ready to embark on new learning adventures and take on exciting
                        challenges.
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                        {socials.map((item, idx) => (
                            <Link key={idx} href={item.url} target="_blank">
                                {item.icon()}
                            </Link>
                        ))}
                    </div>
                </section>

                {/* md:max-w-[21.875rem] */}
                <section id="experience" className="w-full lg:w-fit ">
                    <p className="uppercase font-bold tracking-[0.175rem]">Experience</p>
                    {experiences.map((item, idx) => (
                        <div key={idx} className="experience__wrapper">
                            <div
                                className={`experience__dot ${
                                    item.active ? "bg-secondary" : "bg-primary opacity-[40%]"
                                }`}
                            >
                                {item.active && (
                                    <div className="absolute w-full h-full rounded-full bg-secondary animate-ping"></div>
                                )}
                            </div>
                            <div className="flex-1">
                                <p className="font-medium">{item.title}</p>
                                <div className="flex gap-1 mt-1">
                                    <Location className="w-4 h-4 mt-1.5" />
                                    <p className="text-caption opacity-[65%]">{item.location}</p>
                                </div>
                                <div className="flex gap-1 mt-1">
                                    <Calendar className="w-4 h-4 mt-1.5" />
                                    <p className="text-caption opacity-[65%]">{item.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <section id="expertise" className="w-full">
                    <h5 className="font-caveat text-center">
                        "Passionate about collaborating with"
                    </h5>
                    <div>
                        {expertises.map((item, itemIdx) => (
                            <div key={itemIdx} className="expertise__wrapper">
                                {item.icons.map((icon, iconIdx) =>
                                    icon(iconIdx, "expertise__icon")
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </MainWrapper>
    );
}
