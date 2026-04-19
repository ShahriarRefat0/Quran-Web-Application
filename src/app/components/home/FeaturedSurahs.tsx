// components/FeaturedSurahs.jsx

import SurahCard from "../surah/SurahCard";

export default function FeaturedSurahs() {
  const surahs = [
    {
      number: 1,
      name: "الفاتحة",
      englishName: "Al-Fatiha",
      englishNameTranslation: "The Opening",
      revelationType: "Meccan",
      numberOfAyahs: 7,
    },
    {
      number: 36,
      name: "يس",
      englishName: "Ya-Sin",
      englishNameTranslation: "Ya Sin",
      revelationType: "Meccan",
      numberOfAyahs: 83,
    },
    {
      number: 55,
      name: "الرحمن",
      englishName: "Ar-Rahman",
      englishNameTranslation: "The Beneficent",
      revelationType: "Medinan",
      numberOfAyahs: 78,
    },
    {
      number: 67,
      name: "الملك",
      englishName: "Al-Mulk",
      englishNameTranslation: "The Sovereignty",
      revelationType: "Meccan",
      numberOfAyahs: 30,
    },
  ];

  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title */}
        <div className="mb-6 flex flex-col justify-between gap-3 sm:mb-8 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Featured Surahs
            </h2>
            <p className="mt-1 text-sm text-gray-400 sm:text-base">
              Popular and frequently read surahs
            </p>
          </div>
          <a
            href="/surahs"
            className="inline-flex w-fit items-center rounded-lg border border-[#e0b583]/30 bg-[#e0b583]/10 px-4 py-2 text-sm font-medium text-[#e0b583] transition hover:bg-[#e0b583]/20"
          >
            View all surahs
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {surahs.map((surah) => (
            <SurahCard key={surah.number} surah={surah} />
          ))}
        </div>
      </div>
    </section>
  );
}