import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

type Props = {
    children: React.ReactNode;
};

const MainWrapper = (props: Props) => {
    return (
        <main className="px-5 pt-7 pb-40 md:px-[6.25rem] md:pb-40 md:pt-7 min-h-screen relative">
            <Navbar />
            {props.children}
            <Footer />
        </main>
    );
};

export default MainWrapper;
