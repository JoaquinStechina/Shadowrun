export default function Home({datos}) {
  return (
    <main>
      {datos.map(dato=><h2 key={dato.id}>{dato.nombre}</h2>)}
    </main>
  )
}

export async function getStaticProps() {
  // Hacer una solicitud a la API
  const res = await fetch('http://localhost:3000/api/categories')
  const datos = await res.json()

  // Devolver los datos como props
  return {
    props: {
      datos
    }
  }
}