import Image from "next/image";
import Link from "next/link";

import { proyectsdata } from "@/data/proyectdata";

export const metadata = {
  title: "raul davila - proyectos",
  description: "porfolio de proyectos web que he desarrollado",
};

export default function ProyectsPage() {
  return (
    <main className="section">
      <h1>{metadata.title}</h1>
      <p>{metadata.description}</p>
      <article className=" mt-8">
        {proyectsdata.map((proyect) => (
          <div key={proyect.titulo}>
            <h2>{proyect.titulo}</h2>
            <p>{proyect.descripcion}</p>
            <Link href={`/proyectos/${proyect.slug}`}
              className="w-fit h-fit"
            >
              <Image
                width={200}
                height={200}
                className="object-contain"
                priority
                blurDataURL={proyect.imagen}
                placeholder="blur"
                src={proyect.imagen}
                alt={proyect.titulo}
              />
            </Link>
            <ul className="inline-flex flex-wrap gap-2">
              {
                proyect.tags.map((tag) => (
                  <li key={tag}
                    className="tagspill"
                  >{tag}</li>
                ))
              }
            </ul>
          </div>
        ))}
      </article>
    </main>
  );
}
