import light from "../assets/light.png";
import dark from "../assets/dark.png";
import { useState } from "react";

export default function Header() {
  const [lightMode, setLightMode] = useState(
    localStorage.theme === "light" ? true : false
  );

  localStorage.setItem("theme", lightMode ? "light" : "dark");
  function toggleLightMode() {
    setLightMode(!lightMode);
  }
  if (lightMode) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }

  return (
    <header className="bg-[#3D7993] text-white font-sans p-5 dark:bg-[#042B50] w-full">
      <nav>
        <ul className="flex md:justify-around justify-between ">
          <li className="text-4xl text-[#77BEB1] md:pr-5">
            <a href="/">Bloom</a>
          </li>
          <li className=" md:my-auto md:text-right md:text-2xl  hidden">
            <a href="/">Home</a>
          </li>
          <li className=" md:my-auto md:text-right md:text-2xl md:block hidden">
            <a href="/posts">Latest Posts</a>
          </li>
          <li className=" md:my-auto md:text-right md:text-2xl md:block hidden">
            <a href="/contact">Contact</a>
          </li>
          <li className=" md:my-auto md:text-right md:text-2xl md:block hidden">
            <a href="/about">About</a>
          </li>
          <li className=" md:my-auto md:text-right md:text-2xl md:block hidden">
            <a href="/login">Login</a>
          </li>
          <li className=" md:my-auto md:text-right md:text-2xl md:block hidden">
            <a href="/register">Register</a>
          </li>
          <li className=" md:my-auto md:text-right md:text-2xl md:block hidden">
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg p-2 focus:outline-none focus:ring ring-[#77BEB1] ring-3 text-black shadow-lg dark:text-white dark:bg-[#242535]"
            />
          </li>
          <li className=" my-auto text-right text-2xl ">
            <button onClick={toggleLightMode}>
              <img
                src={lightMode ? light : dark}
                alt={lightMode ? "light mode" : "dark mode"}
              />
            </button>
          </li>
          <li className="md:hidden block">
            <div className="dropdown inline-block relative">
              <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                  </svg>
                </span>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-72 right-5 z-50">
                <li className="">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/posts"
                  >
                    Latest Posts
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/login"
                  >
                    Login
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/register"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
