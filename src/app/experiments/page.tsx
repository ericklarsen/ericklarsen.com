import MainWrapper from "@/components/MainWrapper/MainWrapper";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

const experiments = [
    {
        url: "https://github.com/ericklarsen/SleckMania",
        label: "Sleck - Chatting App",
        caption: "Build with Nextjs, Socket.io, Tailwind, Express, AuthJWT, PostgreSQL, Docker",
    },
];

export default function Experiments() {
    return (
        <MainWrapper>
            <div className="w-full max-w-[42.25rem] mx-auto mt-10">
                <h3 className="font-bold font-sans text-center">Experiments 🔬</h3>

                {experiments.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-full p-4 bg-sub rounded-lg mt-10 flex gap-5 justify-between"
                    >
                        <div className="flex-1">
                            <h6 className="font-medium font-mono">{item.label}</h6>
                            <p className="text-caption font-sans mt-1">{item.caption}</p>
                        </div>

                        <Link href={item.url} target="_blank">
                            <svg
                                className="w-10 h-10 cursor-pointer"
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 3.3335C17.8113 3.3335 15.6441 3.76459 13.622 4.60217C11.5999 5.43975 9.76257 6.66741 8.21493 8.21505C5.08932 11.3407 3.33337 15.5799 3.33337 20.0002C3.33337 27.3668 8.11671 33.6168 14.7334 35.8335C15.5667 35.9668 15.8334 35.4502 15.8334 35.0002V32.1835C11.2167 33.1835 10.2334 29.9502 10.2334 29.9502C9.46671 28.0168 8.38337 27.5002 8.38337 27.5002C6.86671 26.4668 8.50004 26.5002 8.50004 26.5002C10.1667 26.6168 11.05 28.2168 11.05 28.2168C12.5 30.7502 14.95 30.0002 15.9 29.6002C16.05 28.5168 16.4834 27.7835 16.95 27.3668C13.25 26.9502 9.36671 25.5168 9.36671 19.1668C9.36671 17.3168 10 15.8335 11.0834 14.6502C10.9167 14.2335 10.3334 12.5002 11.25 10.2502C11.25 10.2502 12.65 9.80016 15.8334 11.9502C17.15 11.5835 18.5834 11.4002 20 11.4002C21.4167 11.4002 22.85 11.5835 24.1667 11.9502C27.35 9.80016 28.75 10.2502 28.75 10.2502C29.6667 12.5002 29.0834 14.2335 28.9167 14.6502C30 15.8335 30.6334 17.3168 30.6334 19.1668C30.6334 25.5335 26.7334 26.9335 23.0167 27.3502C23.6167 27.8668 24.1667 28.8835 24.1667 30.4335V35.0002C24.1667 35.4502 24.4334 35.9835 25.2834 35.8335C31.9 33.6002 36.6667 27.3668 36.6667 20.0002C36.6667 17.8115 36.2356 15.6442 35.398 13.6221C34.5605 11.6 33.3328 9.76269 31.7852 8.21505C30.2375 6.66741 28.4002 5.43975 26.3781 4.60217C24.356 3.76459 22.1887 3.3335 20 3.3335Z"
                                    fill="#373737"
                                    className="fill-primary"
                                />
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>
        </MainWrapper>
    );
}
