import {useRef} from 'react';
import styles from './Signup.module.css'
import useInput from '../hooks/use-input';
import ApiCalls from '../api/api-calls';
function Signup() {
    const {
    signupApiFunc:sendRequest,
    errorVar:error,
    isLoadingVar:isLoading,
    isSuccessVar:isSuccess,
    
    } = ApiCalls();
    const {
        value: enteredFirstname, 
        hasError: firstnameHasError,  
        valueChangeHandler: firstnameValueChanger, 
        inputBlurHandler: firstnameInputBlur,
        reset: resetFirstname
    } = useInput( value => value.trim() !== '');

    const {
        value: enteredLastname, 
        hasError: lastnameHasError,  
        valueChangeHandler: lastnameValueChanger, 
        inputBlurHandler: lastnameInputBlur,
        reset: resetLastname
    } = useInput( value => value.trim() !== '');

    const {
        value: enteredUsername, 
        hasError: usernameHasError,  
        valueChangeHandler: usernameValueChanger, 
        inputBlurHandler: usernameInputBlur,
        reset: resetUsername
    } = useInput( value => value.trim() !== '');

    const {
        value:enteredEmail,
        hasError:emailHasError,
         valueChangeHandler:emailChange,
         inputBlurHandler:emailInputBlur,
         reset: resetEmail
        } = useInput(value => value.includes('@'));


    const {
        value:enteredPassword,
        hasError:passwordHasError,
        valueChangeHandler:passwordChange,
        inputBlurHandler:passwordInputBlur,
        reset: resetPassword
          } = useInput(value => value.trim().length > 6);

            const {
                value:enteredConfirmPassword,
                hasError:confirmPasswordHasError,
                valueChangeHandler:confirmPasswordChange,
                inputBlurHandler: confirmPasswordInputBlur,
                reset: resetConfirmPassword
                } = useInput(value => value === enteredPassword);
 
   const signupType = useRef();
  

    const submitHandler = (event) => {
  event.preventDefault();
   
  const userDetails = {
    first_name: enteredFirstname,
    last_name: enteredLastname,
    email: enteredEmail,
    username: enteredUsername,
    password: enteredPassword,
    confirm_password: enteredConfirmPassword,
    signuptype: signupType.current.value
  }
    sendRequest(userDetails);
    resetFirstname();
    resetLastname();
    resetEmail();
    resetUsername();
   
    resetPassword();
    resetConfirmPassword();
    }
  return (
    <div  className={styles.form}>
    
    <form onSubmit={submitHandler}>
        <div className={styles.formControl}>
            <div className={styles.headings}>  
        <h1 className=' text-[#ff8800] text-xl font-semibold'>Begin a journey to your dream home today!</h1>
        </div>
        <div className={styles.firstlabel}><label>Name</label></div>
        <div className={styles.names}>  
            <div >
            <input type='text' className='text-black' value={enteredFirstname} onBlur={firstnameInputBlur} onChange={firstnameValueChanger} />
            <label>First Name</label>
            {firstnameHasError && <p className={styles.errorText}>field required</p>}
            </div>
        
           <div className={styles.inputs}>
            <input type='text' className='text-black' value={enteredLastname} onBlur={lastnameInputBlur} onChange={lastnameValueChanger} />
           <label>Last Name</label>
           {lastnameHasError && <p className={styles.errorText}>field required</p>}
            </div>

        </div>
        <div className={styles.firstlabel}>
            <label>E-mail</label>
            <input type='email' className='text-black' value={enteredEmail} onBlur={emailInputBlur} onChange={emailChange}/>
            {emailHasError && <p className={styles.errorText}>Please enter valid email</p>}
        </div>

        <div className={styles.firstlabel}>
            <label>Username</label>
            <input type='text' className='text-black' value={enteredUsername} onBlur={usernameInputBlur} onChange={usernameValueChanger}/>
            {usernameHasError && <p className={styles.errorText}>field required</p>}
        </div>

       

        <div className={styles.firstlabel}>
            <label>Password</label>
            <input type='text' className='text-black' value={enteredPassword} onBlur={passwordInputBlur} onChange={passwordChange}/>
            {passwordHasError && <p className={styles.errorText}>Password must be greater 6</p>}
        </div>

        <div className={styles.firstlabel}>
            <label>Confirm password</label>
            <input type='text' className='text-black' value={enteredConfirmPassword} onBlur={confirmPasswordInputBlur} onChange={confirmPasswordChange}/>
            {confirmPasswordHasError && <p className={styles.errorText}>Password must match</p>}
        </div>

        <div className=' mb-5 m-5 font-bold '>
            <label className=' font-bold'>SignUp Type</label>
        <select className='text-black' ref={signupType}>
            <option className='text-black'>House Owner</option>
            <option className='text-black'>Tenant</option>
        </select>
        </div>

        <button >{isLoading ? 'Please wait...' : 'Submit'}</button>
        {error && <p className={styles.errormsg}>{error}</p> }
        {isSuccess && <p className={styles.successmsg}>{isSuccess}</p>}
        </div>
    </form>
    </div>
    
  )
}

export default Signup;