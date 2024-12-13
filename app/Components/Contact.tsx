import "@/app/globals.scss";
export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>Connect with me!</p>
      <ul>
        <li key={1}>
          <a href="https://github.com/Raulj123">Github</a>
        </li>
        <li key={2}>
          <a href="https://www.linkedin.com/in/rauljarquin/">LinkedIn</a>
        </li>
        <li key={3}>
          <a href="mailto:jarquinr121@gmail.com">Email</a>
        </li>
      </ul>
    </div>
  );
}
