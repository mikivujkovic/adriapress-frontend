import { createMuiTheme } from "@material-ui/core/styles";
// import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ffffff" },
    secondary: { main: "#00adee" },
    background: { default: "#ffffff" }
  },
  status: {
    danger: "orange"
  }
});

export default theme;
