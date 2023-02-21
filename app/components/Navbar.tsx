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
    <nav className="absolute md:flex justify-between w-full bg-transparent md:px-10 md:py-2 items-center h-12 z-20">
      <div className="flex flex-row-reverse justify-between px-4 md:flex-none md:px-0">
        <Link href="/">
          <div className=" mt-2 z-20 md:mt-9 ">
            <Image src="/piaic.svg" alt="logo" width="50" height="50"></Image>
          </div>
        </Link>

        <div
          id="toggle_images"
          className="mt-2 w-fit md:hidden h-fit transition-all duration-800"
          onClick={() => setMenuOpen((prev: boolean) => !prev)}
        >
          {menuOpen ? (
            <CgMenuLeftAlt
              size="30"
              className="cursor-pointer text-amber-100"
            />
          ) : (
            <AiOutlineClose
              size="30"
              className="cursor-pointer text-amber-100"
            />
          )}
        </div>
      </div>

      <ul
        className={` w-screen -mt-8 md:mt-8 md:w-auto md:static md:flex md:space-x-14 md:items-center transition-all duration-200 ease-in-out md:transition-none text-amber-100 ${
          menuOpen
            ? `top-[-490] opacity-0 md:opacity-100`
            : `top-20 opacity-100`
        }`}
      >
        <li className="py-2 px-4 border-b bg-gray-800 border-b-amber-100 md:border-b-transparent md:bg-transparent">
          <Link
            href="/"
            className="group transition-all duration-300 ease-in-out"
          >
            <span className="md:bg-left-bottom md:bg-gradient-to-r from-amber-100 to-amber-100 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out pb-2">
              Apply
            </span>
          </Link>
        </li>
        <li className=" py-2 px-4 border-b bg-gray-800 border-b-amber-100 md:border-b-transparent md:bg-transparent">
          <div
            className="flex items-center cursor-pointer group transition-all duration-300 ease-in-out "
            onClick={() => setIsOpen((prev: boolean) => !prev)}
          >
            <div className="md:bg-left-bottom md:bg-gradient-to-r from-amber-100 to-amber-100 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out py-1">
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
          {isOpen && (
            <div className="bg-transparent md:w-fit relative md:absolute pb-2 ">
              {data.map((item: { id: number; course: string }) => (
                <ul key={item["id"]}>
                  <li className="py-2 px-4 border-b border-b-amber-100 md:bg-gray-800">
                    <Link href="/"> {item.course}</Link>
                  </li>
                </ul>
              ))}
            </div>
          )}
        </li>
        <li className="py-2 px-4 border-b bg-gray-800 border-b-amber-100 md:border-b-transparent md:bg-transparent">
          <Link
            href="/"
            className="group transition-all duration-300 ease-in-out"
          >
            <span className="md:bg-left-bottom md:bg-gradient-to-r from-amber-100 to-amber-100 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out pb-2">
              About
            </span>
          </Link>
        </li>
        <li className="py-2 px-4 border-b bg-gray-800 border-b-amber-100 md:border-b-transparent md:bg-transparent">
          <Link
            href="/"
            className="group transition-all duration-300 ease-in-out"
          >
            <span className="md:bg-left-bottom md:bg-gradient-to-r from-amber-100 to-amber-100 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out pb-2">
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
