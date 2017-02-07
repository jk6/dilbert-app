import React from 'react';
import DevTools from 'mobx-react-devtools';
import { Grid, Row, Col } from 'react-bootstrap';
import AppNav from './AppNav';
import 'bootstrap/dist/css/bootstrap.css';

const AppContainer = (props) => {
    return (
        <div>
            <DevTools />
            <Grid>
                <AppNav />            
                <hr />            
                {props.children}
            </Grid>
        </div>
    );
};

export default AppContainer;