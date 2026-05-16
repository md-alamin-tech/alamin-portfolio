// components/sections/Contact.tsx

export default function Contact() {
  return (
    <div id="contact">
      <h2 className="mb-5 text-[24px] font-bold text-[#3c3e41]">
        Contact With Me
      </h2>
      <div className="rounded-xl bg-[#ecf0f3] p-7 shadow-[10px_10px_25px_#d1d9e6,-10px_-10px_25px_#ffffff]">
        <div className="grid gap-5 sm:grid-cols-2">
          <input
            className="h-12 rounded-md border border-[#cfd6df] bg-white px-4 outline-none focus:border-[#0098b8]"
            placeholder="Your Name"
          />
          <input
            className="h-12 rounded-md border border-[#cfd6df] bg-white px-4 outline-none focus:border-[#0098b8]"
            placeholder="Phone Number"
          />
        </div>
        <input
          className="mt-5 h-12 w-full rounded-md border border-[#cfd6df] bg-white px-4 outline-none focus:border-[#0098b8]"
          placeholder="Email"
        />
        <input
          className="mt-5 h-12 w-full rounded-md border border-[#cfd6df] bg-white px-4 outline-none focus:border-[#0098b8]"
          placeholder="Subject"
        />
        <textarea
          className="mt-5 h-44 w-full rounded-md border border-[#cfd6df] bg-white p-4 outline-none focus:border-[#0098b8]"
          placeholder="Your Message"
        />
        <button className="mt-5 w-full rounded-md bg-[#ecf0f3] py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-[#606975] shadow-[7px_7px_16px_#d1d9e6,-7px_-7px_16px_#ffffff] transition hover:bg-[#0098b8] hover:text-white">
          Send Message
        </button>
      </div>
    </div>
  );
}