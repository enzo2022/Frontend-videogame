import React from "react";
import { useEffect,useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { Link } from "react-router-dom"

import { createVideogame, getallGenres } from "../actions";
import './Style/VideoGamecreate.css'
export default function VideogameCreate(){
    const dispatch = useDispatch();
    const allGenres = useSelector((state)=>state.genres)
   
    const[input , setInput]= useState({
        name:"",
        image:"",
        description:"",
        released:"",
        rating:"",
        Genres:[],
        platforms:[]
    });
   

    useEffect(()=>{
        dispatch(getallGenres());
    },[dispatch])

    const handleInputChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        })
    }
    let regexRating =/[+-]?([0-9]*[.])?\b[0-5]{1,1}\b/; //regex 1-5 decimal inclusive
    let expReg = /^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s0-9]+$/;
    const handSumit=(e)=>{
        e.preventDefault();
        if(!input.name){
            return alert('Enter game name');
        }else if(!expReg.test(input.name)){
            return alert('The name must only have letters or numbers')
        }else if(input.image.length > 0 && !input.image.match(/^(ftp|http|https):\/\/[^ "]+$/)){
            return alert("The image has to be a URL")
        }else if(!input.released){
            return alert('Enter a released date');
        }else if(!regexRating.test(input.rating)) {
            return alert('Enter a rating from 0 to 5 (Integer or Float)');
        }else if(!input.Genres.length){
            return alert('Select at least 1 genres');
        }else if(!input.platforms.length){
            return alert('Select at least 1 platform');
        }else if(!input.description.length){
            return alert('Enter description game');
        }
        dispatch(createVideogame(input))
        alert("VideoGame Created Successfully")
        setInput({
            name:"",
            image:"",
            description:"",
            released:"",
            rating:"",
            Genres:[],
            platforms:[]
        })}
        function handleSelectForGenres(e){
            setInput({
                ...input,
                Genres: [...new Set([...input.Genres, e.target.value])]
                
            })
            
        }
        function handleSelectForPlatform(e){
            setInput({
                ...input,
                platforms:[...new Set([...input.platforms, e.target.value])]
            })
        }
        
    let plataformas = ["Linux", "PC", "Xbox One", "PlayStation 2", "PlayStation 3", "PlayStation 4", "PlayStation 5", "Xbox 360", "macOS", "Nintendo Switch", "Xbox Series S/X", "Wii U", "Nintendo 3DS", "iOS", "PS Vita", "Android", "Xbox", "Web", "Dreamcast"]
       
    return(
        <div className="radial">
            <div className="createGame">
                <div className="container">
            
            <div id="buttonContainer"><Link to="/home"><button>Home</button></Link></div>
            <form onSubmit={handSumit} >
{/*-------------------------------------------------------------------------*/}
            <div className="contenedor">
               <label id='label'>Name</label>
                <input
                className="cajaTextoBarras"
                autoComplete="off"
                placeholder = "Name of your game"
                type="text"
                value= {input.name}
                name= "name"
                onChange={handleInputChange}
                /> 
            <div/>
           
             </div>

 {/*-------------------------------------------------------------------------*/}              
 <div className="contenedor" >
                            <label id='label'>Image: </label>
                            <input
                                className="cajaTextoBarras"
                                type="text" 
                                value={input.image}
                                name="image"
                                required=""
                                autoComplete="off"
                                placeholder="http://image_path.jpg"
                                onChange={e =>handleInputChange(e)}
                            />
                        </div>
{/*-------------------------------------------------------------------------*/}
<div className="contenedor" >
                            <label id='label'>Released: </label>
                            <input 
                            className="cajaTextoBarras"
                               
                                type="date" 
                                value={input.released}
                                name="released"
                                required=""
                                autoComplete="off"
                                onChange={e =>handleInputChange(e)}
                            />
                            
                        </div> 


{/*-------------------------------------------------------------------------*/}
<div className="contenedor" >
                            <label id='label' >Rating: </label>
                                <input
                                     className="cajaTextoBarras"
                                    type="text" 
                                    value={input.rating}
                                    name="rating"
                                    required=""
                                    autoComplete="off"
                                    placeholder="Rating"
                                    onChange={e =>handleInputChange(e)}
                                />
                               
                            </div>
      {/*----------------------------------------------------------------------------------------------*/}                      
                            <div className="contenedor">
                            <label id='label'>Description </label>
                            <textarea 
                               className="cajaTextoBarras"
                                type="text" 
                                value={input.description}
                                name="description"
                                required=""
                                autoComplete="off"
                                placeholder="Description"
                                onChange={e =>handleInputChange(e)}
                            />    
                        </div>
    {/*-----------------------------------Genres----------------------------------------------------------*/}
    <div>
                       <label id='label'>Genres:</label>
                        
                            
                            <div className="checkBoxes">
                                {allGenres.map((e, index) =>
                                    <div className="individualCheck" >
                                        <label>{e.name}</label><input className="box" type="checkbox" value={e.name} name="genres" onClick={handleSelectForGenres}></input>
                                    </div>
                                )}
                            </div>
                            
                       
                        </div>
 {/*-------------------------------------Platform----------------------------------------------------*/}
                        <div>
                        <label id='label'>Platforms:</label>
                        <div className="checkBoxes">
                            {plataformas.map((e, index) =>

                            
                                <div className="individualCheck">
                                    <label>{e}</label><input className="box" type="checkbox" value={e} name="platforms" onClick={handleSelectForPlatform}></input>
                                </div>
                            )}
                        </div>
                        </div>
<div id="buttonContainer">
                        <button  type="submit"><i ></i> Create</button>
                            
                       
</div>
            </form>
        </div>
        </div>
        </div>
    )
}