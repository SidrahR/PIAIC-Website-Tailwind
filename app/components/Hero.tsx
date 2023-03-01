"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Yrsa, Lato, Ubuntu } from "@next/font/google";

const yrsa = Yrsa({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-yrsa",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ubuntu",
});

export default function Hero() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div
        id="bg_image"
        className="w-full h-1/2 md:h-screen relative  bg-gradient-to-b from-gray-600 to-stone-600"
      >
        <Image
          src="/hero.jpg"
          alt="hero_image"
          fill
          className="object-cover mix-blend-overlay "
        />
        <div
          id="hero_text"
          className="w-full h-3/4 md:h-screen flex flex-col justify-center items-start px-20 "
        >
          <motion.h1
            className={`w-fit md:w-2/4 text-slate-100 text-3xl md:text-6xl font-extrabold ${ubuntu.variable} font-ubuntu leading-tight mt-20`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Presidential Initiative
            <div className="text-lg md:text-2xl">
              for Artificial Intelligence and Computing (PIAIC)
            </div>
          </motion.h1>

          <motion.hr
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-2 w-2/4 mt-4 bg-slate-100"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`w-fit md:w-2/4 py-10 text-slate-100 text-xs md:text-lg font-lato ${lato.variable}`}
          >
            The mission of PIAIC is to reshape Pakistan by revolutionizing
            education, research, and business by adopting latest, cutting-edge
            technologies. Experts are calling this the 4th industrial
            revolution. We want Pakistan to become a global hub for AI, data
            science, cloud native computing, edge computing, blockchain,
            augmented reality, and internet of things.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
