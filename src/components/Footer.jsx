import React from "react";

export default function Footer() {
  const sections = [
    {
      title: "About",
      links: ["Prices", "About", "Services", "Career"],
    },
    {
      title: "Resources",
      links: ["Terms", "Help", "Privacy"],
    },
    {
      title: "Team",
      links: ["Developer", "Designer"],
    },
    {
      title: "Blog",
      links: ["CEO", "Lifestyle", "Article", "Tech"],
    },
  ];

  return (
    <footer className="text-[#5A6980] pt-12 pb-8 px-4 py-3 md:px-5 lg:px-[15%]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:w-[50%] mb-12">
            {sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-auto">
            <div>
              <h3 className="text-[#5A6980] font-semibold text-lg">
                Follow Us
              </h3>
              <ul className="flex gap-3 py-5">
                <li>
                  <img src="./8.footer/facebook.png" alt="facebook" />
                </li>
                <li>
                  <img src="./8.footer/twitter.png" alt="twitter" />
                </li>
                <li>
                  <img src="./8.footer/linkedin.png" alt="linkedin" />
                </li>
                <li>
                  <img src="./8.footer/youtube.png" alt="youtube" />
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-4 text-[#5A6980]">
                Subscribe to our newsletter
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <div className="flex justify-center items-center active:border active:border-purple-800">
                  <img
                    src="./8.footer/mail.png"
                    alt="mail"
                    className="size-4"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-grow p-2 rounded placeholder-gray-500 focus:outline-none"
                  />
                  <button>
                    <img src="./8.footer/subbmit.png" alt="submit" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © All rights Reserved Your Company, {new Date().getFullYear()}
          </p>
          <p className="text-gray-400">
            Made with ❤️ by{" "}
            <a href="#" className="hover:text-blue-500">
              Themewagon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
