import Card from "@/components/Card";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Website Design",
    description: "Clean, modern and responsive website design with strong visual structure and smooth user experience.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
        alt="WordPress"
        className="h-6 w-6 object-contain"
      />
    ),
  },
  {
    title: "Squarespace Customization",
    description: "Professional Squarespace website customization tailored to your brand identity and business goals.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 50 50" fill="none">
        <rect width="50" height="50" rx="8" fill="#111" />
        <text x="25" y="34" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="white">SQ</text>
      </svg>
    ),
  },
  {
    title: "Wix Website Design",
    description: "Beautiful and functional Wix websites designed to attract visitors and convert them into clients.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 50 50" fill="none">
        <rect width="50" height="50" rx="8" fill="#00AAFF" />
        <text x="25" y="34" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="white">Wix</text>
      </svg>
    ),
  },
  {
    title: "Frontend Development",
    description: "High quality frontend development using React, Next.js and Tailwind CSS with pixel perfect implementation.",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        className="h-6 w-6 object-contain"
      />
    ),
  },
];

export default function Services() {
  return (
    <Card title="My Services">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-xl bg-[#ecf0f3] p-5 shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff] transition hover:-translate-y-1"
          >
            {/* Icon */}
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#ecf0f3] shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="mb-2 text-[14px] font-bold text-[#3c3e41]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[12px] leading-[1.8] text-[#5f6873]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}