


"use client";

import Reveal from "@/components/Reveal/Reveal";
import Image from "next/image";

export default function About() {
  return (
    <main>
      {/* About Section */}
      <section className="text-left bg-[#F4F7FD] px-4 sm:px-6 md:px-10 py-10">
        <Reveal effect="fade-up" delay={100}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
        </Reveal>
        <Reveal effect="fade-up" delay={200}>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-3xl">
            Colsol is into business since Sept 2024. We are now launching a
            full-fledged collection agency, focusing on efficient and ethical
            debt recovery. This expansion reinforces our commitment to providing
            comprehensive support and driving long-term client success.
            Integrity, professionalism, and respect drive our Collection process
            at COLSOL, ensuring fair and effective debt recovery solutions.
          </p>
        </Reveal>

        <Reveal effect="fade-up" delay={300}>
          <div className="flex justify-center md:justify-start mt-8 sm:mt-12">
            <Image
              src="/about_us.svg"
              alt="Meeting"
              width={0}
              height={0}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
              className="w-full max-w-sm sm:max-w-md md:max-w-3xl h-auto rounded-lg object-contain"
            />
          </div>
        </Reveal>
      </section>

      {/* Mission - Vision - Values */}
      <section className="max-w-6xl mx-auto mt-10 sm:mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6">
        {/* Mission */}
        <Reveal effect="fade-up" delay={100}>
          <div className="relative p-6 sm:p-8 rounded-2xl shadow bg-white text-center border overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[45%] sm:h-[50%] bg-blue-50 rounded-b-[60px] sm:rounded-b-[80px] z-0"></div>
            <div className="relative z-10">
              <div className="w-full h-16 sm:h-24 flex items-center justify-center mb-4 sm:mb-6">
                <Image
                  src="/flag.svg"
                  alt="Mission Icon"
                  width={32}
                  height={32}
                  className="relative"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Mission
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To deliver innovative manpower solutions and ethical debt
                recovery, fostering growth and trust.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Vision */}
        <Reveal effect="fade-up" delay={200}>
          <div className="relative p-6 sm:p-8 rounded-2xl shadow bg-white text-center border overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[45%] sm:h-[50%] bg-green-50 rounded-b-[60px] sm:rounded-b-[80px] z-0"></div>
            <div className="relative z-10">
              <div className="w-full h-16 sm:h-24 flex items-center justify-center mb-4 sm:mb-6">
                <Image
                  src="/eye.svg"
                  alt="Vision Icon"
                  width={32}
                  height={32}
                  className="relative"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Vision
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To be a global leader in consulting and recovery, known for
                innovation and integrity.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Values */}
        <Reveal effect="fade-up" delay={300}>
          <div className="relative p-6 sm:p-8 rounded-2xl shadow bg-white text-center border overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[45%] sm:h-[50%] bg-yellow-50 rounded-b-[60px] sm:rounded-b-[80px] z-0"></div>
            <div className="relative z-10">
              <div className="w-full h-16 sm:h-24 flex items-center justify-center mb-4 sm:mb-6">
                <Image
                  src="/share.svg"
                  alt="Values Icon"
                  width={32}
                  height={32}
                  className="relative"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Values
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Integrity, Professionalism and Respect guides our collection
                services at COLSOL.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
