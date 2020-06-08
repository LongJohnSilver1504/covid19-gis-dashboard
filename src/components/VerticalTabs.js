import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Link from "@material-ui/core/Link";
import PublicIcon from "@material-ui/icons/Public";
import PieChartIcon from "@material-ui/icons/PieChart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CodeIcon from "@material-ui/icons/Code";

const useTabStyles = makeStyles({
  root: {
    minWidth: 115,
  },
});

const VerticalTabs = () => {
  const tabClasses = useTabStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab
          indicatorColor="primary"
          href="/"
          classes={tabClasses}
          component={Link}
          icon={<DashboardIcon style={{ fontSize: 32 }} />}
        />
        <Tab
          indicatorColor="primary"
          href="/gis"
          classes={tabClasses}
          component={Link}
          icon={<PublicIcon style={{ fontSize: 32 }} />}
        />
        <Tab
          indicatorColor="primary"
          href="/charts"
          classes={tabClasses}
          component={Link}
          icon={<PieChartIcon style={{ fontSize: 32 }} />}
        />
        <Tab
          href="/components"
          classes={tabClasses}
          component={Link}
          icon={<CodeIcon style={{ fontSize: 32 }} />}
        />
      </Tabs>
    </div>
  );
};

export default VerticalTabs;
