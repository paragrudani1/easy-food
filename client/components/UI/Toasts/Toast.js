import React from "react";
import { useEffect } from "react";
import { useToasts } from "react-toast-notifications";

export const CustomButtonToast = ({ message, appearance, show }) => {
  const { addToast } = useToasts();

  useEffect(() => {
    if (show !== false)
      addToast(message, {
        appearance: appearance,
        autoDismiss: true,
      });
  }, [show]);

  return null;
};
