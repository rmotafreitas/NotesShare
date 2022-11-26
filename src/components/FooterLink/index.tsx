import { Props } from "../HeaderLink";

export function FooterLink({ title, url }: Props) {
  return (
    <a className="hover:text-gray-300 ease duration-100" href={url}>
      {title}
    </a>
  );
}
