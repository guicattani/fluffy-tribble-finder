import React, { Component } from 'react'
import UserItem from '.'

export class User extends Component {
  state = {
    users: [
      {
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
      }
    ]
  }
  
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
