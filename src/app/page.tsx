'use client';

import ContactSection from "@/components/contactsection";
import EmployeeTestimonials from "@/components/employeetestimonial";
import NationwideReachSection from "@/components/nationwide";
import TrustedBySection from "@/components/trustbysection";
import WhyChooseSection from "@/components/whychoose";
import Image from "next/image";
import Reveal from '@/components/reveal/Reveal';

const stats = [
  { number: "150+", label: "Manpower in all major states" },
  { number: "80+", label: "Field staff" },
  { number: "60+", label: "Telecalling staff" },
  { number: "5", label: "Different language support" },
];

const cards = [
  {
    title: 'Debt Recovery Services',
    description: 'Efficient and ethical recovery of bad debts through a professional collection agency, reducing NPAs and improving clients\' financial health.',
    image: '/person.svg',
    bgColor: 'bg-[#EBF0FE]'
  },
  {
    title: 'Legal Support',
    description: 'Assistance in navigating legal frameworks for debt recovery, ensuring compliance and faster resolution of cases',
    image: '/hammer.svg',
    bgColor: 'bg-[#E7FAE6]'
  },
  {
    title: 'Capital Optimization',
    description: 'Supporting businesses in managing stressed assets, helping them stabilize their capital and lending capacities.',
    image: '/chart.svg',
    bgColor: 'bg-[#FAEBFD]'
  },
  {
    title: 'Preventive Measures',
    description: 'Offering consultancy on risk management to minimize future NPAs and maintain healthy financial portfolios.',
    image: '/domino.svg',
    bgColor: 'bg-[#FDF7DE]'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Reveal effect="fade-up" delay={100}>
        <section className="px-4 md:px-8 py-16 md:py-20 text-center rounded-lg bg-[#E7EEFA]">
          <Reveal effect="fade-up" delay={200}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
              Smart, stress-free debt recovery with ColSol
            </h1>
          </Reveal>
          <Reveal effect="fade-up" delay={300}>
            <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-2xl mx-auto px-2">
              We simplify debt recovery for you with our expert solutions & technology
            </p>
          </Reveal>
          <Reveal effect="fade-up" delay={400}>
            <button className="px-5 sm:px-6 py-2 sm:py-3 bg-[#4C87F7] text-white rounded-lg font-medium hover:bg-blue-700 text-sm sm:text-base">
              Find a Solution
            </button>
          </Reveal>

          {/* Hero Image */}
          <Reveal effect="fade-up" delay={500}>
            <div className="flex justify-center mt-10 sm:mt-12">
              <Image
                src="/colsol_sec1.svg"
                alt="Meeting"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                className="w-full max-w-md sm:max-w-2xl md:max-w-3xl h-auto rounded-lg object-contain"
              />
            </div>
          </Reveal>
        </section>
      </Reveal>

      {/* Offerings */}
      <section id="services" className="px-4 sm:px-6 md:px-12 py-12 sm:py-16">
        <Reveal effect="fade-up" delay={100}>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
            Here Are Our Key Offerings
          </h2>
        </Reveal>
        <Reveal effect="fade-up" delay={200}>
          <p className="text-gray-600 text-center mb-10 sm:mb-12 text-sm sm:text-base max-w-2xl mx-auto px-2">
            We provide end-to-end debt recovery solutions tailored to your business needs
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:m-20 md:m-6">
          {cards.map((card, idx) => (
            <Reveal key={idx} effect="fade-up" delay={(idx + 1) * 100}>
              <div
                className={`relative rounded-2xl shadow-md p-6 sm:p-8 min-h-[240px] sm:min-h-[280px] ${card.bgColor} overflow-hidden`}
              >
                {/* Text Content */}
                <div className="z-10 relative">
                  <span className="text-base sm:text-lg font-bold text-black block mb-2">0{idx + 1}.</span>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-3">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-[#595959]">{card.description}</p>
                </div>

                {/* Bottom-right Image */}
                <div className="absolute bottom-0 right-0 opacity-70 sm:opacity-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={150}
                    height={150}
                    className="object-contain sm:w-[220px] sm:h-[220px]"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal effect="fade-up" delay={100}>
        <WhyChooseSection />
      </Reveal>

      <Reveal effect="fade-up" delay={100}>
        <TrustedBySection />
      </Reveal>

      <Reveal effect="fade-up" delay={100}>
        <NationwideReachSection />
      </Reveal>

      {/* Stats Section */}
      <Reveal effect="fade-up" delay={100}>
        <section className="bg-blue-500 py-10 sm:py-12 px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 text-center gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <Reveal key={idx} effect="zoom-in" delay={idx * 100}>
                <div className="text-white">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{stat.number}</h3>
                  <p className="text-xs sm:text-sm opacity-90">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal effect="fade-up" delay={100}>
        <EmployeeTestimonials />
      </Reveal>

      <Reveal effect="fade-up" delay={100}>
        <ContactSection />
      </Reveal>
    </main>
  );
}
