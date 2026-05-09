import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#4338ca]/95 text-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          Kid’s Heaven 🎁
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><Link to="/" className="hover:text-indigo-200 transition">Home</Link></li>
          <li><Link to="/shop" className="hover:text-indigo-200 transition">Shop</Link></li>
          <li><Link to="/about" className="hover:text-indigo-200 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-indigo-200 transition">Contact</Link></li>
        </ul>

        {/* Cart */}
        <button className="bg-white text-[#4338ca] font-semibold px-4 py-2 rounded-full hover:bg-indigo-100 transition">
          Cart 🛒
        </button>
      </div>
    </nav>
  );
}