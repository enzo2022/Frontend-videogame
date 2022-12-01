import axios from 'axios'
export function filterOrigen(payload) {
    return {
      type: "FILTER_BY_ORIGEN",
      payload,
    };
  }

export function getallVideogame(){
    return async function(dispatch){
const resu = await axios.get('https://backend-videogame-production-5c92.up.railway.app/videogame')
dispatch({
    type:"GET_ALL_VIDEOGAME",
    payload: resu.data
})
    }
}

export function getallGenres(){
    return async function(dispatch){
const resu = await axios.get('https://backend-videogame-production-5c92.up.railway.app/genres')
dispatch({
    type:"GET_ALL_GENRES",
    payload: resu.data
})
    }
}
export function getVideogameByName(name){try {
    return async function(dispatch){
        const resu =  await axios.get(`https://backend-videogame-production-5c92.up.railway.app/videogame?name=${name}`)
        dispatch({
            type: "GET_VIDEOGAME_BY_NAME",
            payload: resu.data
        })
    }
} catch (error) {
    console.log(error)
}
    
}
export function orderByName(payload){
    return{
        type: "ORDER_BY_NAME",
        payload: payload
    }
}
export function orderByRating(payload){
    return{
        type: "ORDER_BY_RATING",
        payload: payload
    }
}
export function filterVideoGameByGenres(payload){
    
    return{
        type:"FILTER_BY_GENRE",
        payload: payload,
        
    }
}

export function getVideogameById(id){
    return async function(dispatch){
        const resu =  await axios.get(`https://backend-videogame-production-5c92.up.railway.app/videogame/${id}`)
        dispatch({
            type: "GET_VIDEOGAME_BY_ID",
            payload: resu.data
        })
    }
}
export function pageDetail(data = {}) {
    return {
      type: "PAGE_DETAIL",
      payload: data
    };
  }
  export function createVideogame(payload){
    return async function(dispatch){
       const postVideogame = await axios.post('https://backend-videogame-production-5c92.up.railway.app/creategame',payload);
       return postVideogame;
    };
}
