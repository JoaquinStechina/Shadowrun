import { db } from "@/data/db"
import Image from "next/image";

export default function Home({datos}) {
  return (
    <main>
      {datos.map(dato=><div key={dato.id}><h2>{dato.nombre}</h2><Image height={100} width={100} src={dato.imagen}/></div>)}
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