import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <header className="sticky top-0  flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-table shadow-md">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-primary  dark:text-white"
            to="/"
          >
            Taskify
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={toggleNav}
              aria-label="Toggle navigation"
            >
              {/* Toggle button content */}
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className={`hs-collapse ${
            isNavOpen ? "block" : "hidden"
          } overflow-hidden transition-all duration-300 basis-full grow sm:block`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            {/* Navigation links */}
            <Link
              className="font-primary text-[16px] text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="/"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              className="font-primary text-[16px] text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="/signup"
            >
              signup
            </Link>
            <Link
              className="font-primary text-[16px] text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="/login"
            >
              signin
            </Link>
            <Link
              className="font-primary text-[16px] text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="/profile"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
