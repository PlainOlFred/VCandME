import React, { Component } from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Card, CardTitle, CardText, CardImg
} from 'reactstrap';
import uuid from 'uuid';


class Garments extends Component {
  state = {
    garments: [
      {id: uuid(), brand: "Polo", color: "green", picture: "image", type: "top"},
      {id: uuid(), brand: "Polo", color: "white", picture: "image", type: "top"},
      {id: uuid(), brand: "Hillfigure", color: "black", picture: "image", type: "bottom"},
      {id: uuid(), brand: "Guess", color: "black", picture: "image", type: "bottom"},
      {id: uuid(), brand: "Old Navy", color: "Blue", picture: "image", type: "top"}
    ]
  }

  render() {
    const { garments } = this.state;
    return (
      <Container>
        <Button
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const brand = prompt('Enter Brand');
            const color = prompt('Enter Color');
            const picture = 'image';
            const type= prompt('Enter type');

            if(type) {
              this.setState(state => ({
                garments: [...state.garments, {id: uuid(),brand, color, picture, type}]
              }))
            }
           
          }}
        >Add Garment</Button>
        <ListGroup>
          {garments.map(({id, brand, color, picture, type}) => (
            <ListGroupItem key={id}>
              <div>
                  <Card body>
                    <CardTitle>{brand}, {type}</CardTitle>
                    <CardText>{color}{picture}</CardText> 
                    <Button
                      color="danger"
                      onClick ={() => {
                        this.setState(state => ({
                          garments: state.garments.filter(garment => garment.id != id)
                        }))
                      }}
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

export default Garments;
