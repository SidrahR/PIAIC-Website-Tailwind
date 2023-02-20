"use client";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Link from "next/link";

export default function Dropdown({
  text,
  data,
}: {
  text: string;
  data: { id: number; course: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen((prev: boolean) => !prev)}
      >
        <div className=" md:pt-1 md:border-b-4 md:border-b-transparent md:hover:border-b-4 md:hover:border-b-teal-600 transition-all duration-150">
          {text}
        </div>
        <span className="md:border-b-transparent">
          {!isOpen ? <BiChevronDown size="20" /> : <BiChevronUp size="20" />}
        </span>
      </div>

      {isOpen && (
        <div className="bg-neutral-200/75 w-fit absolute ">
          {data.map((item) => (
            <ul key={item["id"]}>
              <li className="py-2 px-4 border border-b-violet-900">
                <Link href="/"> {item.course}</Link>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}
