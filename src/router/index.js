import React from 'react';
import {Route} from "react-router-dom";
import Home from "../pages/home";
import Trip from "../pages/trip";
import Preloader from "../utils/preloader";
import usePreloader from "../hook/usePreloader";
import About from "../pages/about";
const RouterComponent = () => {
    const {loading} = usePreloader()
    if (loading) {
        return <Preloader/>
    }
    return (
        <>
            <Route exact path='/' render={() => <Home/>}/>
            <Route exact path='/trip' render={() => <Trip/>}/>
            <Route exact path='/about' render={() => <About/>}/>

        </>
    );
};

export default RouterComponent;
