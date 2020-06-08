import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import "assets/stylesheets/application.scss";
import { makeStyles, Grid } from "@material-ui/core";
import SideBar from "./SideBar";

const useStyles = makeStyles({
  container: {
    height: 600,
  },
  content: {
    background: "#ffffff",
    borderRadius: 30,
    boxShadow: "25px 25px 50px 0 rgba(0, 0, 0, 0.16)",
    maxWidth: 1440,

    position: "absolute",
    left: "50%",
    top: "50%",

    transform: "translate(-50%, -50%)",
  },
  iconSection: {},
  secondarySection: {
    background: "#c2cde1",
    borderRadius: "30px  ",
  },
  mainSection: {
    background: "#f5f5f5",
    borderRadius: "30px ",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Gatsby Site</title>
      </Helmet>
      <Grid
        className={classes.container}
        direction="row"
        justify="center"
        alignItems="center"
        container
      >
        <Grid container item xs={12} className={classes.content}>
          <Grid
            className={classes.iconSection}
            item
            xs={2}
            md={1}
            lg={1}
            xl={1}
            container
          >
            <SideBar />
          </Grid>
          <Grid
            container
            className={classes.secondarySection}
            item
            xs={10}
            md={11}
            lg={11}
            xl={11}
          >
            <Grid xs={4} md={2} lg={2} xl={2} item>
              <p>Secondary</p>
            </Grid>
            <Grid
              className={classes.mainSection}
              xs={8}
              md={10}
              lg={10}
              xl={10}
              item
            >
              <main style={{ height: 600, overflow: "auto" }}>{children}</main>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string,
};

export default Layout;
