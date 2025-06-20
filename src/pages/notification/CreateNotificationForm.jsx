import React from 'react';
import './CreateNotificationForm.css';
import Input from "../../components/inputs/Input.jsx";
import Button from "../../components/buttons/Button.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import Checkbox from "../../components/inputs/Checkbox.jsx";
import Textarea from "../../components/inputs/Textarea.jsx";
import axios from "axios";
import Tiptap from "../../components/richTextEditor/Tiptap.jsx";

function CreateNotificationForm({close}) {
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

    return (
        <div className="create-notification-form-container">
            <form className="content-panel create-notification-form" onSubmit={handleSubmit(handleFormSubmit)}>
                <h5 className="allCaps">create notification</h5>
                <Input register={register} size={Input.size.medium} type="text" label="Title" name="title"/>
                <Checkbox register={register} label="Pinned" name="pinned"/>
                <Textarea register={register} label="Short description" name="subtitle"/>
                <Tiptap rhf={{register:register,setValue:setValue}} label="Content" name="content"/>

                <div className="button-wrapper">
                    <Button text="cancel" onClick={()=>{close();}} id="cancel" value="cancel" styleClas="buttonSizeSmall" variant={Button.variants.secondary}/>
                    <Button text="create" type="submit" id="create" value="create" styleClas="buttonSizeSmall" variant={Button.variants.primary}/>
                </div>
            </form>
        </div>
    );
}

export default CreateNotificationForm;