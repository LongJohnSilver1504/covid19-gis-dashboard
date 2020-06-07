import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../global/Theme/theme";

const AppWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

// eslint-disable-next-line react/display-name
export default ({ element }) => <AppWrapper>{element}</AppWrapper>;
