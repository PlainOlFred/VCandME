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
import { getGarments, deleteGarment } from '../actions/garmentActions'
import { tryOnGarment } from '../actions/outfitActions'



class Garments extends Component {

  componentDidMount() {
    this.props.getGarments();
  }

  onDeleteClick = (id) => {
    this.props.deleteGarment(id)
  }
  onTryOnClick = (garment) => {
   this.props.tryOnGarment(garment)
  }


  
  render() {
    const { garments } = this.props.garment;
    return (
      <Container>
        
        <ListGroup>
          {garments.map((garment) => (
            <ListGroupItem key={garment._id}>
              <div>
                  <Card body>
                    <CardTitle>{garment.brand}, {garment.type}</CardTitle>
                    <CardText>{garment.color}{garment.picture}</CardText> 
                    <Button
                      color="success"
                      onClick ={this.onTryOnClick.bind(this, garment)}
                    >Try On Garment
                    </Button> 
                    <Button
                      color="danger"
                      onClick ={this.onDeleteClick.bind(this, garment._id)}
                    >Delete Garment
                    </Button>    
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
  garment: state.garment
})

export default connect(mapStateToProps, { getGarments, deleteGarment, tryOnGarment })(Garments);
