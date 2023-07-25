import React from 'react';
import './style.scss'
import usePreloader from "../../hook/usePreloader";
import rocket from '../../assets/images/rocket3.gif'

const Preloader = () => {
    const {loading} = usePreloader()
    return loading && (
        <div className='P-Loading'>
            <div className="P-loading-rocket"
                 style={{backgroundImage: `url('${rocket}')`}}
            />
        </div>
    );
};

export default Preloader;