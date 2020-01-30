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



class Outfits extends Component {

  componentDidMount() {
    this.props.getOutfits();
  }

  onDeleteClick = (id) => {
    this.props.deleteOutfit(id)
  }

  
  
  render() {
    const { garments } = this.props.garment;
    return (
      <Container>
        
        <ListGroup>
          {garments.map(({_id, top, bottom}) => (
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
}



const mapStateToProps = (state) => ({
  outfit: state.outfit
})

export default connect(mapStateToProps, { getOutfits, deleteOutfit })(Outfits);
