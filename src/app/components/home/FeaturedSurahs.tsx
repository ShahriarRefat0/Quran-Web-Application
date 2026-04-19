// components/FeaturedSurahs.jsx

import Link from "next/link";
import SurahCard from "../surah/SurahCard";
import axiosInstance from "@/app/lib/axios";

type SurahItem = {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
};

const featuredSurahNumbers = [1, 36, 55, 67];

async function getFeaturedSurahs(): Promise<SurahItem[]> {
  try {
    const response = await axiosInstance.get("/surah");
    const allSurahs = response.data?.data as SurahItem[] | undefined;

    if (!allSurahs || !Array.isArray(allSurahs)) {
      return [];
    }

    const byNumber = new Map(allSurahs.map((surah) => [surah.number, surah]));
    const selected = featuredSurahNumbers
      .map((number) => byNumber.get(number))
      .filter((surah): surah is SurahItem => Boolean(surah));

    return selected;
  } catch (error) {
    console.error("Failed to fetch featured surahs:", error);
    return [];
  }
}

export default async function FeaturedSurahs() {
  const surahs = await getFeaturedSurahs();

  return (
    <section className="w-full px-4 bg-black py-10 sm:px-6 lg:px-8 lg:py-12">
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
          <Link
            href="/readQuran/surahslist"
            className="inline-flex w-fit items-center rounded-lg border border-[#e0b583]/30 bg-[#e0b583]/10 px-4 py-2 text-sm font-medium text-[#e0b583] transition hover:bg-[#e0b583]/20"
          >
            View all surahs
          </Link>
        </div>

        {/* Cards */}
        {surahs.length ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {surahs.map((surah) => (
              <SurahCard key={surah.number} surah={surah} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-[#e0b583]/20 bg-[#111] p-6 text-center text-sm text-gray-400">
            Featured surahs are unavailable right now.
          </div>
        )}
      </div>
    </section>
  );
}