import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
 
@observer(['characters'])
class Info extends Component {
    constructor (props){
        super (props);
    }
    render (){
        const infoStyle = {
            height: 200,
            width: 400
        };   
        const imageStyle = {
            height: 300,
            width: 400
        };
        const containerStyle = {
            height: 140,
            width: 280
        };    
        this.props.characters.getSelectedPerson(this.props.params.id);

        const { name, occupation, info, imageUrl } = this.props.characters.selectedPerson;
        
        return (
            <div style={containerStyle}>               
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
            </div>
        );
    }    
}

export default Info;