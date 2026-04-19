// components/Sidebar.jsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const menuItems = [
  { name: "Home", href: "/" },
  // { name: "Read Quran", href: "/readQuran" },
  { name: "Surahs List", href: "/readQuran/surahslist" },
  { name: "Bookmarks", href: "/readQuran/bookmarks" },
];

const ARABIC_FONT_OPTIONS = [
  {
    label: "Traditional",
    value: '"Amiri", "Times New Roman", serif',
  },
  {
    label: "Modern",
    value: '"Noto Naskh Arabic", "Amiri", serif',
  },
];

const getStoredValue = (key: string, fallback: string) => {
  if (typeof window === "undefined") {
    return fallback;
  }

  return localStorage.getItem(key) ?? fallback;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const getStoredNumber = (
  key: string,
  fallback: number,
  min: number,
  max: number
) => {
  if (typeof window === "undefined") {
    return fallback;
  }

  const rawValue = localStorage.getItem(key);
  const parsed = Number(rawValue);

  if (!Number.isFinite(parsed)) {
    return fallback;
  }

  return clamp(parsed, min, max);
};

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [arabicFont, setArabicFont] = useState(() =>
    getStoredValue("quran.arabicFont", ARABIC_FONT_OPTIONS[0].value)
  );
  const [arabicFontSize, setArabicFontSize] = useState(() =>
    getStoredNumber("quran.arabicFontSize", 32, 20, 56)
  );
  const [translationFontSize, setTranslationFontSize] = useState(() =>
    getStoredNumber("quran.translationFontSize", 14, 12, 28)
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--quran-arabic-font", arabicFont);
    document.documentElement.style.setProperty(
      "--quran-arabic-size",
      `${arabicFontSize}px`
    );
    document.documentElement.style.setProperty(
      "--quran-translation-size",
      `${translationFontSize}px`
    );

    localStorage.setItem("quran.arabicFont", arabicFont);
    localStorage.setItem("quran.arabicFontSize", String(arabicFontSize));
    localStorage.setItem(
      "quran.translationFontSize",
      String(translationFontSize)
    );
  }, [arabicFont, arabicFontSize, translationFontSize]);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <aside className="sticky top-0 z-30 border-b border-[#e0b583]/20 bg-[#0d0d0d] px-4 py-3 lg:hidden">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-[#e0b583]">Quran App</div>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="rounded-md border border-[#e0b583]/30 px-2 py-1 text-lg text-[#e0b583] transition hover:bg-[#e0b583]/10"
          >
            {isOpen ? <MdClose /> : <IoMenu />}
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

        <div className="mt-5 border-t border-[#e0b583]/20 pt-4">
          <button
            type="button"
            onClick={() => setIsSettingsOpen((prev) => !prev)}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-300 transition hover:bg-[#e0b583]/10 hover:text-[#e0b583]"
          >
            <span>Settings</span>
            <span>{isSettingsOpen ? "−" : "+"}</span>
          </button>

          {isSettingsOpen && (
            <div className="mt-3 space-y-3 rounded-lg border border-[#e0b583]/20 bg-[#111] p-3">
              <div>
                <label
                  htmlFor="arabic-font-mobile"
                  className="mb-1 block text-xs text-gray-400"
                >
                  Arabic Font
                </label>
                <select
                  id="arabic-font-mobile"
                  value={arabicFont}
                  onChange={(e) => setArabicFont(e.target.value)}
                  className="w-full rounded-md border border-[#e0b583]/30 bg-[#0d0d0d] px-2 py-1.5 text-xs text-gray-200 outline-none"
                >
                  {ARABIC_FONT_OPTIONS.map((font) => (
                    <option key={font.value} value={font.value}>
                      {font.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="arabic-size-mobile"
                  className="mb-1 block text-xs text-gray-400"
                >
                  Arabic Font Size: {arabicFontSize}px
                </label>
                <input
                  id="arabic-size-mobile"
                  type="range"
                  min={20}
                  max={56}
                  value={arabicFontSize}
                  onChange={(e) => setArabicFontSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="translation-size-mobile"
                  className="mb-1 block text-xs text-gray-400"
                >
                  Translation Font Size: {translationFontSize}px
                </label>
                <input
                  id="translation-size-mobile"
                  type="range"
                  min={12}
                  max={28}
                  value={translationFontSize}
                  onChange={(e) => setTranslationFontSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>
      </aside>

      <aside className="hidden h-screen w-64 shrink-0 overflow-y-auto border-r border-[#e0b583]/20 bg-[#0d0d0d] p-5 lg:sticky lg:top-0 lg:flex lg:flex-col">
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

        <div className="mt-5 border-t border-[#e0b583]/20 pt-4">
          <button
            type="button"
            onClick={() => setIsSettingsOpen((prev) => !prev)}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-300 transition hover:bg-[#e0b583]/10 hover:text-[#e0b583]"
          >
            <span>Settings</span>
            <span>{isSettingsOpen ? "−" : "+"}</span>
          </button>

          {isSettingsOpen && (
            <div className="mt-3 space-y-3 rounded-lg border border-[#e0b583]/20 bg-[#111] p-3">
              <div>
                <label
                  htmlFor="arabic-font-desktop"
                  className="mb-1 block text-xs text-gray-400"
                >
                  Arabic Font
                </label>
                <select
                  id="arabic-font-desktop"
                  value={arabicFont}
                  onChange={(e) => setArabicFont(e.target.value)}
                  className="w-full rounded-md border border-[#e0b583]/30 bg-[#0d0d0d] px-2 py-1.5 text-xs text-gray-200 outline-none"
                >
                  {ARABIC_FONT_OPTIONS.map((font) => (
                    <option key={font.value} value={font.value}>
                      {font.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="arabic-size-desktop"
                  className="mb-1 block text-xs text-gray-400"
                >
                  Arabic Font Size: {arabicFontSize}px
                </label>
                <input
                  id="arabic-size-desktop"
                  type="range"
                  min={20}
                  max={56}
                  value={arabicFontSize}
                  onChange={(e) => setArabicFontSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="translation-size-desktop"
                  className="mb-1 block text-xs text-gray-400"
                >
                  Translation Font Size: {translationFontSize}px
                </label>
                <input
                  id="translation-size-desktop"
                  type="range"
                  min={12}
                  max={28}
                  value={translationFontSize}
                  onChange={(e) => setTranslationFontSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}