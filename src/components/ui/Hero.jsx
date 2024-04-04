import Link from "next/link"
import Image from "next/image"
import { SocialLinks } from "@/components/SocialLinks"

export function Hero() {
  return (
    <section className="hero flex flex-col">
      <h1 className=" text-center sm:text-left">
        Raul Davila Desarrollador Web <span className="hidden sm:inline">Front End</span><span className="accent blink font-extrabold">|</span>
      </h1>
      <article className="mt-8  flex flex-col sm:flex-row gap-4">
        <Image src="/images/bwheroimg.webp" alt="heroimage"
            width={160}
            height={160}
            priority={true}
            className="object-cover rounded-lg mx-auto"
          />
        <p className="">Más de dos años de experiencia en el Desarrollo Web Front End. Mi enfoque se centra en la construcción de páginas web sólidas y atractivas,
          empleando <span className="accent">HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS y
          AstroJS </span>
          como herramientas principales.</p>
      </article>

      <SocialLinks  />
      
    </section>
    )
}