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
        className="w-full h-1/2 pb-10 md:pt-10 lg:pt-0 lg:pb-0 lg:h-screen relative bg-gray-600"
      >
        <Image
          src="/hero.jpg"
          alt="hero_image"
          fill
          className="object-cover mix-blend-overlay "
        />
        <div
          id="hero_text"
          className="w-full h-3/4 lg:h-screen flex flex-col justify-center items-start px-5 md:px-20 "
        >
          <motion.h1
            className={`w-fit lg:w-2/4 text-slate-100 text-3xl md:text-4xl lg:text-6xl font-extrabold ${ubuntu.variable} font-ubuntu leading-tight mt-20`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Presidential Initiative
            <div className="text-lg lg:text-2xl">
              for Artificial Intelligence and Computing (PIAIC)
            </div>
          </motion.h1>

          <motion.hr
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="h-2 w-full md:w-2/3 lg:w-2/4 mt-4 bg-slate-100"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={`w-fit lg:w-2/4 py-5 lg:py-10 text-slate-100 text-xs md:text-base font-lato ${lato.variable}`}
          >
            The mission of PIAIC is to reshape Pakistan by revolutionizing
            education, research, and business by adopting latest, cutting-edge
            technologies. Experts are calling this the 4th industrial
            revolution. We want Pakistan to become a global hub for AI, data
            science, cloud native computing, edge computing, blockchain,
            augmented reality, and internet of things
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={`bg-slate-100 text-slate-600 py-3 px-8 rounded-lg text-sm font-semibold hover:cursor-pointer z-10 hover:bg-slate-200 font-lato ${lato.variable}`}
          >
            Apply
          </motion.button>
        </div>
      </div>
    </div>
  );
}
