import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div
        id="bg_image"
        className="w-full h-screen relative bg-gradient-to-b from-gray-600 to-stone-600"
      >
        <Image
          src="/hero3_edit.jpg"
          alt="hero_image"
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="">
          <h1 className="p-40 w-2/4 text-center text-amber-100 text-3xl md:text-5xl">
            Presidents Initiative for Artificial Intelligence and Computing
          </h1>
        </div>
      </div>
    </div>
  );
}
