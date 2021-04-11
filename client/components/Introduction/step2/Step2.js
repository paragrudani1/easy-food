import React, { useEffect, useState } from "react";
import classes from "./Step2.module.css";
import Sliders from "../../UI/Slider/Slider";
import { motion } from "framer-motion";
import CustomButton from "../../UI/CustomButton/CustomButton";
import { useRouter } from "next/router";
import {
  ListItemText,
  InputLabel,
  ListItem,
  TextField,
  Input,
  Button,
} from "@material-ui/core";
import clsx from "clsx";

const Step2 = ({ handleNext, handleBack }) => {
  const router = useRouter();

  const [activeTab, setActive] = useState(1);

  const onFormSubmit = (e) => {
    e.preventDefault();

    return handleNext();
  };

  useEffect(() => {
    router.push("#lastQuestion");
  }, []);

  return (
    <>
      <div className={classes.Title}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          One last <br /> questions!
        </motion.h1>
      </div>

      <div className={classes.QuestionContainer}>
        <div className={classes.Question_Label}>
          <InputLabel>
            Do you want to set a <br /> calories limit?
          </InputLabel>
        </div>
        <div className={classes.Question_Content}>
          <ListItem button className={classes.Box}>
            {["yes", "no"].map((text, i) => (
              <>
                <h1
                  onClick={() => setActive(i)}
                  key={i}
                  className={i === activeTab && classes.Active}
                >
                  {text}
                </h1>
              </>
            ))}
          </ListItem>
        </div>
        {activeTab === 0 && (
          <form>
            <div className={classes.calory_Input}>
              <InputLabel>Type in your limit</InputLabel>
              <div className={classes.Container}>
                <Input
                  required
                  className={classes.Input}
                  placeholder="e.g. 2400"
                  type="number"
                />
                <Button type="submit">calories</Button>
              </div>
            </div>
          </form>
        )}
      </div>
      <CustomButton
        onClick={() => handleNext()}
        style={{
          marginTop: "10%",
          position: "absolute",
          bottom: "25%",
          width: "80%",
        }}
      >
        ready to start
      </CustomButton>
    </>
  );
};

export default Step2;
