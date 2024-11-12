import React from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <nav className="bg-white border-gray-200 light:bg-gray-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          onClick={() => router.push("/")}
          className="flex items-center space-x-3 rtl:space-x-reverse hover:cursor-pointer">
          <img
            src="logo.png"
            alt="Flowbite Logo"
            style={{ height: "6.5rem" }}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            FinHub
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white md:light:bg-gray-100 ">
            <li>
              <a
                onClick={() => router.push("/")}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent
                hover:cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => router.push("#")}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent
                hover:cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => router.push("#")}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent
                hover:cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => router.push("#")}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent
                hover:cursor-pointer">
                Pricing
              </a>
            </li>
            <li>
              <a
                onClick={() => router.push("/contactus")}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent
                hover:cursor-pointer">
                Contact
              </a>
            </li>
            <li>
              <a
                onClick={() => router.push("/signin")}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent
                hover:cursor-pointer">
                Sign In
              </a>
            </li>
            <li>
              <a
                onClick={() => router.push("/signup")}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent
                hover:cursor-pointer">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
