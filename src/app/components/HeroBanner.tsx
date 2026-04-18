"use client";
import { AiOutlineRead } from "react-icons/ai";
import bannerImg from "../../../public/banner.png";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${bannerImg.src})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

     {/* Content */}
      <div className="relative z-10 max-w-2xl px-6 text-white">
        
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold">
          The Quran
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-yellow-400 mt-2">
          Guidance for Mankind
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <div className="w-16 h-[1px] bg-yellow-400"></div>
          <div className="mx-2 text-yellow-400">◆</div>
          <div className="w-16 h-[1px] bg-yellow-400"></div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-200">
          Read, understand and reflect on the words of Allah.  
          The eternal guidance for a successful life.
        </p>

        {/* CTA Button */}
        <Link href="/#surahs">
          <button
            type="button"
            className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition"
          >
            <p className="flex justify-center items-center gap-1 " ><AiOutlineRead /> <span>Read Quran</span></p>
            
          </button>
        </Link>
      </div>
    </section>
  );
}