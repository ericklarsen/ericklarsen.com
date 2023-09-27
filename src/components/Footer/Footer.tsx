type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="absolute left-0 bottom-6 sm:bottom-10 px-5 w-full">
            <p className="text-caption opacity-[65%] font-mono text-center w-full">
                Thanks for visiting my corner of the web! © 2018 - {new Date().getFullYear()} Erick
                Larsen. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
