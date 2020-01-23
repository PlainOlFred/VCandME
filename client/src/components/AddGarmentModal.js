import React, { useState } from 'react';
import {
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, FormText, Input, Label
} from 'reactstrap';

import { connect } from 'react-redux';

import { addGarment } from '../actions/garmentActions';



const AddGarmentModal = (props) => {

  const {buttonLabel, className, addGarment} = props;

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

  const submit = (e) => {
    e.preventDefault()
    const newGarment = {
      brand,
      type,
      color, 
      picture
    }

    
    addGarment(newGarment);

    setModal(!modal);
  }

  return(
    <div>
      <Button color="primary" onClick={toggle} className="mb-3">Add Garment</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Garment</ModalHeader>
        <ModalBody>
          <Form onSubmit={submit}>
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
            {/* Type Input */}
            <FormGroup>
              <Label for="type">Type: </Label>
              <Input
                type="select"
                name="type"
                id="type"
                placeholder="Select Color of Garment"
                onChange={onTypeChange}>
                  <option value="">Select type of Garment</option>
                  <option value="top">Top</option>
                  <option value="bottom">Bottom</option>
                  <option value="full">Full</option>

                </Input>
            </FormGroup>
            
            
            {/* Color Input */}
            <FormGroup>
              <Label for="color">Color: </Label>
              <Input
                type="select"
                name="color"
                id="color"
                placeholder="Select Color of Garment"
                onChange={onColorChange}>
                  <option value="">Select color of Garment</option>
                  <option>Black</option>
                  <option>White</option>
                  <option>Red</option>
                  <option>Organge</option>
                  <option>Yellow</option>
                  <option>Green</option>
                  <option>Blue</option>
                  <option>Purple</option>
                </Input>
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
            {/* Add Button */}
          <Button color="primary" block>Add to Closet</Button>    
          </Form>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  )

}



const mapStateToProps = (state) => ({
  garment: state.garment
})

 export default connect(mapStateToProps, { addGarment })(AddGarmentModal);