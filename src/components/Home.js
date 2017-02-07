import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { hashHistory } from 'react-router';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

@inject('characters') @observer
class Home extends Component {
    viewInfo (id){
        hashHistory.push(`/info/${id}`);
    }
    componentDidMount (){
        //this.props.characters.getData();
    }
    render () {        
        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                width: 600,
                height: 550,
                overflowY: 'auto',
                cursor: 'pointer'
            },
        };
        return (
            <div style={styles.root}>                               
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
        );
    }
}

export default Home;