import Link from "next/link"
import Image from "next/image"

export const Card = ({ proyect, className }) => {

  const  { titulo, descripcion, imagen, slug, tags } =  proyect

    return (
        <div className={ `card ${ className }` }>
            <h3>{titulo}</h3>
              <p>{descripcion}</p>
              <Link href={`/proyectos/${slug}`}
              className="w-fit h-fit"
            >
              <Image
                width={200}
                height={200}
                className="object-contain"
                priority
                blurDataURL={imagen}
                placeholder="blur"
                src={imagen}
                alt={titulo}
              />
            </Link>
            <ul className="inline-flex flex-wrap gap-2">
              {
                tags.map((tag) => (
                  <li key={tag}
                    className="tagspill"
                  >{tag}</li>
                ))
              }
            </ul>
          </div>
        
    )
}
