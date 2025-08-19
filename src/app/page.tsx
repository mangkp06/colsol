

import ContactSection from "@/components/contactsection";
import EmployeeTestimonials from "@/components/employeetestimonial";
import Header from "@/components/Header";
import NationwideReachSection from "@/components/nationwide";
import TrustedBySection from "@/components/trustbysection";
import WhyChooseSection from "@/components/whychoose";
import Image from "next/image";


  const stats = [
    { number: "150+", label: "Manpower in all major states" },
    { number: "80+", label: "Field staff" },
    { number: "60+", label: "Telecalling staff" },
    { number: "5", label: "Different language support" },
  ];
const cards = [
  {
    title: 'Debt Recovery Services',
    description: 'Efficient and ethical recovery of bad debts through a professional collection agency, reducing NPAs and improving clients’ financial health.',
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
      <Header />

      {/* Hero Section */}



      <section className="px-8 py-20 text-center rounded-lg mx-8 mt-6" style={{ backgroundColor: "#E7EEFA" }}>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Smart, stress-free debt recovery with ColSol
        </h1>
        <p className="text-gray-600 mb-6">
          We simplify debt recovery for you with our expert solutions & technology
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
          Find a Solution
        </button>

        {/* Image Grid */}
        <div className="flex justify-center mt-12">
          <Image
            src="/colsol_sec1.svg"
            alt="Meeting"
            width={0}       // ✅ always specify width/height with next/image
            height={0}
            sizes="100vw"
            className="w-full max-w-3xl h-auto rounded-lg object-contain"
          />
        </div>
      </section>

      {/* Offerings */}
      <section className="px-6 md:px-12 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Here Are Our Key Offerings
        </h2>
        <p className="text-gray-600 text-center mb-12">
          We provide end-to-end debt recovery solutions tailored to your business needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:m-20 md:m6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl shadow-md p-8 min-h-[280px] ${card.bgColor} overflow-hidden`}
            >
              {/* Text Content */}
              <div className="z-10 relative">
                <span className="text-lg font-bold text-black block mb-2">0{idx + 1}.</span>
                <h3 className="text-xl font-bold text-black mb-3">{card.title}</h3>
                <p className="text-sm text-black " style={{ color: "#595959" }}>{card.description}</p>

              </div>

              {/* Stacked Bottom-right Image */}
              <div className="absolute bottom-0 right-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={220}
                  height={220}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <WhyChooseSection></WhyChooseSection>
      <TrustedBySection/>
<NationwideReachSection/>

 <section className="bg-blue-500 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-white">
            <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
            <p className="text-sm opacity-90">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>

    <EmployeeTestimonials/>
    <ContactSection/>
    </main>
  );
}
