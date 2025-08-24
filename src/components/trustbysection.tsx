'use client';

import Image from "next/image";
import Reveal from "./Reveal/Reveal";

const clients = [
  { name: "Bajaj Finserv", logo: "/logos/bajaj.svg" },
  { name: "Payme", logo: "/logos/payme.svg" },
  { name: "Aditya Birla Finance", logo: "/logos/aditya_birla.svg" },
  { name: "RBL", logo: "/logos/rbl.svg" },
  { name: "Credit Bee", logo: "/logos/credit_bee.svg" },
];

export default function TrustedBySection() {
  return (
    <section className="bg-[#1E2634] py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <Reveal effect="fade-up" delay={100}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-10 md:mb-12">
            Trusted By Industry Leaders
          </h2>
        </Reveal>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center">
          {clients.map((client, idx) => (
            <Reveal key={idx} effect="fade-up" delay={idx * 100}>
              <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-white">{client.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

