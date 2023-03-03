"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lato, Ubuntu } from "@next/font/google";
import Card from "./Card";

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
      className={`max-w-screen-2xl mx-auto py-10 px-10 font-ubuntu ${ubuntu.variable}`}
    >
      <div className="grid grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="row-span-2 col-span-1 h-72 relative rounded-3xl"
        >
          <Card
            courseName="Web 3.0 and Metaverse"
            imageSrc="/meta.jpg"
            altText="metaverse"
            textAlignment="left-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className={`col-span-2 row-span-1 flex flex-col justify-center items-center h-32`}
        >
          <h2
            className={`font-extrabold text-4xl text-center text-blue-800 leading-normal px-20`}
          >
            Explore the Programs that Meet Your Needs and Goals
          </h2>
          {/* <hr className="h-2 w-2/3 mt-2 bg-sky-900" /> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="row-span-2 col-span-1 h-72 relative"
        >
          <Card
            courseName="Artificial Intelligence"
            imageSrc="/ai.jpg"
            altText="ai"
            textAlignment="left-14"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-1 row-span-2 h-72 relative"
        >
          <Card
            courseName="Cloud Native Computing"
            imageSrc="/cld.jpg"
            altText="cnc"
            textAlignment="left-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-1 row-span-2 h-72 relative"
        >
          <Card
            courseName="Network Automation"
            imageSrc="/automation.jpg"
            altText="automation"
            textAlignment="left-14"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-1 row-span-2 h-72 relative"
        >
          <Card
            courseName="Ambient Computing and IoT"
            imageSrc="/iot.jpeg"
            altText="iot"
            textAlignment="left-4"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-1 row-span-2 h-72 relative"
        >
          <Card
            courseName="Genomics and Bioinformatics"
            imageSrc="/bio.jpg"
            altText="bioinformatics"
            textAlignment="left-5"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="col-span-2 row-span-1 flex justify-center items-center -mt-2 h-[8.9rem] rounded-2xl relative"
        >
          <div className="w-full h-full absolute object-contain bg-neutral-500 rounded-3xl overflow-hidden">
            <Image
              src="/gai.jpg"
              alt="ai"
              fill
              style={{ borderRadius: 15, boxShadow: "-2px 2px 20px gray" }}
              className="mix-blend-overlay hover:mix-blend-normal hover:scale-110  hover:transition-all"
            />
          </div>
          <div className="mt-3 relative w-fit right-36 text-xl text-white z-10 bg-opacity-50 bg-slate-800 p-2 rounded-2xl ">
            Generative AI
            <div className="text-base text-center">Coming Soon</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
