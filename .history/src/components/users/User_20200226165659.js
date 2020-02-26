import React, { Component } from 'react'
import UserItem from '.'

export class User extends Component {
  render() {
    return (
      <div>
        {this.state.users.map(user =>(
          <div key={user.id}>{user.login}</div>
        ))}
      </div>
    )
  }
}

export default User
