export interface Props {
  title: string;
  url: string;
}

export function HeaderLink({ title, url }: Props) {
  return (
    <a className="hover:text-gray-300 ease duration-100" href={url}>
      {title}
    </a>
  );
}
