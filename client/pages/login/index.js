import React, { useEffect, useState } from "react";
import { updateObject } from "../../Shared/Utility";
import classes from "./Login.module.css";
import InputField from "../../components/UI/InputField/InputField";
import CustomButton from "../../components/UI/CustomButton/CustomButton";
import { motion } from "framer-motion";
import { login } from "../../helpers/auth";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const { signIn, token, userId } = useAuth();

  const [userData, setUserData] = useState({
    email: {
      value: "",
      elementType: "email",
      required: true,
      placeholder: "Email",
      id: 1,
    },
    password: {
      value: "",
      elementType: "password",
      required: true,
      placeholder: "Password",
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
    <section className={classes.Login}>
      <div className={classes.Title}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          Welcome, <br />
          back!
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className={classes.Form_Section}
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            await signIn({
              email: userData.email.value,
              password: userData.email.value,
            });
          }}
        >
          {formElementsArray.map((formElement, i) => {
            return (
              <InputField
                key={i}
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
          <CustomButton className={classes.CustomButton}>Log in</CustomButton>
        </form>
      </motion.div>
    </section>
  );
};

export default Login;
