import { createMuiTheme } from "@material-ui/core/styles";
import { MuiButton } from "./components/button";
import { typography } from "./components/typography";
import { palette } from "./palette";
import { MuiCard } from "./components/card";

const theme = createMuiTheme({
  palette,
  typography,
  overrides: {
    MuiButton,
    MuiCard,
  },
});

export default theme;
