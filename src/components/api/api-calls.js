import {useState} from 'react'

function ApiCalls() {

    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
 

    const loginRequest =  async  (text) => { 
        setIsLoading(true);
        setError(null);
        try{
    const response = await fetch('https://houserentmanagementsystem-production.up.railway.app/api/login', {
            method: 'POST',
            body: JSON.stringify(text),
            headers:{
                'Content-Type': 'application/json'
            }
        });
       
        
        if(!response.ok) {
           throw new Error('Failed to submit');    
        } else{
         console.log('errrr')
         setIsSuccess('Logining...');
        }
        const data = await  response.json();
        console.log(data);
    } catch (err) {
        setError(err.message || 'Unsuccesfull. Try again!') 
        console.log(err) 
    }
    setIsLoading(false);
    }

    
    const sendRequest =  async  (text) => { 
        setIsLoading(true);
        setError(null);
        
        try{
    const response = await fetch('https://houserentmanagementsystem-production.up.railway.app/api/user/register', {
            method: 'POST',
            body: JSON.stringify(text),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        
        if(!response.ok) {
           throw new Error('Failed to submit');    
        } else{
            setIsSuccess('Submitted');
        }
        const data = await  response.json();
        console.log(data);
    } catch (err) {
        console.log(err)
        setError(err.message || 'Something went wrong') 
    }
    setIsLoading(false);
    }
   
  return {
    loginApiFunc: loginRequest,
    signupApiFunc: sendRequest,
    setErrorStateFunc: setError,
    setIsLoadingStateFunc: setIsLoading,
    setIsSuccessFunc: setIsSuccess,
    errorVar: error,
    isLoadingVar: isLoading,
    isSuccessVar: isSuccess

   }
  
}

export default ApiCalls;