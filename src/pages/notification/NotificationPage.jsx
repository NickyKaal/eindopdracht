import React from 'react';
import './NotificationPage.css';
import NameBanner from "../../components/header/NameBanner.jsx";
import RegisterTile from "../../components/auth/RegisterTile.jsx";
import Navigation from "../../components/navigate/Navigation.jsx";
import Notifications from "../../components/notifications/Notifications.jsx";

function NotificationPage() {

    const PageContext = React.createContext(null);

    return (
        <main className="page-main">
            <PageContext.Provider value={{ curren:null }}>
                <Notifications/>
            </PageContext.Provider>
        </main>

    );
}

export default NotificationPage;