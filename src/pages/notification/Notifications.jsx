import React from 'react';
import "./Notifications.css";
import PinnedNotifications from "./PinnedNotifications.jsx";
import AllNotifications from "./AllNotifications.jsx";

function Notifications() {

    return (
        <section className="notifications-container">
            <h3 className="allCaps">Notifications</h3>
            <PinnedNotifications/>
            <AllNotifications/>
        </section>
    );
}

export default Notifications;