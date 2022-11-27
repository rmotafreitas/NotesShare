import { useContext, useId } from "react";
import { LangContext, LangContextProps } from "../../contexts/Lang.context";
import { DICTIONARY_FOOTER } from "../../utils/Dictionary.footer";
import { FOOTER_LINKS } from "../../utils/Menu.footer";
import { FooterLink } from "../FooterLink";

export function Footer() {
  const { LANG }: LangContextProps = useContext(LangContext);

  return (
    <footer className="text-center lg:text-left text-white bg-gray-900">
      <div className="bg-gray-800 flex justify-center items-center lg:justify-between p-4">
        <div className="flex justify-between mx-auto w-4/6">
          <div className="mr-12 hidden lg:block">
            <span>{DICTIONARY_FOOTER.CONTACT_US[LANG]}</span>
          </div>
          <div className="flex justify-left items-center">
            <a
              href="https://www.facebook.com/profile.php?id=100088112143923"
              className="mr-6 text-white"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                className="w-2.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/NotesShareISEP"
              className="mr-6 text-white"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/notesharep/"
              className="mr-6 text-white"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/notes-share-181520258/"
              className="mr-6 text-white"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                className="w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-col mx-auto w-4/6">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="flex flex-wrap justify-between max-md:justify-center">
            <div className="flex w-1/2 justify-between">
              <div className="flex flex-col mb-10 gap-2 max-lg:hidden">
                <h6 className="uppercase font-semibold mb-2 flex justify-center md:justify-start">
                  MENU
                </h6>
                {FOOTER_LINKS.map(({ title, url }) => (
                  <FooterLink title={title[LANG]} url={url} />
                ))}
              </div>

              <div className="max-md:w-full">
                <h6 className="uppercase font-semibold mb-4">Contact</h6>
                <p className="flex flex-wrap justify-start md:justify-start mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="home"
                    className="w-4 mr-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                    ></path>
                  </svg>
                  R. Dr. António Bernardino de Almeida <br />
                  nº 431, 4200-072 Porto
                </p>
                <p className="flex items-center justify-center md:justify-start mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="envelope"
                    className="w-4 mr-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    ></path>
                  </svg>
                  notesshareisep@gmail.com
                </p>
                <p className="flex items-center justify-center md:justify-start mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="phone"
                    className="w-4 mr-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                    ></path>
                  </svg>
                  + 351 967 139 041
                </p>
              </div>
            </div>

            <div className="w-1/4 max-md:w-fit">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                {DICTIONARY_FOOTER.SEND_US_A_MESSAGE[LANG]}
              </h6>
              <form>
                <div className="grid md:grid-cols-1 gird-cols-1 gap-2 justify-center items-center">
                  <div className="md:mb-1">
                    <div className="mb-4">
                      <label className="font-semibold text-gray-300">
                        Email
                      </label>
                    </div>

                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="md:mb-1">
                    <div className="mb-4">
                      <label className="font-semibold text-gray-300">
                        {DICTIONARY_FOOTER.MESSAGE[LANG]}
                      </label>
                    </div>

                    <textarea
                      name="message"
                      className="text-black resize-none pt-5 w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-sm outline-none focus:border-blue-400"
                      placeholder={DICTIONARY_FOOTER.TYPE_HERE[LANG]}
                    ></textarea>
                  </div>

                  <div className="md:mr-auto mb-1">
                    <button
                      type="submit"
                      className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                      {DICTIONARY_FOOTER.SEND[LANG]}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-4 bg-gray-800">
        <span>
          Copyright &copy; 2022 Projeto de LAPR1 - Notes Share | Projeto feito
          com 💖 por <span className="font-light italic">Shrimps</span> 🦐
        </span>
      </div>
    </footer>
  );
}
