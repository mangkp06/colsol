'use client';


import Reveal from "./reveal/Reveal";
import Image from "next/image";

export default function EmployeeTestimonials() {
  const testimonials = [
    {
      quote:
        "Working at Colsol has been a rewarding experience. The training, certification process, and support from the leadership team ensure I feel confident and prepared every time I step into the field. The ethical approach we follow truly sets us apart. There’s a strong sense of accountability and pride in what we do. It’s a workplace where professionalism and people-first values go hand in hand.",
      name: "Arjun Sharma",
      role: "Senior Field Recovery Agent",
      image: "/arjun.jpg",
    },
    {
      quote:
        "At Colsol, I get to lead a multilingual team that handles customer conversations with empathy and precision. With strong tech support and processes, we’re able to recover dues professionally while building trust with every interaction. What I value most is the company’s emphasis on doing things the right way. It’s empowering to be part of a team that balances results with respect.",
      name: "Ruchi Verma",
      role: "Telecalling Team Lead",
      image: "/ruchi.jpg",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-12 md:py-20">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <Reveal effect="fade-up" delay={100}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Here’s What Our Employees Say
          </h2>
        </Reveal>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {testimonials.map((t, idx) => (
          <Reveal key={idx} effect="fade-up" delay={idx * 150}>
            <div className="text-left">
              {/* Quote */}
              <p className="text-gray-600 italic relative mb-6 text-sm sm:text-base leading-relaxed">
                <span className="text-4xl sm:text-5xl text-gray-300 absolute -top-3 sm:-top-4 -left-2 sm:-left-3">
                  “
                </span>
                {t.quote}
                <span className="text-4xl sm:text-5xl text-gray-300 absolute -bottom-6 sm:-bottom-8 -right-2 sm:-right-3">
                  ”
                </span>
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
