import classes from "./InputField.module.css";
import { TextField, withStyles } from "@material-ui/core";
import React from "react";
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#000000;",
      opacity: 0.5,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#000000;",
      opacity: 0.3,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#000000;",
        opacity: 0.3,
      },
      "&:hover fieldset": {
        borderColor: "#000000;",
        opacity: 0.3,
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000000;",
        opacity: 0.3,
      },
    },
  },
})(TextField);

const InputField = ({ ...rest }) => {
  return <CssTextField className={classes.InputField} {...rest} />;
};

export default InputField;
