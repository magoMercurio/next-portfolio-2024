import Image from "next/image";

import { proyectsdata } from "@/data/proyectdata";


export function generateStaticParams() {

  return proyectsdata.map(proyecto => ({
    slug: proyecto.slug }))
  
}

export default function Page({ params }) {
/*   const { slug } = params; */

  const proyecto = proyectsdata.find(proyecto => proyecto.slug === params.slug)
  return (
    <main>
      <h1>{proyecto.titulo}</h1>
      <Image width={500} height={500} className="rounded-lg w-96 h-auto mx-auto m-8"
        priority
        blurDataURL={proyecto.imagen}
        placeholder="blur"
        
        src={proyecto.imagen}
        alt={proyecto.titulo} /> 
        <p>{proyecto.descripcion}</p>
        <ul className="inline-flex gap-2">
              {
                proyecto.tags.map((tag) => (
                  <li key={tag}
                    className="tagspill"
                  >{tag}</li>
                ))
              }
            </ul>
    </main>
  )
}