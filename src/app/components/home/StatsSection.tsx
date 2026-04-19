export default function StatsSection() {
  const stats = [
    { label: "Surahs", value: "114" },
    { label: "Ayahs", value: "6236" },
    { label: "Juz", value: "30" },
    { label: "Bismillah", value: "114" },
  ];

  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-5 sm:mb-6">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            Quran At a Glance
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            Core numbers from the complete Mushaf
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#e0b583]/20 bg-[#111] p-4 text-center shadow-sm transition hover:border-[#e0b583]/40"
            >
              <p className="text-2xl font-bold text-[#e0b583] sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}