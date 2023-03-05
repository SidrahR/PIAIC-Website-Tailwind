import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full object-contain absolute drop-shadow-2xl bg-neutral-500"
      >
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="mix-blend-overlay hover:mix-blend-normal"
        />
      </motion.div>

      <div
        className={`text-xl top-[83%] ${textAlignment} text-white absolute bg-opacity-50 bg-slate-800 p-2 rounded-2xl`}
      >
        {courseName}
      </div>
    </div>
  );
}
