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
    company: "2Viz",
    location: "Frankfurt, Hesse, Germany - Remote",
    active: true,
    roles: [
      { title: "Senior Developer", date: "Jan 2024 - Present" },
      { title: "Frontend Developer", date: "Apr 2021 - Dec 2023" },
    ],
  },
  {
    company: "Kulina",
    location: "Jakarta, Indonesia - Remote",
    active: false,
    roles: [{ title: "Frontend Developer", date: "Sep 2020 - Apr 2021" }],
  },
  {
    company: "Self Employed",
    location: "Pekanbaru, Indonesia",
    active: false,
    roles: [{ title: "Fullstack Developer", date: "Oct 2018 - Sep 2020" }],
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
      <div className="flex flex-col gap-12 mt-10 max-w-4xl mx-auto">
        <section id="short-description" className="w-full">
          <div className="hero__card">
            <div className="hero__header">
              <div className="hero__window-controls">
                <span className="hero__dot hero__dot--red"></span>
                <span className="hero__dot hero__dot--yellow"></span>
                <span className="hero__dot hero__dot--green"></span>
              </div>
              <div className="hero__filename">PORTFOLIO.TS — INDEX</div>
            </div>
            <div className="hero__code">
              <div className="hero__line">
                <span className="hero__line-number">1</span>
                <span className="hero__keyword">class</span>{" "}
                <span className="hero__class-name">MyNameIsErickLarsen</span>{" "}
                <span className="hero__bracket">{"{"}</span>
              </div>
              <div className="hero__line">
                <span className="hero__line-number">2</span>
                <span className="hero__indent"></span>
                <span className="hero__keyword">readonly</span>{" "}
                <span className="hero__property">role</span> ={" "}
                <span className="hero__string">'Senior Dev'</span>;
              </div>
              <div className="hero__line">
                <span className="hero__line-number">3</span>
                <span className="hero__indent"></span>
                <span className="hero__keyword">readonly</span>{" "}
                <span className="hero__property">experience</span> ={" "}
                <span className="hero__number">{new Date().getFullYear() - 2018}_YEARS</span>;
              </div>
              <div className="hero__line">
                <span className="hero__line-number">4</span>
                <span className="hero__indent"></span>
                <span className="hero__keyword">readonly</span>{" "}
                <span className="hero__property">stack</span> = [
                <span className="hero__string">'React'</span>,{" "}
                <span className="hero__string">'TypeScript'</span>,{" "}
                <span className="hero__string">'Next.js'</span>];
              </div>
              <div className="hero__line hero__line--empty">
                <span className="hero__line-number">5</span>
              </div>
              <div className="hero__line">
                <span className="hero__line-number">6</span>
                <span className="hero__indent"></span>
                <span className="hero__keyword">public</span>{" "}
                <span className="hero__method">execute</span>
                <span className="hero__bracket">()</span>{" "}
                <span className="hero__bracket">{"{"}</span>
              </div>
              <div className="hero__line">
                <span className="hero__line-number">7</span>
                <span className="hero__indent hero__indent--2"></span>
                <span className="hero__keyword">return</span>{" "}
                <span className="hero__this">this</span>.
                <span className="hero__method">buildFuture</span>();
              </div>
              <div className="hero__line">
                <span className="hero__line-number">8</span>
                <span className="hero__indent"></span>
                <span className="hero__bracket">{"}"}</span>
              </div>
              <div className="hero__line">
                <span className="hero__line-number">9</span>
                <span className="hero__bracket">{"}"}</span>
              </div>
            </div>
            <div className="hero__socials">
              {socials.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.url}
                  target="_blank"
                  className="hero__social-link"
                  aria-label={`Visit my ${item.url.includes("github") ? "GitHub" : item.url.includes("linkedin") ? "LinkedIn" : "Instagram"}`}
                >
                  {item.icon()}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="w-full">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Professional Journey
            </h3>
            <p className="text-xl opacity-60 font-caveat">
              My career path and growth over the years
            </p>
          </div>
          <div className="experience__container">
            {experiences.map((item, idx) => (
              <div
                key={idx}
                className={`experience__wrapper group ${
                  idx % 2 === 0 ? "experience__wrapper--left" : "experience__wrapper--right"
                }`}
              >
                {/* Left side content (shows card on even indices for desktop) */}
                <div className="experience__content-side experience__content-side--left">
                  <div className="experience__card">
                    {/* Header with company and status */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4
                          className={`text-xl md:text-2xl font-bold transition-colors duration-300 mb-1 ${
                            item.active ? "text-secondary" : "group-hover:text-secondary/80"
                          }`}
                        >
                          {item.company}
                        </h4>
                        <div className="flex items-center gap-2 text-sm opacity-60 mb-2">
                          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                          <p className="text-sm">
                            {item.roles.length > 1
                              ? `${item.roles[item.roles.length - 1].date.split(" - ")[0]} - ${item.roles[0].date.split(" - ")[1]}`
                              : item.roles[0].date}
                          </p>
                        </div>
                      </div>
                      {item.active && (
                        <span className="experience__badge">
                          <span className="experience__badge-dot"></span>
                          Active
                        </span>
                      )}
                    </div>

                    {/* Roles section with progression */}
                    <div className="experience__roles">
                      {item.roles.length === 1 ? (
                        <div className="experience__role">
                          <div className="experience__role-indicator"></div>
                          <div>
                            <p className="text-base font-semibold mb-1">{item.roles[0].title}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {item.roles.map((role, roleIdx) => (
                            <div key={roleIdx} className="experience__role">
                              <div className="experience__role-indicator"></div>
                              <div>
                                <p className="text-base font-semibold mb-1">{role.title}</p>
                                <p className="text-xs opacity-50">{role.date}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Location footer */}
                    <div className="experience__footer">
                      <div className="flex items-center gap-2 text-sm opacity-50">
                        <Location className="w-3.5 h-3.5 flex-shrink-0" />
                        <p className="text-sm">{item.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Timeline */}
                <div className="experience__timeline-center">
                  <div
                    className={`experience__dot ${item.active ? "experience__dot--active" : ""}`}
                  >
                    {item.active && (
                      <>
                        <div className="experience__dot-pulse"></div>
                        <div className="experience__dot-ring"></div>
                      </>
                    )}
                  </div>
                  {idx < experiences.length - 1 && <div className="experience__line-center"></div>}
                </div>

                {/* Right side content (shows card on odd indices for desktop) */}
                <div className="experience__content-side experience__content-side--right">
                  <div className="experience__card">
                    {/* Header with company and status */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4
                          className={`text-xl md:text-2xl font-bold transition-colors duration-300 mb-1 ${
                            item.active ? "text-secondary" : "group-hover:text-secondary/80"
                          }`}
                        >
                          {item.company}
                        </h4>
                        <div className="flex items-center gap-2 text-sm opacity-60 mb-2">
                          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                          <p className="text-sm">
                            {item.roles.length > 1
                              ? `${item.roles[item.roles.length - 1].date.split(" - ")[0]} - ${item.roles[0].date.split(" - ")[1]}`
                              : item.roles[0].date}
                          </p>
                        </div>
                      </div>
                      {item.active && (
                        <span className="experience__badge">
                          <span className="experience__badge-dot"></span>
                          Active
                        </span>
                      )}
                    </div>

                    {/* Roles section with progression */}
                    <div className="experience__roles">
                      {item.roles.length === 1 ? (
                        <div className="experience__role">
                          <div className="experience__role-indicator"></div>
                          <div>
                            <p className="text-base font-semibold mb-1">{item.roles[0].title}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {item.roles.map((role, roleIdx) => (
                            <div key={roleIdx} className="experience__role">
                              <div className="experience__role-indicator"></div>
                              <div>
                                <p className="text-base font-semibold mb-1">{role.title}</p>
                                <p className="text-xs opacity-50">{role.date}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Location footer */}
                    <div className="experience__footer">
                      <div className="flex items-center gap-2 text-sm opacity-50">
                        <Location className="w-3.5 h-3.5 flex-shrink-0" />
                        <p className="text-sm">{item.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="expertise" className="w-full">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technical Expertise
            </h3>
            <p className="opacity-60 font-caveat text-xl">
              Technologies I'm passionate about working with
            </p>
          </div>
          <div className="expertise__container">
            {expertises.map((item, itemIdx) => (
              <div key={itemIdx} className="expertise__category">
                <div className="expertise__grid">
                  {item.icons.map((icon, iconIdx) => (
                    <div key={iconIdx} className="expertise__item">
                      {icon(iconIdx, "expertise__icon")}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainWrapper>
  );
}
