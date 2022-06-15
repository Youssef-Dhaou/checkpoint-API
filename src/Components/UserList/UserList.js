import React from 'react'
import User from '../User/User'


const UserList = ({listOfUsers}) => {
    console.log(listOfUsers)

  return (
<div>
 {listOfUsers.map((el)=> <User key={el.id} el={el}/>)}
</div>

  )
}

export default UserList