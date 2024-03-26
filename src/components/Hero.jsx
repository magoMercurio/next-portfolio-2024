import Link from "next/link"
import Image from "next/image"


export function Hero() {
  return (
    <section className="hero flex flex-col">
      <h1 className="mt-16 text-center">Raul Davila Desarrollador Web</h1>
      <article className="mt-16 flex flex-col sm:flex-row gap-8">
        <div className=" w-[200px] h-auto mx-auto">
          <Image src="/images/rpsicologv2-d8e6c0d2.webp" alt="heroimage"
            width={200}
            height={200}
            priority={true}
            className="w-full h-auto object-cover"
          />
        </div>
        <h2 className="mt-8 w-2/3 mx-auto ">Brindando soluciones a medida para la creacion de paginas web</h2>
      </article>
        <div className="mt-16 mx-auto ">
          <Link href='/' className="btn-cta mr-16">Contactame</Link>
          <Link href='/' className="btn-cta">Curriculum</Link>
        </div>
    </section>
    )
}