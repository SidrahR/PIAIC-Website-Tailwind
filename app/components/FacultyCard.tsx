import Image from "next/image";
import { motion } from "framer-motion";
import { Lato, Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ubuntu",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});

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
    <div className="w-1/3 group ">
      <div className=" bg-neutral-200 group-hover:bg-neutral-50 transition-all ease-in-out duration-500">
        <div className="w-full h-56 object-center overflow-hidden drop-shadow-2xl">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className=" group-hover:scale-110 transition-all ease-in-out duration-700"
          />
        </div>
        <div className="p-6">
          <h2
            className={`font-ubuntu ${ubuntu.variable} text-3xl pb-1 mb-3 md:bg-left-bottom md:bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] duration-500 ease-in-out w-fit`}
          >
            {teacherName}
          </h2>
          <p className={`font-lato ${lato.variable}`}>{info}</p>
        </div>
      </div>
    </div>
  );
}
