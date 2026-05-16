// components/sections/AboutMe.tsx
import Card from "@/components/Card";

export default function AboutMe() {
  return (
    <Card title="About Me">
      <div className="space-y-5 text-[14px] leading-[1.85] text-[#5f6873]">
        <p>
          I am a web designer and developer. I build modern websites for
          personal brands, service businesses and growing companies.
        </p>
        <p>
          My work focuses on responsive design, clean sections, strong
          content flow and smooth user experience.
        </p>
      </div>
    </Card>
  );
}