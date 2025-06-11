import './App.css'
import LoginPage from "./pages/login/LoginPage.jsx";
import RegisterPage from "./pages/register/RegisterPage.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {useState} from "react";
import HomePage from "./pages/home/HomePage.jsx";
import AgendaPage from "./pages/agenda/AgendaPage.jsx";
import ExplorePage from "./pages/explore/ExplorePage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import SocialPage from "./pages/social/SocialPage.jsx";

function App() {
    const [auth, setAuth] =useState(false);

    console.log("Authenticated: "+auth);

    return (
        <>
            <Routes>
                <Route path="/login"    element={ auth===false ?<LoginPage authenticateCB={setAuth}/>    :<Navigate to="/home" />}/>
                <Route path="/register" element={ auth===false ?<RegisterPage authenticateCB={setAuth}/> :<Navigate to="/home" />}/>

                <Route path="/agenda"   element={ auth?<AgendaPage authenticateCB={setAuth}/>    :<Navigate to="/login"/>}/>
                <Route path="/explore"  element={ auth?<ExplorePage authenticateCB={setAuth}/>   :<Navigate to="/login"/>}/>
                <Route path="/home"     element={ auth?<HomePage authenticateCB={setAuth}/>      :<Navigate to="/login"/>}/>
                <Route path="/profile"  element={ auth?<ProfilePage authenticateCB={setAuth}/>   :<Navigate to="/login"/>}/>
                <Route path="/social"   element={ auth?<SocialPage authenticateCB={setAuth}/>    :<Navigate to="/login"/>}/>

            </Routes>
        </>
    )
}

export default App
