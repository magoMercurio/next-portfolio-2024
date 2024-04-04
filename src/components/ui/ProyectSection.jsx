import { proyectsdata } from "@/data/proyectdata"
import { Card } from "@/components/Card"


const pinnedProyects = proyectsdata.filter(proyect => proyect.pin)


export const ProyectSection = () => {
  return (
    <section className=" mt-8">
      <h2>
      proyectos destacados
      </h2>
      <article>
        {/* {
          pinnedProyects.map(proyect => {
            return (
              <div key={proyect.titulo}>
                <h3>{proyect.titulo}</h3>
                <p>{proyect.descripcion}</p>
              </div>
            )
          })
        } */}
        {
          pinnedProyects.map(proyect => {
            return (
              <Card key={proyect.titulo} className={``}
                proyect = {proyect}
              />
                
              
            )
          })
        }

      </article>
    </section>
  )
}