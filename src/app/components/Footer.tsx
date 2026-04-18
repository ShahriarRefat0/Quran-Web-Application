import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-600">

        {/* Left */}
        <p>© {new Date().getFullYear()} Quran App. All rights reserved.</p>

        {/* Right */}
        <div className="flex h-100 gap-4">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/#surahs" className="hover:text-black transition">Surahs</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;