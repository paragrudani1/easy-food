import classes from "./Signup.module.css";
import React from "react";
import Logo from "../../components/UI/Logo/Logo";
import { motion } from "framer-motion";
import CustomButton from "../../components/UI/CustomButton/CustomButton";
import Link from "next/link";
import { useRouter } from "next/router";

const Signup = (props) => {
  const history = useRouter();

  return (
    <section className={classes.Signup}>
      <motion.div
        initial={{ scale: 1.3, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        className={classes.Logo_Container}
      >
        <Logo />
      </motion.div>

      <CustomButton className={classes.GoogleSignIn}>
        Sign up with Google
      </CustomButton>
      <CustomButton
        className={classes.CustomButton}
        onClick={() => history.push("/signup/form")}
      >
        Sign up
      </CustomButton>
      <div className={classes.LoginLink}>
        <p>
          Already have an account? <Link href="/login">log in</Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
