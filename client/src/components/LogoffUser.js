import React, { useState, Fragment } from 'react';
import { NavLink } from 'reactstrap';

import { logoutUser } from '../actions/authActions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const LogoffUser = (props) => {
  const { logoutUser } = props;

  return (
    <Fragment>
      <NavLink onClick={logoutUser}>
        Log Off
      </NavLink>
    </Fragment>
  )
}

LogoffUser.propTypes = {
  logoutUser: PropTypes.func.isRequired
}

export default connect(null, { logoutUser })(LogoffUser);