import './App.css'
import LoginPage from "./pages/login/LoginPage.jsx";
import RegisterPage from "./pages/register/RegisterPage.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {useState} from "react";
import FeedPage from "./pages/feed/FeedPage.jsx";
import AgendaPage from "./pages/agenda/AgendaPage.jsx";
import ExplorePage from "./pages/explore/ExplorePage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import SocialPage from "./pages/social/SocialPage.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";
import PageWrapper from "./components/pages/PageWrapper.jsx";

function App() {
    const [auth, setAuth] =useState(false);


    return (
        <>

            <Routes>
                <Route path="/login"    element={ auth===false ?<LoginPage authenticateCB={setAuth}/>    :<Navigate to="/feed" />}/>
                <Route path="/register" element={ auth===false ?<RegisterPage authenticateCB={setAuth}/> :<Navigate to="/feed" />}/>

                <Route element={<PageWrapper authenticateCB={setAuth}/>}>
                    <Route path="/agenda"   element={ auth?<AgendaPage />    :<Navigate to="/login"/>}/>
                    <Route path="/explore"  element={ auth?<ExplorePage />   :<Navigate to="/login"/>}/>
                    <Route path="/feed"     element={ auth?<FeedPage />      :<Navigate to="/login"/>}/>
                    <Route path="/profile"  element={ auth?<ProfilePage />   :<Navigate to="/login"/>}/>
                    <Route path="/social"   element={ auth?<SocialPage />    :<Navigate to="/login"/>}/>
                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </>
    )
}

export default App
