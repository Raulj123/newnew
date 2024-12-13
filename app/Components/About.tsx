import "@/app/globals.scss";
export default function About() {
  return (
    <div className="about">
      <h1>About me</h1>
      <p>Born in Mexico City and raised in CA</p>
      <p>
        Transferred from a community college and expected to graduate this
        fall(first-gen)
      </p>
      <p>My interest currenltly are..</p>
      <ul>
        <li key={1}>Solving programming puzzles, although I'm not the best.</li>
        <li key={2}>3d modeling(blender, I am bad at this)</li>
        <li key={3}>System design</li>
        <li key={4}>Anime (AOT on top)</li>
        <li key={5}>Fornite, Rocket, COD</li>
        <li key={6}>Web Desgin</li>
        <li key={7}>Reading blogs</li>
      </ul>
      <a href="https://rjvhome.vercel.app/resume.pdf">Resume</a>
      <h1>Skills</h1>
      <ul>
        <li key={1}>React/ Nextjs</li>
        <li key={2}>Express/Koa</li>
        <li key={3}>Scrum and agile methodologies</li>
        <li key={4}>How to learn new tools</li>
      </ul>
    </div>
  );
}
