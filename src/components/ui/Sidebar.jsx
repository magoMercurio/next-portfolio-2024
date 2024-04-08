import { SocialLinks } from "../SocialLinks"

export const Sidebar = ( ) => {
  return (
    <aside className="mb-8">
      <h2 className=" text-black dark:text-white">
        Raul Davila
      </h2>
      <p className=" text-black dark:text-white">
        Desarrollador Web Front End
      </p>
      <SocialLinks />
      <span className="accent" >--- </span>
      <p>
        Más de dos años de experiencia en el Desarrollo Web Front End. Mi enfoque se centra en la construcción de páginas web sólidas y atractivas, empleando{" "} <span className="accent"> HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS y AstroJS{" "}</span> como herramientas principales.
      </p>

    </aside>
  )
}