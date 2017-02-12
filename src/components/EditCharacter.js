import React, { Component } from 'react';
import { action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap/lib';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link, hashHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

@inject('characters') @observer
class EditCharacter extends Component {
    constructor (props){
        super (props);
        
        this.handleEditCharacter = this.handleEditCharacter.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    @action('handle edit actions')
    handleEditCharacter (){
        this.props.characters.newObj.id = this.props.params.id;
        this.props.characters.editCharacter();        
        hashHistory.push('/admin');
    }
    handleChange (field, e){        
        this.props.characters.newObj[field] = e.target.value;        
    }
    @action('handle cancel')
    handleCancel (e){
        e.preventDefault();
        
        this.props.characters.newObj = {};
        hashHistory.push('/admin');
    }
    componentDidMount (){
        //this.props.characters.loadCharacters();
    }
    render () {
        let idx = this.props.params.id - 1;
        const { id, name, occupation, imageUrl, info } = this.props.characters.data[idx];
        //const newObj = { id, name, occupation, imageUrl, info };
        return (
            <Grid>
                <Row>
                    <Col md={10} mdOffset={2}>
                        <Card>
                            <CardTitle title={name} />
                            <img src={imageUrl} className="img img-circle" style={styles.image} />                
                            <br />                        
                            <input type="text" className="form form-control" defaultValue={name} onBlur={this.handleChange.bind(this, 'name')}  /><br />
                            <input type="text" className="form form-control" defaultValue={occupation} onBlur={this.handleChange.bind(this, 'occupation')} /><br />
                            <input type="text" className="form form-control" defaultValue={imageUrl} onBlur={this.handleChange.bind(this, 'imageUrl')} /><br />
                            <textarea type="text" rows="5" className="form form-control" defaultValue={info} onBlur={this.handleChange.bind(this, 'info')} /><br />
                            <br />
                            <RaisedButton          
                                label="Save changes"                       
                                primary={true}
                                onClick={this.handleEditCharacter}
                                style={{marginLeft: 12}}                             
                            />                                                 
                            <CardActions>
                                <FlatButton label="cancel" onClick={this.handleCancel} />
                            </CardActions>
                        </Card>
                    </Col>
                </Row>
                <br />
                <br />
            </Grid>
        );
    }
}

const styles = {
    image: {
        height: 140,
        width: 140
    }    
};

export default EditCharacter;