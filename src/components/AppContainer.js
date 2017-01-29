import React from 'react';
import AppNav from './AppNav';

const AppContainer = (props) => {
    return (
        <div>
            <AppNav />            
            <hr />            
            {props.children}
        </div>
    )
}

export default AppContainer;