import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/UserContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
      px-4 md:px-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
      ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-lg rounded-full w-[95%] md:w-[80%] py-2"
          : "bg-white/50 backdrop-blur-sm w-full py-4 rounded-none"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-amber-600">
          LuminaCV
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            to="/resume-score"
            className="text-gray-700 hover:text-amber-600 transition"
          >
            Resume score
          </Link>
          <Link
            to="/resume-analyse"
            className="text-gray-700 hover:text-amber-600 transition"
          >
            Resume analyse
          </Link>
          <Link
            to={user ? "/resume-score" : "/auth"}
            className="flex items-center space-x-1 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition"
          >
            <span>Get started</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-amber-600 focus:outline-none transition"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 space-y-3 text-sm font-medium">
          <Link
            to="/about"
            className="block text-gray-700 hover:text-amber-600"
          >
            About
          </Link>
          <Link
            to="/dashboard"
            className="block text-gray-700 hover:text-amber-600"
          >
            Dashboard
          </Link>
          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-amber-600"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-amber-600"
          >
            How it works
          </a>
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-amber-600"
          >
            Pricing
          </a>
          <Link
            to="/resume-score"
            className="flex items-center justify-center space-x-1 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition w-full"
          >
            <span>Get started</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
