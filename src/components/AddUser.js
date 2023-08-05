import classes from './AddUser.module.css';

const AddUser =()=>{
    return <form className={classes.input}>
        <label>UserName</label>
        <input type="text"/>
        <label>Age</label>
        <input type="text"/>
    </form>
}

export default AddUser;