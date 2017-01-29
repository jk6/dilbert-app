import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link, hashHistory } from 'react-router';

@observer(['characters', 'admin'])
class Admin extends Component {
    constructor (props){
        super (props);

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);   
        this.handleEditState = this.handleEditState.bind(this); 
        //this.handleEditCharacter = this.handleEditCharacter.bind(this);   
    }
    handleChange (){
        let name = this.changedName.value;
        this.props.admin.changeName(name);
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
    componentDidMount (){
        //this.props.characters.getData();
    }
    render (){
        let displayData = this.props.characters.data.map((person, i) => {            
            return <li key={i}>
                        {person.name} | 
                        <img src={person.imageUrl} 
                            style={{height: 25, width: 25}} />                                                
                        {this.props.admin.edit &&<Link to={`/edit/${person.id}`}>edit</Link>}                            
                    </li>;
        });        
        return (
            <div>                
                <input type="text" placeholder="user..." ref={(user) => this.user = user} />
                <input type="text" placeholder="pass..." ref={(pass) => this.pass = pass} />
                <br />
                <button type="button" onClick={this.handleEditState}>
                    {this.props.admin.edit ? 
                        <span>Log Out</span>
                        :
                        <span>Log In</span>
                    }
                </button>
                
                <div>                    
                    <ul>
                        {displayData}
                    </ul>
                    <br />
                    <hr />
                    <h3>Add New Character</h3>
                    <br />                                                        
                    {/*<input type="text" disabled={!this.props.admin.edit} placeholder="change display name..." ref={(text) => this.changedName = text} />
                    <button disabled={!this.props.admin.edit} onClick={this.handleChange}>Click</button>*/}                                        
                    <input type="text" id="addName" disabled={!this.props.admin.edit} placeholder="enter new name..." ref={(text) => this.newName = text} /><br />
                    <input type="text" id="addOccupation" disabled={!this.props.admin.edit} placeholder="enter occupation..." ref={(text) => this.newOccupation = text} /><br />
                    <input type="text" id="addInfo" disabled={!this.props.admin.edit} placeholder="enter info..." ref={(text) => this.newInfo = text} /><br />
                    <input type="text" id="addImage" disabled={!this.props.admin.edit} placeholder="enter image url..." ref={(text) => this.newImage = text} /><br />
                    <br />
                    <button disabled={!this.props.admin.edit} onClick={this.handleAdd} id="add">Add</button>                    
                </div>
            </div>
         );
    }

}

export default Admin;