import { Link } from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux'
import { useEffect, useState } from "react"

import './Style/home.css'

import { getallGenres, getallVideogame, orderByName, orderByRating,filterOrigen, filterVideoGameByGenres,filterVideoGameFecha } from "../actions"
// import Card from "./Card"
import SearchBar from "./SearchBar"
import Paginado from "./Paginado"
import Card from "./Card"
import Loading from "./Loading"



export default function Home(Home){
const dispatch = useDispatch()
const infoVideoGame = useSelector((state)=> state.videogameId)
const videogames = useSelector((state)=> state.videogames)
const genres = useSelector((state)=>state.genres) 

const [orden, setOrden]= useState('')

/*------------------------------------------------------------------------------ */
    const [currentPage, setCurrentPage] = useState(1);
    const [videoGamesPage, setVideoGamesPage] = useState(15);


    const indexOfLastVideoGame = currentPage * videoGamesPage;
    const indexOfFirstVideoGame = indexOfLastVideoGame - videoGamesPage;
    const currentVideoGames = videogames.slice(indexOfFirstVideoGame,indexOfLastVideoGame)


    const paginado = (pageNumbers) =>{
        setCurrentPage(pageNumbers)
    }
/*------------------------------------------------------------------------------ */
useEffect(()=>{
    dispatch(getallVideogame())
    dispatch(getallGenres())
},[dispatch])

 /*--------------------------------------------------------------------------------------- */ 
function handleClick(e){
    e.preventDefault();
    dispatch(getallVideogame())
    dispatch(getallGenres())
    setCurrentPage(1)
}

/*--------------------------------------------------------------------------------------- */ 
function handleSort(e){
    e.preventDefault()
    dispatch(orderByName(e.target.value));
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
}

function handleSortByRating(e){
    dispatch(orderByRating(e.target.value));
    setOrden(`Ordenado ${e.target.value}`)
    setCurrentPage(1)
}


function handleFilterGenres(e){
        
    dispatch(filterVideoGameByGenres(e.target.value))
    setCurrentPage(1)
}



function handlefilterOrigen(e) {
    e.preventDefault();
    dispatch(filterOrigen(e.target.value));
    setCurrentPage(1);
  }


    return  (
<div key={Home} className="fondo">
    <div className="ordenador">
{/*--------------------------------------------------------------------------------------- */ } 
        <div> 
            <Link to='/'><button > Homepage </button></Link>
                
        </div>
      
 {/*--------------------------------------------------------------------------------------- */ }
 
                        
        <div>
            <Link to='/creategame'><button>Create Videogame</button></Link>
        </div>
        
{/*---------------------------------------------------------------------------------------- */}        
        <div>  
                <button  onClick={(e)=>{handleClick(e)}}>Recharge</button>
        </div>
{ /*--------------------------------------------------------------------------------------- */ }      

<div>
    <select onChange={(e) => {handleSort(e)}}>
                            <option value="alpha">Alphabetically Sort</option>
                            <option value="asc">Sort:  A - Z</option>
                            <option value="des">Sort:  Z - A</option>
                        </select>
                        </div>
{/*--------------------------------------------------------------------------------------- */} 

<select
          onChange={(e) => {
            handlefilterOrigen(e);
          }}
        >
          <option value="todos">
          Todos
          </option>
          <option value="Api">Api</option>
          <option value="DataBase">Base de Datos</option>
        </select>
<div>
<select  onChange={ e => handleSortByRating(e)}>
                            <option value="Rating">Rating</option>
                            <option value="Hight">Hight Rating</option>
                            <option value="Low">Low Rating</option>
                         
                        </select>
</div>
{/*-----------------------------------------------------------------------------------------*/}

<div>
<select onChange={(e)=>{handleFilterGenres(e)}}>
    <option value='all'>todas</option>
    {
                              genres?.map(d=>{
                                    return(
                                        <>
                                            <option value={d.name} >{d.name}</option>
                                        </>
                                    )
                                })
                            }
</select>
</div>

 
</div>


{/*------------------------------------------------------------------------------------------*/ }      
         <div>        <SearchBar/>        </div>
        
{ /*--------------------------------------------------------------------------------------- */ }
  <ul>                  
                <Paginado
                           
                            videoGamesPage={videoGamesPage}
                            videogames={videogames.length}
                            paginado={paginado}
                        />  
                         
                           
       </ul>
{ /*--------------------------------------------------------------------------------------- */ }

     <div className="cardsPaginate">
        
                {currentVideoGames.length < 1 ? (
        <Loading />
       ) : currentVideoGames.map((el)=>{
                    return(
                     
                        <Card
                        genres={el.Genres}
                        name={el.name}
                        image={el.image}
                        genre={el.genres}
                        rating={el.rating}
                        id={el.id}
                        key={el.id}
                        />
                        
                    )
                })}
        
      
        </div>
 {/*--------------------------------------------------------------------------------------- */ }      
 
                        
        
        
                   
</div>
    )
}