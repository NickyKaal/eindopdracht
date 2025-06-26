import React from 'react';
import './NotificationPage.css';
import Notifications from "./Notifications.jsx";
import Notification from "./Notification.jsx";
import {Navigate,  useParams} from "react-router-dom";
import * as notificationsApi from "../../hooks/notifications.js";

function NotificationPage() {
    // const {id,redirect} = notificationsApi.useFetchId( useParams());

    return (
        <main className="page-main-notifications">
            <Notifications/>
            {/*{redirect && <Navigate to={`/notification/${id}`}/>}*/}
            {/*{redirect === false && <Notification id={id}/>}*/}
            <Notification/>
        </main>

    );
}

export default NotificationPage;