import React from 'react';
import './ExplorePage.css';
import Searchbar from "./Searchbar.jsx";
import EventItem from "./EventItem.jsx";
import * as eventApi from "../../hooks/events.js";
import LoadingContent from "../../components/utils/LoadingContent.jsx";
import FailedLoadingContent from "../../components/utils/FailedLoadingContent.jsx";

function ExplorePage() {
    const {result, failed,loaded, setFilter} = eventApi.useFetchEventsList();

    return (
        <main className="page-main-explore">
            <Searchbar setFilter={setFilter}/>
            <section className="result-pane-container">
                { loaded === false  && <LoadingContent/>}
                { failed && <FailedLoadingContent/>}
                {loaded && result.map((item)=><EventItem key={item.id} item={item}/>)}
            </section>
        </main>
    );
}

export default ExplorePage;