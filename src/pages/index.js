import GridElement from "@/components/GridElement";
import { db } from "@/data/db"

export default function Home({datos}) {

  return (
    <main>
      <div className="grid grid-cols-2 gap-y-2">
        {datos.map(dato => {
          return(
            <GridElement dato={dato}/>
          )
        })}
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const datos = db;
  return {
    props: {
      datos
    }
  }
}