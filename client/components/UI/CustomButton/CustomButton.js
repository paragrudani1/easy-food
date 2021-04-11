/** @format */

import React from "react";
import classes from "./CustomButton.module.css";
import { Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const CustomButton = ({
  disabled,
  children,
  className,
  onClick,
  style,
  type = "submit",
}) => {
  // We can inject some CSS into the DOM.
  return (
    <Button
      disabled={disabled}
      type={type}
      style={style}
      className={clsx(className, classes.UIButton)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
