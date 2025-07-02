import React from 'react';
import './NotificationPage.css';
import Notifications from "./Notifications.jsx";
import Notification from "./Notification.jsx";

function NotificationPage() {

    return (
        <main className="page-main-notifications">
            <Notifications/>
            <Notification/>
        </main>

    );
}

export default NotificationPage;