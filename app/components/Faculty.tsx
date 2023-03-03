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
    <div className="max-w-screen-xl mx-auto">
      <h2
        className={`font-extrabold text-4xl font-ubuntu ${ubuntu.variable} text-blue-800 py-5`}
      >
        Learn from the Best : Our Faculty Team
      </h2>
      <div className="flex justify-around space-x-10  mb-10">
        <FacultyCard
          teacherName="Zia Khan"
          info="Web 3, DeFi, Cloud and Metaverse Architect | Tokenomist and
            Metanomist | CEO Panacloud | Volunteer COO Presidential Initiative
            for AI and Computing"
          imageSrc="/zia2.jpeg"
          altText="zia"
        />

        <FacultyCard
          teacherName="Adil Altaf"
          info=" Internet-Scale Multi-Cloud Global App Architect | Full Stack Cloud
            Developer | Continuous Innovation Leader"
          imageSrc="/adil2.jpg"
          altText="adil"
        />

        <FacultyCard
          teacherName="Hira Shoaib"
          info="Director at the Women Empowerment Div. of the Presidential
            Initiative for Artificial Intelligence & Computing (PIAIC)"
          imageSrc="/hira2.jpg"
          altText="hira"
        />
      </div>
    </div>
  );
}
