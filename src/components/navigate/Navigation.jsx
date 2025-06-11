import React from 'react';
import './Navigation.css';
import Button from "../common/buttons/Button.jsx";
import {useNavigate} from "react-router-dom";

function Navigation({authenticateCB}) {
    const navigate = useNavigate();

    return (
        <div>
            <Button text="home" type="button" id="home" value="home" styleClas="buttonSizeMedium"
                    onClick={() => navigate("/home")} variant={Button.variants.secondary}/>

            <Button text="agenda" type="button" id="agenda" value="agenda" styleClas="buttonSizeMedium"
                    onClick={() => navigate("/agenda")} variant={Button.variants.secondary}/>

            <Button text="explore" type="button" id="explore" value="explore" styleClas="buttonSizeMedium"
                    onClick={() => navigate("/explore")} variant={Button.variants.secondary}/>

            <Button text="profile" type="button" id="profile" value="profile" styleClas="buttonSizeMedium"
                    onClick={() => navigate("/profile")} variant={Button.variants.secondary}/>

            <Button text="social" type="button" id="social" value="social" styleClas="buttonSizeMedium"
                    onClick={() => navigate("/social")} variant={Button.variants.secondary}/>

            <Button text="logout" type="button" id="logout" value="logout" styleClas="buttonSizeMedium"
                    onClick={() => {
                        authenticateCB(false);
                        navigate("/login");
                    }}
                    variant={Button.variants.secondary}/>
        </div>
    );
}

export default Navigation;