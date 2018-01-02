import React, { Component } from 'react';
import scrollToElement  from "scroll-to-element";

import './styles.css';

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            small: false
        }
    }

    navSizeChanger() {
        const scrollbox = window;

        scrollbox ? scrollbox.onscroll = () => {
            var scrolled = scrollbox.pageYOffset || scrollbox.scrollTop;

            if(scrolled > 135){
                this.setState({small: true});
                console.log(1);
            } else{
                this.setState({small: false});
                console.log(2);
            }
        }

            : null
    }

    componentDidMount() {
        this.navSizeChanger();
    }

    onScroll(element) {
        scrollToElement(element, {
            offset: 1,
            ease: 'outSine',
            duration: 500
        });
    }

    render () {
        return (
            <nav className={this.state.small ? "whiteBg smallHeight" : ""}>
                <div className="container">
                    <div className="nav-container clearfix ">
                        <div className={`logo ${this.state.small ? 'textRed smallLineHeight' : ''}`}>
                            StartUp
                        </div>
                        <div className="name">

                        </div>
                        <div className="nav-block">
                            <ul className={`navigation clearfix ${this.state.small ? 'textRed smallLineHeight' : ''}`}>
                                <a href="#" className={`nav-item`} onClick={this.onScroll.bind(this, 'header')}>
                                    <li>Home</li>
                                </a>
                                <a href="#" className="nav-item" onClick={this.onScroll.bind(this, '#services')}>
                                    <li>Services</li>
                                </a>
                                <a href="#" className="nav-item" onClick={this.onScroll.bind(this, '#about')}>
                                    <li>About</li>
                                </a>
                                <a href="#" className="nav-item" onClick={this.onScroll.bind(this, '#latest-works')}>
                                    <li>Works</li>
                                </a>
                                <a href="#" className="nav-item">
                                    <li>Blog</li>
                                </a>
                                <a href="#" className="nav-item">
                                    <li>Clients</li>
                                </a>
                                <a href="#" className="nav-item">
                                    <li>Contact</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}