
import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser =()=>{
    const [enteredUser, setEnteredUser] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const formHandler =(event)=>{
        event.preventDefault();
        if(enteredUser.trim().length===0 || enteredAge.trim().length===0){
            return;
        }
        if(+enteredAge <1 ){
            return;
        }
        console.log(enteredAge, enteredUser);
        setEnteredAge('');
        setEnteredUser('');
    }
    const userChangeHandler =(event)=>{
setEnteredUser(event.target.value);
    }
    const ageChangeHandler =(event)=>{
setEnteredAge(event.target.value);
    }
   
    return (
        <Card className={classes.input}>
      <form onSubmit={formHandler}>
        <label htmlFor="user">UserName</label>
        <input value={enteredUser} onChange={userChangeHandler}id="user" type="text"/>
        <label htmlFor="age">Age (in Years)</label>
        <input value={enteredAge} onChange={ageChangeHandler} id="age" type="text"/>
        <Button type="submit">Add User</Button>
      </form>
      
      </Card>
     
    )
}

export default AddUser;