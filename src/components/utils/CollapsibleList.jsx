import React from 'react';
import "./CollapsibleList.css";
import {CaretCircleDown, CaretCircleUp} from "@phosphor-icons/react";

function CollapsibleList({className, children}) {
    const [expanded, toggleExpanded] = React.useState(false);

    return (
        <div className={`collapsible-list ${className}`}>
            <a className="collapse-toggle" onClick={() => toggleExpanded(!expanded)}>
                {expanded?"collaps":"expand"}
                {expanded?<CaretCircleUp size={16} weight="bold" />:<CaretCircleDown size={16} weight="bold" />}
            </a>
            {expanded && children}
            {expanded===false && children.slice(0,2)}
        </div>
    );
}

export default CollapsibleList;