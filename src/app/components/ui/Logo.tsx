// components/Logo.jsx
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src={logo}
        alt="Quran App Logo"
        width={50}
        height={50}
        priority
        className="object-contain"
      />
      <span className="text-lg font-semibold text-[#e0b583] hidden sm:block">
        Quran App
      </span>
    </Link>
  );
}