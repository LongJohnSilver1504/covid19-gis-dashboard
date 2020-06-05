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
    fontWeight: "normal",
    fontSize: 70,
    lineHeight: 1.25,
    color: "#707070 ",
  },
  h4: {
    fontFamily: "limelight",
    fontWeight: 500,
    fontSize: 35,
    lineHeight: 1.2,
    color: "#707070",
  },
  h5: {
    fontFamily: "Architects Daughter",
    fontWeight: 500,
    fontSize: 35,
    lineHeight: 1.2,
    color: "#707070",
  },
  h6: {
    fontFamily: "Lato",
    fontWeight: 500,
    fontSize: 35,
    lineHeight: 1.2,
    color: "#707070",
  },
  h3: {
    fontFamily: "nunito",
    fontWeight: 500,
    fontSize: 35,
    lineHeight: 1.2,
    color: "#707070",
  },
};

const theme = createMuiTheme({
  palette,
  typography,
});

export default theme;
