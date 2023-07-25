import React from 'react';
import './style.scss'
import earth from '../../../../assets/images/giphy (1).gif'

const HomeDescription = () => {
    return (
        <div className='P-home-description'>
            <div className="P-home-desc-wrapper G-container G-flex G-align-center G-justify-between">
                <div className="P-home-desc-child">
                    <div className="P-home-desc-block">
                        <h2 className='P-home-desc-title'>What is space?</h2>
                        <p className='P-home-desc-info'>Space is a term that can refer to various phenomena in science,
                            mathematics and computing and
                            generally encompasses the concept of an area or region. It is often used as a shorthand for
                            outer space.</p>
                        <h2 className='P-home-desc-title'>What is outer space?</h2>
                        <p className='P-home-desc-info'>Outer space is the region beyond a planet's atmosphere. For
                            Earth, it begins about 100
                            kilometers (62 miles) above sea level. The line separating the atmosphere and outer space is
                            called the Kármán line. The term outer space and the universe are roughly equivalent, except
                            that outer space refers only to the area between planets, while the universe encompasses
                            planets as well.</p>
                        <button className='P-home-desc-btn'>more...</button>
                    </div>
                </div>
                <div className="P-home-desc-child">
                    <div className="P-home-desc-image" style={{backgroundImage: `url('${earth}')`}}/>
                </div>
            </div>
        </div>
    );
};

export default HomeDescription;
