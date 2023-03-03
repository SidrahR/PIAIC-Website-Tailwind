import Image from "next/image";

export default function FacultyCard({
  teacherName,
  imageSrc,
  altText,
  info,
}: {
  teacherName: string;
  imageSrc: string;
  altText: string;
  info: string;
}) {
  return (
    <div className="w-1/3 h-96 bg-neutral-200 overflow-hidden">
      <div className="w-full h-56 object-center drop-shadow-2xl ">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className=" hover:mix-blend-normal hover:scale-110 hover:transition-all "
        />
      </div>
      <div className="">
        <h2>{teacherName}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
}
