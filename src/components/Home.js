import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { hashHistory } from 'react-router';
import { GridList, GridTile } from 'material-ui/GridList';
import { Grid, Row, Col } from 'react-bootstrap';
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
        const { data } = this.props.characters;
        return (
            <div>                      
                <div className="jumbotron container-fluid" style={styles.jumbotron}>
                    <div className="container">
                        <h1>Dilbert</h1>
                    </div>                
                </div>
                <Grid>       
                <div className="container">
                    <Col md={10}>
                        <GridList
                            cellHeight={180}                            
                            style={styles.gridList}
                        >
                        <Subheader>Characters</Subheader>
                        
                        {data.map((person, i) => {
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
                    </Col>
                </div> 
                </Grid>                           
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
        background: "url('images/dilbert-cover.jpg') no-repeat center center",
        backgroundSize: 'cover',
        minHeight: window.screen.availHeight * 0.45

    }
};

export default Home;