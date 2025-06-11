import React from 'react';
import './SocialPage.css';
import Navigation from "../../components/navigate/Navigation.jsx";

function SocialPage({authenticateCB}) {
    return (
        <>
            <header className="page-header">
                <Navigation authenticateCB={authenticateCB}/>
            </header>
            <main className="page-main">
                <p>social</p>
            </main>
        </>
    );
}

export default SocialPage;