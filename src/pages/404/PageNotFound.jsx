import React from 'react';
import './PageNotFound.css';
import {SmileyXEyes} from "@phosphor-icons/react";

function PageNotFound() {
    return (
        <section className="page-not-found">
            <SmileyXEyes/>
            <h1>Oops.. Something went wrong</h1>
        </section>
    );
}

export default PageNotFound;