import Image from "next/image";
import Link from "next/link";

import { proyectsdata } from "@/data/proyectdata";
import { Sidebar } from "@/components/ui/Sidebar";

export function generateStaticParams() {
  return proyectsdata.map((proyecto) => ({
    slug: proyecto.slug,
  }));
}

export default function Page({ params }) {
  /*   const { slug } = params; */

  const proyecto = proyectsdata.find(
    (proyecto) => proyecto.slug === params.slug
  );
  return (
    <main className="grid grid-cols-1 gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8 mb-8">
      <article className="section">
        <h1>{proyecto.titulo}</h1>
        <Image
          width={760}
          height={380}
          className="rounded-md w-[560px] h-auto mx-auto m-8"
          priority
          blurDataURL={proyecto.imagen}
          placeholder="blur"
          src={proyecto.imagen}
          alt={proyecto.titulo}
        />
        <article className="flex flex-col sm:flex-row mb-1">
          <aside className="sm:mr-4 mb-1 bgProyect">categoria</aside>
          <ul className="inline-flex items-center gap-2">
            {proyecto.tags.map((tag) => (
              <li key={tag} className="tagspill text-sm">
                {tag}
              </li>
            ))}
          </ul>
        </article>
        <article className="flex flex-col sm:flex-row mb-1">
          <aside className="sm:mr-4 mb-1 bgProyect">skill</aside>
          <ul className="inline-flex gap-2">
            {proyecto.skills.map((skill) => (
              <li key={skill} className="bgSkills">
                {skill}
              </li>
            ))}
          </ul>
        </article>
        <article className="flex flex-col sm:flex-row mb-1">
          <aside className="sm:mr-4 mb-1 bgProyect">website</aside>
          <Link href={proyecto.link} target="_blank" className="links p-0">{proyecto.link} </Link>
        </article>
        <article className="flex flex-col sm:flex-row mb-1">
          <aside className="sm:mr-4 mb-1 bgProyect">github</aside>
          <Link href={proyecto.link_github} rel={`noopener noreferrer`} target="_blank" className="links p-0">{proyecto.link_github} </Link>
        </article>

        <hr className="my-4 borderColors border-dashed"/>

        <p>{proyecto.descripcion}</p>
      </article>

      {/* -------- ASIDE --------- */}

      <Sidebar />
      
    </main>
  );
}
