import { useState } from 'react';
import { MenuIcon, ShoppingCart, XIcon } from 'lucide-react'; // Puedes usar cualquier ícono que prefieras
import { Link } from 'react-router-dom';
import Logo from "../../assets/logoPietro.webp";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-3 md:flex md:items-center md:justify-between z-100000">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold"><Link to={"/"}>
          <img className="ml-5 w-24 rounded-full shadow-sm shadow-slate-200" src={Logo} />
        </Link></div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
        <Link className="block mt-2 md:mt-0" to={"/products"}>Catalogo</Link>
        <Link className="block mt-2 md:mt-0" to={"/aboutus"}>Sobre Nosotros</Link>
        <Link className="block mt-2 md:mt-0" to={"/cart"}>
              <ShoppingCart />
            </Link>
      </div>
    </nav>
  );
};
