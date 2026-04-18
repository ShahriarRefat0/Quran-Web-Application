// components/FeaturedSurahs.jsx

import SurahCard from "./SuraCard";



export default function FeaturedSurahs() {
    const surahs = [
  { number: 1, name: "الفاتحة", englishName: "Al-Fatiha", englishNameTranslation: "The Opening", revelationType: "Meccan", numberOfAyahs: 7 },
  { number: 36, name: "يس", englishName: "Ya-Sin", englishNameTranslation: "Ya Sin", revelationType: "Meccan", numberOfAyahs: 83 },
  { number: 55, name: "الرحمن", englishName: "Ar-Rahman", englishNameTranslation: "The Beneficent", revelationType: "Medinan", numberOfAyahs: 78 },
  { number: 67, name: "الملك", englishName: "Al-Mulk", englishNameTranslation: "The Sovereignty", revelationType: "Meccan", numberOfAyahs: 30 },
  { number: 1, name: "الفاتحة", englishName: "Al-Fatiha", englishNameTranslation: "The Opening", revelationType: "Meccan", numberOfAyahs: 7 },
  { number: 36, name: "يس", englishName: "Ya-Sin", englishNameTranslation: "Ya Sin", revelationType: "Meccan", numberOfAyahs: 83 },
  { number: 55, name: "الرحمن", englishName: "Ar-Rahman", englishNameTranslation: "The Beneficent", revelationType: "Medinan", numberOfAyahs: 78 },
  { number: 67, name: "الملك", englishName: "Al-Mulk", englishNameTranslation: "The Sovereignty", revelationType: "Meccan", numberOfAyahs: 30 }
];
  return (
    <section className="px-6 py-8">
      
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Featured Surahs
        </h2>
        <p className="text-gray-400 text-sm">
          Popular and frequently read surahs
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {surahs.slice(0, 4).map((surah) => (
          <SurahCard key={surah.number} surah={surah} />
        ))}
      </div>
    </section>
  );
}