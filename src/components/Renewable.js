import React from "react";
export default function Renewable(){
    return(
        <>
            <h1 id="head1">Renewable Resources</h1>
            
            <div className="row">
            <h2 className="head2">1)SOLAR ENERGY</h2>
                <div className="col-md-6">
                <img src="../solar-panel.jpg" id="img2" alt="header img" ></img>
                </div>
                <div className="col-md-6 col-sm-4">
                    <p id="p1">radiation from the Sun capable of producing heat, causing chemical reactions, or generating electricity. The total amount of solar energy incident on Earth is vastly in excess of the world’s current and anticipated energy requirements.</p>
                    <iframe width="500" height="250" src="https://www.youtube.com/embed/xKxrkht7CpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="row">
            <h2 className="head2">2)Wind Energy</h2>
                <div className="col-md-6 col-md-6">
                <img src="../windenergy.jpg" id="img2" alt="header img" ></img>
                </div>
                <div className="col-md-6">
                    <p id="p2">Wind is used to produce electricity using the kinetic energy created by air in motion. This is transformed into electrical energy using wind turbines or wind energy conversion systems. Wind first hits a turbine's blades, causing them to rotate and turn the turbine connected to them.</p>
                    <iframe width="500" height="250" src="https://www.youtube.com/embed/xy9nj94xvKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="row">
            <h2 className="head2">3)GeoThermal Energy</h2>
                <div className="col-md-6">
                <img src="../geothermal.jpg" id="img2" alt="header img" ></img>
                </div>
                <div className="col-md-6">
                    <p id="p2">Geothermal power is electrical power generated from geothermal energy. Technologies in use include dry steam power stations, flash steam power stations and binary cycle power stations. Geothermal electricity generation is currently used in 26 countries, while geothermal heating is in use in 70 countries.</p>
                    <iframe width="500" height="250" src="https://www.youtube.com/embed/c7dy0hUZ9xI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="row">
            <h2 className="head2">4)Bio Gas</h2>
                <div className="col-md-6">
                <img src="../bio4.jpg" id="img2" alt="header img" ></img>
                </div>
                <div className="col-md-6">
                    <p id="p2">Biogas is an environmentally-friendly, renewable energy source. It's produced when organic matter, such as food or animal waste, is broken down by microorganisms in the absence of oxygen, in a process called anaerobic digestion</p>
                    <iframe width="500" height="250" src="https://www.youtube.com/embed/c1adiK8nLbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}