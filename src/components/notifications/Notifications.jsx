import React from 'react';
import "./Notifications.css";
import PinnedNotification from "./PinnedNotification.jsx";
import AllNotification from "./AllNotification.jsx";

function Notifications() {
    return (
        <section className="notifications-container">
            <h3>Notifications</h3>
            <PinnedNotification/>
            <AllNotification/>
        </section>
    );
}

export default Notifications;