import React from 'react';
import { Outlet } from "react-router";
import Navigation from "../navigate/Navigation.jsx";

function PageWrapper({authenticateCB}) {
    return (
        <div className="page-container">
            <header className="page-header">
                <Navigation authenticateCB={authenticateCB}/>
            </header>
            <Outlet/>
        </div>
    );
}

export default PageWrapper;