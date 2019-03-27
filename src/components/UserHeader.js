import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

  render() {
    const { user } = this.props;

    if (!user) {
      return null
    }

    return (
      <div className="header">{user.name}</div>
    );
  }
}

// referencing the reducers object via the state arg
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(
  mapStateToProps
)(UserHeader);