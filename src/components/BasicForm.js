import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: LastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(value => value.trim() !== '');
  
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if(enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }

  const onSubmitChangeHandler = (e) => {
    
    e.preventDefault();

    if(!enteredNameIsValid && !enteredLastNameIsValid && !enteredEmailIsValid){
      return;
    }

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();

  }

  const changeClassName = nameHasError ? 'form-control invalid' : 'form-control';
  const changeLastClassName = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClassName = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmitChangeHandler}>
      <div className='control-group'>
        <div className={changeClassName}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
          {nameHasError && <p className="error-text">Enter a valid name</p>}
        </div>
        <div className={changeLastClassName}>
          <label htmlFor='name'>Second Name</label>
          <input type='text' id='name' value={enteredLastName} onChange={lastNameChangeHandler} onBlur={LastNameBlurHandler}/>
          {lastNameHasError && <p className="error-text">Enter a valid name</p>}
        </div>
      </div>
      <div className={emailClassName}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email' id='name' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
      
        {emailHasError && <p className="error-text">Enter a valid email address</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
