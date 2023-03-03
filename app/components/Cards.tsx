"use client";
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

export default function Cards() {
  return (
    <div
      className={`max-w-screen-xl mx-auto py-10 px-10 font-ubuntu ${ubuntu.variable}`}
    >
      <div className="grid grid-cols-4 gap-4 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: "all" }}
          className="row-span-2 col-span-1 h-72 p-4 bg-slate-100 rounded-2xl drop-shadow-xl "
        >
          <div className="w-full h-5/6 relative object-contain">
            <Image
              src="/meta.jpg"
              alt="metaverse"
              fill
              style={{ borderRadius: 15, boxShadow: "-2px 2px 15px gray" }}
            />
          </div>
          <div className="mt-4 text-center text-xl ">Web 3.0 and Metaverse</div>
        </motion.div>

        <div
          className={`col-span-2 row-span-1 flex justify-center items-center font-bold text-5xl h-32 `}
        >
          Available Programs
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: "all" }}
          className="row-span-2 col-span-1 h-72 p-4 bg-slate-100 rounded-2xl drop-shadow-xl"
        >
          <div className="w-full h-5/6 relative object-contain">
            <Image
              src="/ai.jpg"
              alt="ai"
              fill
              style={{ borderRadius: 15, boxShadow: "-2px 2px 15px gray" }}
            />
          </div>
          <div className="mt-4 text-center text-xl ">
            Artificial Intelligence
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: "all" }}
          className="col-span-1 row-span-2 h-72 p-4 bg-slate-100 rounded-2xl drop-shadow-xl"
        >
          <div className="w-full h-5/6 relative object-contain">
            <Image
              src="/cld.jpg"
              alt="ai"
              fill
              style={{ borderRadius: 15, boxShadow: "-2px 2px 15px gray" }}
            />
          </div>
          <div className="mt-4 text-center text-xl ">
            Cloud Native Computing
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: "all" }}
          className="col-span-1 row-span-2 h-72 p-4 bg-slate-100 rounded-2xl drop-shadow-xl"
        >
          <div className="w-full h-5/6 relative object-contain">
            <Image
              src="/automation.jpg"
              alt="automation"
              fill
              style={{ borderRadius: 15, boxShadow: "-2px 2px 15px gray" }}
            />
          </div>
          <div className="mt-4 text-center text-xl ">Network Automation</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: "all" }}
          className="col-span-1 row-span-2 h-72 p-4 pb-10 bg-slate-100 rounded-2xl drop-shadow-xl"
        >
          <div className="w-full h-5/6 relative object-contain">
            <Image
              src="/iot.jpeg"
              alt="ai"
              fill
              style={{ borderRadius: 15, boxShadow: "-2px 2px 15px gray" }}
            />
          </div>
          <div className="mt-4 text-center text-xl ">
            Ambient Computing and IoT
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: "all" }}
          className="col-span-1 row-span-2 h-72 p-4 pb-10 bg-slate-100 rounded-2xl drop-shadow-xl"
        >
          <div className="w-full h-5/6 relative object-contain">
            <Image
              src="/bio.jpg"
              alt="ai"
              fill
              style={{ borderRadius: 15, boxShadow: "-2px 2px 15px gray" }}
            />
          </div>
          <div className="mt-3 text-center text-xl ">
            Genomics and Bioinformatics
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="col-span-2 row-span-1 flex justify-center items-center -mt-2 h-[8.9rem] bg-slate-100 rounded-2xl drop-shadow-xl"
        >
          <div className="w-[95%] h-5/6 absolute object-contain">
            <Image
              src="/gai.jpg"
              alt="ai"
              fill
              style={{ borderRadius: 15, boxShadow: "-2px 2px 15px gray" }}
            />
          </div>
          <div className="mt-3 relative w-fit right-36 text-xl text-white z-10 bg-opacity-50 bg-slate-800 p-2 rounded-2xl">
            Generative AI
            <div className="text-base text-center">Coming Soon</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
