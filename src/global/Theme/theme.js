import { createMuiTheme } from "@material-ui/core/styles";
import { MuiButton } from "./components/button";
import { typography } from "./components/typography";
import { palette } from "./palette";

const theme = createMuiTheme({
  palette,
  typography,
  overrides: {
    MuiButton,
  },
});

export default theme;
