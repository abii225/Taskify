import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="w-full max-w-[1600px] py-10 px-4 sm:px-6 lg:px-8 mx-auto  bg-item2 text-white">
        {/* <!-- Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
          <div className="w-[200px]  mx-auto">
            <Link
              className="flex-none text-xl font-semibold block mx-auto text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="/"
              aria-label="Brand"
            >
              <img
                className="w-[120px] h-[50px] block mx-auto"
                src="https://i.ibb.co/zHfS87t/logo.png"
                alt="Taskify"
              />
            </Link>
          </div>
          {/* <!-- End Col --> */}

          <ul className="text-center">
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 text-sm text-white hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                About
              </a>
            </li>
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 text-sm text-white hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Services
              </a>
            </li>
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 text-sm text-white hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
          {/* <!-- End Col --> */}

          {/* <!-- Social Brands --> */}
          <div className="md:text-end space-x-2">
            <a
              className="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:text-black disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="mailto:abhayv225@gmail.com"
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
            <a
              className="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:text-black disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="https://www.linkedin.com/in/abhay-v-935738243/"
            >
              {/* <svg
                className="flex-shrink-0 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg> */}
              <svg
                className="flex-shrink-0 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.35 0H2.65C1.19 0 0 1.19 0 2.65V21.35C0 22.81 1.19 24 2.65 24H21.35C22.81 24 24 22.81 24 21.35V2.65C24 1.19 22.81 0 21.35 0zM7.86 20.01H4V9.07h3.86v10.94h-.01zm-1.93-12.5a2.43 2.43 0 1 1 0-4.86 2.43 2.43 0 0 1 0 4.86zM20 20.01h-3.85v-5.74c0-1.38-.03-3.15-1.92-3.15-1.93 0-2.23 1.51-2.23 2.44v6.45H9.14V9.06h3.71v1.3h.05c.52-.98 1.79-2.02 3.66-2.02 3.88 0 4.6 2.55 4.6 5.87V20.01z" />
              </svg>
            </a>
          </div>
          {/* <!-- End Social Brands --> */}
        </div>
        {/* <!-- End Grid --> */}
      </footer>
    </div>
  );
};

export default Footer;
