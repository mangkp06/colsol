'use client';


import Image from "next/image";
import Reveal from "./Reveal/Reveal";

const features = [
  {
    title: "Telecalling Across All States & Languages",
    description:
      "Our multilingual telecalling team supports 5 major languages—English, Hindi, Malayalam, Telugu, and Tamil—enabling seamless communication with borrowers across regions for improved engagement and faster recovery.",
    image: "/icons/translate.svg",
  },
  {
    title: "Certified Field Agents in Every Major City & Town",
    description:
      "We deploy trained and certified field recovery professionals across India, ensuring local presence and culturally appropriate interaction while adhering to ethical and respectful collection practices.",
    image: "/icons/location.svg",
  },
  {
    title: "Fast Response & Deployment",
    description:
      "With a robust network and tech-enabled operations, we can mobilize telecallers or on-ground agents quickly—usually within 24–48 hours—to ensure timely follow-ups and maximize recovery potential.",
    image: "/icons/message-programming.svg",
  },
  {
    title: "Compliance with RBI Guidelines",
    description:
      "Our processes strictly follow RBI’s Fair Practices Code, ensuring no harassment, full borrower transparency, authorized agent conduct, and adherence to ethical collection windows—building trust and protecting our clients’ reputation.",
    image: "/icons/stickynote.svg",
  },
];

export default function NationwideReachSection() {
  return (
    <section className="relative bg-white py-12 px-4 sm:px-6 md:px-12 md:py-20">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
        <Reveal effect="fade-up" delay={100}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            We Ensure Nationwide Reach
          </h2>
        </Reveal>
        <Reveal effect="fade-up" delay={200}>
          <p className="text-gray-600 text-sm sm:text-base">
            We provide end-to-end debt recovery solutions tailored to your
            business needs
          </p>
        </Reveal>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {features.map((feature, idx) => (
          <Reveal key={idx} effect="fade-up" delay={idx * 150}>
            <div className="bg-white shadow-md rounded-2xl p-5 sm:p-6 text-left border border-gray-100 hover:shadow-lg transition">
              {/* Icon */}
              <div className="mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
