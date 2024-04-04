import React, { useState } from 'react'

const FormValidationddemo = () => {

    const [nameValue,setNameValue]=useState("");
    const[passwordValue,setPasswordValue]=useState("");
    const [errorAlert,setErrorAlert]=useState([]);

    function handleValues(event,type){
        if(type=="name"){
            let nameInput=event.target.value;
            setNameValue(nameInput);
            console.log("name",nameInput);
        }else if(type=="password"){
            let passwordInput=event.target.value;
            setPasswordValue(passwordInput);
        }
    }

    function validationHandler(event){
        event.preventDefault();
        let errorAlertMsg=[];
        if(nameValue==""){
        console.log(nameValue,"name");
        errorAlertMsg.push("name field should not be empty");
        }
        if(passwordValue==""){
        console.log(passwordValue,"passwrod");
        errorAlertMsg.push(" password should not be empty")
        }
        setErrorAlert(errorAlertMsg);
        console.log("gjo");
    }
    console.log("errorAlert",errorAlert);
  return (
    <div>
   
        <form 
      
        onSubmit={(event)=>validationHandler(event)}
        > 
        <div>
        <label htmlFor="name">Name</label>
        <input onChange={(event)=>handleValues(event,"name")} className='name' type="text" />
        </div>
      <div>
        <label htmlFor="password">Password</label>
        <input onChange={(event)=>handleValues(event,"password")} type="password" />
        </div>
        <button type="submit">Submit</button>
        </form>
        <div>
            {
                errorAlert.length>0 && errorAlert.map((item)=>(
                    <p>{item}</p>
                ))
            }
    </div>
    
    </div>
  )
}

export default FormValidationddemo
