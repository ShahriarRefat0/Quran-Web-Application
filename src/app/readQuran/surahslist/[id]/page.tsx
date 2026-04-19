import SurahContent from "@/app/components/surah/SurahContent";
import axiosInstance from "@/app/lib/axios";

async function getSurah(id: string) {
  try {
    // Fetch Arabic text
    const arabicRes = await axiosInstance.get(`/surah/${id}`);
    const arabicData = arabicRes.data.data;

    // Fetch English translation (Sahih International)
    const englishRes = await axiosInstance.get(
      `/surah/${id}?edition=en.sahih`
    );
    const englishData = englishRes.data.data;

    // Merge ayahs: Arabic text with English translation
    if (arabicData.ayahs && englishData.ayahs) {
      arabicData.ayahs = arabicData.ayahs.map((ayah: unknown, index: number) => {
        const baseAyah = ayah as Record<string, unknown>;
        return {
          ...baseAyah,
          translation: (englishData.ayahs[index] as Record<string, unknown>)?.text || undefined,
        };
      });
    }

    return arabicData;
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}

export default async function SurahPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; 

  const surah = await getSurah(id);

  if (!surah) {
    return <p className="p-6 text-red-400">Failed to load</p>;
  }

  return <SurahContent surah={surah} />;
}