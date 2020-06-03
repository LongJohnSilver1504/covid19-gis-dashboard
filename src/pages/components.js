import React from "react";
import { Helmet } from "react-helmet";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "components/Layout";
import Container from "components/Container";

const ComponentPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Components</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Components</h1>
        <p>Welcome to component page</p>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ButtonSection />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const ButtonSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
};

export default ComponentPage;
