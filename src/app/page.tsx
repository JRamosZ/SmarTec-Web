import {Footer} from "@/components/layout/Footer";
import {FinalCTA} from "@/components/sections/FinalCTA";
import {Hero} from "@/components/sections/Hero";
import {Process} from "@/components/sections/Process";
import {Services} from "@/components/sections/Services";
import {WhySmarTec} from "@/components/sections/WhySmarTec";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <WhySmarTec />
      <FinalCTA />
      <Footer />
    </main>
  );
}
