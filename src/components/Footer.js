import React from "react";
import { Link } from "react-router-dom"; // For navigation

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {/* Column 1: Brand/Logo */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-2">
              FoodFiesta
            </h2>
            <p className="text-gray-400">Your daily dose of delicious.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us (with SVG icons) */}

          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Facebook</span>
              </a>

              <a
                href="#"
                className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm7 11.29c.002.396.004.79.004 1.186 0 3.033-2.458 5.492-5.492 5.492H10.49c-3.033 0-5.492-2.458-5.492-5.492V10.49c0-3.033 2.458-5.492 5.492-5.492h3.018c3.034 0 5.492 2.458 5.492 5.492v.002zM12 7.15c-2.674 0-4.85 2.176-4.85 4.85s2.176 4.85 4.85 4.85 4.85-2.176 4.85-4.85-2.176-4.85-4.85-4.85zm0 7.85c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm3.894-6.416a.9.9 0 100-1.8.9.9 0 000 1.8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Instagram</span>
              </a>

              <a
                href="#"
                className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.46 6.13c-.8.35-1.65.59-2.54.7l-.02.01c-.01.01-.03.01-.04.02 1.02-.61 1.8-1.57 2.17-2.71a.75.75 0 00-1.4-.42c-.93.81-1.96 1.39-3.08 1.74-.69.24-1.42.36-2.18.36-2.55 0-4.62-2.07-4.62-4.62 0-.39.04-.77.13-1.14a.75.75 0 00-1.39-.42 13.06 13.06 0 01-9.48-4.81.75.75 0 00-1.16.8A4.6 4.6 0 004.3 8.3c-.73-.02-1.41-.22-2.01-.55a.75.75 0 00-1 .95c.2.73.55 1.39 1.02 1.94.34.4.73.75 1.17 1.03-.68.02-1.33-.2-1.9-.52a.75.75 0 00-1.02 1.02c.63.95 1.44 1.72 2.39 2.26C2.2 15.29 1.14 16 0 16.57a.75.75 0 00.36 1.45c2.4.67 4.96.34 7.25-.99 2.92-1.71 4.99-4.52 5.53-7.68.02-.13.04-.26.06-.39.81-.59 1.5-1.3 2.08-2.12a.75.75 0 00-.72-1.08z" />
                </svg>
                <span className="ml-2">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-slate-700" />

      {/* Copyright section  */}
      <div className="text-center pt-4">
        <p className="text-sm text-gray-500">
          &copy; {currentYear} FoodFiesta. All Rights Reserved. (India)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
