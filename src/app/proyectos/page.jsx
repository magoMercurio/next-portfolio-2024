import { Card } from "@/components/Card";

import { proyectsdata } from "@/data/proyectdata";

export const metadata = {
  title: "raul davila - proyectos",
  description: "porfolio de proyectos web que he desarrollado",
};

export default function ProyectsPage() {
  return (
    <main className="section mb-8">
      <h1>{metadata.title}</h1>
      <p>{metadata.description}</p>
      <article className=" mt-8 flex flex-col">
      {proyectsdata.map((proyect) => {
          return (
            <Card key={proyect.titulo} className={`mt-8`} proyect={proyect} />
          );
        })}
      </article>
    </main>
  );
}
