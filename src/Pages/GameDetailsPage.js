import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
 import apple from "../Images/apple.png";
 import gamePad from "../Images/Gamepad.png";
  import steme from "../Images/steme.png";
   import nintendo from "../Images/nintendo.png";
   import Playstation from "../Images/Playstation.jpg";
   import xbox  from "../Images/Xbox.png";
import {Link } from "react-router-dom";
const GameDetailsPage = () => {
   const getPlatforms = (platfrom)=>{
     switch (platfrom) {
       case "PlayStation 4":
         return Playstation;
       case "Xbox One":
         return xbox;
       case "Nintendo Switch":
         return nintendo;
       case "IOS":
         return apple;
       case "PC":
         return steme;
          default: 
           return gamePad;
     }
   

   }

  const { game , screen, isloading } = useSelector((state) => state.detailGame);
   const navigate = useNavigate();
    const exitDetailHandeler=(e)=>{
      const element = e.target;
       if (element.classList.contains("css-13wurxo")) {
         document.body.style.overflow = "auto";
         navigate("/");
       }
    }
  return (
    <>
      {!isloading && (
        <Box
          onClick={exitDetailHandeler}
          width="100%"
          minHeight="100vh"
          sx={{ overflowY: "scroll", background: "rgba(0,0,0,0.5)" }}
          position="fixed"
          top="0"
          left="0"
        >
          <Box
            width="70%"
            sx={{
              borderRadius: "1rem",
              padding: "2rem 5rem",
              background: "white",
            }}
            position="absolute"
            left="10%"
            color="black"
          >
            <Box textAlign="center">
              <Typography variant="h2"> {game.name}</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              marginTop="2rem"
            >
              <Box
                fontSize="1rem"
                sx={{ opacity: "0.9", textAlign: "center", color: "grey" }}
              >
                Rating : {game.rating}
              </Box>
              <Box display="flex" justifyContent="space-evenly">
                {game.metacritic_platforms.map((data) => (
                  <Box sx={{ background: "white" }}>
                    <Link to={data.url} style={{ textDecoration: "none" }}>
                      <img
                        alt="game img"
                        key={data.id}
                        src={getPlatforms(data.platform.name)}
                        style={{
                          objectFit: "cover",

                          marginLeft: "10px",
                          borderRadius: "50%",
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box marginTop="2rem">
              <img
                alt="game img"
                width="100%"
                style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                src={game.background_image}
              />
            </Box>
            <Box
              marginTop="2rem"
              fontSize="1rem"
              sx={{
                opacity: "0.98",
                wordSpacing: "4.6px",
                lineHeight: "22px",
                color: "#0f0f0f",
              }}
            >
              {game.description_raw}
            </Box>

            <Box marginTop="2rem">
              {screen.results.map((screen) => (
                <img
                  width="100%"
                  alt="game img"
                  src={screen.image}
                  key={screen.id}
                />
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default GameDetailsPage;
