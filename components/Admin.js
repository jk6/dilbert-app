import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer class Admin extends Component {
    constructor (props){
        super (props);

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);   
        this.handleEditState = this.handleEditState.bind(this);     
    }
    handleChange (){
        let name = this.changedName.value;
        this.props.route.store.changeName(name);
    }
    handleAdd (){
        this.props.route.store.addName(this.newStuff.value);
    }
    handleEditState (){        
        this.props.route.store.changeEditState();
    }
    render (){
        let displayData = this.props.route.store.data.map((person, i) => <li key={i}>{person.name}</li>);
        return (
            <div>
                <h3>{this.props.route.store.name}</h3>&nbsp;<button onClick={this.handleEditState}>edit</button>
                <br />                
                <input type="text" placeholder="change display name..." ref={(text) => this.changedName = text} />
                <button onClick={this.handleChange}>Click</button>
                <br />
                <br />
                <input type="text" placeholder="enter new name..." ref={(text) => this.newStuff = text} />
                <button onClick={this.handleAdd}>Click</button>
                <ul>
                    {displayData}
                </ul>
            </div>
         );
    }

}

export default Admin;