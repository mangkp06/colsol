import { Globe2, MapPin, Rocket, CalendarCheck } from "lucide-react"; // icons

import Image from "next/image";
const features = [
  {
    title: "Telecalling Across All States & Languages",
    description:
      "Our multilingual telecalling team supports 5 major languages—English, Hindi, Malayalam, Telugu, and Tamil—enabling seamless communication with borrowers across regions for improved engagement and faster recovery.",
    image: "/icons/translate.svg", // place this in public/icons/
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
    <section className="relative bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          We Ensure Nationwide Reach
        </h2>
        <p className="text-gray-600">
          We provide end-to-end debt recovery solutions tailored to your
          business needs
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-6 text-left border border-gray-100 hover:shadow-lg transition"
          >
             <div className="mb-4">
              <Image
                src={feature.image}
                alt={feature.title}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
