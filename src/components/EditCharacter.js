import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.css';

@observer(['characters'])
class EditCharacter extends Component {
    constructor (props){
        super (props);
        
        this.handleEditCharacter = this.handleEditCharacter.bind(this);
    }
    handleEditCharacter (){
        this.props.characters.newObj.id = this.props.params.id;
        this.props.characters.editCharacter();
    }
    handleChange (field, e){        
        this.props.characters.newObj[field] = e.target.value;        
    }
    componentDidMount (){
        this.props.characters.getData();
    }
    render () {
        let idx = this.props.params.id - 1;
        const { id, name, occupation, imageUrl, info } = this.props.characters.data[idx];
        //const newObj = { id, name, occupation, imageUrl, info };
        return (
            <div>
                <Col md={6} mdOffset={2}>
                    <h3>Editing {name}</h3> <img src={imageUrl} className="img img-circle" style={imageStyle} />                
                    <br />
                    <hr />
                    <input type="text" className="form form-control" defaultValue={name} onBlur={this.handleChange.bind(this, 'name')}  /><br />
                    <input type="text" className="form form-control" defaultValue={occupation} onBlur={this.handleChange.bind(this, 'occupation')} /><br />
                    <input type="text" className="form form-control" defaultValue={imageUrl} onBlur={this.handleChange.bind(this, 'imageUrl')} /><br />
                    <textarea type="text" rows="5" className="form form-control" defaultValue={info} onBlur={this.handleChange.bind(this, 'info')} /><br />
                    <br />
                    <button className="btn btn-primary" onClick={this.handleEditCharacter}>Save changes</button>
                </Col>
            </div>
        );
    }
}

const imageStyle = {
    height: 140,
    width: 140
};

export default EditCharacter;