import React from 'react'

 const BaseUrl = "https://api.rawg.io/api/";

 const apiKey = "2d0abb007ef747da8560551c49c77db7";

 const Month = () => {
   let month = new Date().getMonth();
   month++;
   if (month < 9) {
     return `0${month}`;
   } else {
     return month;
   }
 };

 let currentDay = new Date().getDate();
 if (currentDay <= 9) {
   currentDay = `0${currentDay}`;
 }

 const currentYear = new Date().getFullYear();
 const currentMonth = Month();
 const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
 const lastYearDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
 const NextYearDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;

 const popularGames = `games?key=${apiKey}&dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=10`;
 const upcomingGames = `games?key=${apiKey}&dates=${currentDate},${NextYearDate}&ordering=-released&page_size=10`;
 const newGames =`games?key=${apiKey}&dates=${"2017-01-01"},${currentDate}&ordering=-rating&developers=109&page_size=10`;

 // const URL = 'https://api.rawg.io/api/games?key=2d0abb007ef747da8560551c49c77db7&dates=2019-09-01,2019-09-30&platforms=18,1,7'

 export const popularGamesURL = () => `${BaseUrl}${popularGames}`;
export const upcomingGamesURL = () => `${BaseUrl}${upcomingGames}`;
export const newGamesURL = () => `${BaseUrl}${newGames}`;

 
export const gameDetailsUrl = (game_id) =>
  `${BaseUrl}games/${game_id}?key=${apiKey}`;
  export const gameScreenShotsUrl = (game_id) =>
    `${BaseUrl}games/${game_id}/screenshots?key=${apiKey}`;


const ApiTest = () => {
  return (
    <div>ApiTest</div>
  )
}

export default ApiTest