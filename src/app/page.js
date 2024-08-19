
import About from "./_components/About";
import Contatti from "./_components/Contatti";
import Hero from "./_components/Hero";
import Servizi from "./_components/Servizi";
import Skills from "./_components/Skills";

export default function Home() {
  return (
   <>
     <Hero></Hero>
     <About></About>
     <Servizi></Servizi>
     <Skills></Skills>
     <Contatti></Contatti>
   </>
  );
}
