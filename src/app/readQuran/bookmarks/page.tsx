"use client";

import Link from "next/link";
import { useState } from "react";
import { LuBookmarkMinus } from "react-icons/lu";

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

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<BookmarkedAyah[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const stored = localStorage.getItem("quran.bookmarks");
    return stored ? JSON.parse(stored) : [];
  });

  const removeBookmark = (id: string) => {
    const next = bookmarks.filter((item) => item.id !== id);
    localStorage.setItem("quran.bookmarks", JSON.stringify(next));
    setBookmarks(next);
  };

  const clearAll = () => {
    localStorage.setItem("quran.bookmarks", JSON.stringify([]));
    setBookmarks([]);
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 md:px-8 md:py-10">
      <div className="mb-6 flex items-center justify-between gap-3 border-b border-[#e0b583]/20 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#e0b583]/80">Bookmarks</p>
          <h1 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Saved Ayahs</h1>
        </div>

        {bookmarks.length > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="rounded-md border border-red-500/40 px-3 py-1.5 text-xs text-red-300 transition hover:bg-red-500/10"
          >
            Clear All
          </button>
        )}
      </div>

      {bookmarks.length === 0 ? (
        <div className="rounded-xl border border-[#e0b583]/20 bg-[#111] p-5 text-sm text-gray-300">
          No bookmarked ayah yet.
          <div className="mt-3">
            <Link
              href="/readQuran/surahslist"
              className="text-[#e0b583] transition hover:text-[#f0cd9f]"
            >
              Browse surahs and add bookmarks
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {bookmarks.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-[#e0b583]/20 bg-[#111] p-4 shadow-md sm:p-5"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="text-xs text-gray-400 sm:text-sm">
                  {item.surahName ? item.surahName : "Surah"} - Ayah {item.numberInSurah}
                </div>
                <span className="rounded bg-[#e0b583]/10 px-2 py-1 text-[11px] text-[#e0b583] sm:text-xs">
                  {item.juz ?? "-"} Juz
                </span>
              </div>

              <p className="quran-arabic-text text-right leading-loose text-[#e0b583]">{item.text}</p>
              {item.translation && (
                <p className="quran-translation-text mt-4 leading-relaxed text-gray-300">
                  {item.translation}
                </p>
              )}

              <div className="mt-4 flex items-center justify-between gap-3">
                {item.surahNumber ? (
                  <Link
                    href={`/readQuran/surahslist/${item.surahNumber}`}
                    className="text-xs text-[#e0b583] transition hover:text-[#f0cd9f]"
                  >
                    Open Surah
                  </Link>
                ) : (
                  <span className="text-xs text-gray-500">Open Surah</span>
                )}

                <button
                  type="button"
                  onClick={() => removeBookmark(item.id)}
                  className="text-xs text-gray-400 transition hover:text-red-300"
                >
                  <LuBookmarkMinus />Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
