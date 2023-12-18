import React from "react";
import {useForm} from 'react-hook-form'
import classes from './RegisterForm.module.css';

export default function RegisterForm( props ) {

  let {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm()

  let submitForm = (data) => {
        console.log(data)
    }

    let formError = (error) => {
      console.log("Please, fix all errors!", error);
    }

  return (
    <form onSubmit={handleSubmit(submitForm, formError)} className={classes.contactsFormContainer}>
      <input {...register('login', {required: "Please, fill the login",
              minLength: {
                value: 3,
                message: 'Too short'
              },
              maxLength: {
                value: 12,
                message: 'Too long'
              }                     
                                })}
            placeholder="Login"   
            type="text" 
            className={classes.contactsInput} 
            />
      {errors.login && <p className={classes.errorField}>{errors.login.message}</p>}

      <input {...register('password', {required: "Please, fill the password"})} 
            placeholder="Password" 
            type="password" 
            className={classes.contactsInput} 
            />
      {errors.password && <p className={classes.errorField}>{errors.password.message}</p>}

      <input {...register('email', {required: "I do not believe that you have no email!",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Please enter value email'
              }
              })} 
            placeholder="Email" 
            type="email" 
            className={classes.contactsInput} 
            />
      {errors.email && <p className={classes.errorField}>{errors.email.message}</p>}

      <button className={classes.submitButton}>Enter</button>
    </form>
  );
}