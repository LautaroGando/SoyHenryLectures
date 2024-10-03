import Componente from "./Componente";

export default function Home() {

  return (

    <div className="w-full bg-blue-001 md:w-1/2 md:bg-green-001 lg:w-1/3 lg:bg-yellow-300">
      <h1 className="h-screen">¡Probando Tailwind CSS!</h1>
      <div>
        <Componente />
        <button className="btn-primary">Botón</button>
      </div>
    </div>

  )

};