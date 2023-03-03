import Cards from "./components/Courses";
import Faculty from "./components/Faculty";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-neutral-200/75">
      <Hero />
      <Cards />
      <Faculty />
    </div>
  );
}
