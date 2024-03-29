import Image from "next/image";
import Link from "next/link";
import { Michroma } from "@next/font/google";
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";

const michrome = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michrome",
});

export default function Footer() {
  return (
    // min-h-screen - to stay at bottom with less content
    <div className="flex flex-col max-w-screen-2xl mx-auto">
      {/* bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 */}
      <footer className="bg-black p-5 items-center flex flex-col md:flex-row mt-auto md:justify-evenly gap-6 md:px-16  ">
        <div id="logo_social" className="pt-2">
          <div className="flex items-center space-x-2">
            <div
            //  href="#"
            >
              <div className="">
                <Image
                  src="/piaic.svg"
                  alt="logo"
                  width="50"
                  height="50"
                ></Image>
              </div>
            </div>
            <div
              className={`${michrome.variable} font-michroma font-extrabold text-2xl text-amber-50`}
            >
              PIAIC
            </div>
          </div>

          <div
            id="icons"
            className="flex space-x-2 py-5 justify-between items-center"
          >
            <Link href="https://www.facebook.com/groups/piaic/" target="_blank">
              <BsFacebook size="20" className="text-sky-600" />
            </Link>
            <Link href="https://www.youtube.com/@PIAIC" target="_blank">
              <BsYoutube size="23" className="text-red-600" />
            </Link>
            <Link href="https://twitter.com/piaicofficial" target="_blank">
              <BsTwitter size="20" className="text-sky-500" />
            </Link>
            <Link
              href="https://www.instagram.com/piaicofficial/"
              target="_blank"
            >
              <BsInstagram
                size="20"
                className="bg-gradient-to-b p-1 rounded-lg from-violet-700 via-fuchsia-500 to-amber-300 text-white"
              />
            </Link>
          </div>
        </div>

        <div
          id="about_cities"
          className="flex space-x-20 md:space-x-8 md:grow justify-evenly"
        >
          <div>
            <div className="font-bold text-lg text-blue-200">About Us</div>
            <ul className="text-sm mt-2 text-slate-300">
              <li className="cursor-pointer">Home </li>
              <li className="cursor-pointer">Apply</li>
              <li className="cursor-pointer">How it works</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-lg text-blue-200">Locations</div>
            <ul className="text-sm mt-2 text-slate-300">
              <li>Karachi</li>
              <li>Islamabad</li>
              <li>Lahore</li>
              <li>Peshawar</li>
            </ul>
          </div>
        </div>

        <div
          id="partners"
          className="font-bold text-lg text-blue-200 space-x-5 pt-5 md:pt-0 text-center"
        >
          Strategic Partners
          <div className="flex pt-2 md:flex-col space-x-6 md:space-x-0 md:space-y-2 md:items-center">
            <Link
              href="https://www.linkedin.com/company/panacloud-pvt-ltd/"
              target="_blank"
            >
              <div className="">
                <Image
                  src="/pana.png"
                  alt="logo"
                  width="70"
                  height="70"
                ></Image>
              </div>
            </Link>
            <Link href="https://www.saylaniwelfare.com/en" target="_blank">
              <div className="">
                <Image
                  src="/saylani.png"
                  alt="logo"
                  width="150"
                  height="150"
                ></Image>
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
