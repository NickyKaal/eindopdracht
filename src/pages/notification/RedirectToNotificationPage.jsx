import React from 'react';
import {useFetchId} from "../../hooks/notifications.js";
import {Navigate} from "react-router-dom";

function RedirectToNotificationPage() {
    const {id, loaded} = useFetchId( );

    return (
        <>
            {loaded && <Navigate to={`/notification/${id}`}/>}
        </>
    );
}

export default RedirectToNotificationPage;