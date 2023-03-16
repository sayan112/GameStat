const initState ={
    popular:[],
    newGame: [],
    upcoming:[],
}
export const gameReducer =(state=initState,action)=>{
    switch (action.type) {
      case "FETCH_GAMES":
        return {
          ...state,
          popular: action.payload.popular,
          newGame: action.payload.newGame,
          upcoming: action.payload.upcoming,
        };
      default:
        return {...state};
    }
 }


