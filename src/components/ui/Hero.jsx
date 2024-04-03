import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="hero flex flex-col">
      <h1 className=" text-center md:text-left">Raul Davila Desarrollador Web <span className="hidden sm:inline">Front End</span><span className="accent">|</span></h1>
      <article className="mt-8 flex flex-col sm:flex-row gap-8">
        <div className=" w-[160px] h-auto mx-auto">
          <Image src="/images/bwheroimg.webp" alt="heroimage"
            width={200}
            height={200}
            priority={true}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <p className="mt-4">Más de dos años de experiencia en el Desarrollo Web Front End. Mi enfoque se centra en la construcción de páginas web sólidas y atractivas,
          empleando <span className="accent">HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS y
          AstroJS </span>
          como herramientas principales.</p>
      </article>
      
    </section>
    )
}