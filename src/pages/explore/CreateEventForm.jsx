import React from 'react';
import './CreateEventForm.css';
import Input from "../../components/inputs/Input.jsx";
import Button from "../../components/buttons/Button.jsx";
import {useForm} from "react-hook-form";
import Select from "../../components/inputs/Select.jsx";
import * as eventApi from "../../hooks/events.js";
import * as locationsApi from "../../hooks/locations.js";
import * as gengersApi from "../../hooks/genres.js";
import * as djsApi from "../../hooks/djs.js";

function CreateEventForm({close}) {
    const {
        register
        , setValue
        , handleSubmit
        , formState: {errors}
    } = useForm();

    const {createEvent} = eventApi.useCreateEvent();
    const {result:locationOptions} = locationsApi.useFetchOptions();
    const {result:genresOptions} = gengersApi.useFetchOptions();
    const {result:djsOptions} = djsApi.useFetchOptions();

    async function handleFormSubmit(data) {

        await createEvent(data,(succes)=>{
            if( succes ){
                close();
            }
        });
    }

    return (
        <div className="create-event-form-container">
            <form className="content-panel create-event-form" onSubmit={handleSubmit(handleFormSubmit)}>
                <h5 className="allCaps">create event</h5>
                <Input register={register}  type="text" label="Name" name="name"/>
                <Input register={register} size={Input.size.medium} type="date" label="Date" name="date"/>
                <Select register={register} size={Select.size.medium} options={locationOptions}  label="Location" name="search-location"/>
                <Select register={register} size={Select.size.medium} options={genresOptions}   label="Genre" name="search-genres"/>
                <Select register={register} size={Select.size.medium} options={djsOptions}  label="Dj" name="search-djs"/>

                <div className="button-wrapper">
                    <Button text="cancel" onClick={()=>{close();}} id="cancel" value="cancel" styleClas="buttonSizeSmall" variant={Button.variants.secondary}/>
                    <Button text="create" type="submit" id="create" value="create" styleClas="buttonSizeSmall" variant={Button.variants.primary}/>
                </div>
            </form>
        </div>
    );
}

export default CreateEventForm;