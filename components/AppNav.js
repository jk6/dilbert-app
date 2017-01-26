import React from 'react';
import { Link, IndexLink } from 'react-router';

const AppNav = () => {
    return (
        <div>
            <IndexLink to="/" activeClassName="active">&nbsp;home&nbsp;&nbsp;</IndexLink>&nbsp;|&nbsp;           
            <Link to="/admin" activeClassName="active">&nbsp;admin&nbsp;&nbsp;</Link>  
        </div>
    )
}

export default AppNav;