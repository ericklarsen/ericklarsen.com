import MainWrapper from "@/components/MainWrapper/MainWrapper";

export default function Blogs() {
    return (
        <MainWrapper>
            <div className="w-full max-w-[42.25rem] mx-auto mt-10">
                <h3 className="font-bold font-sans text-center">Blogs 📝</h3>

                <div className="w-full min-h-[18.75rem] flex items-center justify-center">
                    <p className="font-mono opacity-50 text-center">
                        We don't have any contents at the moment.
                    </p>
                </div>
            </div>
        </MainWrapper>
    );
}
