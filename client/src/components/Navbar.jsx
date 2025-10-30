import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logopng1.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-3 rounded-lg" src={logo} alt="Logo" />
            <Link to="/" className="text-2xl font-bold">
              <span className="gradient-brand-text font-sen">Green Build</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href} 
                    className="text-theme hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA & Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="#" 
              className="px-4 py-2 text-theme border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Gallery
            </a>
            <a
              href="https://wa.me/919071285992"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:opacity-90 transition-opacity duration-200 font-medium"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            
            {/* Contact Info */}
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-300">
              <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg">
                <Phone className="h-5 w-5 text-primary-600" />
              </div>
              <div className="text-sm">
                <p className="text-gray-500">Call us</p>
                <p className="text-theme font-medium">+91 9071285992</p>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleNavbar} 
              className="p-2 rounded-lg text-theme hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileDrawerOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileDrawerOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-40 bg-black bg-opacity-75" onClick={toggleNavbar}></div>
            <div className="fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl border-l border-gray-200">
              <div className="flex flex-col h-full bg-white">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <img className="h-8 w-8 mr-2 rounded-lg" src={logo} alt="Logo" />
                    <span className="text-2xl font-bold gradient-brand-text font-sen">Green Build</span>
                  </div>
                  <button 
                    onClick={toggleNavbar}
                    className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 px-6 py-6">
                  <ul className="space-y-4">
                    {navItems.map((item, index) => (
                      <li key={index}>
                        <Link 
                          to={item.href} 
                          onClick={toggleNavbar}
                          className="block py-3 px-4 text-lg font-medium text-theme hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile CTA Buttons */}
                  <div className="mt-8 space-y-4">
                    <a 
                      href="#" 
                      className="block w-full py-3 px-4 text-center border border-gray-300 text-theme rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      Gallery
                    </a>
                    <a
                      href="https://wa.me/919071285992"
                      className="flex items-center justify-center space-x-2 w-full py-3 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:opacity-90 transition-opacity duration-200 font-medium"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <Phone className="h-5 w-5 text-primary-600" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium text-theme">+91 9071285992</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary-600" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-theme">info@greenbuild.co</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;