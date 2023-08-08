import classes from './AddUser.module.css';
import Card from '../UI/Card';
import { useState, useRef } from 'react';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser =(props)=>{
    const [error, setError] = useState();
    const userName = useRef();
    const userAgee = useRef();

  
    const SubmitHandler =(event)=>{
        event.preventDefault();
     const   enteredName = userName.current.value
      const   enteredAge = userAgee.current.value
        if(enteredName.trim().length===0 || enteredAge.trim().length===0){
            setError({
                title:'Invalid name',
                message:'Please enter valid name'
            })
            return;
        }
        if(enteredAge < 1){
            setError({
                title:'Invalid age',
                message:'Please enter valid age (> 0).'
            })
            return;
        }
     props.onAdd( enteredName, enteredAge);
      
            }
            const errorHandler =()=>{
                setError(null)
            }
    return (
        <>
      {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>} 
    <Card className={classes.input} >
    <form onSubmit={SubmitHandler}>
        <label>UserName</label>
        <input ref={userName}  type="text"/>
        <label>Age</label>
        <input ref={userAgee} type="number"/>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </>
    )
}

export default AddUser;