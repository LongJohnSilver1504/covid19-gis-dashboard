import React from "react";
import { Helmet } from "react-helmet";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "components/Layout";
import Container from "components/Container";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ComponentPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Components</title>
      </Helmet>
      <Container type="content">
        <Typography variant="h1">Components</Typography>
        <p>Welcome to component page</p>
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Section title="Buttons">
              <Buttons />
            </Section>
          </Grid>
          <Grid item xs={12}>
            <Section title="Typographies">
              <Typographies />
            </Section>
          </Grid>
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

const Section = ({ title, children }) => (
  <ExpansionPanel>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography variant="h2">{title}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
  </ExpansionPanel>
);

const Buttons = () => {
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

const Typographies = () => (
  <>
    <Grid container>
      {[
        { variant: "h1", text: "h1.Day. Quicksand-60 " },
        { variant: "h2", text: "h2. Nunito-35-Regular" },
        { variant: "h3", text: "h3. Nunito-20-Regular " },
        { variant: "subtitle1", text: "Subtitle1 Nunito 18-Regular " },
        { variant: "subtitle2", text: "Subtitle2 Quicksand-16-Medium " },
        { variant: "body1", text: "Body1. Quicksand-30-Medium " },
        { variant: "body2", text: "Body2 Quicksand-14-Medium " },
        { variant: "button", text: "Body2 Nunito-14-regular " },
      ].map(({ variant, text }) => (
        <Grid item xs={12}>
          <Typography variant={variant}>{text}</Typography>
        </Grid>
      ))}
    </Grid>
  </>
);
export default ComponentPage;
