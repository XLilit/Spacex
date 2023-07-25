import React, {useState} from 'react';
import './style.scss'
import {planets} from "./components/planets";
import astronaut from '../../assets/images/astronaut.png'
import astronaut2 from '../../assets/images/astronaut2.png'
import background from '../../assets/images/background.mp4'

const About = () => {
    const [allPlanets, setAllPlanets] = useState(planets)
    return (
        <div className='P-about-wrapper '>
            <div className='P-about G-container G-flex G-align-center G-justify-between'>
                <div className="P-about-child">
                    <h2 className='P-about-title'>lab.</h2>
                    <p className='P-about-title-num'>001</p>
                </div>
                <div className="P-about-child">
                    <div className="P-about-info G-flex  ">
                        <div className='P-about-info-child'>
                            <h6>SEVENOVN</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply </p>
                        </div>
                        <div className='P-about-info-child'>
                            <p>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the
                                printing</p>
                        </div>
                    </div>
                    <div className="P-about-background">
                        <div className="P-about-image" style={{backgroundImage: `url('${astronaut}')`}}/>
                        <div className="P-about-image-overlay">
                            <p>Hello! I'm a Astronaut</p>
                            <button>Say Hi</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="P-about-desc">
                <video autoPlay={true} loop={true} muted={true} playsInline={true} className='P-space-background'>
                    <source src={background} type='video/mp4'/>
                </video>
                <div className="P-abouts-desc-block G-flex G-justify-between">
                    <div className="P-about-desc-child">
                        <div className="P-astronaut-image" style={{backgroundImage: `url('${astronaut2}')`}}/>
                    </div>
                    <div className="P-about-desc-child P-astronaut-info">
                        <h6 className='P-astronaut-info-title'>Hello I'm in Space</h6>
                        <p className='P-astronaut-info-question'>Do you want to know how cold it is in space?</p>
                        <p className='P-astronaut-info-text'>The sun is a hot ball of gas with a surface temperature of
                            5500 ° C, and in the core - up to
                            1.5 million degrees. Meanwhile, the temperature of space, if you move far enough from the
                            Sun, will be just above absolute zero - about -270.6 ° C.</p>
                    </div>
                </div>

            </div>
            <div className="P-about-planets G-flex G-justify-around G-align-center G-flex-wrap">
                {allPlanets.map(planet => {
                    return (
                        <div className="P-about-planets-child" key={planet.id}>
                            <div className="P-about-planet" style={{backgroundImage: `url('${planet.img}')`}}/>
                            <h6>{planet.title}</h6>
                            <p>{planet.desc}</p>
                        </div>
                    )
                })}

            </div>
        </div>

    );
};

export default About;
