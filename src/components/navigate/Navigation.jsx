import React from 'react';
import './Navigation.css';
import {NavLink, useNavigate} from "react-router-dom";

//TODO: Plaatjes zijn deprecated, vervangen met de nieuwe versie
import {SignOut, UsersThree, User, Globe, CalendarDots, House} from "@phosphor-icons/react";
import logo from '../../assets/images/logo.png'

function Navigation({authenticateCB}) {
    const navigate = useNavigate();
    const iconSize = 48, iconWeight = "bold";

    return (
        <>
            {/*TODO: volledig flexbox maken*/}
            <div className="navigation-wrapper">
                <div className="logo-wrapper">
                    <img src={logo} alt="logo"/>
                </div>
                <nav>
                    <ol>
                        <li>
                            <NavLink id="feed" className="menu-item" to="/feed">
                                <House size={iconSize} weight={iconWeight} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink id="explore" className="menu-item" to="/explore">
                                <Globe size={iconSize} weight={iconWeight} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink id="social" className="menu-item" to="/social">
                                <UsersThree size={iconSize} weight={iconWeight} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink id="agenda" className="menu-item" to="/agenda">
                                <CalendarDots size={iconSize} weight={iconWeight} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink id="profile" className="menu-item" to="/profile">
                                <User size={iconSize} weight={iconWeight} />
                            </NavLink>
                        </li>
                    </ol>
                </nav>
                <NavLink id="logout" className="menu-item" to="/login" onClick={() => {
                    authenticateCB(false);
                    navigate("/login");
                }}>
                    <SignOut size={iconSize} weight={iconWeight} />
                </NavLink>
            </div>
        </>
    );
}

export default Navigation;