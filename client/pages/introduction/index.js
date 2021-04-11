import React, { useEffect, useState } from "react";
import classes from "./Introduction.module.css";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Step1 from "../../components/Introduction/step1/Step1";
import Step2 from "../../components/Introduction/step2/Step2";
import Step3 from "../../components/Introduction/Step3/Step3";
import { useRouter } from "next/router";
import withPrivateRoute from "../../hoc/withPrivateRoute";

const Stepper = withStyles({
  root: {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: "auto",
    maxWidth: 400,
    width: "100%",
    "& .MuiMobileStepper-progress": {
      width: "100%",
    },
  },
})(MobileStepper);

const Introduction = () => {
  const router = useRouter();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep !== 2 ? prevActiveStep + 1 : 0
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep !== 0 ? prevActiveStep - 1 : 0
    );
  };

  const nextElements = () => {
    switch (activeStep) {
      case 0:
        return <Step1 handleNext={handleNext} handleBack={handleBack} />;
      case 1:
        return <Step2 handleNext={handleNext} handleBack={handleBack} />;
      case 2:
        return <Step3 handleNext={handleNext} handleBack={handleBack} />;
      default:
        break;
    }
  };

  useEffect(() => {
    router.beforePopState((e) => {
      handleBack();
    });
  }, []);

  return (
    <>
      {activeStep !== 2 && (
        <Stepper
          variant="progress"
          steps={3}
          position="static"
          activeStep={activeStep}
        />
      )}
      <section className={classes.Introduction}>{nextElements()}</section>
    </>
  );
};

export default withPrivateRoute(Introduction);
