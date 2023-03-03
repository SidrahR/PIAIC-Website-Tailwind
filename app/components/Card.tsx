import Image from "next/image";

export default function Card({
  courseName,
  imageSrc,
  altText,
  textAlignment,
}: {
  courseName: string;
  imageSrc: string;
  altText: string;
  textAlignment: string;
}) {
  return (
    <div>
      <div className="w-full h-full object-contain absolute bg-neutral-500 rounded-2xl">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          style={{ borderRadius: 15, boxShadow: "-2px 2px 20px gray" }}
          className="mix-blend-overlay "
        />
      </div>
      <div
        className={`text-xl top-[83%] ${textAlignment} text-white absolute bg-opacity-50 bg-slate-800 p-2 rounded-2xl`}
      >
        {courseName}
      </div>
    </div>
  );
}
