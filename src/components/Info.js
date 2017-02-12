import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Row, Col } from 'react-bootstrap';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import 'bootstrap/dist/css/bootstrap.css';

@inject('characters') @observer
class Info extends Component {
    constructor (props){
        super (props);

        this.loadPerson = this.loadPerson.bind(this);
    }
    loadPerson (){
        this.props.characters.getSelectedPerson(this.props.params.id);
    }
    componentDidMount (){
        this.loadPerson();
    }
    render (){                   
        const { name, occupation, info, imageUrl } = this.props.characters.selectedPerson;
        
        return (            
            <div style={styles.container}>               
                <Col md={12}>
                    <Card zDepth={3}>
                        <CardHeader title={name} subtitle={occupation} />
                        <CardMedia 
                            overlay={<CardTitle title={name} subtitle={occupation} />}
                        >
                            <img src={imageUrl}/>
                        </CardMedia>
                        <CardText>
                            {info}
                        </CardText>
                    </Card>
                </Col>
            </div>
        );
    }    
}

const styles = {
    info: {
        height: 200,
        width: 400
    },   
    image: {
        height: 300,
        width: 400
    },
    container: {
        height: 140,
        width: 280
    } 
};

export default Info;