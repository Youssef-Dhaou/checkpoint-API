import React from 'react'
import './User.css'

const User = ({el}) => {
  return (
<div className='cont'>

<div id="main-card">
  <div className="cover-photo" />
  <div className="photo">
    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
  </div>
  <div className="content">
    <h2 className="name">{el.name}</h2>
    <h3 className="fullstack">{el.username}<br />
      {el.phone}</h3>
    <h3 className="email">
      <p>email: {el.email} </p>
    </h3>
  </div>
  <div className="contact">
    <ul>
        <li style={{color: 'white'}}> Website: </li>
    </ul>
    <div> <p style={{color:"white"}}> {el.website}</p></div>
  </div>
  </div>

<div className="container">
  <div className="profile">
    <div className="image" />
    <h2>Address</h2>
    <p>city: {el.address.city}</p>
    <p>geo: {el.address.geo.lat +"_"} <span> {el.address.geo.lng}</span></p>
    <h3> street: {el.address.street}</h3>
    <h3> suite: {el.address.suite} </h3>
    <h3>zipcode: {el.address.zipcode} </h3>
  </div>
</div>
<div className="contain">
  <div className="profil">
    <div className="imag" />
    <h2>Company</h2>
    <h3> <strong> bs: </strong> <span style={{color:"gray", fontSize: 13}}> {el.company.bs} </span></h3>
    <h4> <strong> suite: </strong>  <span style={{color:"gray", fontSize: 13}}>{el.company.catchPhrase} </span></h4>
    <h3> <strong> zipcode: </strong>  <span style={{color:"gray", fontSize: 13}}>{el.company.name} </span> </h3>
  </div>
</div>

</div>



  )
}

export default User