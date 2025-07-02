import React from 'react';
import "./NotificationListItem.css";
import {formatDate} from "../../scripts/helpers/dateUtils.js";
import {useNavigate, useParams} from "react-router-dom";
import {useFetchNotification} from "../../hooks/notifications.js";
import LoadingContent from "../../components/utils/LoadingContent.jsx";
import FailedLoadingContent from "../../components/utils/FailedLoadingContent.jsx";

function NotificationListItem({ item}) {
    const navigate = useNavigate();
    const { id:selected } = useParams();
    const {result:notification,failed,loaded} =useFetchNotification(item.id);

    return (
        <article key={item.id}
                 className={`content-panel list-item-container ${selected===item.id?"focused":"unfocused"} `}
                 onClick={()=>navigate(`/notification/${item.id}`, {replace: true})}>
            {loaded === false && <LoadingContent/>}
            {failed && <FailedLoadingContent/>}
            {loaded && <>
                <div className="item-title-wrapper">
                    <h5>{notification.title}</h5>
                    <p className="item-date">{formatDate(notification.created)}</p>
                </div>
                <p>{notification.subtitle}</p>
            </>}
        </article>
    );
}

export default NotificationListItem;