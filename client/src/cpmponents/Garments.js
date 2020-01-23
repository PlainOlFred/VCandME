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



class Garments extends Component {

  componentDidMount() {
    this.props.getGarments();
  }

  onDeleteClick = (id) => {
    this.props.deleteGarment(id)
  }
  
  render() {
    const { garments } = this.props.garment;
    return (
      <Container>
        
        <ListGroup>
          {garments.map(({_id, brand, color, picture, type}) => (
            <ListGroupItem key={_id}>
              <div>
                  <Card body>
                    <CardTitle>{brand}, {type}</CardTitle>
                    <CardText>{color}{picture}</CardText> 
                    <Button
                      color="danger"
                      onClick ={this.onDeleteClick.bind(this, _id)}
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

// Garments.PropTypes = {
//   getGarments: PropTypes.func.isRequired,
//   garment: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => ({
  garment: state.garment
})

export default connect(mapStateToProps, { getGarments, deleteGarment })(Garments);
