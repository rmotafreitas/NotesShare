import { DICTIONARY_HEADER } from "../../utils/Dictionary.header";
import { useId } from "react";
import appLogo from "../../assets/logo.png";
import { Home as HomeScreen } from "../../utils/Images.screens";
import { HEADER_LINKS } from "../../utils/Menu.header";
import { HeaderLink } from "../HeaderLink";

const LANG = "pt";

export function Header() {
  return (
    <header className="bg-hero bg-no-repeat bg-cover bg-scroll mb-12" id="home">
      <nav className="container flex items-center justify-around py-5 mb-14 mx-auto  max-lg:flex-col">
        <div className="flex items-center">
          <img
            className="w-20 filter drop-shadow-2xl"
            src={appLogo}
            alt="App Logo"
          />
          <h3 className="text-3xl font-bold text-white">Notes Share</h3>
        </div>
        <div className="space-x-12 font-semibold text-xl text-white">
          {HEADER_LINKS.map(({ title, url }) => (
            <HeaderLink key={useId()} title={title[LANG]} url={url} />
          ))}
        </div>
      </nav>

      <section className="flex p-16 justify-evenly mx-auto w-3/5">
        <div className="flex flex-col justify-evenly">
          <article className="w-3/4">
            <h1 className="font-bold text-6xl text-white my-4">Notes Share</h1>
            <p className="text-2xl text-white mb-8">
             {DICTIONARY_HEADER.DESCRIPTION[LANG]}
              <br />
              <span className="italic font-light py-6">
                Share your note with Notes Share
              </span>
            </p>
          </article>
          <a
            className="p-5 bg-white text-center w-fit rounded-md font-semibold text-gray-700 hover:drop-shadow-2xl ease duration-300 hover:bg-gray-100"
            href="#download"
          >
          {DICTIONARY_HEADER.BUTTON[LANG]}
          </a>
        </div>
        <img
          className="max-xl:hidden w-72 drop-shadow-2xl"
          src={HomeScreen}
          alt="Home Screen"
        />
      </section>
    </header>
  );
}
