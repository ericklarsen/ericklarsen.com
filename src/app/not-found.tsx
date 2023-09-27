import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full h-screen flex items-center justify-center flex-col box-border">
            <h2 className="font-caveat">Not Found</h2>
            <p className="font-mono">Could not find requested resource</p>
            <Link href="/" className="font-mono p-2 bg-black text-white mt-8">
                Return Home
            </Link>
        </div>
    );
}
