// components/Sidebar.jsx

"use client";

import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <aside className="border-b border-[#e0b583]/20 bg-[#0d0d0d] px-4 py-3 lg:hidden">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-[#e0b583]">Quran App</div>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="rounded-md border border-[#e0b583]/30 px-2 py-1 text-lg text-[#e0b583] transition hover:bg-[#e0b583]/10"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/55 lg:hidden"
          onClick={handleCloseMenu}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-[78vw] max-w-xs border-r border-[#e0b583]/20 bg-[#0d0d0d] p-5 transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="text-lg font-bold text-[#e0b583]">Quran App</div>
          <button
            type="button"
            onClick={handleCloseMenu}
            aria-label="Close menu"
            className="rounded-md border border-[#e0b583]/30 px-2 py-1 text-base text-[#e0b583] transition hover:bg-[#e0b583]/10"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleCloseMenu}
                className={`rounded-lg px-4 py-2.5 text-sm transition ${
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

      <aside className="hidden min-h-screen w-64 shrink-0 border-r border-[#e0b583]/20 bg-[#0d0d0d] p-5 lg:flex lg:flex-col">
        {/* Logo */}
        <div className="mb-8 text-xl font-bold text-[#e0b583]">Quran App</div>

        {/* Menu */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm transition ${
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
    </>
  );
}