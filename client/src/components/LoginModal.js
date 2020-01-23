import React, { useState } from 'react';
import {
  Button, NavLink,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, FormText, Input, Label
} from 'reactstrap';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import {loginUser} from '../actions/authActions'





const LoginModal = (props) => {

  const {buttonLabel, className, loginUser} = props;

  const [modal, setModal] = useState(false);

  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [msg, setMsg] = useState(null);
 
  const toggle = () => setModal(!modal);

 
  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);
 
  

  const submit = (e) => {
    
    e.preventDefault()

    const user = {
      email,
      password
    }
    loginUser(user);

    setModal(!modal);
  }

  return(
    <div>
      <NavLink onClick={toggle}>Login</NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
        <ModalBody>
          <Form>
            {/* Email Input */}
            <FormGroup>
              <Label for="email">Email: </Label>
              <Input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Enter Email" 
                onChange={onEmailChange}/>
            </FormGroup>
            {/* Password Input */}
            <FormGroup>
              <Label for="password">Password: </Label>
              <Input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter Password" 
                onChange={onPasswordChange}/>
            </FormGroup>
            
            
           
            
            {/* Add Button */}
          <Button color="primary" block>Sign up</Button>    
          </Form>
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </Modal>
    </div>
  )

}
LoginModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
  error: state.error
})

 export default connect(mapStateToProps, { loginUser })(LoginModal);