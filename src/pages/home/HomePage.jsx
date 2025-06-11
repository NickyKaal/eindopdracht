import React from 'react';
import './HomePage.css';
import NameBanner from "../../components/common/NameBanner.jsx";
import RegisterTile from "../../components/auth/RegisterTile.jsx";
import Navigation from "../../components/navigate/Navigation.jsx";

function HomePage({authenticateCB}) {
    return (

        <>
            <header className="page-header">
                <Navigation authenticateCB={authenticateCB}/>
            </header>
            <main className="page-main">
                <p>home</p>
            </main>
        </>
    );
}

export default HomePage;