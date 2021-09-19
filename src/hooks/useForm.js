import React, { useCallback } from "react";

function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const debounce = (fn, ms) => {
    let timeout;
    return function () {
      const fnCall = () => {
        fn.apply(this, arguments);
      };
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms);
    };
  };

  const handleChangeInput = (e) => {
    const input = e.target;
    const { name } = input;
    const { value } = input;

    // setErrors({ ...errors, [name]: "" });
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest("form").checkValidity());
  };

  // const handleChangeValid = (e) => {
  //   const input = e.target;
  //   const { name } = input;

  //   setErrors({ ...errors, [name]: input.validationMessage });
  //   setIsValid(input.closest("form").checkValidity());
  // };

  const handleChangeOptions = (e) => {
    const element = e.target;
    const input = element.parentElement.previousElementSibling;
    const { name } = input;

    const value = element.textContent;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest("form").checkValidity());
  };

  const handleChangeDebounce = debounce(handleChangeInput, 1300);

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
    handleChangeDebounce,
    handleChangeOptions,
    setValues,
    resetForm,
    setIsValid,
  };
}

export default useFormWithValidation;
