import React from 'react';
import './CreateEventForm.css';
import Input from "../../components/inputs/Input.jsx";
import Button from "../../components/buttons/Button.jsx";
import {useForm} from "react-hook-form";
import Select from "../../components/inputs/Select.jsx";
import * as eventApi from "../../hooks/events.js";

function CreateEventForm({close}) {
    const {
        register
        , setValue
        , handleSubmit
        , formState: {errors}
    } = useForm();

    const {createEvent} = eventApi.useCreateEvent();

    async function handleFormSubmit(data) {

        await createEvent(data,(succes)=>{
            if( succes ){
                close();
            }
        });
    }

    let locationOptions = [
        {value:"krabbenplas",display:"Krabbenplas, Vlaardingen"}
        ,{value:"fort-vechten",display:"Fort Vechten, Bunnik"}
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