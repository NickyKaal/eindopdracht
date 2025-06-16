import React from 'react';
import './FeedPage.css';
import NameBanner from "../../components/header/NameBanner.jsx";
import RegisterTile from "../../components/auth/RegisterTile.jsx";
import Navigation from "../../components/navigate/Navigation.jsx";
import Feeds from "../../components/feed/Feeds.jsx";

function FeedPage() {

    const PageContext = React.createContext(null);

    return (
        <main className="page-main">
            <PageContext.Provider value={{ curren:null }}>
                <Feeds/>
            </PageContext.Provider>
        </main>

    );
}

export default FeedPage;