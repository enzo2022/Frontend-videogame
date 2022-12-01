import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogameById, pageDetail} from "../actions";
import { Link } from 'react-router-dom';
import './Style/delail.css'

export default function Detail(props){
const dispatch =useDispatch();
const id = props.match.params.id

useEffect(() => {
    dispatch(getVideogameById(id));
    return () => {
      dispatch(pageDetail());
    };
  }, [dispatch, id]);
  
  const infoVideoGame = useSelector((state)=> state.videogameId)
  
return(
<div >   
<div className="contenedor" >
                        <div className="imagen">
                            <img className="img" src={infoVideoGame.image} alt={infoVideoGame.name} />
                        </div>
                        <div className="gradiente">
                            <div className="titulo">
                                <h1>{infoVideoGame.name}</h1>
                               
                                <label className="date">Released At: {infoVideoGame.released}</label>
                                <div className="dateS"><label>Genres: {infoVideoGame.Genres?.join(" | ")} </label>
                                <div  
                                className="dateS"><label>Rating: {infoVideoGame.rating}</label>
                            </div>
                            <div className="platforms"><label>Platforms:  {infoVideoGame.platforms?.join(" | ") }</label>
                            </div>
                            </div>
                            <div className="description">
                                <p>{infoVideoGame.description}</p>
                            </div>
                           
                            <div className="buttonContainer">
                                <Link to="/home"><button className="button" ><i className="fa-solid fa-chevron-left"></i> <i className="fa-solid fa-house-chimney"></i> volver </button></Link>
                               
                            </div>
                        </div>




</div>

   
</div>                           

</div>
)
}
{/* <img src={infoVideoGame.image} alt={infoVideoGame.name}/>
<div><h1>{infoVideoGame.name}</h1></div>
<div><h3>{infoVideoGame.Genres?.join(" | ")}</h3></div>
   <div><h2>{infoVideoGame.released}</h2></div>
<div> <h3>{infoVideoGame.rating}</h3></div>
<div><h3>{infoVideoGame.platforms?.join(" | ") }</h3></div>
<div><h3>{infoVideoGame.description}</h3></div> */}