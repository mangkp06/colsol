import Image from "next/image";

const clients = [
  { name: "Bajaj Finserv", logo: "/logos/bajaj.svg" },
  { name: "Payme", logo: "/logos/payme.svg" },
  { name: "Aditya Birla Finance", logo: "/logos/aditya_birla.svg" },
  { name: "RBL", logo: "/logos/rbl.svg" },
  { name: "Credit Bee", logo: "/logos/credit_bee.svg" },
];

export default function TrustedBySection() {
  return (
    <section className="bg-[#1E2634] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          Trusted By Industry Leaders
        </h2>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {clients.map((client, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-3">
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-white">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
