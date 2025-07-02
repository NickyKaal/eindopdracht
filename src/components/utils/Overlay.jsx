import React from 'react';
import './Overlay.css';

function Overlay({children}) {
    return (
        <div className="translucent-overlay">
            {children}
        </div>
    );
}

export default Overlay;