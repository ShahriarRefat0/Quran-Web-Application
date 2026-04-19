"use client";

import { useEffect, useMemo, useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { LuBookmarkCheck, LuBookmarkPlus } from "react-icons/lu";
import { MdOutlineContentCopy, MdOutlineSmsFailed } from "react-icons/md";

type Ayah = {
  number: number;
  numberInSurah: number;
  text: string;
  translation?: string;
  juz?: number;
};

type BookmarkedAyah = {
  id: string;
  surahNumber?: number;
  surahName?: string;
  numberInSurah: number;
  text: string;
  translation?: string;
  juz?: number;
  savedAt: string;
};

export default function AyahCard({
  ayah,
  surahNumber,
  surahName,
}: {
  ayah: Ayah;
  surahNumber?: number;
  surahName?: string;
}) {
  const bookmarkId = useMemo(
    () => `${surahNumber ?? "unknown"}-${ayah.numberInSurah}`,
    [ayah.numberInSurah, surahNumber]
  );
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle"
  );

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("quran.bookmarks");
    const parsed: BookmarkedAyah[] = storedBookmarks
      ? JSON.parse(storedBookmarks)
      : [];
    setIsBookmarked(parsed.some((item) => item.id === bookmarkId));
  }, [bookmarkId]);

  const handleCopy = async () => {
    const content = `${ayah.text}${
      ayah.translation ? `\n\n${ayah.translation}` : ""
    }`;

    try {
      await navigator.clipboard.writeText(content);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 1800);
    } catch {
      setCopyState("failed");
      setTimeout(() => setCopyState("idle"), 1800);
    }
  };

  const handleToggleBookmark = () => {
    const storedBookmarks = localStorage.getItem("quran.bookmarks");
    const parsed: BookmarkedAyah[] = storedBookmarks
      ? JSON.parse(storedBookmarks)
      : [];

    const exists = parsed.some((item) => item.id === bookmarkId);

    if (exists) {
      const next = parsed.filter((item) => item.id !== bookmarkId);
      localStorage.setItem("quran.bookmarks", JSON.stringify(next));
      setIsBookmarked(false);
      return;
    }

    const newBookmark: BookmarkedAyah = {
      id: bookmarkId,
      surahNumber,
      surahName,
      numberInSurah: ayah.numberInSurah,
      text: ayah.text,
      translation: ayah.translation,
      juz: ayah.juz,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem("quran.bookmarks", JSON.stringify([newBookmark, ...parsed]));
    setIsBookmarked(true);
  };

//     const ayah = {
//   numberInSurah: 1,
//   text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
//   translation: "In the name of Allah, the Most Gracious, the Most Merciful.",
//   juz: 1
// };

  return (
    <div className="rounded-xl border border-[#e0b583]/20 bg-[#111] p-4 shadow-md transition hover:shadow-lg sm:p-5">
      
      {/* English Reference */}
      {surahName && (
        <div className="mb-3 text-xs font-semibold text-[#e0b583]/70 sm:text-sm">
          {surahName} - Verse {ayah.numberInSurah}
        </div>
      )}

      {/* Ayah Number */}
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-xs text-gray-400 sm:text-sm">
          Ayah {ayah.numberInSurah}
        </span>

        <span className="rounded bg-[#e0b583]/10 px-2 py-1 text-[11px] text-[#e0b583] sm:text-xs">
          {ayah.juz ?? "-"} Juz
        </span>
      </div>

      {/* Arabic Text */}
      <p className="quran-arabic-text text-right leading-loose text-[#e0b583]">
        {ayah.text}
      </p>

      {/* English Translation */}
      {ayah.translation && (
        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold text-gray-400 sm:text-sm">
            English Translation:
          </p>
          <p className="quran-translation-text leading-relaxed text-gray-300">
            {ayah.translation}
          </p>
        </div>
      )}

      {/* Footer Actions */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="text-xs text-gray-400 transition hover:text-[#e0b583]"
        >
          {copyState === "copied" && (<><IoMdCheckboxOutline />Copied</>)}
          {copyState === "failed" && (<><MdOutlineSmsFailed />Failed</>)}
          {copyState === "idle" && (
  <>
    <MdOutlineContentCopy /> copy
  </>
)}
        </button>

        <button
          type="button"
          onClick={handleToggleBookmark}
          className={`text-xs transition ${
            isBookmarked
              ? "text-[#e0b583]"
              : "text-gray-400 hover:text-[#e0b583]"
          }`}
        >
          {isBookmarked ? (<><LuBookmarkCheck  />Saved</>) : (<><LuBookmarkPlus  />Bookmark</>)}
        </button>
      </div>
    </div>
  );
}