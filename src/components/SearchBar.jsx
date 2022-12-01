import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { getVideogameByName } from '../actions';

import './Style/Search.css'
export default function SearchBar(){
    const dispatch = useDispatch();
    const [input,setInput] = useState('')

    function handleChange(e){
                e.preventDefault();
                 setInput(e.target.value)
             }
     function handleSubmit(e){
        e.preventDefault();
        dispatch(getVideogameByName(input))
        setInput('')
   }

return(
    <div >
        
        <input
        className='searchbar'
        type = "text"
        placeholder = "search...."
        onChange={(e)=> handleChange(e)}
        />
        <button className='searchButton' type='submit' onClick={(e)=>handleSubmit(e)}>Search</button>
    </div>
)
}