import React,{useState} from 'react';
const FormInput=(prob)=>{
    const{type,placeholder,label,value,handleChange}=prob;
    return(
        <>
            <label htmlFor={label} style={{color:"white"}}>{label}</label>
            <br/>
            <input type={type} placeholder={placeholder} value={value} name={label}  onChange={handleChange} style={{padding:"5px",width:"100%",borderRadius:"4px",boxSizing:"border-box"}} required/>
        </>
    )
}
function FormValidation(){
   
    const[values,setValues]=useState({
        name:"",
        email:"",
        password:""
    })
    const[errors,setErrors]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleValue=(e,key)=>{
        setValues((prev)=>({
            ...prev,[key]:e.target.value
        }))
        setErrors((prev)=>({
            ...prev,[key]:""
        }))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
            let errorarr={};
        if(!values.name){
            errorarr.name="please enter UserName"
        }
        if(values.password.length<6){
            errorarr.password="password  must be 6 characters"
        }

        if(!values.email.includes('@gmail.com')&&!values.email.includes('@gmail.co')){
            errorarr.email="Please enter the Email"
        }
      
        if(Object.keys(errorarr).length===0){
           
            alert("form Submitted")
          
        }
        else{
            console.log(Object.keys(errorarr).length)
            setErrors(errorarr);
        }
    }
   return( 
       <div style={{backgroundColor:'seagreen',width:'600px',height:"300px",display:"flex", justifyContent:"center",alignItems:"center",boxSizing:"border-box",}}>
        <form onSubmit={(e)=>handleSubmit(e)}  style={{boxSizing:"border-box"}}> 
            <div>
            
            <FormInput type="text"  placeholder="Enter Name" value={values.name} label="Name" handleChange={(e)=>handleValue(e,"name")}/>
            {errors.name && <p style={{color:"darkorange",margin:"0"}}>{errors.name}</p>}
            </div>
            <div>
            <FormInput type="email"  placeholder="Enter Email" value={values.email} label="Email" handleChange={(e)=>handleValue(e,"email")}/>
            {errors.email && <p style={{color:"darkorange",margin:"0"}}>{errors.email}</p>}
            </div>
            <div>
            <FormInput type="password"  placeholder="Enter Password" value={values.password} label="Password" handleChange={(e)=>handleValue(e,"password")}/>
            {errors.password && <p style={{color:"darkorange",margin:"0"}}>{errors.password}</p>}
            </div>
            <button type='submit' style={{padding:"5px",width:"100%",borderRadius:"4px",display:"flex",justifyContent:"center",marginTop:"10px"}}>Submit</button>
            
       </form>
       </div>
   
   )
}
export default FormValidation;