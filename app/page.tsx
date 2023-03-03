import Cards from "./components/Cards";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className=" bg-slate-300 ">
      <Hero />
      <Cards />
      {/* <Faculty/> */}
    </div>
  );
}
