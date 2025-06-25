import React, {Suspense, useEffect} from 'react';
import './EventItem.css';
import {formatDate, formatTime} from "../../scripts/helpers/dateUtils.js";

import LoadingContent from "../../components/utils/LoadingContent.jsx";
import axios from "axios";
import FriendTile from "../../components/common/FriendTile.jsx";

function EventItem({item}) {

    let location = JSON.parse(item.location);
    let genres = JSON.parse(item.genres);

    const [friendList, setfriendList] = React.useState([]);
    const [friendsLoaded, toggleFriendsLoaded] = React.useState(false);
    const [friendsError, setFriendsError] = React.useState("");
    const [friendsFailed, toggleFriendsFailed] = React.useState(false);

    async function loadFriendGoing() {
        try {
            toggleFriendsLoaded(false);
            setFriendsError("");
            toggleFriendsFailed(false);

            const response = await {data:[
                    {
                        id:1,
                        name:"Pietje Pub"
                    },
                    {
                        id:2,
                        name:"Bob de Brouwer"
                    },
                    {
                        id:3,
                        name:"Fee Sneus"
                    },
                    {
                        id:4,
                        name:"Bertje Gab"
                    }
            ]};

            setfriendList(response.data);
        }
        catch (e) {
            console.error(e);
            setFriendsError("Loading friendlist went wrong");
            toggleFriendsFailed(true);
        }
        finally {
            // toggleFriendsLoaded(true);
        }
    }

    useEffect(() => {
        loadFriendGoing();
    }, []);

    return (
        <article className="content-panel event-container">
            <div className="event-image-container">
                {/*TODO: Lazy loading voor img als ze in beeld scrollen*/}
                <img src={`https://novi-backend-api-wgsgz.ondigitalocean.app${item.logo}`} alt={item.title}/>
            </div>
            <div className="event-details-container">
                <h4>{item.title}</h4>
                <div className="details-container">
                    <p className="thick">Date: {formatDate(item.eventDT)}</p>
                    <p className="thick">Time: {formatTime(item.eventDT)}</p>
                    <p className="thick">Location: {location.name}, {location.city}</p>
                    <p className="thick">Genre: {genres.join(", ")}</p>
                </div>
            </div>
            <div className="friends-going-container">
                <h4>Going</h4>
                <div className="friends-list-container">
                    {friendsLoaded === false && <LoadingContent/> }
                    {friendsLoaded && friendsFailed === false && friendList.map(friend =><FriendTile friend={friend} key={friend.id} />)}
                </div>
            </div>
        </article>
    );
}

export default EventItem;