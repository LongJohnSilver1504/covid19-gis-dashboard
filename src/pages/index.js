import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";
import { Grid } from "@material-ui/core";
import DailySection from "../components/Dashboard/DailySection/DailySection";

const IndexPage = () => {
  return (
    <Layout pageName="Dashboards">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Container type="content">
        <Grid container>
          <Grid item xs={10}>
            <DailySection />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default IndexPage;
