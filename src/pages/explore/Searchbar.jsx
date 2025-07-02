import React from 'react';
import './Searchbar.css';
import Button from "../../components/buttons/Button.jsx";
import Input from "../../components/inputs/Input.jsx";
import {useForm} from "react-hook-form";
import Select from "../../components/inputs/Select.jsx";
import Overlay from "../../components/utils/Overlay.jsx";
import CreateEventForm from "./CreateEventForm.jsx";
import * as locationsApi from "../../hooks/locations.js";
import * as socialApi from "../../hooks/social.js";
import * as gengersApi from "../../hooks/genres.js";
import * as djsApi from "../../hooks/djs.js";

function Searchbar({setFilter}) {
    const {reset, register, handleSubmit, formState: {errors}} = useForm();
    const [createEventForm, toggleCreateEventForm] = React.useState(false);
    const {result:locationOptions} = locationsApi.useFetchOptions();
    const {result:friendsOptions} = socialApi.useFetchOptions();
    const {result:genresOptions} = gengersApi.useFetchOptions();
    const {result:djsOptions} = djsApi.useFetchOptions();

    const contentManager = true;

    function handleFormSubmit(data, e) {
        setFilter(data);
    }

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