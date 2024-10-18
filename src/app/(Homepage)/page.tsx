import { AboutUs } from "@/components/about-us";
import { Contact } from "@/components/contact";
import Hero from "@/components/hero";
import { Services } from "@/components/services";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full  ">
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
    </div>
  );
}
