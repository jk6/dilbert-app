import 'babel-polyfill';
import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './components/AppContainer';
import Home from './components/Home';
import Info from './components/Info';
import Admin from './components/Admin';
import EditCharacter from './components/EditCharacter';
import NotFound from './components/NotFound';
import stores from './stores/store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

let mountNode = document.getElementById('content');
ReactDOM.render(
    (<MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
        <Provider characters={stores.characters} admin={stores.admin}>
            <Router history={hashHistory}>
                <Route path="/" component={AppContainer}>
                    <IndexRoute component={Home} />
                    <Route path="/info/:id" component={Info} />                 
                    <Route path="/admin" component={Admin} />
                    <Route path="/edit/:id" component={EditCharacter} />
                    <Route path="*" component={NotFound} />
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>), mountNode);