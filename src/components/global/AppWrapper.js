import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import theme from "../../global/Theme/theme";

const AppWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ({ element }) => <AppWrapper>{element}</AppWrapper>;
