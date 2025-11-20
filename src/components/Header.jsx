import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.jpg";

export default function Header() {
  return (
    <header className="bg-creme shadow-md p-4 flex justify-between items-center">
      <Link to="/">
        <img 
          src={logo} 
          alt="Logo" 
          className="h-14 w-auto rounded-md shadow-sm border border-black/30"
        />
      </Link>

      <nav className="flex gap-6 text-preto font-serif text-lg">
        <Link to="/" className="hover:underline">Início</Link>
        <Link to="/servicos" className="hover:underline">Serviços</Link>
        <Link to="/contato" className="hover:underline">Contato</Link>
        <a 
          href="https://www.instagram.com/seu_instagram_aqui"
          target="_blank"
          className="hover:underline"
        >
          Instagram
        </a>
      </nav>
    </header>
  );
}
