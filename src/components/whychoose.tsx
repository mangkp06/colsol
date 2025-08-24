'use client';


import Image from "next/image";
import Reveal from "./reveal/Reveal";

const whyChooseUs = [
  {
    title: "DRA Certified Field Agents",
    subtitle: "WHY CHOOSE COLSOL",
    description:
      "We employ Debt Recovery Agent (DRA) certified professionals, ensuring compliance, professionalism, and efficient debt recovery processes.",
    image: "/talking_phone.png",
  },
  {
    title: "Skip Tracing Expertise",
    subtitle: "WHY CHOOSE COLSOL",
    description:
      "We leverage cutting-edge skip tracing techniques to locate and engage with customers who are difficult to contact, ensuring maximum recovery success.",
    image: "/computer_ai.jpg",
  },
  {
    title: "BI Analytics for Data Mining",
    subtitle: "WHY CHOOSE COLSOL",
    description:
      "Advanced Business Intelligence (BI) tools are utilized to analyze customer data, optimize recovery strategies, and improve decision-making for faster and more effective results.",
    image: "/computer_chart.jpg",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#F7F9FC] py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {whyChooseUs.map((item, idx) => (
          <Reveal key={idx} effect="fade-up" delay={idx * 100}>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="text-center md:text-left">
                <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-500 mb-2">
                  {item.subtitle}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center md:justify-end">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="rounded-xl w-full max-w-sm h-auto shadow-md object-cover"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
