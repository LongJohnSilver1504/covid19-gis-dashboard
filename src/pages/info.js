import React, { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "components/Layout";
import Container from "components/Container";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { storageContext } from "../components/global/Provider";
import { getAllAccumulatedCases } from "../global/selectors";

const InfoPage = () => {
  const { cases } = useContext(storageContext);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    if (cases.length > 0) {
      const latestTotals = getAllAccumulatedCases(cases);
      setInfo(latestTotals);
    }
  }, [cases]);

  return (
    <Layout pageName="Info">
      <Helmet>
        <title>Info</title>
      </Helmet>
      <Container type="content">
        <Typography variant="h1">Info</Typography>
        <Grid container>
          <Grid item>
            <Typography variant="h5">Daily Section info</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              {`diagnosed: ${info.diagnosed} active: ${info.active} recovered: ${info.recovered} deceased: ${info.deceased} evacuated : ${info.evacuated}`}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">Cases</Typography>
          </Grid>
          <Grid item>
            {cases.map(({ id, day }) => (
              <Typography key={id} variant="h3">
                {" "}
                {`id: ${id} day: ${id} date: ${day.date} cases diagnosed : ${
                  day.diagnosed ? day.diagnosed.length : 0
                }  `}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default InfoPage;
