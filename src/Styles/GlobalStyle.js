
import { createTheme } from "@mui/material/styles";

// mui theme settings
export const theme = createTheme({
  typography: {
    fontFamily:  "Montserrat",
    fontSize: 12,
    h1: {
      fontFamily: "Roboto Mono",
      fontSize: "2rem",
      fontWeight: "bold",
      fontspacing: "1",
      fontStyle: "italic",
      color: "#FF7676",
    },
    h2: {
      fontFamily:  "Montserrat",
      fontSize: 32,
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      fontWeight: "600",
      wordSpacing: "1",
    },
    h4: {
      fontFamily:  "Montserrat",
      fontSize: 20,
    },
    h5: {
      fontFamily:  "Montserrat",
      fontSize: 16,
    },
    h6: {
      fontFamily:  "Montserrat",
      fontSize: 14,
    },
  },
});
