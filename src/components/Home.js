import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { hashHistory } from 'react-router';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import 'bootstrap/dist/css/bootstrap.css';

@inject('characters') @observer
class Home extends Component {    
    viewInfo (id){
        hashHistory.push(`/info/${id}`);
    }        
    componentDidMount (){
        if (this.props.characters.data.length < 1){
            this.props.characters.loadCharacters();
        }
    }
    render () {                
        return (
            <div>             
                <div className="jumbotron container-fluid" style={styles.jumbotron}>
                    <div className="container">
                        <h1>Dilbert App</h1>
                    </div>                
                </div>
                <div className="container">
                    <GridList
                        cellHeight={180}
                        style={styles.gridList}
                    >
                    <Subheader>Characters</Subheader>
                    
                    {this.props.characters.data.map((person, i) => {
                        let id = person.id;
                        var boundClick = this.viewInfo.bind(this, id);
                        return (                            
                            <GridTile
                                key={i}
                                title={person.name}
                                subtitle={person.occupation}
                                onTouchTap={boundClick}
                                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                            >
                                <img src={person.imageUrl} />                        
                            </GridTile>
                        )
                    })}                
                    </GridList>
                </div>                            
            </div>            
        );
    }
}

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {        
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        cursor: 'pointer'
    },
    jumbotron: {
        background: "url('http://assets.gocomics.com/uploads/features/dc/widgets/link_w_title_large_dc_dc_readdilbertblog_740x440.jpg') no-repeat center center",
        backgroundSize: 'cover',
        minHeight: '300px'

    }
};

export default Home;