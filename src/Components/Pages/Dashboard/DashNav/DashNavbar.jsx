import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../../Home/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const DashNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <nav className="flex items-center md:px-12 justify-between py-2">
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold tracking-widest font3">
            Packify
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div>
            <div className="flex space-x-4 items-center">
              <div className="flex items-center space-x-6">
                <button
                  onClick={toggleTheme}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-all"
                >
                  {theme === "dark" ? (
                    <Sun className="w-6 h-6 text-yellow-400" />
                  ) : (
                    <Moon className="w-6 h-6 text-gray-900" />
                  )}
                </button>
                <NavLink
                  to="/"
                  className="hover:font-bold text-md lg:flex hidden"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="hover:font-bold text-md lg:flex hidden"
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/blog"
                  className="hover:font-bold text-md lg:flex hidden"
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/contact"
                  className="hover:font-bold text-md lg:flex hidden"
                >
                  Contact Us
                </NavLink>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col space-y-4 px-6 py-4 bg-gradient-to-r from-[#49b6a2] via-[#3694db] to-[#3086c8] text-white lg:hidden">
          <NavLink to="/" className="hover:text-gray-200">
            Home
          </NavLink>
          <NavLink to="/blog" className="">
            Blog
          </NavLink>
          <NavLink to="/contact" className="">
            Contact Us
          </NavLink>
          <NavLink to="/about" className="">
            About Us
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default DashNavbar;
