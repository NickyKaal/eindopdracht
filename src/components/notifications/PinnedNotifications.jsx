import React, {useEffect} from 'react';
import "./PinnedNotifications.css";
import {PushPin} from "@phosphor-icons/react";
import NotificationListItem from "./NotificationListItem.jsx";
import CollapsibleList from "../common/collapsible/CollapsibleList.jsx";

import axios from "axios";

function PinnedNotifications() {

    const [data, setData] = React.useState([]);

    async function fetchData() {
        try {
            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/notifications', {
                headers: {
                    'novi-education-project-id': '278d2a09-ef87-4050-9fb8-7b3f26f16604',
                },
                params: {
                    'limit': 10
                    ,'sort': "-created"
                    ,"pinned":true
                    ,"fields":"id,title,subtitle"
                }
            });
            setData(response.data);
        }
        catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="notification-pinned-container">
            <h4><PushPin size={32} weight="bold" /> Pinned</h4>

            <CollapsibleList className="list-items-container">
                {data.map(item =><NotificationListItem key={item.id} item={item}/>)}
            </CollapsibleList>
        </section>
    );
}

export default PinnedNotifications;