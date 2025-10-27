import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="/image.png" alt="logo" className="w-20 h-16" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </a>
            <button className="btn px-6 py-2">Get Started</button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Contact
              </a>
              <button className="bg-linear-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-200 w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
