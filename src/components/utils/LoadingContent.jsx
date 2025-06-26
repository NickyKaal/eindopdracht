import {VinylRecord } from "@phosphor-icons/react";
import './LoadingContent.css';
import React from "react";
import Delayed from "./Delayed.jsx";

function LoadingContent(size=32) {
    return (
        <Delayed>
            <div className="loading-content">
                <VinylRecord size={size}/>
            </div>
        </Delayed>
    );
}

export default LoadingContent;