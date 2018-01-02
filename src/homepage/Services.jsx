import React, { Component } from 'react';

import fa_icon from '../images/Services/FA-icon.svg';
import fa_icon2 from '../images/Services/FA-icon2.svg';
import fa_icon3 from '../images/Services/FA-icon3.svg';

export default class Services extends Component {
    render() {
        return(
            <section id="services">
                <div className="container">
                    <h3 className="title">
                        Services
                    </h3>
                    <h5 className="subtitle">
                        We offer ipsum dolor sit amet, consetetur sadipscing elitr amet
                    </h5>
                    <div className="items-container clearfix">
                        <div className="item">
                            <div className="item-icon">
                                <img className="swing" src={fa_icon} alt="fa-icon" />
                            </div>
                            <div className="item-title">
                                Clean Typography
                            </div>
                            <div className="item-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Minima maxime quam architecto quo inventore harum ex magni,
                                dicta impedit. Lorem ipsum.
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-icon">
                                <img id="tag" src={fa_icon2} alt="fa-icon" />
                            </div>
                            <div className="item-title">
                                Rock Solid Code
                            </div>
                            <div className="item-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Minima maxime quam architecto quo inventore harum ex magni,
                                dicta impedit. Lorem ipsum.
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-icon">
                                <img id="circle" src={fa_icon3} alt="fa-icon" />
                            </div>
                            <div className="item-title">
                                Expert Support
                            </div>
                            <div className="item-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Minima maxime quam architecto quo inventore harum ex magni,
                                dicta impedit. Lorem ipsum.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}