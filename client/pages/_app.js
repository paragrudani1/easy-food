import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import theme from "../components/UI/Theme";
import "../styles/globals.css";
import AuthContext from "../contexts/AuthContext";
import { ToastMessageContext } from "../contexts/ToastMessageContext";

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        {/* <meta name="csrf-token" content={getCookie("csrf")} /> */}
      </Head>

      <ThemeProvider theme={theme}>
        <ThemeProviderStyled
          theme={{
            colors: {
              primary: "#0070f3",
            },
          }}
        >
          <ToastMessageContext>
            <AuthContext>
              <div className="App">
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                {/* <CssBaseline /> */}
                <Component {...pageProps} />
              </div>
            </AuthContext>
          </ToastMessageContext>
        </ThemeProviderStyled>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
