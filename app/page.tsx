import StatusBar from "@/components/StatusBar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <StatusBar />
      <Hero />
      <Work />
      <Approach />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
