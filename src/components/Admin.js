import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
import Avatar from 'material-ui/Avatar';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import 'bootstrap/dist/css/bootstrap.css';

@inject('characters', 'admin') @observer
class Admin extends Component {
    constructor (props){
        super (props);

        this.handleAdd = this.handleAdd.bind(this);    
        this.handleCheckAuth = this.handleCheckAuth.bind(this);                  
    }            
    handleAdd (){
        let id = this.props.characters.data.length + 1;
        let name = this.newName.value;
        let occupation = this.newOccupation.value;
        let imageUrl = this.newImage.value;        
        let info = this.newInfo.value;
        
        const newCharacter = {
            id,
            name,
            occupation,            
            imageUrl,
            info
        };

        this.props.characters.addCharacter(newCharacter);                
    }    
    handleTouchTap (id){
        hashHistory.push(`/edit/${id}`);
    }    
    handleCheckAuth (){
        this.props.admin.checkAuth();
    }        
    componentDidMount (){
        //this.props.characters.loadCharacters();
        this.handleCheckAuth();
    }
    render (){                
        let displayData = this.props.characters.data.map((person, i) => {            
            return (                                
                <ListItem key={i}>
                    <Avatar src={person.imageUrl} />                        
                    {!this.props.admin.edit ? 
                        <span>{person.name}</span>
                        : 
                        <span>{person.name} &nbsp;&nbsp;
                            <button 
                                className="btn btn-default pull-right" 
                                onClick={this.handleTouchTap.bind(this, person.id)}
                            >
                            edit
                            </button>
                        </span>
                    }                                         
                </ListItem>
            );
        });

        return (            
            <Grid>                              
                <Row>
                    <Col md={4}>                                                              
                        <Card>     
                            <CardTitle title="Characters" />   
                            <RaisedButton
                                label="Add Contact"
                                primary={true}
                                //disabled={!this.props.admin.edit} 
                                onClick={this.handleAdd}
                                style={{marginLeft: 12}}
                            />                                                                      
                            <List>
                                {displayData}
                            </List>                            
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Card>
                            <CardTitle title="New Character" />                                                                                                                                           
                            <input 
                                type="text"
                                className="form-control" 
                                id="addName" 
                                //disabled={!this.props.admin.edit} 
                                placeholder="enter new name..." 
                                ref={(text) => this.newName = text} 
                            /><br />
                            <input 
                                type="text"
                                className="form-control" 
                                id="addOccupation" 
                                //disabled={!this.props.admin.edit} 
                                placeholder="enter occupation..." 
                                ref={(text) => this.newOccupation = text} 
                            /><br />
                            <input 
                                type="text"
                                className="form-control" 
                                id="addImage" 
                                //disabled={!this.props.admin.edit} 
                                placeholder="enter image url..." 
                                ref={(text) => this.newImage = text} 
                            /><br />
                            <input type="text"
                            className="form-control" 
                                id="addInfo" 
                                rows="5" 
                                //disabled={!this.props.admin.edit} 
                                placeholder="enter info..." 
                                ref={(text) => this.newInfo = text} 
                            /><br />
                            <br />
                            <RaisedButton          
                                label="submit"                       
                                primary={true}
                                onClick={this.handleAdd}
                                style={{marginLeft: 12}} 
                                //disabled={!this.props.admin.edit}
                                id="add"
                            />              
                            <CardActions>
                                <FlatButton 
                                    label="cancel" 
                                    //disabled={!this.props.admin.edit}
                                    onClick={() => alert('write cancel function')} 
                                />
                            </CardActions>                                                             
                        </Card>
                    </Col>                                        
                </Row>
            </Grid>            
         );
    }
}

export default Admin;