import { Facebook, Twitter, Youtube, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Newsletter Subscription Section */}
      <div className="bg-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Connected!</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-gray-900 border-0 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-r-md font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Information Section */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">INFORMATION</h3>
              <ul className="space-y-3">
                <li><a href="/about" className="text-gray-300 hover:text-primary-400 transition-colors">About Green Build</a></li>

                <li><a href="/sitemap" className="text-gray-300 hover:text-primary-400 transition-colors">Site Map</a></li>
                <li><a href="/solutions" className="text-gray-300 hover:text-primary-400 transition-colors">Digital Solutions</a></li>
 
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">HELP</h3>
              <ul className="space-y-3">
                <li><a href="/support" className="text-gray-300 hover:text-primary-400 transition-colors">Help and Support</a></li>

              </ul>
            </div>

            {/* Contact Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">CONTACT US</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-400" />
                  <div>
                    <p className="text-gray-300">+91 9071285992</p>
                
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-400" />
                  <p className="text-gray-300">info@greenbuild.co</p>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary-400" />
                  <p className="text-gray-300">Co-Browse</p>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">FOLLOW US</h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
              

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Green Build. All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Use
              </a>
              <a href="/data-collection" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Data Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
