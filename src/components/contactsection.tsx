'use client';


import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";

export default function ContactSection() {
  const contacts = [
    {
      icon: "/messenger.svg",
      title: "Email",
      value: "irfan.khan@colsol.in",
      link: "mailto:irfan.khan@colsol.in",
    },
    {
      icon: "/phone_call.svg",
      title: "Phone",
      value: "9839315231",
      link: "tel:9839315231",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-gray-50 py-12 px-4 sm:px-6 md:px-12 md:py-20"
    >
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
        <Reveal effect="fade-up" delay={100}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Let’s Connect!
          </h2>
        </Reveal>
      </div>

      {/* Contact Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {contacts.map((c, idx) => (
          <Reveal key={idx} effect="fade-up" delay={idx * 150}>
            <a
              href={c.link}
              className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="mb-3 sm:mb-4">
                <Image
                  src={c.icon}
                  alt={c.title}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              {/* Title */}
              <p className="text-gray-500 text-sm sm:text-base">{c.title}</p>
              {/* Value */}
              <p className="text-base sm:text-lg font-semibold text-gray-800 break-words">
                {c.value}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
