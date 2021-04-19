import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { CalendarTodayOutlined, Home } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "sticky",
    bottom: 0,
  },
});

const CustomBottomNavigationAction = withStyles({
  selected: {
    color: "#FF5200 !important",
  },
})(BottomNavigationAction);

const BottomNavigationContainer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <CustomBottomNavigationAction
        label="Weekly Plan"
        icon={<CalendarTodayOutlined />}
      />
      <CustomBottomNavigationAction label="Home" icon={<Home />} />
      <CustomBottomNavigationAction label="Wishlist" icon={<FavoriteIcon />} />
    </BottomNavigation>
  );
};

export default BottomNavigationContainer;
