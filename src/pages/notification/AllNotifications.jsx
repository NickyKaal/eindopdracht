import React from 'react';
import "./AllNotifications.css"
import {MapPin} from "@phosphor-icons/react";
import NotificationListItem from "./NotificationListItem.jsx";
import CollapsibleList from "../../components/utils/CollapsibleList.jsx";
import LoadingContent from "../../components/utils/LoadingContent.jsx";
import FailedLoadingContent from "../../components/utils/FailedLoadingContent.jsx";
import {useFetchNotificationsList} from "../../hooks/notifications.js";

function AllNotifications() {

    const {result:notifications, loaded, failed} = useFetchNotificationsList();

    return (
        <section className="notification-all-container">
            <h4 className="allCaps"><MapPin size={32} weight="bold" /> All</h4>
            {loaded === false && <LoadingContent/>}
            {failed && <FailedLoadingContent/>}
            {/*TODO: niet alles in 1 keer laden, maar meer laden als lijst wordt open geklapt / naar beneden scrolled*/}
            {loaded && <CollapsibleList className="list-items-container">
                {notifications.map(item =><NotificationListItem key={item.id} item={item}/>)}
            </CollapsibleList>}
        </section>
    );
}

export default AllNotifications;