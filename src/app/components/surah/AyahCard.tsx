// components/AyahCard.jsx

export default function AyahCard() {

    const ayah = {
  numberInSurah: 1,
  text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  translation: "In the name of Allah, the Most Gracious, the Most Merciful.",
  juz: 1
};

  return (
    <div className="rounded-xl border border-[#e0b583]/20 bg-[#111] p-4 shadow-md transition hover:shadow-lg sm:p-5">
      
      {/* Ayah Number */}
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-xs text-gray-400 sm:text-sm">
          Ayah {ayah.numberInSurah}
        </span>

        <span className="rounded bg-[#e0b583]/10 px-2 py-1 text-[11px] text-[#e0b583] sm:text-xs">
          {ayah.juz} Juz
        </span>
      </div>

      {/* Arabic Text */}
      <p className="font-arabic text-right text-xl leading-loose text-[#e0b583] sm:text-2xl">
        {ayah.text}
      </p>

      {/* Translation */}
      {ayah.translation && (
        <p className="mt-4 text-xs leading-relaxed text-gray-300 sm:text-sm">
          {ayah.translation}
        </p>
      )}

      {/* Footer Actions */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <button className="text-xs text-gray-400 transition hover:text-[#e0b583]">
          📋 Copy
        </button>

        <button className="text-xs text-gray-400 transition hover:text-[#e0b583]">
          🔖 Bookmark
        </button>
      </div>
    </div>
  );
}