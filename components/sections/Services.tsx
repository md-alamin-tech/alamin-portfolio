// components/sections/Services.tsx
import Card from "@/components/Card";

export default function Services() {
  return (
    <Card title="My Services">
      <ul className="space-y-3 text-[14px] leading-[1.7] text-[#5f6873]">
        <li>Website Design</li>
        <li>Squarespace Customization</li>
        <li>Wix Website Design</li>
        <li>Frontend Development</li>
      </ul>
    </Card>
  );
}