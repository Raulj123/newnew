import Loader from "./Components/Loader";
import Hero from "./Components/Hero";
import "@/app/globals.scss";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Loader />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
