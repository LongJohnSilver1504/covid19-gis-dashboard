import React, { useRef } from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";
import { Typography } from "@material-ui/core";

const IndexPage = () => {
  return (
    <Layout pageName="Dashboards">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Container type="content">
        <Typography variant="h1">Dashboard</Typography>
      </Container>
    </Layout>
  );
};

export default IndexPage;
