interface Props {
  photo: string;
  name: string;
  age: number;
  role: string;
  hobby: string;
  mail: string;
}

export function CardMember({ photo, name, age, role, hobby, mail }: Props) {
  return (
    <div className="flex max-lg:flex-wrap justify-center items-center bg-white p-4 rounded-lg w-fit drop-shadow-2xl m-6">
      <img
        className="w-40 h-40 max-lg:mb-5 object-cover mx-3 rounded-md"
        src={photo}
        alt={`Photo of ${name}`}
      />
      <div className="flex flex-col justify-between">
        <p>
          <span className="font-bold text-lg">Nome:</span>{" "}
          <span className="font-semibold text-gray-700 text-lg">{name}</span>
        </p>
        <p>
          <span className="font-bold text-lg">Idade:</span>{" "}
          <span className="font-semibold text-gray-700 text-lg">{age}</span>
        </p>
        <p>
          <span className="font-bold text-lg">Hobby:</span>{" "}
          <span className="font-semibold text-gray-700 text-lg">{hobby}</span>
        </p>
        <p>
          <span className="font-bold text-lg">Contacto:</span>{" "}
          <span className="font-semibold text-gray-700 text-lg">{mail}</span>
        </p>
        <p>
          <span className="font-bold">Cargo:</span>{" "}
          <span className="font-semibold text-gray-700 text-lg">{role}</span>
        </p>
      </div>
    </div>
  );
}
