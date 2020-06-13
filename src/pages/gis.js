import React from "react";
import { Helmet } from "react-helmet";
import Layout from "components/Layout";
import Container from "components/Container";
import Typography from "@material-ui/core/Typography";

const GisPage = () => {
  return (
    <Layout pageName="Gis">
      <Helmet>
        <title>Gis</title>
      </Helmet>
      <Container type="content">
        <Typography variant="h1">Gis</Typography>
      </Container>
    </Layout>
  );
};

export default GisPage;
