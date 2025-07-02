import React from 'react';
import './ExplorePage.css';
import Searchbar from "./Searchbar.jsx";
import EventItem from "./EventItem.jsx";
import LoadingContent from "../../components/utils/LoadingContent.jsx";
import FailedLoadingContent from "../../components/utils/FailedLoadingContent.jsx";
import {useFetchEventsList} from "../../hooks/events.js";

function ExplorePage() {
    const {result, failed,loaded, setFilter} = useFetchEventsList();

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