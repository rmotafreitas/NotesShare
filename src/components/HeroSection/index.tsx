import { DICTIONARY_HEADER } from "../../utils/Dictionary.header";
import { useContext } from "react";
import { Home as HomeScreen } from "../../utils/Images.screens";
import { Navbar } from "../Navbar";
import { LangContext, LangContextProps } from "../../contexts/Lang.context";

export function HeroSection() {
  const { LANG }: LangContextProps = useContext(LangContext);

  return (
    <header className="bg-hero bg-no-repeat bg-cover bg-scroll mb-12" id="home">
      <Navbar />

      <section className="flex p-16 justify-evenly mx-auto w-3/5 py-24">
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
