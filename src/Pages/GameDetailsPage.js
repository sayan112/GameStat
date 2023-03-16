import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
 
const GameDetailsPage = () => {
  const { game , screen, isloading } = useSelector((state) => state.detailGame);
  return (
    <>
      {!isloading && (
        <Box
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
                {game.platforms.map((data) => (
                  <Box>{data.platform.name}</Box>
                ))}
              </Box>
            </Box>
            <Box marginTop="2rem">
              <img
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
                <img width="100%" src={screen.image} key={screen.id} />
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default GameDetailsPage;
