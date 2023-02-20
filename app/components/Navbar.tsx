"use client";
import Image from "next/image";
import Link from "next/link";
import { Michroma } from "@next/font/google";
import { useState } from "react";
import useSWR from "swr";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const michrome = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michrome",
});

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
    <nav className="md:flex justify-between bg-transparent md:px-10 md:py-2 items-center h-12">
      <div className="flex flex-row-reverse justify-between px-4 md:flex-none md:px-0">
        <div className="flex  w-fit mt-2 md:mt-0 md:items-center space-x-3 z-20">
          <Link href="/">
            <div className="md:mt-8 ">
              <Image src="/piaic.svg" alt="logo" width="50" height="50"></Image>
            </div>
          </Link>
          <div
            className={`${michrome.variable} font-serif font-extrabold text-2xl text-teal-700`}
          >
            PIAIC
          </div>
        </div>

        <div
          className="mt-2 w-fit md:hidden h-fit transition-all duration-800"
          onClick={() => setMenuOpen((prev: boolean) => !prev)}
        >
          {menuOpen ? (
            <CgMenuLeftAlt size="30" className="cursor-pointer text-teal-700" />
          ) : (
            <AiOutlineClose
              size="30"
              className="cursor-pointer text-teal-700"
            />
          )}
        </div>
      </div>

      <ul
        className={`absolute w-screen -mt-8 md:mt-0 md:w-auto md:static md:flex md:space-x-14 md:items-center transition-all duration-200 ease-in-out md:transition-none  ${
          menuOpen
            ? `top-[-490] opacity-0 md:opacity-100`
            : `top-20 opacity-100`
        }`}
      >
        <li className="py-2 px-4 border-b bg-neutral-200/75 border-b-violet-900 md:border-b-transparent md:bg-transparent">
          <Link
            href="/"
            className="md:hover:border-b-4 md:hover:border-b-teal-600 transition-all duration-150"
          >
            Apply
          </Link>
        </li>
        <li className=" py-2 px-4 border-b bg-neutral-200/75 border-b-violet-900 md:border-b-transparent md:bg-transparent">
          <div
            className="py-1 flex items-center cursor-pointer "
            onClick={() => setIsOpen((prev: boolean) => !prev)}
          >
            <div className="md:border-b-4 md:border-b-transparent md:hover:border-b-4 md:hover:border-b-teal-600 transition-all duration-150">
              Courses
            </div>
            <span>
              {!isOpen ? (
                <BiChevronDown size="20" />
              ) : (
                <BiChevronUp size="20" />
              )}
            </span>
          </div>
          {isOpen && (
            <div className="bg-neutral-200/75 md:w-fit relative md:absolute">
              {data.map((item: { id: number; course: string }) => (
                <ul key={item["id"]}>
                  <li className="py-2 px-4 border border-b-violet-900">
                    <Link href="/"> {item.course}</Link>
                  </li>
                </ul>
              ))}
            </div>
          )}
        </li>
        <li className="py-2 px-4 border-b bg-neutral-200/75 border-b-violet-900 md:border-b-transparent md:bg-transparent">
          <Link
            href="/"
            className="md:hover:border-b-4 md:hover:border-b-teal-600 transition-all duration-150"
          >
            About
          </Link>
        </li>
        <li className="py-2 px-4 border-b bg-neutral-200/75 border-b-violet-900 md:border-b-transparent md:bg-transparent">
          <Link
            href="/"
            className="md:hover:border-b-4 md:hover:border-b-teal-600 transition-all duration-150"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
