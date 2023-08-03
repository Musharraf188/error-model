const AddUser =()=>{
    const formHandler =(event)=>{
        event.preventDefault();
    }
    return (
      <form onSubmit={formHandler}>
        <label htmlFor="user">UserName</label>
        <input id="user" type="text"/>
        <label htmlFor="age">Age (in Years)</label>
        <input id="age" type="text"/>
        <button type="submit">Add User</button>
      </form>
    )
}

export default AddUser;