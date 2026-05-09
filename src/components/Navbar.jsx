import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-blue-600">ToyLand 🎁</h1>

      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600">Home</Link>
        </li>
        <li>
          <Link to="/shop" className="hover:text-blue-600">Shop</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600">About</Link>
        </li> 
        <li>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </li>       
      </ul>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
        Cart 🛒
      </button>
    </nav>
  );
}