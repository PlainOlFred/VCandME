import React, { useState } from 'react';
import {
  Button, NavLink,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, FormText, Input, Label
} from 'reactstrap';

import { connect } from 'react-redux';


import { addGarment } from '../actions/garmentActions';

import PropTypes from 'prop-types';
import {signUp} from '../actions/authActions'





const NewUserModal = (props) => {

  const {buttonLabel, className, signUp} = props;

  const [modal, setModal] = useState(false);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [msg, setMsg] = useState(null);
 
 


  const toggle = () => setModal(!modal);

  const onNameChange = e => setName(e.target.value);
  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);
 
  

  const submit = (e) => {
    
    e.preventDefault()
    const newUser = {
      name,
      email,
      password 
    }

    signUp(newUser);

    setModal(!modal);
  }

  return(
    <div>
      <NavLink onClick={toggle}>Sign Up</NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
        <ModalBody>
          <Form onSubmit={submit}>
            {/* Name Input */}
            <FormGroup>
              <Label for="name">Name: </Label>
              <Input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Enter Name" 
                onChange={onNameChange}/>
            </FormGroup>
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
NewUserModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  signUp: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
  error: state.error
})

 export default connect(mapStateToProps, { signUp })(NewUserModal);