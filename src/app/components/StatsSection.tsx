export default function StatsSection() {
  return (
    <section className="px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      
      <div className="bg-[#111] p-4 rounded-lg border border-[#e0b583]/20 text-center">
        <p className="text-[#e0b583] text-xl font-bold">114</p>
        <p className="text-gray-400 text-sm">Surahs</p>
      </div>

      <div className="bg-[#111] p-4 rounded-lg border border-[#e0b583]/20 text-center">
        <p className="text-[#e0b583] text-xl font-bold">6236</p>
        <p className="text-gray-400 text-sm">Ayahs</p>
      </div>

      <div className="bg-[#111] p-4 rounded-lg border border-[#e0b583]/20 text-center">
        <p className="text-[#e0b583] text-xl font-bold">30</p>
        <p className="text-gray-400 text-sm">Juz</p>
      </div>

      <div className="bg-[#111] p-4 rounded-lg border border-[#e0b583]/20 text-center">
        <p className="text-[#e0b583] text-xl font-bold">114</p>
        <p className="text-gray-400 text-sm">Bismillah</p>
      </div>

    </section>
  );
}