import SurahContent from "@/app/components/surah/SurahContent";
import axiosInstance from "@/app/lib/axios";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type ApiAyah = {
  number: number;
  numberInSurah: number;
  text: string;
  juz?: number;
};

type ApiEdition = {
  number?: number;
  identifier?: string;
  language?: string;
  edition?: {
    identifier?: string;
    language?: string;
  };
  englishName?: string;
  englishNameTranslation?: string;
  ayahs?: ApiAyah[];
};

async function getSurah(id: string) {
  try {
    const response = await axiosInstance.get(
      `/surah/${id}/editions/quran-uthmani,en.asad`
    );

    const payload = response.data?.data;
    const editions: ApiEdition[] = Array.isArray(payload)
      ? payload
      : payload
      ? [payload]
      : [];

    const arabicData =
      editions.find(
        (edition) =>
          edition.identifier === "quran-uthmani" ||
          edition.edition?.identifier === "quran-uthmani"
      ) ||
      editions.find(
        (edition) => edition.language === "ar" || edition.edition?.language === "ar"
      );

    const englishData =
      editions.find(
        (edition) =>
          edition.identifier === "en.asad" ||
          edition.edition?.identifier === "en.asad"
      ) ||
      editions.find(
        (edition) => edition.language === "en" || edition.edition?.language === "en"
      );

    if (!arabicData || !englishData) {
      return null;
    }

    const arabicAyahs = Array.isArray(arabicData.ayahs) ? arabicData.ayahs : [];
    const englishAyahs = Array.isArray(englishData.ayahs)
      ? englishData.ayahs
      : [];

    const mergedAyahs = arabicAyahs.map((ayah: ApiAyah, index: number) => ({
      ...ayah,
      translation: englishAyahs[index]?.text?.trim(),
    }));


    return {
      number: arabicData.number ?? Number(id),
      englishName: arabicData.englishName ?? "Unknown Surah",
      englishNameTranslation:
        arabicData.englishNameTranslation ?? "Translation unavailable",
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