import classes from './AddUser.module.css';
import Card from '../UI/Card';
import { useState } from 'react';
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
        const userData={
            name:userInput,
            age:userAge
        }
        props.onSave={userData}
            }
    return (
    <Card className={classes.input} >
    <form onSubmit={SubmitHandler}>
        <label>UserName</label>
        <input onChange={inputHandler} type="text"/>
        <label>Age</label>
        <input onChange={ageHandler} type="number"/>
        <button type='submit'>Add User</button>
    </form>
    </Card>
    )
}

export default AddUser;