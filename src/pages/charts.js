import React from "react";
import { Helmet } from "react-helmet";
import Layout from "components/Layout";
import Container from "components/Container";
import Typography from "@material-ui/core/Typography";

import MyResponsiveLine from '../charts/testChart';


const ChartsPage = () => {
  var data = require('../data/covid-data/test.json');

  return (
    <Layout pageName="Charts">
      <Helmet>
        <title>Charts</title>
      </Helmet>
      <Container type="content">
        <Typography variant="h1">Charts</Typography>
        <div style={{height: 450}}>
          <MyResponsiveLine data={data}/>
        </div>
      </Container>
    </Layout>
  );
};

export default ChartsPage;
