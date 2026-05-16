// components/Card.tsx

export default function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl bg-[#ecf0f3] p-7 shadow-[10px_10px_25px_#d1d9e6,-10px_-10px_25px_#ffffff]">
      <h2 className="text-[24px] font-bold text-[#3c3e41]">{title}</h2>
      <div className="my-4 h-px w-full bg-[#c9cfd6]" />
      {children}
    </section>
  );
}