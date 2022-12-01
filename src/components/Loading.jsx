import React from "react";
import loading from "./Style/pacman.gif"
import "./Style/loading.css"

export default function Loading(){
    return(
        <div className="loading">
            <img className="gifLoad" src={loading} alt= "loading" margin-top="100%" width="100%" height="100%"/>
        </div>

    )
}