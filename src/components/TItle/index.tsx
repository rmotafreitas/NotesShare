interface Props {
  title: string;
  color?: string;
}

export function Title({ title, color }: Props) {
  return (
    <h1
      className={`${
        color ? `text-${color}` : ""
      } font-semibold text-4xl text-center p-4`}
    >
      {title}
    </h1>
  );
}
