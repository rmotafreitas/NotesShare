import { DICTIONARY_TITLES } from "../../utils/Dictionary.titles";
import { DICTIONARY_DOWNLOAD } from "../../utils/Dictionary.download";
import { Title } from "../TItle";
import Phone from "../../assets/download.png";

import { useContext } from "react";
import { LangContext, LangContextProps } from "../../contexts/Lang.context";

export function DownloadSection() {
  const { LANG }: LangContextProps = useContext(LangContext);

  return (
    <section
      className="pt-8 mb-8 bg-gradient-to-r from-violet-500 to-fuchsia-500"
      id="download"
    >
      <Title title={DICTIONARY_TITLES.DOWNLOAD[LANG]} color="white" />
      <div className="flex my-8 mx-auto container justify-center">
        <img
          className="max-xl:hidden"
          src={Phone}
          alt="Phone With our app opened"
        />
        <div className="py-8 flex flex-row gap-8">
          <div className="flex flex-col gap-8 justify-evenly h-full">
            <div className="flex flex-row gap-8">
              <a
                className="group p-4 flex flex-row justify-evenly items-center w-fit drop-shadow-2xl rounded-lg border-4 border-white hover:bg-white ease-in duration-100"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="fill-white mr-8 w-14 h-14 group-hover:fill-purple-600 ease-in duration-100"
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col text-white text-lg group-hover:text-purple-600 ease-in duration-100">
                  <p className="font-semibold">Play Store</p>
                  <p className="font-medium">
                    {DICTIONARY_DOWNLOAD.COMING_SOON[LANG]}...
                  </p>
                </div>
              </a>
              <div className="w-24 flex items-center justify-center border-4 border-white rounded-lg">
                <div className="p-4 flex flex-col items-center justify-around">
                  <p className="text-white font-semibold">500</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="fill-white w-8 h-8"
                  >
                    <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM127 297c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 214.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 409c-9.4 9.4-24.6 9.4-33.9 0L127 297z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              <a
                className="group p-4 flex flex-row justify-evenly items-center w-fit drop-shadow-2xl rounded-lg border-4 border-white hover:bg-white ease-in duration-100"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="fill-white mr-8 w-14 h-14 group-hover:fill-purple-600 ease-in duration-100"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="flex flex-col text-white text-lg group-hover:text-purple-600 ease-in duration-100">
                  <p className="font-semibold">App Store</p>
                  <p className="font-medium">
                    {DICTIONARY_DOWNLOAD.COMING_SOON[LANG]}...
                  </p>
                </div>
              </a>
              <div className="w-24 flex items-center justify-center border-4 border-white rounded-lg">
                <div className="p-4 flex flex-col items-center justify-around">
                  <p className="text-white font-semibold">4,5</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="fill-white w-8 h-8"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              <a
                className="group p-4 flex flex-row justify-evenly items-center w-fit drop-shadow-2xl rounded-lg border-4 border-white hover:bg-white ease-in duration-100"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="fill-white mr-8 w-14 h-14 group-hover:fill-purple-600 ease-in duration-100"
                >
                  <path d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z" />
                </svg>
                <div className="flex flex-col text-white text-lg group-hover:text-purple-600 ease-in duration-100">
                  <p className="font-semibold">APK</p>
                  <p className="font-medium">
                    {DICTIONARY_DOWNLOAD.COMING_SOON[LANG]}...
                  </p>
                </div>
              </a>
              <div className="w-24 flex items-center justify-center border-4 border-white rounded-lg">
                <div className="p-4 flex flex-col items-center justify-around">
                  <p className="text-white font-semibold">100MB</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="fill-white w-8 h-8"
                  >
                    <path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
