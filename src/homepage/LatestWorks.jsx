import React, { Component } from 'react';

import img1 from '../images/LatestWorks/img-1.png';
import img2 from '../images/LatestWorks/img-2.png';
import img3 from '../images/LatestWorks/img-3.png';
import img4 from '../images/LatestWorks/img-4.png';
import img5 from '../images/LatestWorks/img-5.png';
import img6 from '../images/LatestWorks/img-6.png';
import img7 from '../images/LatestWorks/img-7.png';
import img8 from '../images/LatestWorks/img-8.png';
import img9 from '../images/LatestWorks/img-9.png';

export default class LatestWorks extends Component {
    render () {
        return (
            <section id="latest-works">
                <div className="container">
                    <h3 className="title">
                        Latest Works
                    </h3>
                    <div className="item-container clearfix">
                        <div className="item">
                            <img src={img1} alt="hair-dresser"/>
                        </div>
                        <div className="item">
                            <img src={img2} alt="hair-dresser"/>
                        </div>
                        <div className="item">
                            <img src={img3} alt="hair-dresser"/>
                        </div>
                        <div className="item">
                            <img src={img4} alt="hair-dresser"/>
                        </div>
                        <div className="item">
                            <img src={img5} alt="hair-dresser"/>
                        </div>
                        <div className="item">
                            <img src={img6} alt="hair-dresser"/>
                        </div>
                        <div className="item">
                            <img src={img7} alt="hair-dresser"/>
                        </div>
                        <div className="item">
                            <img src={img8} alt="hair-dresser"/>
                        </div>
                        <div className="item">
                            <img src={img9} alt="hair-dresser"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}