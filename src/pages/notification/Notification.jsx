import React from 'react';
import "./Notification.css";
import Tiptap from "../../components/richTextEditor/Tiptap.jsx";
import {useParams} from "react-router-dom";
import CreateNotificationForm from "./CreateNotificationForm.jsx";
import Overlay from "../../components/utils/Overlay.jsx";
import * as notificationsApi from "../../hooks/notifications.js";
import LoadingContent from "../../components/utils/LoadingContent.jsx";
import FailedLoadingContent from "../../components/utils/FailedLoadingContent.jsx";

function Notification( ) {
    const { id } = useParams();
    const {result,loaded,failed} = notificationsApi.useFetchNotification(id);
    const [createNotificationForm, toggleCreateNotificationForm] = React.useState(false);

    function toggleForm(){
        toggleCreateNotificationForm(!createNotificationForm);
    }

    let editable = false, menu = false;
    return (
        <>
            { createNotificationForm && <Overlay><CreateNotificationForm close={toggleCreateNotificationForm}/></Overlay>}
            <section className="notification-container">
                <div className="notification-actions">
                    <button type="button" onClick={toggleForm}>create</button>
                </div>
                {loaded === false && <LoadingContent/>}
                {failed && <FailedLoadingContent/>}
                {loaded && <div className={editable ? "tiptap-wrapper" : "tiptap-wrapper read-only"}>
                    <Tiptap editable={editable} menu={menu} content={result.content}/>
                </div>}
            </section>
        </>);
}

export default Notification;


//<Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />

