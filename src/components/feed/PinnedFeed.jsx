import React from 'react';
import "./PinnedFeed.css";
import {PushPin} from "@phosphor-icons/react";
import FeedListItem from "./FeedListItem.jsx";
import CollapsibleList from "../common/collapsible/CollapsibleList.jsx";

function PinnedFeed() {

    const dummyData = [
        {key:1, date:new Date(), title:"title 1", shortDesc:"Dit is een korte omschrijving van de notificatie", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi aperiam asperiores beatae cupiditate deserunt dolor doloribus excepturi facilis nam officiis perspiciatis quae quam quisquam ratione, recusandae sapiente ullam ut velit veniam! Asperiores blanditiis fuga ipsum perspiciatis qui soluta voluptatibus."}
        ,{key:2, date:new Date(), title:"title 2", shortDesc:"Dit is een korte omschrijving van de 2e notificatie", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi aperiam asperiores beatae cupiditate deserunt dolor doloribus excepturi facilis nam officiis perspiciatis quae quam quisquam ratione, recusandae sapiente ullam ut velit veniam! Asperiores blanditiis fuga ipsum perspiciatis qui soluta voluptatibus."}
        ,{key:3, date:new Date(), title:"title 3", shortDesc:"Dit is een korte omschrijving van de 3e notificatie", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi aperiam asperiores beatae cupiditate deserunt dolor doloribus excepturi facilis nam officiis perspiciatis quae quam quisquam ratione, recusandae sapiente ullam ut velit veniam! Asperiores blanditiis fuga ipsum perspiciatis qui soluta voluptatibus."}
        ,{key:4, date:new Date(), title:"title 4", shortDesc:"Dit is een korte omschrijving van de 4e notificatie", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi aperiam asperiores beatae cupiditate deserunt dolor doloribus excepturi facilis nam officiis perspiciatis quae quam quisquam ratione, recusandae sapiente ullam ut velit veniam! Asperiores blanditiis fuga ipsum perspiciatis qui soluta voluptatibus."}
        ,{key:5, date:new Date(), title:"title 5", shortDesc:"Dit is een korte omschrijving van de 5e notificatie", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi aperiam asperiores beatae cupiditate deserunt dolor doloribus excepturi facilis nam officiis perspiciatis quae quam quisquam ratione, recusandae sapiente ullam ut velit veniam! Asperiores blanditiis fuga ipsum perspiciatis qui soluta voluptatibus."}
        ,{key:6, date:new Date(), title:"title 6", shortDesc:"Dit is een korte omschrijving van de 6e notificatie", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi aperiam asperiores beatae cupiditate deserunt dolor doloribus excepturi facilis nam officiis perspiciatis quae quam quisquam ratione, recusandae sapiente ullam ut velit veniam! Asperiores blanditiis fuga ipsum perspiciatis qui soluta voluptatibus."}
        ,{key:7, date:new Date(), title:"title 7", shortDesc:"Dit is een korte omschrijving van de 7e notificatie", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi aperiam asperiores beatae cupiditate deserunt dolor doloribus excepturi facilis nam officiis perspiciatis quae quam quisquam ratione, recusandae sapiente ullam ut velit veniam! Asperiores blanditiis fuga ipsum perspiciatis qui soluta voluptatibus."}
        ,{key:8, date:new Date(), title:"title 8", shortDesc:"Dit is een korte omschrijving van de 8e notificatie", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi aperiam asperiores beatae cupiditate deserunt dolor doloribus excepturi facilis nam officiis perspiciatis quae quam quisquam ratione, recusandae sapiente ullam ut velit veniam! Asperiores blanditiis fuga ipsum perspiciatis qui soluta voluptatibus."}
        ,{key:9, date:new Date(), title:"title 9", shortDesc:"Dit is een korte omschrijving van de 9e notificatie", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi aperiam asperiores beatae cupiditate deserunt dolor doloribus excepturi facilis nam officiis perspiciatis quae quam quisquam ratione, recusandae sapiente ullam ut velit veniam! Asperiores blanditiis fuga ipsum perspiciatis qui soluta voluptatibus."}
        ,{key:10, date:new Date(), title:"title 10", shortDesc:"Dit is een korte omschrijving van de 10e notificatie", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi aperiam asperiores beatae cupiditate deserunt dolor doloribus excepturi facilis nam officiis perspiciatis quae quam quisquam ratione, recusandae sapiente ullam ut velit veniam! Asperiores blanditiis fuga ipsum perspiciatis qui soluta voluptatibus."}
    ]



    return (
        <section className="feed-pinned-container">
            <h4><PushPin size={32} weight="bold" /> Pinned</h4>

            <CollapsibleList className="list-items-container">
                {dummyData.map(item =><FeedListItem item={item}/>)}
            </CollapsibleList>
        </section>
    );
}

export default PinnedFeed;