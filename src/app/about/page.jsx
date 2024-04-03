

export const metadata = {
  title: "sobre mi - raul davila - web developer",
  description: "creación de landing pages, web modernas con un diseño responsivo y un código limpiamente legible. Cuento con experiencia trabajando con SEO mejorando la visibilidad y el posicionamiento en los motores de búsqueda, optimizando las webs para obtener los mejores resultados en los motores de busqueda como Google",
};

export default function AboutPage() {
  return (
    <main>
      <h1>{metadata.title}</h1>

      <article className="flex flex-col  mx-8 mt-8">
        <p className=" mb-4">
          Más de dos años de experiencia en el desarrollo web. Mi enfoque se
          centra en la construcción de páginas web sólidas y atractivas,
          empleando <span className="accent">HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS y
          AstroJS </span>
          como mis herramientas principales. Creando soluciones
          web modernas y eficientes.
        </p>
        <p className=" mb-4">
          Especializado en la creación de <span className="accent">landing pages, web modernas</span> con un <span className="accent">diseño responsivo</span> que se adapta a las pantallas desde donde se ve la web. Cuento con
          experiencia trabajando con <span className="accent">SEO</span>  mejorando la visibilidad y el posicionamiento en los motores de búsqueda, optimizando las webs para
          obtener los mejores resultados en los motores de busqueda como Google.
        </p>
        <p className=" mb-4">
          Comprometido a brindar resultados excepcionales a mis clientes.
        </p>
      </article>
    </main>
  );
}
