import { popularGamesURL } from "../ApiTest";
 import { newGamesURL } from "../ApiTest";
  import { upcomingGamesURL } from "../ApiTest";
import axios from "axios";
export const loadGames =()=> async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
    const newGameData = await axios.get(newGamesURL());
      const upcomingGameData = await axios.get(upcomingGamesURL());
  //  console.log(popularData);
  
   dispatch({
     type: "FETCH_GAMES",
     payload: {
       popular: popularData.data.results,
       newGame: newGameData.data.results,
       upcoming: upcomingGameData.data.results,
     },
   });
};