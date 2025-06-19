import React, {useEffect} from 'react';
import "./AllNotifications.css"
import {MapPin} from "@phosphor-icons/react";
import NotificationListItem from "./NotificationListItem.jsx";
import CollapsibleList from "../../components/utils/CollapsibleList.jsx";
import axios from "axios";

function AllNotifications() {

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
        <section className="notification-all-container">
            <h4><MapPin size={32} weight="bold" /> All</h4>
            <CollapsibleList className="list-items-container">
                {data.map(item =><NotificationListItem key={item.id} item={item}/>)}
            </CollapsibleList>
        </section>
    );
}

export default AllNotifications;