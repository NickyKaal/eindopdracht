import './App.css'
import LoginPage from "./pages/login/LoginPage.jsx";
import RegisterPage from "./pages/register/RegisterPage.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {useState} from "react";
import NotificationPage from "./pages/notification/NotificationPage.jsx";
import AgendaPage from "./pages/agenda/AgendaPage.jsx";
import ExplorePage from "./pages/explore/ExplorePage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import SocialPage from "./pages/social/SocialPage.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";
import PageWrapper from "./components/utils/PageWrapper.jsx";
import RedirectToNotificationPage from "./pages/notification/RedirectToNotificationPage.jsx";

function App() {
    const [auth, setAuth] =useState(true);

    return (
        <>
            <Routes>
                <Route path="/"         element={ auth===false ?<Navigate to="/login" />                :<Navigate to="/notification" />}/>
                <Route path="/login"    element={ auth===false ?<LoginPage authenticateCB={setAuth}/>   :<Navigate to="/notification" />}/>
                <Route path="/register" element={ auth===false ?<RegisterPage authenticateCB={setAuth}/>:<Navigate to="/notification" />}/>

                <Route element={<PageWrapper authenticateCB={setAuth}/>}>
                    <Route path="/agenda"           element={ auth?<AgendaPage />       :<Navigate to="/login"/>}/>
                    <Route path="/explore"          element={ auth?<ExplorePage />      :<Navigate to="/login"/>}/>
                    <Route path="/notification"     element={ auth?<RedirectToNotificationPage /> :<Navigate to="/login"/>}/>
                    <Route path="/notification/:id" element={ auth?<NotificationPage /> :<Navigate to="/login"/>}/>
                    <Route path="/profile"          element={ auth?<ProfilePage />      :<Navigate to="/login"/>}/>
                    <Route path="/social"           element={ auth?<SocialPage />       :<Navigate to="/login"/>}/>
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default App
