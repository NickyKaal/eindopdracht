import React from 'react';
import * as notificationsApi from "../../hooks/notifications.js";
import {Navigate} from "react-router-dom";

function RedirectToNotificationPage(props) {
    const {id, loaded} = notificationsApi.useFetchId( );

    return (
        <>
            {loaded && <Navigate to={`/notification/${id}`}/>}
        </>
    );
}

export default RedirectToNotificationPage;