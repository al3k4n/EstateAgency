import React from 'react'
import styles from './Login.module.css'
import useInput from '../hooks/use-input'
import ApiCalls from '../api/api-calls';
import { Link } from 'react-router-dom';

function Login() {
  const {loginApiFunc: loginUser, errorVar: error , isLoadingVar: isLoading, isSuccessVar: isSuccess} = ApiCalls();
  const {
    value:enteredEmail,
     valueChangeHandler:emailChange,
     inputBlurHandler:emailInputBlur,
     reset: resetEmail
    } = useInput(value => value.includes('@'));

    const {
      value:enteredPassword,
      valueChangeHandler:passwordChange,
      inputBlurHandler:passwordInputBlur,
      reset: resetPassword
        } = useInput(value => value.trim().length > 6);

  const loginHandler = (e) => {
    e.preventDefault();

    const userLogs = {
    email: enteredEmail,
    password: enteredPassword
    }
    console.log(userLogs)
  loginUser(userLogs);
  resetEmail();
  resetPassword();
  }
  return (
    <div className={styles.contained}>
        <h1 className='mt-10 text-xl font-bold'>Welcome</h1>
        <form onSubmit={loginHandler}>
    <div className={styles.formControl}>
     <label>E-mail</label>
      <input type='email' name='email' value={enteredEmail} onChange={emailChange} onBlur={emailInputBlur} />
    {}
      <label>Password</label>
      <input type='text' value={enteredPassword} onChange={passwordChange} onBlur={passwordInputBlur}/>
    </div>
    <div className={styles.actions}>
        <input type='checkbox'/>
        <span>Remember me</span>
    <p><a href='https://'>Forgot Password ?</a></p> 
    </div>
    
    <button>{ isLoading ? 'Logining...' : 'Login'}</button>
    {error && <p>{error}</p> }
    
        </form>

        <p>Don't have an account? <Link to='/signup'>Register</Link></p>
     
    </div>
  )
}

export default Login