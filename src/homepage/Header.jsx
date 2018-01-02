import React, { Component } from 'react';

import './styles.css';
import Parallax from 'react-simple-parallax';

export default class Header extends Component {
    render() {
        return (
            <header>
               <Parallax className="parallax" speedDivider="5">
               <div className="container">
                    <h1>Welcome to startup</h1>
                    <h3>Your Favourite Creative Agency Template</h3>
                    <a href="#" className="get-started-btn">
                        Get Started
                    </a>
               </div>
               </Parallax>
            </header>
        );
    }
}