import React from 'react';
import './FriendTile.css';
import {UserCircle} from "@phosphor-icons/react";

function FriendTile({friend}) {
    return (
        <article className="friend-wrapper">
            <UserCircle size={32} />
            <p>{friend.name}</p>
        </article>
    );
}

export default FriendTile;