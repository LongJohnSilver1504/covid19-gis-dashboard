import React from "react";
import { Grid } from "@material-ui/core";

import Logo from "./Logo";
import GitHubLink from "./GitHubLink";
import VerticalTabs from "./VerticalTabs";
const SideBar = () => {
  return (
    <Grid
      style={{ height: "100%", padding: "30px 0px " }}
      direction="column"
      justify="space-between"
      alignItems="center"
      container
    >
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <VerticalTabs />
      </Grid>
      <Grid item>
        <GitHubLink />
      </Grid>
    </Grid>
  );
};

export default SideBar;
