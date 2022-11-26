interface Props {
  title: string;
  description: string;
  image: string;
  date: number;
}

export function CardNew({ title, description, image, date }: Props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={`${title} image`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {new Date(date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
