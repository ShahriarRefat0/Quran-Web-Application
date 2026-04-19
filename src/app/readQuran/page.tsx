import Link from "next/link";
import Searchbar from "../components/ui/Searchbar";
import axiosInstance from "../lib/axios";

type SurahSummary = {
    number: number;
    englishName: string;
};

async function getAllSurah() {
    try{
const res = await axiosInstance.get(`/surah`);
return res.data.data 
    }catch(err){
        console.log(err)
        return null
    }
}

export default async function ReadQuranPage() {
    const surahs = await getAllSurah();

    return (
        <div className="mx-auto w-full max-w-400 px-4 py-5 sm:px-6 md:px-8 md:py-10">
            <div className="mb-6 border-b border-[#e0b583]/25 pb-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[#e0b583]/80">
                    Read Quran
                </p>
                <h1 className="mt-2 text-xl font-semibold sm:text-2xl md:text-3xl">
                    Quran Reader
                </h1>
                <p className="mt-2 max-w-2xl text-xs text-gray-400 sm:text-sm">
                    Open a surah to read ayahs. Your sidebar font settings are applied
                    automatically.
                </p>
            </div>

            <div className="mb-6 rounded-xl border border-[#e0b583]/20 bg-[#121212] p-3 sm:p-4">
                <Searchbar></Searchbar>
            </div>

            <div className="rounded-xl border border-[#e0b583]/20 bg-[#111] p-4 sm:p-5">
                <h2 className="text-sm font-semibold text-[#e0b583] sm:text-base">
                    Quick Surah Access
                </h2>
                <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                    {surahs ? `Total Surahs: ${surahs.length}` : "Unable to load surahs right now."}
                </p>

                {surahs && surahs.length > 0 && (
                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {surahs.slice(0, 8).map((surah: SurahSummary) => (
                            <Link
                                key={surah.number}
                                href={`/readQuran/surahslist/${surah.number}`}
                                className="rounded-lg border border-[#e0b583]/20 px-3 py-2 text-sm text-gray-200 transition hover:bg-[#e0b583]/10 hover:text-[#e0b583]"
                            >
                                {surah.number}. {surah.englishName}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}