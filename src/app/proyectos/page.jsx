import Image from "next/image";
import Link from "next/link";

import { proyectsdata } from "@/data/proyectdata";

export default function ProyectsPage() {
  return (
    <main>
      <h1>ProyectPage</h1>
      <div className=" mt-16">
        {proyectsdata.map((proyect) => (
          <div key={proyect.titulo}>
            <h2>{proyect.titulo}</h2>
            <p>{proyect.descripcion}</p>
            <Link href={`/proyectos/${proyect.slug}`}>
              <Image
                width={500}
                height={500}
                className="rounded-lg w-96 h-auto mx-auto m-8"
                priority
                blurDataURL={proyect.imagen}
                placeholder="blur"
                src={proyect.imagen}
                alt={proyect.titulo}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
