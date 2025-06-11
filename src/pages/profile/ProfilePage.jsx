import React from 'react';
import './ProfilePage.css';
import Navigation from "../../components/navigate/Navigation.jsx";

function ProfilePage({authenticateCB}) {
    return (
        <>
            <header className="page-header">
                <Navigation authenticateCB={authenticateCB}/>
            </header>
            <main className="page-main">
                <p>profile</p>
            </main>
        </>
    );
}

export default ProfilePage;