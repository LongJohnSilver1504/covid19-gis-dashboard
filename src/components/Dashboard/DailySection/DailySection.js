import React, { useEffect, useContext, useState } from "react";
import { Card, Grid, Typography, Divider } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { storageContext } from "../../global/Provider";
import {
  getAllAccumulatedCases,
  getLatestCases,
} from ".../../global/selectors";

const DailySection = () => {
  const { cases } = useContext(storageContext);
  const [info, setInfo] = useState([]);

  const sections = [
    "Diagnosticados",
    "Activos",
    "Recuperados",
    "Fallecidos",
    "Evacuados",
  ];
  const isPositive = [false, true, true, false, true];

  useEffect(() => {
    if (cases.length > 0) {
      const latestTotals = Object.values(getAllAccumulatedCases(cases));
      const latestCases = Object.values(getLatestCases(cases));
      setInfo(
        sections.map((title, i) => ({
          title,
          quantity: latestTotals[i],
          delta: latestCases[i],
          isPositive: isPositive[i],
        }))
      );
    }
  }, [cases]);

  return <DailyResume info={info} skeletonItems={sections} />;
};

const DailyResume = ({ info = [], skeletonItems = [] }) => (
  <Card>
    <Grid container spacing={2} direction="row" justify="space-between">
      {info.length === 0
        ? skeletonItems.map((title) => (
            <Grid xs={5} md={4} lg={2} xl={2} key={title} item>
              <ResumeItemSkeleton />
            </Grid>
          ))
        : info.map(({ title, quantity, delta, isPositive }, i) => (
            <>
              <Grid xs={5} md={4} lg={2} xl={2} key={title} item>
                <ResumeItem
                  title={title}
                  quantity={quantity}
                  delta={delta}
                  isPositive={isPositive}
                />
              </Grid>
              {i !== info.length - 1 && (
                <Grid item>
                  <Divider
                    style={{ border: "1px solid #f9f9f9 ", height: "100%" }}
                    orientation="vertical"
                    flexItem
                  />
                </Grid>
              )}
            </>
          ))}
    </Grid>
  </Card>
);
const ResumeItem = ({ title, quantity, delta, isPositive }) => {
  const getTextColor = (isPositiveText, quantity) => {
    const blue = "#4b8fd5";
    const red = "#cc1e2b";
    if (isPositiveText) {
      return quantity >= 0 ? blue : red;
    }
    return quantity > 0 ? red : blue;
  };

  const getDeltaString = (delta) => `${delta >= 0 ? "+" : ""}${delta}`;

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="subtitle2">{title}</Typography>
      </Grid>
      <Grid item>
        <Typography color="textPrimary" variant="body1">
          {quantity}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          style={{ color: getTextColor(isPositive, delta) }}
          variant="body2"
        >
          {getDeltaString(delta)}
        </Typography>
      </Grid>
    </Grid>
  );
};

const ResumeItemSkeleton = () => (
  <div style={{ height: 74 }}>
    <Skeleton height={16} variant="text" />
    <Skeleton width={75} height={30} variant="text" />
    <Skeleton width={20} height={14} variant="text" />
  </div>
);

export default DailySection;
