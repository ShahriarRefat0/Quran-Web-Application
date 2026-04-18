// components/Sidebar.jsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Read Quran", href: "/readQuran" },
  { name: "Surahs", href: "/surahs" },
  { name: "Bookmarks", href: "/bookmarks" },
  { name: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-[#0d0d0d] border-r border-[#e0b583]/20 p-5 hidden md:block">
      
      {/* Logo */}
      <div className="mb-8 text-[#e0b583] text-xl font-bold">
        Quran App
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                isActive
                  ? "bg-[#e0b583]/10 text-[#e0b583]"
                  : "text-gray-400 hover:bg-[#e0b583]/10 hover:text-[#e0b583]"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}