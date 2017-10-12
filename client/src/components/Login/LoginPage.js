import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {Link} from "react-router-dom"
import SignUpForm from "./SignUpForm"
class LogIn extends Component {
  state = {
    users: []
  }

  componentWillMount() {
      this.getAllUsers()
  }
  getAllUsers = async () => {
    const res = await axios.get('/api/users')
    this.setState({users: res.data})
    
  }
  
  render () {
    return (
      <div>
        <h1>Log-In</h1>
        <h3>Please Select an Existing User</h3>
        {this.state.users.map(user => {
          return (<Link to={`/user/${user._id}`}><br />{user.userName}</Link>)
        })}
        
        <SignUpForm />
      </div>
    )
  }
}

export default LogIn