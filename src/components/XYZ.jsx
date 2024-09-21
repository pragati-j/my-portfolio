import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import exp1 from "../Experience1.png"
import axis from "../axis.png"
import marktech from "../marktech.png"

function XYZ(){
        return (
            <div className='exp-carousel'>
            <Carousel>
                <div>
                    <img src={exp1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={axis} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={marktech} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            </div>
        );
};

export default XYZ;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
