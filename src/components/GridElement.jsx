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
          className="border-4 border-[#133e7c] shadow-[0_0_8px_#0abdc6] group rounded-lg w-[200px] h-[250px] relative" 
        >
          <div className="overflow-hidden saturate-50 transition-[opacity] duration-500 group-hover:opacity-80 w-full h-full bg-[size:150%]" 
                style={{backgroundImage:`url(${dato.imagen})`, backgroundPosition:`${backgroundPosition}`}}
          />
          <div className="absolute group-hover:opacity-100 group-hover:backdrop-blur-sm border-2 border-[#711c91] rounded-lg transition-[opacity backdrop-filter] duration-500 group-hover:animate-[pink-flicker_1.7s_cubic-bezier(.52,0,.54,1)_infinite] opacity-0 w-4/5 h-4/5 right-[10%] top-[10%] text-center">
            <h2 className="">{dato.nombre}</h2>
          </div>
        </div>
      )
}