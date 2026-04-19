import AyahCard from "../components/surah/AyahCard";

export default function ReadQuranPage() {
    return (
        <div className="mx-auto w-full max-w-[1600px] px-4 py-5 sm:px-6 md:px-8 md:py-10">
            <div className="mb-6 border-b border-[#e0b583]/25 pb-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[#e0b583]/80">
                    Read Quran
                </p>
                <h1 className="mt-2 text-xl font-semibold sm:text-2xl md:text-3xl">
                    Quran Reader
                </h1>
                <p className="mt-2 max-w-2xl text-xs text-gray-400 sm:text-sm">
                    Choose a Surah from the sidebar and read with Arabic text and
                    translation.
                </p>
            </div>

            <div className="mb-6 rounded-xl border border-[#e0b583]/20 bg-[#121212] p-3 sm:p-4">
              
            </div>

            <div className="space-y-4">
                <AyahCard></AyahCard>
                <AyahCard></AyahCard>
                <AyahCard></AyahCard>
            </div>
        </div>
    );
}