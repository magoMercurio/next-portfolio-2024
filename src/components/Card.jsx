import Link from "next/link";
import Image from "next/image";

export const Card = ({ proyect, className }) => {
  const { titulo, descripcion, imagen, slug, tags } = proyect;

  return (
    <div className={`card ${className} flex flex-col sm:flex-row max-w-5xl `}>
      <Link
        href={`/proyectos/${slug}`}
        className=" flex mx-auto sm:mx-0 items-center w-fit h-fit "
      >
        <Image
          width={150}
          height={150}
          className="object-contain w-36 h-24"
          priority
          blurDataURL={imagen}
          placeholder="blur"
          src={imagen}
          alt={titulo}
        />
      </Link>
      <div className="mx-4 mt-4">
        <div>
        <h3 className="accent text-center sm:text-left">{titulo}</h3>
        <p className="text-center sm:text-left">{descripcion}</p>
        </div>
      <ul className="flex flex-row flex-wrap justify-center mt-4 gap-2">
        {tags.map((tag) => (
          <li key={tag} className="tagspill">
            {tag}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};
