import GridElement from "@/components/GridElement";
import { db } from "@/data/db"

export default function Home({datos}) {

  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 justify-items-center min-w-full gap-y-6">
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