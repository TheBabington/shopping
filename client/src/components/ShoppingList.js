import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import  { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            {id: uuid(), name: 'Eggs'},
            {id: uuid(), name: 'Steak'},
            {id: uuid(), name: 'Salami'},
            {id: uuid(), name: 'Perrier'}
        ]
    }
    render() {
        const { items } = this.state;
        return(
            <Container>
                <button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if(name) {
                            this.setState(state => ({
                                items:[...state.items, {id: uuid(), name: name}]
                            }))
                        }
                    }}
                
                >Add Item</button>
            </Container>
        )
    }
}

export default ShoppingList;