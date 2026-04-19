
const Footer: React.FC = () => {
  return (
    <footer className="mt-12 w-full border-t border-[#e0b583]/20 bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl text-center px-4 py-6 text-sm text-gray-400 sm:px-6 md:flex-row md:items-center lg:px-8">

        {/* Left */}
        <p>© {new Date().getFullYear()} Quran App. All rights reserved.</p>

     

      </div>
    </footer>
  );
};

export default Footer;