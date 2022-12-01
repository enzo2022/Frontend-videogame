import React from "react";
import { Link } from "react-router-dom";


import './Style/Card.css'

export default function Card({ name, image, genre, rating, id}){
    let Genres= genre?.map(el=> el.name )
  
    return(
        <div> <Link to={`videogame/${id}`} style={{ textDecoration: 'none' }}>
    <div className="card" >
    <p className="rating">{rating}</p>
    <img className ="img" src={image} alt ={name.toLowerCase()}></img>
    <div className="partedeabajo">
                    <p className="titulo">{name}</p>
                    <div className="genreBox">{Genres?.join("  |  ")}</div>
                    </div>
                    
           </div>
             
             
             
            </Link>                   


         
</div>
    )
}
{/* <div>
<div><h2>{name.toLowerCase()}</h2></div>
<div> <img src={image} className ="image" alt ="img not found" width="500px" heigth="550px"></img></div>
<div>{Genres?.join("  |  ")}</div>
<div><h3 >{rating}</h3></div>
</div> */}