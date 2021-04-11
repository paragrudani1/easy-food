import { Box } from "@material-ui/core";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CustomButton from "../../UI/CustomButton/CustomButton";
import classes from "./Step3.module.css";

const Step3 = ({ handleBack, handleNext }) => {
  const router = useRouter();

  useEffect(() => {
    router.push("#success");
  }, []);
  return (
    <>
      <div className={classes.Title}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          EVERYTHING READY
        </motion.h1>
      </div>
      <Box>
        <img src="/assets/success.svg" alt="success" />
      </Box>
      <CustomButton
        onClick={() => router.push("/dashboard")}
        style={{
          marginTop: "10%",
          position: "absolute",
          bottom: "30%",
          width: "80%",
        }}
      >
        Let's cook
      </CustomButton>
    </>
  );
};

export default Step3;
