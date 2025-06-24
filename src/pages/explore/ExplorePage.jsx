import React, {useEffect} from 'react';
import './ExplorePage.css';
import Navigation from "../../components/navigate/Navigation.jsx";
import Searchbar from "./Searchbar.jsx";
import EventItem from "./EventItem.jsx";
import axios from "axios";

function ExplorePage() {
    const [searchResult, setSearchResult] = React.useState([]);


    async function loadInitialEvents() {
        try {


            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/events', {
                headers: {
                    'novi-education-project-id': '278d2a09-ef87-4050-9fb8-7b3f26f16604',
                },
                params: {
                    'limit': 10
                    ,'sort': "eventDT"
                    ,"eventDT[gt]":new Date()
                }
            });
            setSearchResult(response.data);
        }
        catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        loadInitialEvents();
    }, []);

    return (
        <main className="page-main-explore">
            <Searchbar onSearchResult={setSearchResult}/>
            <section className="result-pane-container">
                {searchResult.map((item)=><EventItem key={item.id} item={item}/>)}
            </section>
        </main>
    );
}

export default ExplorePage;