import AyahCard from "@/app/components/surah/AyahCard";
import axiosInstance from "@/app/lib/axios";


async function getSurah(id: string) {
//   if (!id) {
//     console.error("ID is missing");
//     return null;
//   }

  try {
    const res = await axiosInstance.get(`/surah/${id}/en.asad`);
    return res.data.data;
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

      {/* Ayahs */}
      {surah.ayahs.map((ayah: any) => (
        <AyahCard key={ayah.number} ayah={ayah} />
      ))}
    </div>
  );
}