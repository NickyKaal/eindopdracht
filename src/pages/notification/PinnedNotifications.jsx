import React from 'react';
import "./PinnedNotifications.css";
import {PushPin} from "@phosphor-icons/react";
import NotificationListItem from "./NotificationListItem.jsx";
import CollapsibleList from "../../components/utils/CollapsibleList.jsx";
import * as notificationsApi from "../../hooks/notifications.js";
import FailedLoadingContent from "../../components/utils/FailedLoadingContent.jsx";
import LoadingContent from "../../components/utils/LoadingContent.jsx";


function PinnedNotifications() {

    const {result:notifications, loaded, failed} = notificationsApi.useFetchNotificationsList({pinned:true});

    return (
        <section className="notification-pinned-container">
            <h4 className="allCaps"><PushPin size={32} weight="bold" /> Pinned</h4>
            {loaded === false && <LoadingContent/>}
            {failed && <FailedLoadingContent/>}
            {/*TODO: niet alles in 1 keer laden, maar meer laden als lijst wordt open geklapt / naar beneden scrolled*/}
            {loaded && <CollapsibleList className="list-items-container">
                {notifications.map(item =><NotificationListItem key={item.id} item={item}/>)}
            </CollapsibleList>}
        </section>
    );
}

export default PinnedNotifications;