// components/sections/Blog.tsx
import Card from "@/components/Card";

export default function Experience() {
  return (
    <Card title="Experience">
      <ul className="space-y-3 text-[14px] leading-[1.7] text-[#5f6873]">
        <li>Website design tips for personal brands</li>
        <li>How clean layout improves user trust</li>
        <li>Why responsive design matters for business</li>
        <li>Building a better online presence</li>
      </ul>
    </Card>
  );
}