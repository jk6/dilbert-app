import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './components/AppContainer';
import Home from './components/Home';
import Info from './components/Info';
import Admin from './components/Admin';
import NotFound from './components/NotFound';
import appState from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

let mountNode = document.getElementById('content');
ReactDOM.render((
    <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
        <Router history={hashHistory}>
            <Route path="/" component={AppContainer}>
                <IndexRoute component={Home} store={appState} />
                <Route path="/info/:id" store={appState} component={Info} />                 
                <Route path="/admin" store={appState} component={Admin} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </MuiThemeProvider>), mountNode);

