import classes from './AddUser.module.css';
import Card from '../UI/Card';
import { useState } from 'react';
import Button from '../UI/Button';
const AddUser =(props)=>{
    const [userInput, setUserInput] = useState('');
    const [userAge, setUserAge] = useState('');

    const inputHandler =(event)=>{
        setUserInput(event.target.value);
    }
    const ageHandler =(event) =>{
        setUserAge(event.target.value)
    }
    const SubmitHandler =(event)=>{
        event.preventDefault();
        if(userInput.trim().length===0 || userAge.trim().length===0){
            return;
        }
        if(userAge < 1){
            return;
        }
     props.onAdd(userInput, userAge);
        setUserInput('');
        setUserAge('');
            }
    return (
    <Card className={classes.input} >
    <form onSubmit={SubmitHandler}>
        <label>UserName</label>
        <input value={userInput} onChange={inputHandler} type="text"/>
        <label>Age</label>
        <input value={userAge} onChange={ageHandler} type="number"/>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    )
}

export default AddUser;