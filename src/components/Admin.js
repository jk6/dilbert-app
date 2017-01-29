import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import 'bootstrap/dist/css/bootstrap.css';

@observer(['characters', 'admin'])
class Admin extends Component {
    constructor (props){
        super (props);

        this.handleAdd = this.handleAdd.bind(this);        
        this.handleEditState = this.handleEditState.bind(this);         
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
        //document.getElementById('add').value = '';
        //document.getElementById('addText').focus();        
    }
    handleEditState (){        
        this.props.admin.checkCred(this.user.value, this.pass.value);
    }    
    handleTouchTap (id){
        hashHistory.push(`/edit/${id}`);
    }
    componentDidMount (){
        //this.props.characters.getData();
    }
    render (){
        {/*let displayData = this.props.characters.data.map((person, i) => {            
            return <li key={i}>
                        {person.name} | 
                        <img src={person.imageUrl} 
                            style={{height: 25, width: 25}} 
                        />&nbsp;                                                
                        {this.props.admin.edit &&<Link to={`/edit/${person.id}`}>edit</Link>}                            
                    </li>;

        });*/}
        let displayData = this.props.characters.data.map((person, i) => {
            return (                
                    <span key={i}>
                        <Chip
                            disabled={!this.props.admin.edit}
                            onTouchTap={this.handleTouchTap.bind(this, person.id)}
                            style={styles.chip}
                        >
                            <Avatar src={person.imageUrl} />
                            {!this.props.admin.edit ? 
                                <span>{person.name}</span>
                                : 
                                <span>{person.name} - edit</span>
                            }                                                
                        </Chip>
                    </span>                
            );
        });


        return (
            <div>     
                <Row>     
                    <Col md={8} mdOffset={2}>                      
                        <input type="text" placeholder="user..." ref={(user) => this.user = user} />
                        <input type="text" placeholder="pass..." ref={(pass) => this.pass = pass} />                        
                        <button type="button" className="btn btn-primary" onClick={this.handleEditState}>
                            {this.props.admin.edit ? 
                                <span>Log Out</span>
                                :
                                <span>Log In</span>
                            }
                        </button>
                    </Col>
                </Row>
                <Row>
                <Col md={6} mdOffset={2}>                                       
                    <ul>
                        {displayData}
                    </ul>
                    <br />
                    <hr />
                    <h3>Add New Character</h3>
                    <br />                                                                                                                    
                    <input type="text" id="addName" className="form form-control" disabled={!this.props.admin.edit} placeholder="enter new name..." ref={(text) => this.newName = text} /><br />
                    <input type="text" id="addOccupation" className="form form-control" disabled={!this.props.admin.edit} placeholder="enter occupation..." ref={(text) => this.newOccupation = text} /><br />
                    <input type="text" id="addInfo" className="form form-control" disabled={!this.props.admin.edit} placeholder="enter image url..." ref={(text) => this.newImage = text} /><br />
                    <textarea type="text" id="addImage" rows="5" className="form form-control" disabled={!this.props.admin.edit} placeholder="enter info..." ref={(text) => this.newInfo = text} /><br />
                    <br />
                    <button disabled={!this.props.admin.edit} className="btn btn-primary" onClick={this.handleAdd} id="add">Add</button>                    
                </Col>
                </Row>
            </div>
         );
    }

}

const styles = {
    chip: {
        margin: 4
    }
};

export default Admin;