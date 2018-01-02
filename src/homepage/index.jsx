import React, { Component } from 'react';

import Header from "./Header";
import Services from "./Services";
import About from "./About";
import LatestWorks from "./LatestWorks";

export default class Homepage extends Component {
    render() {
        return(
            <div className="app">
                <Header />
                <Services />
                <About />
                <LatestWorks />
            </div>
        );
    }
}