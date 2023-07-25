import React from "react";
import './assets/style/index.scss'
import Header from "./pages/header";
import RouterComponent from "./router";

function App() {
    return (
        <div className="App">
            <Header/>
            <RouterComponent/>
        </div>
    );
}

export default App;
