
import Image from "next/image";
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
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Let’s Connect!
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {contacts.map((c, idx) => (
          <a
            key={idx}
            href={c.link}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
          >
              <div className="mb-4">
                          <Image
                            src={c.icon}
                            alt={c.title}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
            <p className="text-gray-500">{c.title}</p>
            <p className="text-lg font-semibold text-gray-800">{c.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
