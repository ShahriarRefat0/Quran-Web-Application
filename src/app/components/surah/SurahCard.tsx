
import Link from "next/link";

type Surah = {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
};

type SurahCardProps = {
  surah: Surah;
};

export default function SurahCard({ surah }: SurahCardProps) {
  // console.log(surah)
  return (
   <Link href={`/readQuran/surahslist/${surah.number}`}>
      <div className="cursor-pointer rounded-xl border border-[#e0b583]/20 bg-[#111] p-4 transition hover:border-[#e0b583]/40 hover:shadow-lg sm:p-5">
        
        {/* Top Section */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-lg font-bold text-[#e0b583]">
            {surah.number}
          </span>

          <span className="rounded-full border border-[#e0b583]/20 px-2 py-0.5 text-[11px] text-gray-400">
            {surah.revelationType}
          </span>
        </div>

        {/* Name */}
        <h2 className="text-lg font-semibold text-white sm:text-xl">
          {surah.englishName}
        </h2>

        {/* Arabic Name */}
        <p className="mt-2 text-right font-arabic text-xl text-[#e0b583] sm:text-2xl">
          {surah.name}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between gap-2 text-xs text-gray-400 sm:text-sm">
          <span className="truncate">{surah.englishNameTranslation}</span>
          <span className="shrink-0">{surah.numberOfAyahs} Ayahs</span>
        </div>
      </div>
    </Link>
  );
}