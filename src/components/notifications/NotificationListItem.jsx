import React from 'react';
import "./NotificationListItem.css";
import {formatDate} from "../../helpers/dateUtils.js";


function NotificationListItem({item}) {
    return (
        <article key={item.key} className="content-panel list-item-container">
            <div className="item-title-wrapper">
                <h5>{item.title}</h5>
                <p className="item-date">{formatDate(item.date)}</p>
            </div>
            <p>{item.shortDesc}</p>
        </article>
    );
}

export default NotificationListItem;