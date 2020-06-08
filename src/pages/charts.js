import React from "react";
import { Helmet } from "react-helmet";
import Layout from "components/Layout";
import Container from "components/Container";
import Typography from "@material-ui/core/Typography";

const ChartsPage = () => {
  return (
    <Layout pageName="Charts">
      <Helmet>
        <title>Charts</title>
      </Helmet>
      <Container type="content">
        <Typography variant="h1">Charts</Typography>
      </Container>
    </Layout>
  );
};

export default ChartsPage;
