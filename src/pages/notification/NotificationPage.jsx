import React from 'react';
import './NotificationPage.css';
import Notifications from "../../components/notifications/Notifications.jsx";
import Notification from "../../components/notifications/Notification.jsx";

function NotificationPage() {


    return (
        <main className="page-main-notifications">
            <Notifications/>
            <Notification/>
        </main>

    );
}

export default NotificationPage;