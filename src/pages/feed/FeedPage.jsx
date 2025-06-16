import React from 'react';
import './FeedPage.css';
import NameBanner from "../../components/header/NameBanner.jsx";
import RegisterTile from "../../components/auth/RegisterTile.jsx";
import Navigation from "../../components/navigate/Navigation.jsx";
import Feeds from "../../components/feed/Feeds.jsx";

function FeedPage() {
    return (
        <main className="page-main">
            <Feeds/>
        </main>

    );
}

export default FeedPage;