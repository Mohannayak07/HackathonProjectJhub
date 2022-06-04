import React from "react";
// import { Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
    return (
        <div className="home">
            {/* <img src="../headerimg.jpg" id="img1" alt="header img"></img>
        <div classNameName="renewal">
            <div classNameName="row">
                <div classNameName="col-md-6">
                    <h1>Access to Affordable and clean Energy</h1>
                </div>

            </div>

        </div> */}

            <Carousel>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100"
                        src="../headerimg.jpg"
                        alt="First slide"
                        id="Himg1"
                    />
                    <Carousel.Caption>
                        <h3>Affordable and Clean Energy</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="../solar-panel.jpg"
                        alt="Second slide"
                        id="Himg2"
                    />
                    <Carousel.Caption>
                        <h3>Solar Energy</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="../windenergy.jpg"
                        alt="Third slide"
                        id="Himg3"
                    />
                    <Carousel.Caption>
                        <h3>Wind Energy</h3>
                        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../geothermal.jpg"
                        alt="Fourth slide"
                        id="Himg4"
                    />
                    <Carousel.Caption>
                        <h3>GeoThermal Energy</h3>
                        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}