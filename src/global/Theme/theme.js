import { createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
const palette = {
  primary: {
    main: "#F3EBFA",
  },
  secondary: {
    lighter: "#F3EBFA",
    main: "#9846DD",
  },
  error: {
    lighter: "#FAECEB",
    main: "#F44336",
  },
  warning: {
    lighter: "#FAF2EB",
    main: "#FE8E26",
  },
  info: {
    lighter: "#EBF1FB",
    main: "#3577D4",
  },
  success: {
    lighter: "#EBFAEF",
    main: "#45AF5F",
  },
  neutral: {
    grey95: "#EBEEF2",
    grey90: "#D3DBE6",
    grey60: "#8D9299",
    grey36: "#434D5C",
    darkBlue: "#0F2440",
  },
  common: {
    black: "#1B1C1F",
  },
};

const typography = {
  h1: {
    fontFamily: "Quicksand",
    fontWeight: 400,
    fontSize: 70,
    lineHeight: 1.25,
    color: "#707070 ",
  },
  h2: {
    fontFamily: "nunito",
    fontWeight: 400,
    fontSize: 35,
    lineHeight: 1.2,
    color: "#707070",
  },
  h3: {
    fontFamily: "nunito",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 1.2,
    color: "#707070",
  },
  subtitle1: {
    fontFamily: "nunito",
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 1.17,
    color: "#707070",
  },
  subtitle2: {
    fontFamily: "Quicksand",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 1.25,
    color: "#707070",
  },
  body1: {
    fontFamily: "Quicksand",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 1.25,
    color: "#707070",
  },
  body2: {
    fontFamily: "Quicksand",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 1.25,
    color: "#707070",
  },
  button: {
    fontFamily: "nunito",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 1.25,
    color: "#707070",
  },
};

const theme = createMuiTheme({
  palette,
  typography,
});

export default theme;
