import React from 'react';
import "./Feeds.css";
import PinnedFeed from "./PinnedFeed.jsx";
import AllFeed from "./AllFeed.jsx";

function Feeds() {
    return (
        <section className="feeds-container">
            <h3>Feed</h3>
            <PinnedFeed/>
            <AllFeed/>
        </section>
    );
}

export default Feeds;