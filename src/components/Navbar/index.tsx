import { useContext, useId, useState } from "react";
import Logo from "../../assets/logo.png";
import { HEADER_LINKS } from "../../utils/Menu.header";
import { HeaderLink } from "../HeaderLink";
import { FLAGS } from "../../utils/Languages.flags";
import { LangContext, LangContextProps } from "../../contexts/Lang.context";

export function Navbar() {
  const [flagsAreVisible, setFlagsAreVisible] = useState(false);
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);

  const { LANG, setLANG }: LangContextProps = useContext(LangContext);

  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-white bg-opacity-10 backdrop-blur-md drop-shadow-lg">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#home" className="flex items-center">
          <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Notes Share Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Notes Share
          </span>
        </a>

        <div className="flex items-center md:order-2">
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="inline-flex items-center justify-center p-2 text-sm text-white rounded cursor-pointer hover:text-gray-900 hover:bg-gray-300 bg-gray-400 bg-opacity-10 backdrop-blur-md drop-shadow-lg"
            onClick={() => setFlagsAreVisible(!flagsAreVisible)}
          >
            {FLAGS[LANG].svg}
            {FLAGS[LANG].name}
          </button>

          <div
            className={`z-50 my-3 -mx-1 text-base list-none absolute mt-44 bg-white bg-opacity-10 backdrop-blur-md drop-shadow-lg rounded-md ${
              flagsAreVisible ? "block" : "hidden"
            }`}
            id="language-dropdown-menu"
          >
            <ul className="py-1" role="none">
              {Object.keys(FLAGS).map((key: string) => {
                const FLAG = FLAGS[key];
                return (
                  <li key={key}>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                      onClick={() => {
                        setLANG(key);
                        setFlagsAreVisible(false);
                      }}
                    >
                      <div className="inline-flex items-center text-white">
                        {FLAG.svg}
                        {FLAG.name}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            data-collapse-toggle="mobile-menu-language-select"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg md:hidden hover:bg-purple-500 hover:text-white focus:outline-none"
            aria-controls="mobile-menu-language-select"
            aria-expanded="false"
            onClick={() => setMobileMenuIsVisible(!mobileMenuIsVisible)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            mobileMenuIsVisible ? "block" : "hidden"
          }`}
          id="mobile-menu-language-select"
        >
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {HEADER_LINKS.map(({ title, url }) => (
              <HeaderLink title={title[LANG]} url={url} key={useId()} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
