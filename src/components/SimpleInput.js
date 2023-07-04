import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnterName] = useState("");
  const [enteredNameTouch, setEnterNameTouch] = useState(false);

  const [enteredEmail, setEnterEmail] = useState("");
  const [enteredEmailTouch, setEnterEmailTouch] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouch;


  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const inputNameChangeHandler = (e) => {
    setEnterName(e.target.value);
  };

  const inputEmailChangeHandler = (e) => {
    setEnterEmail(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnterNameTouch(true);
  };
  const emailInputBlurHandler = (e) => {
    setEnterEmailTouch(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setEnterNameTouch(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    setEnterName("");
    setEnterNameTouch(false);

    setEnterEmail("");
    setEnterEmailTouch(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          value={enteredName}
          onChange={inputNameChangeHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Enter the valid name</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          onChange={inputEmailChangeHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Enter the valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
