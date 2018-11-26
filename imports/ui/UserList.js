import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// App component - represents the whole app
class UserList extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    let users = Meteor.users.find({})
    let display = users.map((aUser, key) => {
      // Send out components that show details of each file
      return <div key={key}>
        {aUser.username}
      </div>
    })

    return (
      <div className="container">
        <header>
          <h1>Users</h1>
        </header>
          {display}
        <ul>
        </ul>
      </div>
    );
  }
}

export default UserList;
