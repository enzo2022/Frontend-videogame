import {Link} from 'react-router-dom'

import './Style/LandingPage.css'

export default function LandingPage(){
    return(
        <div id='lp-container'>
            <div> <h3>__Welcome__</h3> </div>
            
            <div> <h1>VideoGames</h1> </div>  
           <div> <Link to='/home'>
                <button>Start</button>
            </Link>  </div>
            
        </div>
        )
}