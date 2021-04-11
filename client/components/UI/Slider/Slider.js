import { InputLabel, makeStyles, Slider, withStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import classes from "./Slider.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
}));

const radius = 11;

const PrettoSlider = withStyles({
  root: {
    color: "#FF5200",
    height: 8,
    padding: 0,
  },
  thumb: {
    height: 24,
    width: 24,
    background: "#FFFFFF",
    boxShadow: "1px 2px 15px rgba(0, 0, 0, 0.1)",
    marginTop: -5,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 15,
    borderRadius: radius,
    background:
      "linear-gradient(76.37deg, #FF5200 16.63%, rgba(255, 82, 0, 0) 207.69%), #F5F5F5;",
  },
  rail: {
    height: 15,
    borderRadius: radius,
    background: "#F5F5F5",
  },
})(Slider);

const Label = withStyles({
  root: {
    color: "black",
    fontFamily: "Proxima Nova",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 19,
    lineHeight: "22px",
  },
})(InputLabel);

const Sliders = ({
  style,
  className,
  question,
  levelLeft,
  levelRight,
  ...sliderValues
}) => {
  const styles = useStyles();

  return (
    <div style={style} className={clsx(styles.root, className)}>
      <div className={classes.Slider_Container}>
        <div className={classes.Label_Container}>
          <Label>{question}</Label>
        </div>
        <div className={classes.Status_Container}>
          <p>{levelLeft}</p>
          <p>{levelRight}</p>
        </div>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          {...sliderValues}
        />
      </div>
    </div>
  );
};

export default Sliders;
