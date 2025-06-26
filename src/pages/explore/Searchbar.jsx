import React from 'react';
import './Searchbar.css';
import Button from "../../components/buttons/Button.jsx";
import Input from "../../components/inputs/Input.jsx";
import {useForm} from "react-hook-form";
import Select from "../../components/inputs/Select.jsx";
import Overlay from "../../components/utils/Overlay.jsx";
import CreateEventForm from "./CreateEventForm.jsx";

function Searchbar({reload}) {
    const {reset, register, handleSubmit, formState: {errors}} = useForm();
    const [createEventForm, toggleCreateEventForm] = React.useState(false);

    const contentManager = true;

    function handleFormSubmit(data, e) {
        console.log(e.target.value);
        console.log(e.target.id);
        console.log(data);

        console.log("Do dummy search");
        reload({dummy:"test",name:data["search-name"]});
    }

    let locationOptions = [
            {value:"krabbenplas",display:"Krabbenplas, Vlaardingen"}
            ,{value:"fort-vechten",display:"Fort Vechten, Bunnik"}
        ]
        ,friendsOptions = [
            {value:"ppub",display:"Pietje Pub"}
            ,{value:"bbrouwer",display:"Bob de Brouwer"}
            ,{value:"fsneus",display:"Fee Sneus"}
            ,{value:"bgab",display:"Bertje Gab"}
        ]
        ,genresOptions = [
            {value:"hardcore",display:"Hardcore"}
            ,{value:"techno",display:"Techno"}
            ,{value:"classics",display:"Classics"}
            ,{value:"house",display:"House"}
            ,{value:"tech-house",display:"Tech-House"}
            ,{value:"hardstyle",display:"Hardstyle"}
            ,{value:"trance",display:"Trance"}
        ]
        ,djsOptions = [
            {value:"potato",display:"Potato"}
            ,{value:"adjura",display:"Adjura"}
            ,{value:"charlotte",display:"Charlotte de Witte"}
            ,{value:"bbjecha",display:"Boris Brejcha"}
        ];

    function toggleForm(){
        toggleCreateEventForm(!createEventForm);
    }

    return (
        <section className="searchbar-container">
            {createEventForm && <Overlay><CreateEventForm close={toggleCreateEventForm}/></Overlay>}
            <form className="searchbar-form" onSubmit={handleSubmit(handleFormSubmit)}>
                <Input register={register} type="text" label="Name" name="search-name"/>

                <div className="prefered-searchfield-container">
                    <Input register={register} type="date" label="Search" name="search-event-date"/>
                    <Select register={register} options={locationOptions} type="text" label="Location" name="search-location"/>
                    <Select register={register} options={friendsOptions} label="Friends" name="search-friends"/>
                    <Select register={register} options={genresOptions}  type="text" label="Genre" name="search-genres"/>
                    <Select register={register} options={djsOptions}  type="text" label="Dj" name="search-djs"/>
                </div>

                <div className="searchbar-button-container">
                    <Button text="clear" type="button" id="clear" value="clear" styleClas="buttonSizeMedium"
                            onClick={()=>reset()} variant={Button.variants.secondary}/>
                    <Button text="filter" type="submit" id="filter" value="filter" styleClas="buttonSizeMedium" variant={Button.variants.primary}/>
                    {contentManager && <Button type="button" text="create" id="create" value="create"  styleClas="buttonSizeMedium" variant={Button.variants.primary} onClick={toggleForm}/>}
                </div>
            </form>
        </section>
    );
}

export default Searchbar;