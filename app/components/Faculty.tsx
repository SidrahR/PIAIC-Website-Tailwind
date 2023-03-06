import FacultyCard from "./FacultyCard";
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

export default function Faculty() {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 md:px-10 bg-gradient-to-r from-blue-900 via-blue-800  to-blue-900">
      <h2
        className={`font-extrabold text-blue-100 text-3xl md:text-4xl font-ubuntu ${ubuntu.variable} py-10`}
      >
        Learn from the Best : Our Faculty Team
      </h2>
      <div className="flex flex-col lg:flex-row justify-around lg:space-x-10">
        <FacultyCard
          teacherName="Zia Khan"
          info="Web 3, DeFi, Cloud and Metaverse Architect | Tokenomist and
            Metanomist | CEO Panacloud | Volunteer COO Presidential Initiative
            for AI and Computing"
          imageSrc="/zia.jpeg"
          altText="zia"
        />

        <FacultyCard
          teacherName="Adil Altaf"
          info=" Internet-Scale Multi-Cloud Global App Architect | Full Stack Cloud
            Developer | Continuous Innovation Leader"
          imageSrc="/adil.jpg"
          altText="adil"
        />

        <FacultyCard
          teacherName="Hira Shoaib"
          info="Director at the Women Empowerment Div. of the Presidential
            Initiative for Artificial Intelligence & Computing (PIAIC)"
          imageSrc="/hira.jpg"
          altText="hira"
        />
      </div>
    </div>
  );
}
