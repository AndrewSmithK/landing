import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Button, DropdownButton, MenuItem, ButtonGroup} from 'react-bootstrap';
import Nav from "./homepage/Nav";
import Homepage from "./homepage/index";


class App extends Component {
  render() {
    return (
        <div className="App">
            <Nav />
            <Homepage />
        </div>
    );
  }
}

export default App;

{/*<div className="App">*/}
    {/*<div className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<h2>Welcome to React</h2>*/}
    {/*</div>*/}
    {/*<p className="App-intro">*/}
        {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
    {/*</p>*/}
    {/*<button className="btn btn-success">DropDown</button>*/}
    {/*<Button href="#" bsStyle="info">Link</Button>*/}
    {/*<ButtonGroup>*/}
        {/*<DropdownButton id="dropdown-btn-menu" bsStyle="success" title="Dropdown">*/}
            {/*<MenuItem key="1">Dropdown link</MenuItem>*/}
            {/*<MenuItem key="2">Dropdown link</MenuItem>*/}
        {/*</DropdownButton>*/}
        {/*<Button bsStyle="info">Middle</Button>*/}
        {/*<Button bsStyle="info">Right</Button>*/}
    {/*</ButtonGroup>*/}
    {/*<DropdownButton bsStyle="danger" title="Success">*/}
        {/*<MenuItem eventKey="1">Action</MenuItem>*/}
        {/*<MenuItem eventKey="2">Another action</MenuItem>*/}
        {/*<MenuItem eventKey="3" active>Active Item</MenuItem>*/}
        {/*<MenuItem divider />*/}
        {/*<MenuItem eventKey="4">Separated link</MenuItem>*/}
    {/*</DropdownButton>*/}
{/*</div>*/}