import React, { useEffect, useState } from "react";
import classes from "./Step1.module.css";
import Sliders from "../../UI/Slider/Slider";
import { motion } from "framer-motion";
import CustomButton from "../../UI/CustomButton/CustomButton";
import { useRouter } from "next/router";

const Step1 = ({ handleNext, handleBack }) => {
  const router = useRouter();

  const [formValue, setFormValue] = useState([
    {
      question: "How good are your cooking skills?",
      level: ["Beginner", "Pro"],
      value: 40,
    },
    {
      question: "How healthy do you want to eat?",
      level: ["Junk", "Healthy"],
      value: 50,
    },
    {
      question: "For how many people are you cooking in average",
      level: ["just me", "whole family"],
      value: 0,
    },
  ]);

  useEffect(() => {
    router.push("#introduction");
  }, []);

  const handleSliderValue = (value, i) => {
    const formValueCopy = formValue;

    formValueCopy[i] = {
      ...formValueCopy[i],
      value: value,
    };

    setFormValue(formValueCopy);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    return handleNext();
  };

  return (
    <>
      <div className={classes.Title}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          A few <br /> questions!
        </motion.h1>
      </div>

      <div className={classes.Slider}>
        <form onSubmit={onFormSubmit}>
          {formValue &&
            formValue.map(({ question, value, level }, i) => {
              return (
                <Sliders
                  style={{ marginTop: "10%" }}
                  question={question}
                  levelLeft={level[0]}
                  levelRight={level[1]}
                  key={i}
                  defaultValue={value}
                  required={true}
                  onChange={(e, value) => {
                    handleSliderValue(value, i);
                  }}
                />
              );
            })}
          <CustomButton style={{ marginTop: "10%" }}>next</CustomButton>
        </form>
      </div>
    </>
  );
};

export default Step1;
