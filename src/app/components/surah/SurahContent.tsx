"use client";

import { useState, useMemo } from "react";
import AyahCard from "./AyahCard";
import Searchbar from "../ui/Searchbar";

type SurahAyah = {
  number: number;
  numberInSurah: number;
  text: string;
  translation?: string;
  juz?: number;
};

type SurahData = {
  number: number;
  englishName: string;
  englishNameTranslation: string;
  ayahs: SurahAyah[];
};

export default function SurahContent({
  surah,
}: {
  surah: SurahData;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAyahs = useMemo(() => {
    if (!searchQuery.trim()) {
      return surah.ayahs;
    }

    const query = searchQuery.toLowerCase();
    return surah.ayahs.filter(
      (ayah) =>
        ayah.translation?.toLowerCase().includes(query) ||
        ayah.numberInSurah.toString().includes(query)
    );
  }, [searchQuery, surah.ayahs]);

  return (
    <div className="p-6 space-y-4">
      {/* Header */}
      <div className="mb-6 border-b border-[#e0b583]/20 pb-4">
        <h1 className="text-2xl font-bold text-[#e0b583]">
          {surah.englishName}
        </h1>
        <p className="text-gray-400 text-sm">
          {surah.englishNameTranslation}
        </p>
      </div>

      {/* Search */}
      <div className="mb-6 rounded-xl border border-[#e0b583]/20 bg-[#121212] p-3 sm:p-4">
        <Searchbar onSearch={setSearchQuery} value={searchQuery} />
      </div>

      {/* Results Info */}
      {searchQuery && (
        <div className="rounded-lg bg-[#e0b583]/10 px-4 py-2 text-sm text-[#e0b583]/80">
          Found {filteredAyahs.length} of {surah.ayahs.length} ayahs
        </div>
      )}

      {/* Ayahs */}
      {filteredAyahs.length > 0 ? (
        filteredAyahs.map((ayah: SurahAyah) => (
          <AyahCard
            key={ayah.number}
            ayah={ayah}
            surahNumber={surah.number}
            surahName={surah.englishName}
          />
        ))
      ) : (
        <div className="rounded-xl border border-[#e0b583]/20 bg-[#111] p-4 text-center text-gray-400">
          No ayahs found matching &quot;{searchQuery}&quot;
        </div>
      )}
    </div>
  );
}
