import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5DDD6] bg-[#FCF8F5]">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="flex flex-col md:flex-row items-center justify-between gap-10">

      {/* Left */}

      <div>
        <Image
  src="/logo-dark.svg"
  alt="Mahidul PHY"
  width={80}
  height={80}
/>
        <h2 className="text-3xl font-bold text-[#241D1C]">
          Mahidul PHY
        </h2>

        <p className="mt-4 max-w-md leading-7 text-[#895A47]">
          Building skills, exploring ideas,
          and creating meaningful digital experiences.
        </p>

      </div>

      {/* Right */}

      <div className="flex gap-6">

        <Link href="/about" className="hover:text-[#E5A1B1]">
          About
        </Link>

        <Link href="/projects" className="hover:text-[#E5A1B1]">
          Projects
        </Link>

        <Link href="/design" className="hover:text-[#E5A1B1]">
          Design
        </Link>

        <Link href="/research" className="hover:text-[#E5A1B1]">
          Research
        </Link>

      </div>

    </div>

    <div className="mt-12 border-t border-[#E5DDD6] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-[#895A47]">
        © 2026 Mahidul PHY. All rights reserved.
      </p>

      <p className="text-[#895A47]">
        Designed & Developed by Mahidul Islam.
      </p>

    </div>

  </div>

</footer>
  );
}