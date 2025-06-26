import {VinylRecord } from "@phosphor-icons/react";
import './LoadingContent.css';
import React from "react";

function LoadingContent(size=32) {
    return (
        <div className="loading-content">
            <VinylRecord size={size}/>
        </div>
    );
}

export default LoadingContent;