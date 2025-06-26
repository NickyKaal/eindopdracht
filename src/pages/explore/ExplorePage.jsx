import React from 'react';
import './ExplorePage.css';
import Searchbar from "./Searchbar.jsx";
import EventItem from "./EventItem.jsx";
import * as eventApi from "../../hooks/eventsApi.js";

function ExplorePage() {
    const {result, failed,loaded, reload} = eventApi.useFetchEventsList();

    return (
        <main className="page-main-explore">
            <Searchbar reload={reload}/>
            <section className="result-pane-container">
                {result.map((item)=><EventItem key={item.id} item={item}/>)}
            </section>
        </main>
    );
}

export default ExplorePage;