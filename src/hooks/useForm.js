import React, { useCallback } from "react";

function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [timeoutApp, setTimeoutApp] = React.useState(null);

  const handleChangeInput = (e) => {
    const input = e.target;
    const { name } = input;
    const { value } = input;

    const setErrorsCall = () => {
      setErrors({ ...errors, [name]: input.validationMessage });
      setIsValid(input.closest("form").checkValidity());
    };

    setErrors({ ...errors, [name]: "" });
    setValues({ ...values, [name]: value });
    clearTimeout(timeoutApp);
    setTimeoutApp(setTimeout(setErrorsCall, 500));
  };

  const handleChangeOptions = (e) => {
    const element = e.target;
    const input = element.parentElement.previousElementSibling;
    const { name } = input;

    const value = element.textContent;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest("form").checkValidity());
  };

  // мемоизация, не триггерит useEffect
  const resetForm = useCallback(() => {
    setValues({});
    setErrors({});
    setIsValid(false);
  }, [setValues, setErrors, setIsValid]);

  return {
    values,
    errors,
    isValid,
    handleChangeInput,
    handleChangeOptions,
    setValues,
    resetForm,
    setIsValid,
  };
}

export default useFormWithValidation;
