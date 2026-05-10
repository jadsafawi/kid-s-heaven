import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-indigo-700/90 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          
          <Link
            to="/"
            className="text-2xl md:text-3xl font-extrabold text-white tracking-wide"
          >
            Kid’s Heaven 🎁
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-white font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-200 transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                className="hover:text-indigo-200 transition duration-300"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-indigo-200 transition duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-indigo-200 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 bg-white text-indigo-700 px-5 py-2 rounded-full font-semibold hover:bg-indigo-100 transition duration-300 shadow-md">
              <ShoppingCart size={18} />
              Cart
            </button>

            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-indigo-800/95 backdrop-blur-lg overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-white font-medium">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-indigo-200 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/shop"
              onClick={() => setMenuOpen(false)}
              className="hover:text-indigo-200 transition"
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-indigo-200 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-indigo-200 transition"
            >
              Contact
            </Link>
          </li>

          <button className="flex items-center gap-2 bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">
            <ShoppingCart size={18} />
            Cart
          </button>
        </ul>
      </div>
    </nav>
  );
}