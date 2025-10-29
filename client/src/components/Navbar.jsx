import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.jpg";
// import logo from "../assets/logo2.jpg";
import logo from "../assets/logopng1.png";
import { navItems } from "../constants";
import { BiPhoneCall } from "react-icons/bi";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-3xl border-b border-theme/80 bg-theme/80 lg:px-2 px-2">
      <div className="container  mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <Link to="/" className="text-3xl tracking-tight text-green-600 font-sen font-semibold">
              Green Build
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <a href="#" className="py-2 px-3 border border-theme rounded-md text-theme-secondary hover:bg-theme-accent transition-colors">
              Gallery
            </a>
            <a
              href="https://wa.me/919071285992"
              className="bg-gradient-secondary py-2 px-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
            <div className="flex items-center gap-4 list-none">
              <li>
                <BiPhoneCall className="h-[50px] w-[50px] rounded-md bg-primary-500 p-2 text-2xl text-gray-300 hover:bg-primary-600 transition-colors" />
              </li>
              <li>
                <div className="text-theme">
                  <p className="text-sm text-gray-500">Call us on</p>
                  <p className="text-md text-theme">+91 9071285992</p>
                </div>
              </li>
            </div>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-theme">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-theme w-full p-12 flex flex-col justify-center items-center lg:hidden border-l border-theme">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href} onClick={toggleNavbar} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-4">
              <a href="#" className="py-2 px-3 border border-theme rounded-md text-theme-secondary">
                Gallery
              </a>
              <a
                href="https://wa.me/919071285992"
                className="py-2 px-3 rounded-md bg-gradient-secondary text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;