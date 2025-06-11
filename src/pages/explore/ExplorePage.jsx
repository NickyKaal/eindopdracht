import React from 'react';
import './ExplorePage.css';
import Navigation from "../../components/navigate/Navigation.jsx";

function ExplorePage({authenticateCB}) {
    return (
        <>
            <header className="page-header">
                <Navigation authenticateCB={authenticateCB}/>
            </header>
            <main className="page-main">
                <p>explore</p>
            </main>
        </>
    );
}

export default ExplorePage;