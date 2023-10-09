import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  const[userList,setUserList]=useState([])
  const addUserHandler=(userName,userAge)=>{
    setUserList((prevUsersList)=>{
      return[...prevUsersList,{name:userName,age:userAge,id:Math.random().toString}]
    });
  }
  return (
    // <>
    //   <AddUser onAddUser={addUserHandler}/>
    //   <UserList users={userList}/>
    // </>
    // or
    <React.Fragment>
    <AddUser onAddUser={addUserHandler}/>
    <UserList users={userList}/>
  </React.Fragment>
  );
}

export default App;
