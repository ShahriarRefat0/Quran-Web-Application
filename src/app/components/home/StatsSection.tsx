import axiosInstance from "@/app/lib/axios";

type SurahSummary = {
  numberOfAyahs: number;
};

type JuzResponse = {
  number: number;
};

type Stat = {
  label: string;
  value: string;
};

async function getQuranStats(): Promise<Stat[]> {
  try {
    const [surahResponse, juzResponse] = await Promise.all([
      axiosInstance.get("/surah"),
      axiosInstance.get("/juz/30"),
    ]);

    const surahs = surahResponse.data?.data as SurahSummary[] | undefined;
    const juzData = juzResponse.data?.data as JuzResponse | undefined;

    if (!surahs || !Array.isArray(surahs)) {
      return [];
    }

    const surahCount = surahs.length;
    const ayahCount = surahs.reduce(
      (total, surah) => total + surah.numberOfAyahs,
      0
    );
    const juzCount = juzData?.number;

    return [
      { label: "Surahs", value: String(surahCount) },
      { label: "Ayahs", value: String(ayahCount) },
      {
        label: "Juz",
        value: typeof juzCount === "number" ? String(juzCount) : "N/A",
      },
      { label: "Bismillah", value: String(surahCount) },
    ];
  } catch (error) {
    console.error("Failed to fetch Quran stats:", error);
    return [];
  }
}

export default async function StatsSection() {
  const stats = await getQuranStats();

  return (
    <section className="w-full px-4 bg-black pt-10 pb-20 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-5 sm:mb-6">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            Quran At a Glance
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            Core numbers from the complete Mushaf
          </p>
        </div>

        {stats.length ? (
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
        ) : (
          <div className="rounded-xl border border-[#e0b583]/20 bg-[#111] p-6 text-center text-sm text-gray-400">
            Stats are unavailable right now.
          </div>
        )}
      </div>
    </section>
  );
}