import React, { useState } from 'react';
import {
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, FormText, Input, Label
} from 'reactstrap';

import { connect } from 'react-redux';

import { addGarment } from '../actions/garmentActions'

const AddGarmentModal = (props) => {

  // const {buttonLabel, className} = props;

  const [modal, setModal] = useState(false);
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [picture, setPicture] = useState('');
  const [type, setType] = useState('');


  const toggle = () => setModal(!modal);

  const onBrandChange = e => setBrand(e.target.value);
  const onColorChange = e => setColor(e.target.value);
  const onPictureChange = e => setPicture(e.target.value);
  const onTypeChange = e => setType(e.target.value);

  const submit = () => {
    console.log('Submit')
  }

  return(
    <div>
      <Button color="primary" onClick={toggle} className="mb-3">Add Garment</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Garment</ModalHeader>
        <ModalBody>
          <Form onSubmit={submit}>
            {/* Type Input */}
            <FormGroup>
              <Label for="type">Select Type: </Label>
              <Input
                type="select"
                name="type"
                id="type"
                placeholder="Select Type of Garment"
                onChange={onTypeChange}>
                  <option>Top</option>
                  <option>Bottom</option>
                  <option>Full</option>
                </Input>
            </FormGroup>
            {/* Brand Input */}
            <FormGroup>
              <Label for="brand">Brand: </Label>
              <Input 
                type="text" 
                name="brand" 
                id="brand" 
                placeholder="Enter Brand" 
                onChange={onBrandChange}/>
            </FormGroup>
            {/* Color Input */}
            <FormGroup>
              <Label for="color">Color: </Label>
              <Input 
                type="color"
                name="color"
                id="color"
                onChange={onColorChange} />
            </FormGroup>
            {/* Picture Input */}
            <FormGroup>
              <Label for="picture">Picture</Label>
              <Input
                type="file"
                name="picture"
                id="picture"
              />
            </FormGroup>     
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Add to Closet</Button>
        </ModalFooter>
      </Modal>
    </div>
  )

}
 export default connect()(AddGarmentModal);