import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UserList from './Components/UserList/UserList';


function App() {
  const [listOfUsers, setListOfUsers] = useState([])
  const [loading, setLoading] = useState(true)
      const getUsers  = async()=> {
          try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setListOfUsers(response.data);
            console.log(response)
            setLoading(false)
          } catch (error) {
            console.error(error);
          }
        }
        useEffect(() => {
          getUsers()
        }, [])
        
  return (
    <div className="App">
     {loading? "Loading ..." :listOfUsers.map(el=> <UserList key={el.id} listOfUsers= {listOfUsers}/>)}
    </div>
  );
}

export default App;
