import { useId } from "react";
import { FOOTER_LINKS } from "../../utils/Menu.footer";
import { FooterLink } from "../FooterLink";

export function Footer() {
  return (
    <footer className="py-8 mt-8 bg-gray-900" id="footer">
      <div className="flex flex-col mx-auto w-4/6 text-white">
        <div className="flex flex-row justify-between">
          <div>
            <p className="py-2 font-bold">MENU</p>
            <div className="flex flex-col gap-2 mt-4 font-medium">
              {FOOTER_LINKS.map(({ title, url }) => (
                <FooterLink key={useId()} title={title} url={url} />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-row flex-wrap justify-between">
          <p className="mb-4">
            Copyright &copy; 2022 Projeto de LAPR1 - Notes Share | Projeto feito
            💖 por <span className="font-light italic">Shrimps</span> 🦐
          </p>

          <a href="https://instagram.com/" target="_blank" className="text-2xl">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
