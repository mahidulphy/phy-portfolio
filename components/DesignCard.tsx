import Image from "next/image";

type DesignCardProps = {
  image: string;
  title: string;
  description: string;
  category: string;
};

export default function DesignCard({
  image,
  title,
  description,
  category,
}: DesignCardProps) {
  return (
    <div className="rounded-3xl border border-[#E5DDD6] bg-[#FCF8F5] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#E5A1B1] hover:shadow-xl">

      <div className="overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          width={800}
          height={450}
          className="w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <span className="mt-6 inline-block rounded-full bg-[#E5A1B1]/20 px-3 py-1 text-sm font-semibold text-[#895A47]">
        {category}
      </span>

      <h3 className="mt-5 text-3xl font-bold text-[#241D1C]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-[#895A47]">
        {description}
      </p>

    </div>
  );
}