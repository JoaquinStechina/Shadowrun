import { db } from "@/data/db"

export default function Home({datos}) {
  return (
    <main>
      {datos.map(dato=><h2 key={dato.id}>{dato.nombre}</h2>)}
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