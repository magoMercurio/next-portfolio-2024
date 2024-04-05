import { Card } from "@/components/Card";

import { proyectsdata } from "@/data/proyectdata";

export const metadata = {
  title: "portfolio de proyectos",
  description: "Explora una variedad de proyectos web que reflejan mi experiencia y creatividad en el desarrollo digital.",
};

export default function ProyectsPage() {
  return (
    <main className="section mb-8">
      <h1 className="mb-4">{metadata.title}</h1>
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
