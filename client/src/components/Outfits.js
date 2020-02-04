import React, { Component } from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Card, CardTitle, CardText, CardImg
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getOutfits, deleteOutfit } from '../actions/outfitActions'



const Outfits =(props) => {
  const { outfits, currentTop, currentBottom } = props.outfit;

    return (
      <Container>
        <Card>
          <CardText>{currentTop.brand}</CardText>
        </Card>  
        <Card>
          <CardText>{currentBottom.brand}</CardText>
        </Card>
        <Button>Save This Outfit</Button>    
        <ListGroup>
          {outfits.map(({_id, top, bottom}) => (
            <ListGroupItem key={_id}>
              <div>
                  <Card body>
                    <CardTitle>{top}</CardTitle>
                    <CardText>{bottom}</CardText>    
                  </Card>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
      
    )
  
}



const mapStateToProps = (state) => ({
  outfit: state.outfit
})

export default connect(mapStateToProps, { getOutfits, deleteOutfit })(Outfits);
