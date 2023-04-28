import React, {useState} from "react";
import Card from "./Card";
import classes from './Forms.module.css'
import ErrorModal from "./ErrorModal";


const Forms = (props) =>{
    const[user, setUser] = useState('')
    const[age,setAge] = useState('')
    const nameChangeHandler = (event) =>{
      setUser(event.target.value);
    }

    const ageChangeHandler = (event) =>{
        setAge(event.target.value);
    }

    const submitChangeHandler = (event) =>{
     
        event.preventDefault()
        if(user.trim().length===0   ||   age.trim().length===0){
            return  <ErrorModal  title='Errror'  message='Oops Error'/>
        }
        if(age<0){
            return
        }
        const data={
            name:user,
            age:age,
            id:Math.random().toString()
        }
       props.formData(data)

       setAge('')
       setUser('')
       
    }
    return(
        <div>
       
       <Card  className={classes.input}>
        <form className= 'form'  onSubmit ={submitChangeHandler} >  
        <label>UserName</label>
        <input  type ='input ' value = {user} onChange={nameChangeHandler}></input>
        <label>Age</label>
        <input  type ='input '  value = {age} onChange={ageChangeHandler}></input>
        <button >Add user</button>
        </form>
        </Card>
        </div>
        
       
    )
}

export default Forms;