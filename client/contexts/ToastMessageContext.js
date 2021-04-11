import React, { useState, useContext } from "react";
import { ToastProvider } from "react-toast-notifications";
import { CustomButtonToast } from "../components/UI/Toasts/Toast";

export const ToastMessage = React.createContext();

export const useToastMessage = () => {
  return useContext(ToastMessage);
};

export const ToastMessageContext = ({ children }) => {
  const [toast, setToast] = useState({
    error: null,
    success: null,
    disabled: false,
  });

  const setErrorMessage = (value) => {
    setToast({
      error: null,
      success: null,
      disabled: true,
    });

    setToast({
      success: null,
      error: value,
      disabled: false,
    });
  };

  const setSuccessMessage = (value) => {
    setToast({
      error: null,
      success: null,
      disabled: true,
    });

    setToast({
      success: value,
      error: null,
      disabled: false,
    });
  };

  const setDisabled = () => {
    setToast({
      error: null,
      success: null,
      disabled: true,
    });
  };

  const value = {
    setSuccessMessage,
    setErrorMessage,
    isDisabled: toast.disabled,
    setDisabled,
  };
  return (
    <ToastMessage.Provider value={value}>
      {children}
      <ToastProvider>
        <CustomButtonToast
          show={toast.error !== null || toast.success !== null}
          appearance={
            toast.error ? "error" : toast.success ? "success" : "info"
          }
          message={toast.error || toast.success}
        />
      </ToastProvider>
    </ToastMessage.Provider>
  );
};
