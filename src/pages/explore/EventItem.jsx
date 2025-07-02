import React from 'react';
import './EventItem.css';
import {formatDate, formatTime} from "../../scripts/helpers/dateUtils.js";
import LoadingContent from "../../components/utils/LoadingContent.jsx";
import FriendTile from "../../components/common/FriendTile.jsx";
import {useFetchEvent, useFetchFriends} from "../../hooks/events.js";


function EventItem({item}) {
    const {result:event, loaded:eventLoaded,  failed:eventFailed} = useFetchEvent(item.id);
    const {result:friendList, loaded:friendListLoaded,  failed:friendListFailed} = useFetchFriends(item.id)

    return (
        <article className="content-panel event-container">
            <div className="event-image-container">
                {eventFailed && <FailedLoadingContent/> }
                {eventLoaded === false && <LoadingContent/> }
                {/*TODO: Lazy loading voor img als ze in beeld scrollen*/}
                {eventLoaded && <img src={`https://novi-backend-api-wgsgz.ondigitalocean.app${event.logo}`} alt={item.title}/>}
            </div>
            <div className="event-details-container">
                {eventFailed && <FailedLoadingContent/> }
                {eventLoaded === false && <LoadingContent/> }
                {eventLoaded && <>
                    <h4>{event.title}</h4>
                    <div className="details-container">
                        <p className="thick">Date: {formatDate(event.eventDT)}</p>
                        <p className="thick">Time: {formatTime(event.eventDT)}</p>
                        <p className="thick">Location: {event.location.name}, {event.location.city}</p>
                        <p className="thick">Genre: {event.genres.join(", ")}</p>
                    </div>
                </>}
            </div>
            <div className="friends-going-container">
                <h4>Going</h4>
                <div className="friends-list-container">
                    {friendListFailed && <FailedLoadingContent/> }
                    {friendListLoaded === false && <LoadingContent/> }
                    {friendListLoaded && friendList.map(friend =><FriendTile friend={friend} key={friend.id} />)}
                </div>
            </div>
        </article>
    );
}

export default EventItem;