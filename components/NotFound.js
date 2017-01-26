import React from 'react';

const NotFound = ({ location }) => {    
    return (
        <div>
            <h2>{location.pathname} not found.</h2>
            <br />
            <img src="http://vignette1.wikia.nocookie.net/cartoons/images/1/1e/Phb.png/revision/latest?cb=20070706184119" alt="PHB" />
        </div>
    );
}

export default NotFound;