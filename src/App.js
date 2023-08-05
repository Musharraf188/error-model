import React from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const receivedUserData =(userData)=>{
    
  }
  return (
    <div>
<AddUser onSave={receivedUserData}/>
<UserList users={[]}/>
    </div>
  );
}

export default App;
