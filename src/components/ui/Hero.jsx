import Link from "next/link"
import Image from "next/image"
import { SocialLinks } from "@/components/SocialLinks"

export function Hero() {
  return (
    <section className="hero flex flex-col">
      <h1 className=" text-center sm:text-left">
        Raul Davila Desarrollador Web <span className="hidden sm:inline">Front End</span><span className="accent blink font-extrabold">|</span>
      </h1>
      <article className="mt-8  flex flex-col sm:flex-row  gap-4">
          <div>
          <Image src="/images/bwheroimg.webp" alt="heroimage"
            width={150}
            height={150}
            priority={true}
            className="object-cover rounded-lg mx-auto sm:mx-0 mb-4 w-[150px] h-fit sm:float-left sm:mr-4"
          />
          <p className=" mb-2">Más de dos años de experiencia en el Desarrollo Web Front End. Mi enfoque se centra en la construcción de páginas web sólidas y atractivas,
          empleando <span className="accent">HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS y
          AstroJS </span>
          como herramientas principales.
        </p>
        <p className="mb-2">
        Especializado en la creación de <span className="accent capitalize">landing pages</span> y <span className="accent capitalize">webs modernas</span>. Experiencia trabajando con <span className="accent">SEO</span>, optimizando las webs para obtener los mejores resultados en los motores de busqueda como Google.
        </p>
        <p>
          Si te interesa lo que hago <span className="accent">contáctame</span> a través de mis redes sociales o enviarme un correo electrónico.
        </p>
          </div>
        
      </article>

      <SocialLinks />
      
    </section>
    )
}