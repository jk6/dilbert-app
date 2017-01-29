import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer(['characters'])
class EditCharacter extends Component {
    constructor (props){
        super (props);

        //this.handleChange = this.handleChange.bind(this);
        this.handleEditCharacter = this.handleEditCharacter.bind(this);
    }
    handleEditCharacter (){
        this.props.characters.newObj.id = this.props.params.id;
        this.props.characters.editCharacter();
    }
    handleChange (field, e){        
        this.props.characters.newObj[field] = e.target.value;
        alert(this.props.characters.newObj[field]);
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
                <h3>Editing {name}</h3> <img src={imageUrl} style={imageStyle} />                
                <br />
                <hr />
                <input type="text" defaultValue={name} onBlur={this.handleChange.bind(this, 'name')}  /><br />
                <input type="text" defaultValue={occupation} onBlur={this.handleChange.bind(this, 'occupation')} /><br />
                <input type="text" defaultValue={imageUrl} onBlur={this.handleChange.bind(this, 'imageUrl')} /><br />
                <input type="text" defaultValue={info} onBlur={this.handleChange.bind(this, 'info')} /><br />
                <br />
                <button onClick={this.handleEditCharacter}>Save changes</button>

            </div>
        );
    }
}

const imageStyle = {
    height: 140,
    width: 120
};

export default EditCharacter;