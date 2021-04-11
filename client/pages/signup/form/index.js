import classes from "./SignupForm.module.css";
import React, { useState } from "react";
import InputField from "../../../components/UI/InputField/InputField";
import { updateObject } from "../../../Shared/Utility";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";
import { motion } from "framer-motion";
import { useAuth } from "../../../contexts/AuthContext";

const SignupForm = (props) => {
  const { signUp } = useAuth();

  const [userData, setUserData] = useState({
    fullName: {
      value: "",
      elementType: "text",
      required: true,
      placeholder: "Full Name",
      id: 1,
    },
    email: {
      value: "",
      elementType: "email",
      required: true,
      placeholder: "Email",
      id: 2,
    },
    password: {
      value: "",
      elementType: "password",
      required: true,
      placeholder: "Password",
      id: 2,
    },
    repeatPassword: {
      value: "",
      elementType: "password",
      required: true,
      placeholder: "Repeat Password",
      id: 2,
    },
  });

  const inputChangedHandler = (event, inputIdentifier) => {
    let updatedFormElement;

    updatedFormElement = updateObject(userData[inputIdentifier], {
      value: event.target.value,
    });

    const updatedOrderForm = updateObject(userData, {
      [inputIdentifier]: updatedFormElement,
    });

    setUserData(updatedOrderForm);
  };

  const formElementsArray = [];
  for (let key in userData) {
    formElementsArray.push({
      id: key,
      config: userData[key],
    });
  }

  return (
    <section className={classes.SignupForm}>
      <div className={classes.Title}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          Let's get <br />
          started
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className={classes.Form_Section}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();

            signUp({
              name: `${userData.fullName.value}`,
              email: userData.email.value,
              password: userData.password.value,
              repeatPassword: userData.repeatPassword.value,
            });
          }}
        >
          {formElementsArray.map((formElement, i) => {
            return (
              <InputField
                type={formElement.config.elementType}
                label={formElement.config.placeholder}
                color="secondary"
                fullWidth
                value={formElement.config.value}
                required={formElement.config.required}
                onChange={(e) => inputChangedHandler(e, formElement.id)}
              />
            );
          })}
          <CustomButton className={classes.CustomButton}>Sign up</CustomButton>
        </form>
      </motion.div>
    </section>
  );
};

export default SignupForm;
