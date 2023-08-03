import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser =()=>{
    const formHandler =(event)=>{
        event.preventDefault();
    }
    return (
        <Card className={classes.input}>
      <form onSubmit={formHandler}>
        <label htmlFor="user">UserName</label>
        <input  id="user" type="text"/>
        <label htmlFor="age">Age (in Years)</label>
        <input id="age" type="text"/>
        <button type="submit">Add User</button>
      </form>
      </Card>
    )
}

export default AddUser;