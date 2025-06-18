import React, {useEffect} from 'react';
import "./Notification.css";
import Tiptap from "../common/editor/Tiptap.jsx";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function Notification() {
    async function fetchId() {
        try {

            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/notifications`, {
                headers: {
                    'novi-education-project-id': '278d2a09-ef87-4050-9fb8-7b3f26f16604',
                },
                params: {
                    'limit': 1
                    , 'sort': "-created"
                    , "pinned": true
                    , "fields": "id"
                }
            });

            setContentId(response.data[0].id);
        } catch (e) {
            console.error(e);
        }
    }

    async function fetchData() {
        try {
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/notifications/${id}`, {
                headers: {
                    'novi-education-project-id': '278d2a09-ef87-4050-9fb8-7b3f26f16604',
                },
                params: {
                    "fields": "id,content"
                }
            });

            setContent(response.data.content);
        } catch (e) {
            console.error(e);
        }
    }

    const { id } = useParams();
    const [content, setContent] = React.useState("");
    const [contentId, setContentId] = React.useState(id);
    const navigate = useNavigate();

    useEffect(() => {
        if( id ) {
            fetchData();
        }
    }, [id]);

    useEffect(() => {

        if( contentId){
            navigate(`/notification/${contentId}`, {replace: true})
        }
    }, [contentId]);

    useEffect(() => {

        if( id ) {
            fetchData();
        }
        else{
            fetchId();
        }
    }, []);


    return (<section className="notification-container">
        <Tiptap editable={false} content={content}/>
    </section>);
}

export default Notification;


//<Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />

