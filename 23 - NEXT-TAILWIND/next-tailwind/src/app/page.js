import CardWithCSS from "./CardWithCSS/CardWithCSS";
import CardWithTailwind from "./CardWithTailwind/CardWithTailwind";

export default function Home() {

  return (

    <div>
      <p className="text-lg text-blue-500">Este es un gran texto azul.</p>
      <div className="m-4 p-2">
        Contenido con margen y relleno
      </div>
      <button className="bg-blue-500 hover:bg-blue-700">
        Botón
      </button>
      <div className="w-full md:w-1/2">
        Este div ocupa x
      </div>
    </div>

  )

};

{/* 1 - <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <CardWithCSS />
      </div>
      <div>
        <CardWithTailwind />
      </div>
    </div> */}