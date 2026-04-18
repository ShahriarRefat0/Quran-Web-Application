import AyahCard from "../components/AyahCard";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";

export default function ReadQuranPage() {
    return (
        <main className="min-h-screen bg-[#090909] text-white">
            <div className="mx-auto flex w-full max-w-7xl">
                <Sidebar></Sidebar>

                <section className="w-full flex-1 px-4 py-6 md:px-8 md:py-10">
                    <div className="mb-6 border-b border-[#e0b583]/25 pb-5">
                        <p className="text-xs uppercase tracking-[0.22em] text-[#e0b583]/80">
                            Read Quran
                        </p>
                        <h1 className="mt-2 text-2xl font-semibold md:text-3xl">
                            Quran Reader
                        </h1>
                        <p className="mt-2 max-w-2xl text-sm text-gray-400">
                            Choose a Surah from the sidebar and read with Arabic text and
                            translation.
                        </p>
                    </div>

                    <div className="mb-6 rounded-xl border border-[#e0b583]/20 bg-[#121212] p-4">
                        <Searchbar></Searchbar>
                    </div>

                    <div className="space-y-4">
                        <AyahCard></AyahCard>
                        <AyahCard></AyahCard>
                        <AyahCard></AyahCard>
                    </div>
                </section>
            </div>
        </main>
    );
}