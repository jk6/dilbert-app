import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import { Link, IndexLink } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

@inject('admin') @observer
class AppNav extends Component {
    constructor (props){
        super (props);

        this.handleEditState = this.handleEditState.bind(this)
    }
    @action
    handleEditState (){        
        this.props.admin.checkCred(this.user.value, this.pass.value);
        this.props.admin.checkAuth();
    }
    render (){
        const { edit } = this.props.admin;
        return (
            <div>
                <IndexLink to="/" activeClassName="active">&nbsp;home&nbsp;&nbsp;</IndexLink>&nbsp;|&nbsp;           
                {edit &&<Link to="/admin" activeClassName="active">&nbsp;admin&nbsp;&nbsp;</Link>}
                <input type="text" placeholder="user..." ref={(user) => this.user = user} />
                <input type="text" placeholder="pass..." ref={(pass) => this.pass = pass} />   
                <RaisedButton          
                    label={edit ? 'Log out' : 'Log in'}                       
                    primary={true}
                    onClick={this.handleEditState}
                    style={{marginLeft: 12}}                             
                />
            </div>
        );
    }    
}

export default AppNav;