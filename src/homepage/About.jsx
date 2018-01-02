import React, { Component } from 'react';

import './styles.css';

import Slider from 'react-slick';

import Rubel from '../images/About/rubel-miah.png';
import John from '../images/About/john-doe.png';
import Shamim from '../images/About/shamim-mia.png';


function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
}

export default class About extends Component {
    render () {
        const settings = {
            infinite: true,
            speed: 500,
            initialSlide: 0,
            slidesToShow: 4,
            slidesToScroll: 1,
            className: 'slides',
            nextArrow: <SampleNextArrow className="right-angle"/>,
            prevArrow: <SamplePrevArrow />
        };
        return(
            <section id="about">
                <div className="container">
                    <h3 className="title">
                        About Us
                    </h3>
                    <h5 className="subtitle">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet
                    </h5>
                    <div className="items-container clearfix">
                        <div className="item">
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam
                                nonumy eirmod tempor invidunt ut labore et dolore aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor et dolore aliquyam erat. Lorem ipsum dolor sit amet. Lorem ipsum eat.
                            </p>
                        </div>
                        <div className="item">
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam
                                nonumy eirmod tempor invidunt ut labore et dolore aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor et dolore aliquyam erat. Lorem ipsum dolor sit amet. Lorem ipsum eat.
                            </p>
                        </div>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src={Rubel} alt=""/>
                                <div className="slider-title">
                                    Md. Khalil Uddin
                                </div>
                                <div className="slider-text">
                                    Head of Ideas
                                </div>
                            </div>
                            <div>
                                <img src={John} alt=""/>
                                <div className="slider-title">
                                    Rubel Miah
                                </div>
                                <div className="slider-text">
                                    Lead WordPress Developer
                                </div>
                            </div>
                            <div>
                                <img src={Shamim} alt=""/>
                                <div className="slider-title">
                                    Shamim Mia
                                </div>
                                <div className="slider-text">
                                    Sr. Web Developer
                                </div>
                            </div>
                            <div>
                                <img src={Rubel} alt=""/>
                                <div className="slider-title">
                                    John Doe
                                </div>
                                <div className="slider-text">
                                    Front-end Developer
                                </div>
                            </div>
                            <div>
                                <img src={John} alt=""/>
                                <div className="slider-title">
                                    Md. Khalil Uddin
                                </div>
                                <div className="slider-text">
                                    Head of Ideas
                                </div>
                            </div>
                            <div>
                                <img src={Shamim} alt=""/>
                                <div className="slider-title">
                                    Md. Khalil Uddin
                                </div>
                                <div className="slider-text">
                                    Head of Ideas
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}