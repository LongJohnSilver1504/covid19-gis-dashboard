import React from "react";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import { IconButton } from "@material-ui/core";

const GitHubLink = () => {
  return (
    <Link
      href="https://github.com/LongJohnSilver1504/covid19-gis-dashboard"
      component={IconButton}
    >
      <GitHubIcon style={{ fontSize: 32 }} />
    </Link>
  );
};

export default GitHubLink;
