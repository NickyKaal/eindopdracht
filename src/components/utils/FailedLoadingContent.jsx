import {SmileyXEyes} from "@phosphor-icons/react";
import './FailedLoadingContent.css';
import React from "react";

function FailedLoadingContent(size=32) {
    return (
        <div className="failed-loading-content">
            <SmileyXEyes size={size}/>
        </div>
    );
}

export default FailedLoadingContent;