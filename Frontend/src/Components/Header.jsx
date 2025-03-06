import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white/60 backdrop-blur-md shadow-md">
      <div className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        <p className="text-xl md:text-2xl font-extrabold text-orange-700">Signpost Phonebook</p>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 font-semibold text-orange-700">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-orange-700 focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={28} />
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar with Enhanced Styling */}
      <div
        className={`fixed top-0 left-0 h-screen w-50 bg-gradient-to-b from-white to-fuchsia-50 backdrop-blur-2xl shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-orange-700 focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={28} />
        </button>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-6 text-lg font-semibold text-orange-700 p-6 mt-10">
          <Link to="/" className="hover:text-orange-500 transition-all" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-orange-500 transition-all" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/careers" className="hover:text-orange-500 transition-all" onClick={() => setIsOpen(false)}>Careers</Link>
          <Link to="/contact" className="hover:text-orange-500 transition-all" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
