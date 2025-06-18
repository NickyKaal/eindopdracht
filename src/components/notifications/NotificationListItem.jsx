import React from 'react';
import "./NotificationListItem.css";
import {formatDate} from "../../helpers/dateUtils.js";
import {useNavigate, useParams} from "react-router-dom";

function NotificationListItem({ item}) {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <article key={item.id}
                 className={`content-panel list-item-container ${id===item.id?"focused":"unfocused"} `}
                 onClick={()=>navigate(`/notification/${item.id}`, {replace: true})}>
            <div className="item-title-wrapper">
                <h5>{item.title}</h5>
                <p className="item-date">{formatDate(item.created)}</p>
            </div>
            <p>{item.subtitle}</p>
        </article>
    );
}

export default NotificationListItem;