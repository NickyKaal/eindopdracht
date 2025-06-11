import React from 'react';
import './AgendaPage.css';
import Navigation from "../../components/navigate/Navigation.jsx";

function AgendaPage({authenticateCB}) {
    return (
        <>
            <header className="page-header">
                <Navigation authenticateCB={authenticateCB}/>
            </header>
            <main className="page-main">
                <p>agenda</p>
            </main>
        </>
    );
}

export default AgendaPage;