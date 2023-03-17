import { Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
 import { loadDetails } from "../Actions/detailAction";
 import { Link } from "react-router-dom";
const Game = ({ name, released, rating, backgroundimage, id}) => {

  const dispatch=useDispatch();
   const loadDetailAction=()=>{
       document.body.style.overflow = "hidden";
    dispatch(loadDetails(id));
  
   }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
     
      minHeight="60vh"
      boxShadow="0px 5px 30px rgba(0,0,10,0.2)"
      borderRadius="0.8rem"
      sx={{ cursor: "pointer" }}
      onClick={loadDetailAction}
    >
      <Box>
        <Typography variant="h3">{name}</Typography>
      </Box>
      <Box display="flex" flexDirection="column" width="100%">
        <Box>{released}</Box>
        <Box>{rating}</Box>
      </Box>
      <Box width="100%" height="100%">
        <Link to={`/game/${id}`} style={{ textDecoration: "none" }}>
          <img
            style={{
              display:"block",
               overflow:"hidden",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
            src={backgroundimage}
            alt="img"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Game;
