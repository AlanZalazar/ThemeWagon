import React from "react";
import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav className="backdrop-blur-lg top-0 z-40 w-full px-4 py-3 md:px-5 lg:px-[15%] sticky">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2 w-auto">
          <img src="./0.navbar/Logo.png" alt="logo" className="h-10 w-auto" />
          <img
            src="./0.navbar/Klean.png"
            alt="klean"
            className="h-[18px] w-auto"
          />
        </div>

        <div className="hidden md:flex flex-1 justify-center px-4">
          <ul className="flex gap-4 xl:gap-6 items-center">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Works", path: "/projects" },
              { name: "Team", path: "/team" },
              { name: "Features", path: "/features" },
            ].map((item, index) => (
              <li key={index} className="group relative">
                <Link
                  to={item.path}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-sm lg:text-base"
                >
                  {item.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          <button className="text-[#4E92F9] font-semibold text-sm lg:text-base hover:opacity-80 transition-opacity">
            Log In
          </button>
          <div className="">
            <button
              className="font-semibold text-sm lg:text-base hover:opacity-80 transition-opacity px-4 py-2 rounded shadow-lg"
              style={{
                background:
                  "linear-gradient(112.77deg, #C381DB 0%, #4E92F9 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
