///// using useState /////////////////

// import { useState } from "react";

// const useInput = (validateValue) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);

//   const valueIsValid = validateValue(enteredValue);
//   const hasError = !valueIsValid && isTouched;

//   const valueChangeHandler = (e) => {
//     setEnteredValue(e.target.value);
//   };

//   const inputBlurHandler = (e) => {
//     setIsTouched(true);
//   };

//   const reset = () => {
//     setEnteredValue('');
//     setIsTouched(false);
//   };

//   return {
//     value: enteredValue,
//     isValid : valueIsValid,
//     hasError,
//     valueChangeHandler,
//     inputBlurHandler,
//     reset,
//   };
// };

// export default useInput;

///////////// useReducer /////////////////////////////////////

import { useReducer } from "react";

const initialInput = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      isTouched: true,
      value: state.value,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return inputStateReducer;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInput);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({
      type: "INPUT",
      value: e.target.value,
    });
  };

  const inputBlurHandler = (e) => {
    dispatch({
      type: "BLUR",
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
