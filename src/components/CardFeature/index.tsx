interface Props {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: Props) {
  return (
    <div className="bg-white p-8 m-9 rounded-lg drop-shadow-2xl w-72">
      <img
        className="h-16 w-16 mb-4"
        src={icon}
        alt="Icon da funcionalidade 1"
      />
      <h1 className="font-bold mb-4 text-lg">{title}</h1>
      <p className="text-gray-500 font-semibold">{description}</p>
    </div>
  );
}
