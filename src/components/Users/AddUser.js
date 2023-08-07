import classes from './AddUser.module.css';
import Card from '../UI/Card';
import { useState } from 'react';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser =(props)=>{
    const [userInput, setUserInput] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();

    const inputHandler =(event)=>{
        setUserInput(event.target.value);
    }
    const ageHandler =(event) =>{
        setUserAge(event.target.value)
    }
    const SubmitHandler =(event)=>{
        event.preventDefault();
        if(userInput.trim().length===0 || userAge.trim().length===0){
            setError({
                title:'Invalid name',
                message:'Please enter valid name'
            })
            return;
        }
        if(userAge < 1){
            setError({
                title:'Invalid age',
                message:'Please enter valid age (> 0).'
            })
            return;
        }
     props.onAdd(userInput, userAge);
        setUserInput('');
        setUserAge('');
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
        <input value={userInput} onChange={inputHandler} type="text"/>
        <label>Age</label>
        <input value={userAge} onChange={ageHandler} type="number"/>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </>
    )
}

export default AddUser;