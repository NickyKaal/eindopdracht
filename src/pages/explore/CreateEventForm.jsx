import React from 'react';
import './CreateEventForm.css';
import Input from "../../components/inputs/Input.jsx";
import Button from "../../components/buttons/Button.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import Checkbox from "../../components/inputs/Checkbox.jsx";
import Textarea from "../../components/inputs/Textarea.jsx";
import axios from "axios";
import Tiptap from "../../components/richTextEditor/Tiptap.jsx";
import Select from "../../components/inputs/Select.jsx";

function CreateEventForm({close}) {
    const {
        register
        , setValue
        , handleSubmit
        , formState: {errors}
    } = useForm();

    const navigate = useNavigate();

    async function postFormData( data) {
        console.log(data);
        return true;
        /*const {response} = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/notifications'
            ,data
             ,{
                headers: {
                    'Accept': '*!/!*',
                    'novi-education-project-id': '278d2a09-ef87-4050-9fb8-7b3f26f16604',
                    'Content-Type':  'application/json'
                }
            }
        )

        console.log(response);
        return response;*/
    }

    function handleFormSubmit(data, e) {

        postFormData(data);
        close();
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