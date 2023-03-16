import { combineReducers } from "redux";
import { gameReducer } from "./GameReducer";
import { detailReducer } from "./DetailDataReducer";
const userReducer = (state,action)=>{

  switch (action.type) {
   
      
 
  
    default:
   return {...state}
  }
}

const rootReducer = combineReducers({
  game: gameReducer,
  user: userReducer,
  detailGame: detailReducer,
});
 export default rootReducer;