import { proyectsdata } from "@/data/proyectdata";


export function generateStaticParams() {

  return proyectsdata.map(proyecto => ({
    slug: proyecto.slug }))
  
}

export default function Page({ params }) {

  const proyecto = proyectsdata.find(proyecto => proyecto.slug === params.slug)
  return (
    <main>
      <h1>{proyecto.titulo}</h1>
    </main>
  )
}