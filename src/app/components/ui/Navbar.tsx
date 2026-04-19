"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Dhaka",
      };

      const dhakaTime = new Date().toLocaleTimeString("en-GB", options);
      setTime(dhakaTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 -mb-16 h-16 w-full border-b transition-all duration-300  ${
        isScrolled
          ? "border-white/20 bg-black/55 backdrop-blur-md"
          : "border-transparent bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">

<Logo></Logo>
   {/* Right */}
        {/* <div className="flex flex-wrap items-center gap-4">
          <Link href="/" className="transition hover:text-[#e0b583]">Home</Link>
          <Link href="/#surahs" className="transition hover:text-[#e0b583]">Surahs</Link>
          <Link href="/readQuran" className="transition hover:text-[#e0b583]">Read Quran</Link>
        </div> */}

        {/* Time */}
        <div className="text-sm text-white/95">
          Dhaka Time: {time}
        </div>

      </div>
    </nav>
  );
}