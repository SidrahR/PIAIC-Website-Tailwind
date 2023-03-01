"use client";
import Image from "next/image";
import Link from "next/link";
import { Michroma, Lato } from "@next/font/google";
import { useState } from "react";
import useSWR from "swr";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});

const slideAnimation = {
  key: "courses",
  initial: { opacity: 0, y: -5 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.2 },
  exit: { opacity: 0, y: -5, transition: { duration: 0.1 } },
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Navbar() {
  // For displaying dropdown list
  const [isOpen, setIsOpen] = useState(false);

  // For hamburger menu
  const [menuOpen, setMenuOpen] = useState(true);

  // Fetching course data on client side
  const { data, error } = useSWR("/api/courseData", fetcher);
  if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <nav
      // initial={{ opacity: 0, y: -5 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.3 }}
      className="absolute md:flex justify-between w-full bg-transparent md:px-16 md:py-2 items-center h-12 z-20 max-w-screen-2xl left-0 right-0 m-auto"
    >
      <div className="flex flex-row-reverse justify-between px-4 md:flex-none md:px-0">
        <div className="flex flex-row-reverse md:flex-row mt-2 md:mt-0 items-center space-x-3 z-20">
          <Link href="/">
            <div className="z-50 pl-3 md:pl-0 md:mt-10 ">
              <Image src="/piaic.svg" alt="logo" width="50" height="50"></Image>
            </div>
          </Link>
          <div
            className={`${michroma.variable} font-michroma font-extrabold text-xl text-amber-50 md:mt-7`}
          >
            PIAIC
          </div>
        </div>

        <div
          id="toggle_images"
          className="mt-6 w-fit md:hidden h-fit transition-all duration-800"
          onClick={() => setMenuOpen((prev: boolean) => !prev)}
        >
          {menuOpen ? (
            <CgMenuLeftAlt
              size="30"
              className="cursor-pointer text-slate-200"
            />
          ) : (
            <AiOutlineClose
              size="30"
              className="cursor-pointer text-slate-200"
            />
          )}
        </div>
      </div>

      <ul
        className={` w-screen md:mt-8 md:w-auto md:static md:flex md:space-x-14 md:items-center transition-all duration-200 ease-in-out md:transition-none text-slate-200
        ${lato.variable} font-lato 
        ${
          menuOpen
            ? `top-[-490] opacity-0 md:opacity-100`
            : `top-20 opacity-100`
        }`}
      >
        <li className="py-2 px-4 border-b bg-sky-900 border-b-amber-100 md:border-b-transparent md:bg-transparent">
          <Link
            href="/"
            className="group transition-all duration-300 ease-in-out"
          >
            <span className="md:bg-left-bottom md:bg-gradient-to-r from-slate-100 to-slate-100 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out pb-2">
              Apply
            </span>
          </Link>
        </li>
        <li className=" py-2 px-4 border-b bg-sky-900 border-b-amber-100 md:border-b-transparent md:bg-transparent">
          <div
            className="flex items-center cursor-pointer group transition-all duration-300 ease-in-out "
            onClick={() => setIsOpen((prev: boolean) => !prev)}
          >
            <div className="md:bg-left-bottom md:bg-gradient-to-r from-slate-100 to-slate-100 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out py-1">
              Courses
            </div>
            <span className="py-1">
              {!isOpen ? (
                <BiChevronDown size="20" />
              ) : (
                <BiChevronUp size="20" />
              )}
            </span>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                {...slideAnimation}
                className="bg-transparent md:w-fit relative md:absolute pb-2 "
              >
                {data.map((item: { id: number; course: string }) => (
                  <ul key={item["id"]}>
                    <li className="py-2 px-4 border-b border-b-amber-100 md:bg-sky-900">
                      <Link href="/"> {item.course}</Link>
                    </li>
                  </ul>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </li>
        <li className="py-2 px-4 border-b bg-sky-900 border-b-amber-100 md:border-b-transparent md:bg-transparent">
          <Link
            href="/"
            className="group transition-all duration-300 ease-in-out"
          >
            <span className="md:bg-left-bottom md:bg-gradient-to-r from-slate-100 to-slate-100 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out pb-2">
              About
            </span>
          </Link>
        </li>
        <li className="py-2 px-4 border-b bg-sky-900 border-b-amber-100 md:border-b-transparent md:bg-transparent">
          <Link
            href="/"
            className="group transition-all duration-300 ease-in-out"
          >
            <span className="md:bg-left-bottom md:bg-gradient-to-r from-slate-100 to-slate-100 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out pb-2">
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
