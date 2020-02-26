import React, { Component } from 'react'
import UserItem from '.'

export class User extends Component {
  render() {
    return (
      <div>
        {this.state.users.map(user =>(
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default User
