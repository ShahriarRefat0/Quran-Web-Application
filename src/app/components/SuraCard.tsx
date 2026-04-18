// components/SurahCard.jsx

import Link from "next/link";

export default function SurahCard() {
    const surah = {
  number: 1,
  name: "الفاتحة",
  englishName: "Al-Fatiha",
  englishNameTranslation: "The Opening",
  revelationType: "Meccan",
  numberOfAyahs: 7
};
  return (
    <Link href={`/surah/${surah.number}`}>
      <div className="bg-[#111] border border-[#e0b583]/20 rounded-xl p-5 hover:shadow-lg hover:border-[#e0b583]/40 transition cursor-pointer">
        
        {/* Top Section */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-[#e0b583] font-bold text-lg">
            {surah.number}
          </span>

          <span className="text-xs text-gray-400">
            {surah.revelationType}
          </span>
        </div>

        {/* Name */}
        <h2 className="text-xl font-semibold text-white">
          {surah.englishName}
        </h2>

        {/* Arabic Name */}
        <p className="text-right text-2xl text-[#e0b583] mt-2 font-arabic">
          {surah.name}
        </p>

        {/* Footer */}
        <div className="mt-4 flex justify-between text-sm text-gray-400">
          <span>{surah.englishNameTranslation}</span>
          <span>{surah.numberOfAyahs} Ayahs</span>
        </div>
      </div>
    </Link>
  );
}