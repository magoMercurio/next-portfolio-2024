import Link from "next/link";
import { proyectsdata } from "@/data/proyectdata";
import { Card } from "@/components/Card";

const pinnedProyects = proyectsdata.filter((proyect) => proyect.pin);

export const ProyectSection = () => {
  return (
    <section className=" mt-8">
      <h2>proyectos destacados</h2>
      <article className="">
        {pinnedProyects.map((proyect) => {
          return (
            <Card key={proyect.titulo} className={`mt-8`} proyect={proyect} />
          );
        })}
      </article>
      <p className="mt-4 ml-4 links">
        <Link href="/proyectos">todos los proyectos</Link>
      </p>
    </section>
  );
};
