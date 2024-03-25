import Link from "next/link"


export function Hero() {
  return (
    <section className="hero flex flex-col">
      <h1 className="mt-16">Raul Davila Desarrollador Web</h1>
      <article className="mt-16 flex flex-col sm:flex-row">
        <h2 className="mb-8">Brindando soluciones en la creacion de paginas web</h2>
        <div className=" w-72 h-72 mx-auto">
          <img src="/images/rpsicologv2-d8e6c0d2.webp" alt="heroimage" 
            className="w-full h-full object-cover"
          />
        </div>
      </article>
        <div className="mt-8 mx-auto">
          <Link href='/' className="btn-cta">Contactame</Link>
          <Link href='/'>Curriculum</Link>
        </div>
    </section>
    )
}