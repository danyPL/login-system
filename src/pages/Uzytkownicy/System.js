

const System = (state,action) =>{
    switch(action.type){
        case "ADD":
        return {...state, movies: [...state.movies,action.movie]}
        default:
        return state;       
    }
}

export default System;