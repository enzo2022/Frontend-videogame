

const initialState={
allVideogames : [],
videogames: [],
genres: [],
videogameId : {},
rating: [],

    
}
console.log(initialState.allVideogames)
export default function rootReducer(state = initialState,action){
    switch(action.type){
       
        
        case 'GET_ALL_VIDEOGAME':
            return{
                ...state,
                allVideogames: action.payload,
                videogames: [...action.payload]
                
            }
        case 'GET_ALL_GENRES':
            return{
                ...state,
                genres: action.payload
            }
        case 'GET_VIDEOGAME_BY_NAME':
            return{
                ...state,
                videogames: action.payload
            }
            case  "ORDER_BY_NAME":
                const  videoGamesort = state.videogames
           
                let  ordenamiendo = action.payload === 'asc' || action.payload === "alpha" ?
                 videoGamesort.sort(function(a, b){
                     if (a.name > b.name){
                         return 1
                     }
                     if (a.name < b.name){
                         return -1
                     }
                     return 0;
                 }) :
                 videoGamesort.sort(function(a, b){
                     if (a.name < b.name){
                         return 1
                     }
                     if (a.name > b.name){
                         return -1
                     }
                     return 0
                 }) 
                 
                 return {
                     ...state, allVideogames: ordenamiendo
                 }
               
           
case "ORDER_BY_RATING":
            
            let sortByRating = action.payload === "Hight" 
            ? state.videogames.sort((a,b)=>{
                
                if(a.rating < b.rating){
                    return -1;
                }
                if(a.rating > b.rating){
                    return 1;
                }
                return 0;

            }): state.videogames.sort((a,b)=>{

                if(a.rating < b.rating){
                    return 1;
                }
                if(a.rating > b.rating){
                    return -1;
                }
                return 0;
            })
            return{
                ...state,
                allVideogames: sortByRating,
                
            }
      
            case "FILTER_BY_GENRE":
                const allVideoGames = state.allVideogames;
                const genreFiltered = action.payload === 'all' ? allVideoGames : allVideoGames.filter(e => e.genres.map(el=>el.name).includes(action.payload))
              
                return{
                    ...state,
                    videogames: genreFiltered,
                    
                }
          
               
                case "FILTER_BY_ORIGEN":
                        const allvideo = state.allVideogames;
                        const idAllvideo =
                          action.payload === "DataBase"
                            ?  allvideo.filter((e) => e.id.length > 4)
                            :  allvideo.filter((e) => e.id.toString().length < 5);
                        return {
                          ...state,
                          videogames: action.payload === "todos"?allvideo : idAllvideo,
                        };

                case "GET_VIDEOGAME_BY_ID":
                return{
                    ...state,
                   videogameId: action.payload
                }
                case "PAGE_DETAIL":
                    return {
                     ...state,
                    videogameId: action.payload
              };
          
        default: 
            return state
    }}