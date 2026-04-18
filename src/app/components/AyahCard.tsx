// components/AyahCard.jsx

export default function AyahCard() {

    const ayah = {
  numberInSurah: 1,
  text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  translation: "In the name of Allah, the Most Gracious, the Most Merciful.",
  juz: 1
};

  return (
    <div className="bg-[#111] border border-[#e0b583]/20 rounded-xl p-5 shadow-md hover:shadow-lg transition">
      
      {/* Ayah Number */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-gray-400">
          Ayah {ayah.numberInSurah}
        </span>

        <span className="text-xs bg-[#e0b583]/10 text-[#e0b583] px-2 py-1 rounded">
          {ayah.juz} Juz
        </span>
      </div>

      {/* Arabic Text */}
      <p className="text-right text-2xl leading-loose text-[#e0b583] font-arabic">
        {ayah.text}
      </p>

      {/* Translation */}
      {ayah.translation && (
        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          {ayah.translation}
        </p>
      )}

      {/* Footer Actions */}
      <div className="flex justify-between items-center mt-4">
        <button className="text-xs text-gray-400 hover:text-[#e0b583]">
          📋 Copy
        </button>

        <button className="text-xs text-gray-400 hover:text-[#e0b583]">
          🔖 Bookmark
        </button>
      </div>
    </div>
  );
}