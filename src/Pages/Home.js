import { Box, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../Actions/GameAction.js";
import Game from "../Componenet/Game.js";
 import {theme} from "../Styles/GlobalStyle.js"
 import {ThemeProvider} from "@mui/material";
 import GameDetailsPage from "./GameDetailsPage.js";
import {  useLocation } from "react-router";
const Home = () => {
   const location=useLocation();
     const pathid =location.pathname.split("/")[2];
      console.log(pathid);
  //Fetch games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // take all data back from the redux store

  const { newGame, upcoming, popular } = useSelector((state) => state.game);
  // console.log(newGame);
  // console.log(upcoming);
  // console.log(popular);

  return (
    <ThemeProvider theme={theme}>
   {  pathid && <GameDetailsPage />}
      <Box sx={{ boxSizing: "border-box", margin: "0", padding: "0" }}>
        <Box padding="0rem 5rem" textAlign="center">
          <Box padding="0rem 5rem" textAlign="center" marginBottom="30px">
            <Typography variant="h1">Welcome to GameStats 🎮</Typography>
          </Box>
          <Box padding="0rem 5rem" textAlign="center" marginBottom="30px">
            <Typography variant="h2">New Games</Typography>
          </Box>
          <Box
            minHeight="45vh"
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            columnGap="3rem"
            rowGap="5rem"
          >
            {newGame.map((game) => {
              return (
                <Game
                  name={game.name}
                  rating={game.rating}
                  released={game.released}
                  backgroundimage={game.background_image}
                  id={game.id}
                  key={game.id}
                />
              );
            })}
          </Box>
          <Box padding="0rem 5rem" textAlign="center" marginBottom="30px">
            <Typography variant="h2">Upcoming</Typography>
          </Box>
          <Box
            minHeight="80vh"
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            columnGap="3rem"
            rowGap="5rem"
          >
            {upcoming.map((game) => {
              return (
                <Game
                  name={game.name}
                  rating={game.rating}
                  released={game.released}
                  backgroundimage={game.background_image}
                  id={game.id}
                  key={game.id}
                />
              );
            })}
          </Box>
          <Box padding="0rem 5rem" textAlign="center" marginBottom="30px">
            <Typography variant="h2">Popular</Typography>
          </Box>
          <Box
            minHeight="80vh"
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            columnGap="3rem"
            rowGap="5rem"
          >
            {popular.map((game) => {
              return (
                <Game
                  name={game.name}
                  rating={game.rating}
                  released={game.released}
                  backgroundimage={game.background_image}
                  id={game.id}
                  key={game.id}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
  
};
export default Home;
