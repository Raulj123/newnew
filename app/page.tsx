import Loader from "./Components/Loader";
import Hero from "./Components/Hero";
import "@/app/globals.scss";
import Nav from "./Components/Nav";
export default function Home() {
  return (
    <main className="mainC">
      <Nav/>
      <Hero />
      <Loader />
    </main>
  );
}
