import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoCurrency";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#E2FF00",
    fontFamily: "Orbitron",
    fontWeight: "bold",
    fontSize: 18,
    cursor: "pointer",
    background: "-webkit-linear-gradient(45deg, #E2FF00  , #86FF7D 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
    shape: {
      borderRadius: 10,
    },
  });
  const { currency, setCurrency } = CryptoState();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              className={classes.title}
              style={{ fontFamily: "montserrat", padding: 20 }}
            >
              Crypto Connect
            </Typography>

            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 38,
                marginLeft: 15,
                color: "#E2FF00",
              }}
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
