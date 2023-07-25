import React from 'react';
import {NavLink} from "react-router-dom";
import './style.scss'
import ellipse from '../../assets/images/Ellipse_1.png'
import saturn from '../../assets/images/saturn.png'
import lightning from '../../assets/images/lightning.gif'
import background from '../../assets/images/giphy.gif'
import HomeDescription from "./components/home-description";

const Home = () => {
    return (
        <>
            <div className='P-home-wrapper G-container'>
                <div className='P-home-container G-flex G-justify-between G-align-center G-flex-wrap'>
                    <div className="P-home-container-child">
                        <div className="P-home-images ">
                            <div className="P-home-ellipse-wrapper"
                                 style={{backgroundImage: `url('${ellipse}')`}}>

                                <div className="P-home-saturn-wrapper"
                                     style={{backgroundImage: `url('${saturn}')`}}/>
                                <div className="P-home-ellipse-title">S</div>
                                <div className="P-home-ellipse-title">P</div>
                                <div className="P-home-ellipse-title">A</div>
                                <div className="P-home-ellipse-title">C</div>
                                <div className="P-home-ellipse-title">E</div>
                            </div>


                            <div className="P-home-lightning">
                                <div className="P-home-lightning-circle"/>
                                <div className="P-home-lightning-ellipse">
                                    <div className="P-home-lightning-background"
                                         style={{backgroundImage: `url('${lightning}')`}}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="P-home-container-child">
                        <h3 className='P-home-child-title'>Start your first
                            space trip and let the
                            future begin</h3>
                        <p className='P-home-child-desc'>Start your first SpaceX trip ➜</p>
                        <div className='P-home-child-btns G-flex'>
                            <NavLink to='/trip'>
                                <div className='P-home-child-btn'>
                                    <button>Get Started</button>
                                </div>
                            </NavLink>
                            <div className='P-home-child-btn'>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="P-home-background-space" style={{backgroundImage: `url('${background}')`}}>
                        <div className="P-home-overlay"/>
                    </div>

                </div>

            </div>
            <HomeDescription/>
        </>

    );
};

export default Home;
