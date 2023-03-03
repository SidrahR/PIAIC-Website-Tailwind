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
      <div className="w-full h-full object-contain absolute drop-shadow-2xl bg-neutral-500 rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="mix-blend-overlay hover:mix-blend-normal hover:scale-110 hover:transition-all "
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
