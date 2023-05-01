import { useState } from "react";

export default function GridElement({dato}){
    const [backgroundPosition, setBackgroundPosition] = useState("0px 0px");

    const mouseMove = (e) =>{
      const x = e.clientX;
      const y = e.clientY;
      const newX = (x / window.innerWidth) * 100;
      const newY = (y / window.innerHeight) * 100;
      setBackgroundPosition(`${newX}% ${newY}%`);
    }

    return(
        <div key={dato.id} 
          onMouseMove={mouseMove}
          className="sepia hue-rotate-180 border-sky-800 border-4 w-[150px] h-[200px] bg-[size:150%]" 
          style={{backgroundImage:`url(${dato.imagen})`, backgroundPosition:`${backgroundPosition}`}}
        >
          <h2 className="text-center">{dato.nombre}</h2>
        </div>
      )
}