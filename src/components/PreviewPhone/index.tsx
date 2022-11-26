export interface Props {
  title: string;
  image: string;
}

export function PreviewPhone({ title, image }: Props) {
  return (
    <img
      src={image}
      className="w-72 drop-shadow-2xl m-9"
      alt={`${title} Screen`}
    />
  );
}
