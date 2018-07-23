import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {

  componentDidMount() {
    // this.props.fetchUsers
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    });
  }

  render() {
    return(
      <div>
        here's a list of our things:
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }

}

function mapStateToProps({ users }}) {
  return { users };
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);


// function mapStateToProps(state) {
//   return { users: state.users};
// }

// remember, just having the mapStateToProps doesn't actually do it,
// it's a insctruction, we want to have this.props.users avaliable.
// That's why we use connect, to actually map the state to props.
// Then for the second argument we have our action/s, and then we export
// our class component.
