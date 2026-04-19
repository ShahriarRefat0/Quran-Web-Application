import React from 'react';
import axiosInstance from "../../lib/axios";
import SurahCard from '@/app/components/surah/SurahCard';

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Surah = {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
};

async function getSurahs() {
try {    
    const res = await axiosInstance.get("/surah");
    console.log("data",res.data.data)
    return res.data.data as Surah[];
} catch (err){
    console.error(err)
    return [];
}
}


const SurahsList = async () => {

    const surahs = await getSurahs();
// console.log(surahs)

    return (
        <div className='p-5'>
               {/* Top Section */}
    <div className="mb-6 border-b border-[#e0b583]/20 pb-4">
      <p className="text-xs uppercase tracking-[0.22em] text-[#e0b583]/80">
                    Read Quran
                </p>
      <h1 className="text-2xl md:text-3xl font-bold text-white">
        All Surahs
      </h1>
      <p className="text-sm text-gray-400 mt-1">
        Browse all 114 Surahs of the Holy Quran
      </p>
    </div>
        <div className='p-5 grid grid-cols-2 md:grid-cols-3 gap-5'>
           {surahs.map((surah: Surah) => (
               <SurahCard key={surah.number} surah={surah} />
            ))}
        </div>
            </div>
    );
};

export default SurahsList;