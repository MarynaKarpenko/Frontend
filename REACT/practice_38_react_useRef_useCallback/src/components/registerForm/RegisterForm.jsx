import React, {useCallback, useEffect, useRef, useState} from "react";

import classes from './RegisterForm.module.css';
import AttemptsList from "./AttemptsList";

export default function RegisterForm( props ) {

  /* FOR TASK 8 */

  const [attempts, setAttempts] = useState( [] );

  const dropAttempt = (datetime) => {
    const filteredList = attempts.filter((attempt) => attempt.datetime !== datetime);
    setAttempts(filteredList);
  };

  const addAttempt = (login, pwd) => {
      const attempt = { login, pwd, datetime: new Date().getTime()};
      setAttempts( old => [...old, attempt] );
  }


 const enterBtnRef = useRef(null)
 const loginRef = useRef(null)
 const pwdRef = useRef(null)
 const emailRef = useRef(null)

  const clickCounter = useRef(0)

 const handleEnterBtnClick = (event) => {
  event.preventDefault()
  console.log(loginRef.current.value, pwdRef.current.value, emailRef.current.value);
  clickCounter.current += 1
  console.log(clickCounter.current);
  console.log(`Login input ${loginRef.current.offsetWidth}, ${loginRef.current.offsetHeight}`);
  addAttempt(loginRef.current.value, pwdRef.current.value, emailRef.current.value)
 }

//  useEffect(() => {
//   emailRef.current.focus()
//  }, [])

  return (
    <form className={classes.contactsFormContainer}>
      <input
        placeholder="Login"
        type="text"
        className={classes.contactsInput}
      />

      <input
        placeholder="Password"
        type="password"
        className={classes.contactsInput}
      />

      <input
        placeholder="Email"
        type="text"
        className={classes.contactsInput}
      />

      <button onClick={handleEnterBtnClick} 
      ref={enterBtnRef} 
      className={classes.submitButton}>Enter</button>

      {/* for task 8 */}
      {
        <AttemptsList attempts={attempts} dropAttempt={dropAttempt} />
      }
    </form>
  );
}