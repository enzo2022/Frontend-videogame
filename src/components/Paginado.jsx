import React from "react";
import './Style/paginado.css'
export default function Paginado({videoGamesPage, videogames, paginado,}){
    const pageNumbers = []

    for(let i = 0; i < Math.ceil(videogames/videoGamesPage); i++){
        pageNumbers.push(i+1)
    }


    return(
        <nav  key={Paginado}className="paginado">
        <ul > 
                           
            {pageNumbers && pageNumbers.map(number =>(
           <button  className="boton"  onClick={()=>paginado(number)}> {number}   </button> 
            ))} 
            
        </ul>

    </nav>
    )
}