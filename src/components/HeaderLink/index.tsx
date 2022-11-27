export interface Props {
  title: string;
  url: string;
}

export function HeaderLink({ title, url }: Props) {
  return (
    <li>
      <a
        href={url}
        className="block py-2 pl-3 pr-4 text-white text-md rounded md:bg-transparent md:p-0"
        aria-current="page"
      >
        {title}
      </a>
    </li>
  );
}
