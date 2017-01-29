import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AppNav from './AppNav';
import 'bootstrap/dist/css/bootstrap.css';

const AppContainer = (props) => {
    return (
        <div>
            <Grid>
                <AppNav />            
                <hr />            
                {props.children}
            </Grid>
        </div>
    )
}

export default AppContainer;