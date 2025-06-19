import React from 'react';
import {Outlet} from "react-router";
import './Overlay.css';

function Overlay({children}) {
    return (
        <div className="translucent-overlay">
            {children}
        </div>
    );
}

export default Overlay;