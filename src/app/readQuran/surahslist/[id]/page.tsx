import SurahContent from "@/app/components/surah/SurahContent";
import axiosInstance from "@/app/lib/axios";

type ApiAyah = {
  number: number;
  numberInSurah: number;
  text: string;
  juz?: number;
};

async function getSurah(id: string) {
  try {
    const [arabicRes, englishRes] = await Promise.all([
      axiosInstance.get(`/surah/${id}/editions/quran-uthmani`),
      axiosInstance.get(`/surah/${id}/editions/en.asad`),
    ]);

    const arabicData = arabicRes.data?.data?.[0];
    const englishData = englishRes.data?.data?.[0];
    // console.log({arabicData, englishData})

    if (!arabicData || !englishData) {
      return null;
    }

    const mergedAyahs = (arabicData.ayahs as ApiAyah[]).map(
      (ayah: ApiAyah, index: number) => ({
      ...ayah,
      translation: englishData.ayahs[index]?.text,
      })
    );


    return {
      ...arabicData,
      ayahs: mergedAyahs,
    };
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
//   console.log(surah)

  if (!surah) {
    return <p className="p-6 text-red-400">Failed to load</p>;
  }

  return <SurahContent  surah={surah} />;
}