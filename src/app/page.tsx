import Hero from "@/sections/hero";
import AboutUs from "@/sections/about-us";
import WhyChooseUs from "@/sections/why-choose-us";

export default function Home() {
  return (
    <main className="w-full h-fit flex flex-col items-center">
      <Hero />
      <div className="w-full p-3"></div>
      <AboutUs />
      <WhyChooseUs />
    </main>
  );
}
