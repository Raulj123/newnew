import Loader from "./helpers/Loader";
import Hero from "./helpers/Hero";
import "@/app/globals.scss";
import Nav from "./helpers/Nav";
export default function Home() {
  return (
    <main className="mainC">
      <Nav/>
      <Hero />
      <Loader />
    </main>
  );
}
